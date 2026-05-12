import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/app/lib/supabase/admin";

async function getCaktoAccessToken(): Promise<string> {
  const clientId = process.env.CAKTO_CLIENT_ID;
  const clientSecret = process.env.CAKTO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("CAKTO_CLIENT_ID or CAKTO_CLIENT_SECRET not configured");
  }

  const res = await fetch("https://api.cakto.com.br/public_api/token/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `client_id=${clientId}&client_secret=${clientSecret}`,
  });

  if (!res.ok) {
    throw new Error(`Cakto token error: ${res.status}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function verifyPurchaseWithCakto(email: string): Promise<boolean> {
  const accessToken = await getCaktoAccessToken();

  const url = new URL("https://api.cakto.com.br/public_api/orders/");
  url.searchParams.set("customer", email);
  url.searchParams.set("status", "paid");

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!res.ok) {
    throw new Error(`Cakto API error: ${res.status}`);
  }

  const data = await res.json();
  return data.count > 0;
}

export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Todos os campos obrigatórios devem ser preenchidos." },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "A senha deve ter pelo menos 6 caracteres." },
      { status: 400 }
    );
  }

  let hasPurchase: boolean;
  try {
    hasPurchase = await verifyPurchaseWithCakto(email);
  } catch (err) {
    console.error("Cakto verification error:", err);
    return NextResponse.json(
      { error: "Erro ao verificar compra. Tente novamente mais tarde." },
      { status: 500 }
    );
  }

  if (!hasPurchase) {
    return NextResponse.json(
      {
        error:
          "Nenhuma compra encontrada para este e-mail. Use o mesmo e-mail utilizado na compra.",
      },
      { status: 403 }
    );
  }

  const supabase = createAdminClient();

  const { data: authData, error: authError } =
    await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    });

  if (authError) {
    if (authError.message.includes("already been registered")) {
      return NextResponse.json(
        { error: "Este e-mail já está cadastrado. Faça login." },
        { status: 409 }
      );
    }
    console.error("Auth error:", authError);
    return NextResponse.json(
      { error: "Erro ao criar conta. Tente novamente." },
      { status: 500 }
    );
  }

  const userId = authData.user.id;

  await supabase
    .from("purchases")
    .update({ user_id: userId })
    .eq("customer_email", email);

  return NextResponse.json({ ok: true, userId });
}
