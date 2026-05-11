import type { NextRequest } from "next/server";
import { updateSession } from "@/app/lib/supabase/proxy";

export async function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Aplica a todos os paths exceto:
     * - _next/static, _next/image, favicon.ico
     * - pasta public (assets)
     * - /api/webhooks (não queremos forçar cookies aqui)
     */
    "/((?!_next/static|_next/image|favicon.ico|covers|api/webhooks).*)",
  ],
};
