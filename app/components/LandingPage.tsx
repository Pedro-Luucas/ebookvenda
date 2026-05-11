"use client";

import { useEffect } from "react";

const CHECKOUT_URL = "#preco";

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-block px-8 py-4 rounded-xl font-extrabold text-lg uppercase tracking-wide text-white cta-glow transition-all duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ background: "var(--accent)", color: "#fff" }}
    >
      COMEÇAR AGORA
    </a>
  );
}

export default function LandingPage() {
  useEffect(() => {
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
          <span className="font-black text-xl" style={{ color: "var(--accent)" }}>
            Claude University
          </span>
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
              href={CHECKOUT_URL}
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
            OFERTA DE LANÇAMENTO — Vagas limitadas neste valor
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.08] tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Você não precisa ser programador pra{" "}
            <span className="text-gradient-accent">
              criar suas próprias aplicações com IA.
            </span>{" "}
            Precisa do método certo.
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-[700px] mx-auto" style={{ color: "var(--text-sec)" }}>
            De leigo a criador de apps, automações e agentes inteligentes em semanas.
            O único treinamento em português que te leva do &ldquo;não sei nem por onde começar&rdquo;
            até ter projetos reais rodando.
          </p>

          <CtaButton className="mb-8" />

          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <span>✓ Acesso vitalício</span>
            <span>✓ Do zero ao avançado</span>
            <span>✓ Garantia de 7 dias</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "4", label: "Módulos práticos" },
            { value: "+47h", label: "De conteúdo" },
            { value: "100%", label: "Em português" },
            { value: "Vitalício", label: "Acesso garantido" },
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
              "Você ouve falar de IA todo dia mas na prática não sabe como usar pra gerar resultado real",
              "Já pagou curso de programação, desistiu no meio, e continua dependendo de terceiros pra tudo",
              "Tenta usar o ChatGPT ou Claude e recebe respostas genéricas que não resolvem seu problema específico",
              "Vê gente lançando produtos e automações com IA e pensa: como eles fazem isso?",
              "Tem ideias de apps e projetos na cabeça mas não consegue tirar do papel porque não sabe codar",
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
              Um sistema com <span className="text-gradient-accent">quatro pilares.</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--text-sec)" }}>
              Cada módulo te dá uma habilidade concreta. Juntos, te transformam em criador.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Criação de Aplicações",
                desc: "Monte sites, sistemas e SaaS completos usando o Claude Code como seu desenvolvedor pessoal. Você descreve, ele constrói.",
                icon: "⚡",
              },
              {
                title: "Comunicação com IA",
                desc: "Aprenda a dar instruções precisas que geram exatamente o que você precisa. Chega de respostas vagas e retrabalho infinito.",
                icon: "🎯",
              },
              {
                title: "Automação Inteligente",
                desc: "Transforme horas de trabalho manual em processos automáticos. Relatórios, emails, planilhas, análises — tudo no piloto automático.",
                icon: "🔄",
              },
              {
                title: "Agentes Autônomos",
                desc: "Crie assistentes de IA que executam tarefas complexas sozinhos. Pesquisa, atendimento, análise de dados — trabalhando 24h por você.",
                icon: "🤖",
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
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto reveal">
          <h2 className="text-3xl md:text-4xl font-black mb-12 text-center" style={{ letterSpacing: "-0.03em" }}>
            Daqui a 30 dias, <span className="text-gradient-accent">você vai poder:</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lançar seu próprio app", desc: "Tire ideias do papel em dias, não meses. Sem contratar dev, sem esperar orçamento, sem depender de ninguém." },
              { title: "Eliminar trabalho repetitivo", desc: "Aquele relatório de 3 horas? Agora leva 5 minutos. Emails, planilhas, análises — tudo automatizado." },
              { title: "Vender serviços de IA", desc: "Monte automações para clientes e cobre R$2.000-8.000 por projeto. O investimento se paga no primeiro job." },
              { title: "Tomar decisões com dados", desc: "Use o Claude pra analisar mercado, concorrência e oportunidades. Decisões baseadas em fatos, não achismo." },
              { title: "Ter um diferencial real", desc: "Enquanto outros ainda estão aprendendo o básico, você já está entregando resultados concretos com IA." },
              { title: "Criar sem saber programar", desc: "Dashboards, bots, landing pages, APIs — tudo construído por você, guiado pelo Claude, sem código manual." },
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
                    97
                  </span>
                </div>
                <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  ou 12x de R$10,02
                </div>
                <div className="text-xs mt-2 font-semibold" style={{ color: "var(--text-sec)" }}>
                  pagamento único — sem mensalidade
                </div>
              </div>

              <div className="border-t pt-6 mb-6" style={{ borderColor: "var(--border)" }}>
                <div className="space-y-3 text-sm">
                  {[
                    "Módulo 1: Criação de Aplicações",
                    "Módulo 2: Comunicação com IA",
                    "Módulo 3: Automação Inteligente",
                    "Módulo 4: Agentes Autônomos",
                    "Acesso vitalício ao conteúdo",
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
                    "BÔNUS: Biblioteca com 50+ prompts testados",
                    "BÔNUS: Todas as atualizações futuras grátis",
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
              { q: "Preciso saber programar?", a: "Zero. O treinamento parte do princípio que você nunca escreveu uma linha de código. Tudo é ensinado passo a passo, com exemplos práticos." },
              { q: "Funciona em qualquer computador?", a: "Sim. Só precisa de internet e um navegador. Windows, Mac, Linux, Chromebook — tanto faz." },
              { q: "Em quanto tempo vejo resultado?", a: "A maioria dos alunos cria seu primeiro projeto funcional entre 5 e 14 dias. Depende do tempo que você dedicar." },
              { q: "O acesso expira?", a: "Não. Pagou uma vez, acessa pra sempre. Incluindo atualizações futuras quando sair conteúdo novo." },
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
                Amanhã já está com o Claude configurado pro seu negócio. Em uma semana, seu primeiro projeto no ar.
                Em um mês, você é a pessoa que todo mundo pergunta &ldquo;como você fez isso?&rdquo;
              </p>
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "rgba(248, 113, 113, 0.2)" }}>
              <div className="font-bold mb-3" style={{ color: "#f87171" }}>✗ Você deixa pra depois:</div>
              <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                Continua tentando sozinho, montando pedaços de tutoriais desconexos.
                Daqui 6 meses está no mesmo lugar, só que o preço subiu e a concorrência aprendeu primeiro.
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
            <span className="font-bold" style={{ color: "var(--accent)" }}>Claude University</span>
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
