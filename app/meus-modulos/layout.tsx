import { redirect } from "next/navigation";
import Image from "next/image";
import { createClient } from "@/app/lib/supabase/server";
import LogoutButton from "./LogoutButton";
import DashboardSidebar from "./DashboardSidebar";
import DashboardMobileNav from "./DashboardMobileNav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const userName = profile?.name || user.email || "Usuário";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg, #0D0C0B)" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b shrink-0"
        style={{
          background: "rgba(13, 12, 11, 0.9)",
          backdropFilter: "blur(16px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="h-14 md:h-16 flex items-center justify-between px-4 md:px-6">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Claude University"
              width={32}
              height={32}
              priority
              className="rounded-md"
            />
            <span
              className="font-black text-lg md:text-xl hidden sm:block"
              style={{ color: "var(--accent)" }}
            >
              Claude University
            </span>
          </a>
          <div className="flex items-center gap-3">
            <span
              className="text-sm hidden md:block truncate max-w-[200px]"
              style={{ color: "var(--text-sec)" }}
            >
              {userName}
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1 min-h-0 relative">
        <DashboardSidebar userName={userName} />
        <main className="min-w-0 px-4 md:px-8 lg:px-12 py-6 md:py-10 pb-20 md:pb-10 md:ml-[240px]">
          {children}
        </main>
      </div>

      {/* Mobile bottom nav */}
      <DashboardMobileNav />
    </div>
  );
}
