import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Claude University — Domine o Claude e Crie Suas Próprias Aplicações",
  description:
    "O treinamento mais completo de Claude em português. Saia do zero e vire um profissional criando apps, automações e sistemas completos com IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <main className="flex-1 relative z-10">{children}</main>
      </body>
    </html>
  );
}
