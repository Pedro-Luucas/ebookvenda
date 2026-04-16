import { NextRequest, NextResponse } from "next/server";
import { getProductById } from "@/app/data/products";
import { createBilling } from "@/app/lib/abacatepay";

interface CheckoutItem {
  productId: string;
  quantity: number;
}

interface CheckoutBody {
  items: CheckoutItem[];
  customer: {
    name: string;
    email: string;
    cellphone: string;
    taxId: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutBody = await request.json();

    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "Carrinho vazio" },
        { status: 400 }
      );
    }

    if (
      !body.customer?.name ||
      !body.customer?.email ||
      !body.customer?.cellphone ||
      !body.customer?.taxId
    ) {
      return NextResponse.json(
        { error: "Dados do cliente incompletos" },
        { status: 400 }
      );
    }

    const products = body.items.map((item) => {
      const product = getProductById(item.productId);
      if (!product) {
        throw new Error(`Produto não encontrado: ${item.productId}`);
      }
      return {
        externalId: product.id,
        name: product.title,
        description: product.description,
        quantity: item.quantity,
        price: product.price,
      };
    });

    const origin = request.nextUrl.origin;

    const billing = await createBilling(
      products,
      body.customer,
      `${origin}/sucesso`,
      `${origin}/sucesso`
    );

    return NextResponse.json({
      paymentUrl: billing.data.url,
      billingId: billing.data.id,
    });
  } catch (error) {
    console.error("Erro no checkout:", error);
    const message =
      error instanceof Error ? error.message : "Erro interno do servidor";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
