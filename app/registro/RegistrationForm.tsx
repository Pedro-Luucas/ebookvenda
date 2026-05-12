"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erro ao criar conta.");
        return;
      }

      router.push("/login?registered=true");
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div
          className="p-3 rounded-xl text-sm border"
          style={{
            background: "rgba(239, 68, 68, 0.08)",
            borderColor: "rgba(239, 68, 68, 0.25)",
            color: "#f87171",
          }}
        >
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-sec)" }}>
          Nome completo
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 transition-all"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border-strong)",
          }}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-sec)" }}>
          E-mail <span className="font-normal" style={{ color: "var(--accent)" }}>(mesmo da Cakto)</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 transition-all"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border-strong)",
          }}
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-sec)" }}>
          Senha
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 transition-all"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border-strong)",
          }}
          placeholder="Mínimo 6 caracteres"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-sec)" }}>
          Confirmar senha
        </label>
        <input
          id="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 transition-all"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border-strong)",
          }}
          placeholder="Repita a senha"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-4 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 cta-glow"
        style={{ background: "var(--accent)" }}
      >
        {loading ? "Verificando compra..." : "Criar minha conta"}
      </button>
    </form>
  );
}
