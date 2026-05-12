"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/app/lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-80"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border-strong)",
        color: "var(--text-sec)",
      }}
    >
      Sair
    </button>
  );
}
