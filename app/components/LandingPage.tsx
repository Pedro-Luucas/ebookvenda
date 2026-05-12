"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const CHECKOUT_URL = "https://pay.cakto.com.br/ffuk56c_881478";
const AFF_STORAGE_KEY = "aff_id";

function getCheckoutUrl() {
  if (typeof window === "undefined") return CHECKOUT_URL;
  const affId = localStorage.getItem(AFF_STORAGE_KEY);
  if (!affId) return CHECKOUT_URL;
  return `${CHECKOUT_URL}?affiliate=${encodeURIComponent(affId)}`;
}

function CtaButton({
  className = "",
  href,
}: {
  className?: string;
  href?: string;
}) {
  const isCheckout = !href;
  const [resolvedHref, setResolvedHref] = useState(href || "#preco");

  useEffect(() => {
    if (isCheckout) {
      setResolvedHref(getCheckoutUrl());
    }
  }, [isCheckout]);

  return (
    <a
      href={resolvedHref}
      className={`inline-block px-8 py-4 rounded-xl font-extrabold text-lg uppercase tracking-wide text-white cta-glow transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ background: "var(--accent)", color: "#fff" }}
    >
      COMEÇAR AGORA
    </a>
  );
}

export default function LandingPage() {
  useEffect(() => {
    // Capture affiliate code from URL (e.g. ?aff=codigo123)
    const params = new URLSearchParams(window.location.search);
    const affId = params.get("aff");
    if (affId) {
      localStorage.setItem(AFF_STORAGE_KEY, affId);
    }

    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          background: "rgba(13, 12, 11, 0.85)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Claude University"
              width={36}
              height={36}
              priority
              className="rounded-md"
            />
            <span className="font-black text-xl" style={{ color: "var(--accent)" }}>
              Claude University
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#modulos" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--text-sec)" }}>
              Módulos
            </a>
            <a href="#garantia" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--text-sec)" }}>
              Garantia
            </a>
            <a href="#preco" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--text-sec)" }}>
              Preço
            </a>
            <a
              href="/login"
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              Já é membro?
            </a>
            <a
              href="#preco"
              className="px-5 py-2 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Começar Agora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-[900px] mx-auto text-center">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
            style={{
              background: "var(--accent-light)",
              borderColor: "var(--accent-glow)",
              color: "var(--accent)",
            }}
          >
            OFERTA DE LANÇAMENTO — Novos módulos sendo adicionados toda semana
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.08] tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Domine o Claude Code e{" "}
            <span className="text-gradient-accent">
              construa qualquer coisa sem saber programar.
            </span>{" "}
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-[700px] mx-auto" style={{ color: "var(--text-sec)" }}>
            7 módulos completos de Claude Code + 6 módulos bônus de vendas digitais.
            O treinamento em português que te transforma em criador de apps, automações e agentes — do zero.
            E isso é só o começo.
          </p>

          <CtaButton className="mb-8" href="#preco" />

          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <span>✓ 13 módulos disponíveis</span>
            <span>✓ Novos módulos toda semana</span>
            <span>✓ Acesso vitalício</span>
            <span>✓ Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "13", label: "Módulos completos" },
            { value: "7", label: "Módulos Claude Code" },
            { value: "6", label: "Módulos de vendas" },
            { value: "∞", label: "Novos módulos em breve" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black" style={{ color: "var(--accent)" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-center" style={{ letterSpacing: "-0.03em" }}>
            Isso te parece <span className="text-gradient-accent">familiar?</span>
          </h2>
          <div className="space-y-6">
            {[
              "Você sabe que o Claude Code existe mas não faz ideia de como usar pra criar algo real",
              "Já tentou usar IA pra programar e recebeu código quebrado que não funciona",
              "Vê gente lançando apps e automações com IA e pensa: como eles fazem isso?",
              "Tem ideias de projetos na cabeça mas não consegue tirar do papel porque não domina a ferramenta",
              "Paga dev freelancer pra coisas que você mesmo poderia fazer se soubesse usar o Claude Code direito",
            ].map((pain, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-5 rounded-2xl border card-hover"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                >
                  {i + 1}
                </span>
                <p style={{ color: "var(--text-sec)" }}>{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution / Modules */}
      <section id="modulos" className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ letterSpacing: "-0.03em" }}>
              7 módulos de Claude Code.{" "}
              <span className="text-gradient-accent">Do zero ao avançado.</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--text-sec)" }}>
              Cada módulo te dá uma habilidade concreta com o Claude Code. E novos módulos estão sendo lançados constantemente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Setup e Primeiros Passos",
                desc: "Instalação, configuração e seu primeiro projeto funcionando em minutos. Sem complicação.",
                icon: "🚀",
              },
              {
                title: "Criação de Aplicações",
                desc: "Monte sites, sistemas e SaaS completos. Você descreve o que quer, o Claude Code constrói.",
                icon: "⚡",
              },
              {
                title: "Prompts que Funcionam",
                desc: "Aprenda a dar instruções precisas que geram exatamente o que você precisa. Sem respostas vagas.",
                icon: "🎯",
              },
              {
                title: "Automação Inteligente",
                desc: "Transforme horas de trabalho manual em processos automáticos. Relatórios, emails, planilhas — tudo no piloto automático.",
                icon: "🔄",
              },
              {
                title: "Agentes Autônomos",
                desc: "Crie assistentes de IA que executam tarefas complexas sozinhos. Pesquisa, atendimento, análise — 24h por você.",
                icon: "🤖",
              },
              {
                title: "Deploy e Publicação",
                desc: "Coloque seus projetos no ar para o mundo usar. Domínio próprio, hospedagem, tudo configurado.",
                icon: "🌐",
              },
              {
                title: "Projetos Avançados",
                desc: "Integrações com APIs, bancos de dados, dashboards complexos. O nível que separa amadores de profissionais.",
                icon: "💎",
              },
            ].map((mod) => (
              <div
                key={mod.title}
                className="p-8 rounded-2xl border card-hover relative overflow-hidden"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="text-4xl mb-4">{mod.icon}</div>
                <h3 className="text-xl font-bold mb-3">{mod.title}</h3>
                <p style={{ color: "var(--text-sec)" }}>{mod.desc}</p>
              </div>
            ))}
          </div>

          {/* Bonus: Sales Modules */}
          <div className="p-8 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--accent-glow)" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🎁</span>
              <h3 className="text-xl font-bold">
                BÔNUS: 6 módulos completos de vendas digitais
              </h3>
            </div>
            <p className="mb-4" style={{ color: "var(--text-sec)" }}>
              Não basta criar — você precisa vender. Incluímos 6 módulos de vendas para você monetizar o que construir com Claude Code.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                "Cold Calling",
                "Vendas Digitais",
                "Funil de Vendas",
                "Negociação",
                "Persuasão",
                "Vendas B2B",
              ].map((mod) => (
                <div key={mod} className="flex items-center gap-2" style={{ color: "var(--text-sec)" }}>
                  <span style={{ color: "var(--gold)" }}>★</span> {mod}
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon */}
          <div className="mt-8 text-center p-6 rounded-2xl border border-dashed" style={{ borderColor: "var(--accent-glow)" }}>
            <p className="font-bold text-lg mb-2" style={{ color: "var(--accent)" }}>
              Isso é só o começo.
            </p>
            <p style={{ color: "var(--text-sec)" }}>
              Novos módulos estão sendo produzidos e lançados toda semana. Quem entra agora garante acesso a tudo que vier — sem pagar nada a mais.
            </p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
            Com o Claude Code, <span className="text-gradient-accent">você vai poder:</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Criar apps do zero", desc: "Descreva o que quer e veja o Claude Code construir. Sites, sistemas, ferramentas — sem escrever uma linha de código." },
              { title: "Automatizar seu trabalho", desc: "Aquele relatório de 3 horas? Agora leva 5 minutos. Emails, planilhas, análises — tudo no piloto automático." },
              { title: "Lançar projetos em dias", desc: "Tire ideias do papel em dias, não meses. Sem contratar dev, sem esperar orçamento, sem depender de ninguém." },
              { title: "Criar agentes de IA", desc: "Assistentes que trabalham sozinhos: pesquisa, atendimento, análise de dados — rodando 24h por você." },
              { title: "Vender serviços de IA", desc: "Monte automações para clientes e cobre R$2.000-8.000 por projeto. O investimento se paga no primeiro job." },
              { title: "Ter um diferencial real", desc: "Enquanto outros ainda estão aprendendo o básico, você já está entregando resultados concretos com Claude Code." },
            ].map((outcome) => (
              <div
                key={outcome.title}
                className="p-6 rounded-2xl border card-hover"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <h3 className="font-bold mb-2" style={{ color: "var(--accent)" }}>{outcome.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-sec)" }}>{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 px-6">
        <div className="max-w-[1000px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
            Feito pra quem quer <span className="text-gradient-accent">resultado, não diploma</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Empreendedores que querem lançar produtos digitais sem depender de equipe técnica",
              "Profissionais que perdem horas em tarefas manuais que poderiam ser automatizadas",
              "Freelancers que querem adicionar IA ao portfólio e aumentar o ticket",
              "Donos de negócio que querem reduzir custos operacionais com automação",
              "Pessoas sem background técnico que querem criar apps e ferramentas próprias",
              "Qualquer um que está cansado de ficar de fora da revolução da IA",
            ].map((persona, i) => (
              <div
                key={i}
                className="flex gap-3 items-center p-4 rounded-xl border"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm" style={{ color: "var(--text-sec)" }}>{persona}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
            Resultados reais de <span className="text-gradient-accent">quem já aplicou</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Thiago R.", role: "Dono de agência, SP", text: "Montei um sistema de geração de propostas automáticas. O que levava 2 dias agora sai em 10 minutos. Meus clientes acham que contratei mais gente." },
              { name: "Beatriz F.", role: "Analista financeira, RJ", text: "Criei um dashboard que puxa dados de 3 fontes e gera relatório executivo sozinho. Meu chefe perguntou qual ferramenta eu comprei." },
              { name: "Lucas P.", role: "Designer freelancer, MG", text: "Adicionei automação com IA no meu serviço. Agora entrego landing pages completas em 1 dia. Dobrei meu preço e ninguém reclamou." },
              { name: "Mariana C.", role: "Psicóloga, PR", text: "Nunca programei na vida. Construí um app de acompanhamento de pacientes em 4 dias. Parece mentira mas está funcionando." },
              { name: "Roberto S.", role: "Gerente comercial, SC", text: "Automatizei o follow-up de leads e a qualificação inicial. Minha equipe foca só nos quentes agora. Conversão subiu 40%." },
              { name: "Patrícia L.", role: "Professora universitária, BA", text: "Criei uma ferramenta que corrige trabalhos e dá feedback personalizado. Economizo 15 horas por semana. Deveria ter feito antes." },
            ].map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl border card-hover"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
                <p className="text-sm italic mb-4" style={{ color: "var(--text-sec)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="garantia" className="py-20 px-6">
        <div className="max-w-[600px] mx-auto text-center reveal">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black border-2"
            style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
          >
            7
          </div>
          <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            GARANTIA INCONDICIONAL
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            Teste por 7 dias. Se não servir, devolvemos tudo.
          </h2>
          <p className="mb-6" style={{ color: "var(--text-sec)" }}>
            Acesse o treinamento completo, aplique no seu dia a dia, e se em 7 dias
            você sentir que não valeu — pede reembolso e pronto. Sem formulário, sem justificativa.
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm" style={{ color: "var(--text-sec)" }}>
            {["Reembolso integral", "Sem burocracia", "Sem perguntas", "Resposta em até 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2 justify-center">
                <span style={{ color: "var(--accent)" }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="py-20 px-6">
        <div className="max-w-[500px] mx-auto reveal">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black mb-3" style={{ letterSpacing: "-0.03em" }}>
              Tudo isso por menos que <span className="text-gradient-accent">um almoço de negócios.</span>
            </h2>
            <p className="text-sm" style={{ color: "var(--text-sec)" }}>
              Um investimento único que se paga no primeiro projeto que você criar.
              Sem mensalidade, sem surpresas.
            </p>
          </div>

          <div className="relative p-[2px] rounded-2xl pricing-border">
            <div className="rounded-2xl p-8" style={{ background: "var(--surface)" }}>
              <div className="text-center mb-6">
                <div className="text-sm line-through mb-1" style={{ color: "var(--muted)" }}>
                  De R$297,00
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm" style={{ color: "var(--text-sec)" }}>R$</span>
                  <span className="text-6xl md:text-7xl font-black" style={{ color: "var(--accent)" }}>
                    89
                  </span>
                  <span className="text-2xl font-black" style={{ color: "var(--accent)" }}>,90</span>
                </div>
                <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  ou 12x de R$9,24
                </div>
                <div className="text-xs mt-2 font-semibold" style={{ color: "var(--text-sec)" }}>
                  pagamento único — sem mensalidade
                </div>
              </div>

              <div className="border-t pt-6 mb-6" style={{ borderColor: "var(--border)" }}>
                <div className="space-y-3 text-sm">
                  {[
                    "7 módulos completos de Claude Code",
                    "Do setup ao deploy de projetos reais",
                    "Prompts, automações e agentes autônomos",
                    "Acesso vitalício ao conteúdo",
                    "Todos os módulos futuros inclusos",
                    "Comunidade privada de alunos",
                    "Suporte por email",
                    "Templates e prompts prontos pra usar",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span style={{ color: "var(--text-sec)" }}>{item}</span>
                    </div>
                  ))}
                  {[
                    "BÔNUS: 6 módulos de vendas digitais",
                    "BÔNUS: Novos módulos toda semana",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span style={{ color: "var(--gold)" }}>★</span>
                      <span style={{ color: "var(--gold)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <CtaButton className="w-full text-center" />

              <div className="flex justify-center gap-4 mt-4 text-xs" style={{ color: "var(--muted)" }}>
                <span>Cartão ou PIX</span>
                <span>•</span>
                <span>Pagamento seguro</span>
                <span>•</span>
                <span>Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-[700px] mx-auto reveal">
          <h2 className="text-3xl font-black mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Preciso saber programar?", a: "Zero. O treinamento parte do princípio que você nunca escreveu uma linha de código. O Claude Code faz o trabalho técnico — você só precisa saber o que quer construir." },
              { q: "O que é o Claude Code?", a: "É a ferramenta de desenvolvimento da Anthropic que permite criar aplicações completas usando linguagem natural. Você descreve o que quer, ele constrói. Nosso treinamento te ensina a dominar essa ferramenta." },
              { q: "Quantos módulos tem?", a: "Hoje são 13: 7 módulos focados em Claude Code (do setup ao avançado) e 6 módulos bônus de vendas digitais. Novos módulos estão sendo lançados toda semana." },
              { q: "O acesso expira?", a: "Não. Pagou uma vez, acessa pra sempre. Incluindo todos os módulos novos que forem lançados no futuro." },
              { q: "E se não for pra mim?", a: "Sem problema. Tem 7 dias pra testar. Se não curtir, pede reembolso por email e devolvemos tudo. Sem atrito." },
              { q: "Consigo tirar dúvidas?", a: "Sim. Tem a comunidade de alunos pra trocar experiências e suporte por email pra questões específicas." },
            ].map((faq, i) => (
              <details
                key={i}
                className="group p-5 rounded-xl border cursor-pointer"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <summary className="font-bold flex items-center justify-between list-none">
                  <span>{faq.q}</span>
                  <span className="text-xl transition-transform group-open:rotate-45" style={{ color: "var(--accent)" }}>+</span>
                </summary>
                <p className="mt-3 text-sm" style={{ color: "var(--text-sec)" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-[800px] mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ letterSpacing: "-0.03em" }}>
            Duas opções. <span className="text-gradient-accent">Uma decisão.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "rgba(74, 222, 128, 0.2)" }}>
              <div className="font-bold mb-3" style={{ color: "#4ade80" }}>✓ Você entra agora:</div>
              <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                Amanhã já está com o Claude Code configurado. Em uma semana, seu primeiro projeto no ar.
                E cada módulo novo que sair, você recebe sem pagar nada a mais.
              </p>
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "rgba(248, 113, 113, 0.2)" }}>
              <div className="font-bold mb-3" style={{ color: "#f87171" }}>✗ Você deixa pra depois:</div>
              <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                Continua tentando sozinho, montando pedaços de tutoriais desconexos.
                Daqui 6 meses está no mesmo lugar, só que o preço subiu e a plataforma já tem o dobro de módulos.
              </p>
            </div>
          </div>

          <CtaButton />

          <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
            O método existe. O conteúdo está pronto. A única variável é você.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t" style={{ borderColor: "var(--border)", background: "#050505" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <a href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Claude University"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="font-bold" style={{ color: "var(--accent)" }}>Claude University</span>
            </a>
            <div className="flex gap-6 text-sm" style={{ color: "var(--muted)" }}>
              <a href="#" className="hover:opacity-80 transition-opacity">Política de Privacidade</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Termos e Condições</a>
            </div>
          </div>
          <p className="text-xs text-center font-mono" style={{ color: "var(--muted-2)" }}>
            Este produto não garante resultados específicos. Resultados variam de acordo com dedicação e aplicação individual.
            Claude é uma marca da Anthropic. Este treinamento é independente e não possui vínculo oficial com a Anthropic.
          </p>
          <p className="text-xs text-center mt-2" style={{ color: "var(--muted-2)" }}>
            © 2026 Claude University. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
