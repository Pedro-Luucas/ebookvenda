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
      QUERO DOMINAR O CLAUDE AGORA
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
              Garantir Acesso
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
            OFERTA ESPECIAL — Preço sobe em breve
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-[52px] font-black leading-[1.08] tracking-tight mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Quase ninguém está usando o Claude do jeito certo.{" "}
            <span className="text-gradient-accent">
              Os que sabem, operam diferente.
            </span>{" "}
            Esse treinamento te coloca nesse grupo.
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-[700px] mx-auto" style={{ color: "var(--text-sec)" }}>
            O Claude University é o treinamento mais completo de Claude em português.
            Saia do zero e crie suas próprias aplicações, automações e sistemas completos
            — sem precisar saber programar.
          </p>

          <CtaButton className="mb-8" />

          <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <span>✓ Acesso imediato</span>
            <span>✓ 100% em português</span>
            <span>✓ 7 dias de garantia</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 border-y" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "4", label: "Módulos completos" },
            { value: "+2.500", label: "Alunos ativos" },
            { value: "100%", label: "Em português" },
            { value: "7 dias", label: "Garantia total" },
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
            Alguma dessas situações <span className="text-gradient-accent">soa familiar?</span>
          </h2>
          <div className="space-y-6">
            {[
              "Você já tentou usar o Claude mas sentiu que não estava tirando nem 10% do potencial",
              "Vê gente criando apps e automações com IA enquanto você ainda luta pra fazer um prompt decente",
              "Já assistiu dezenas de vídeos no YouTube mas nenhum te deu um sistema completo pra seguir",
              "Quer criar seus próprios projetos mas não sabe por onde começar — e não tem tempo pra aprender programação do zero",
              "Sente que está ficando pra trás enquanto o mercado muda cada vez mais rápido",
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
              Não é uma ferramenta. <span className="text-gradient-accent">São quatro frentes.</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--text-sec)" }}>
              E este treinamento ensina todas — do zero ao profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Claude Code na Prática",
                desc: "Aprenda a usar o Claude Code para criar aplicações completas. De um simples site até um SaaS inteiro — sem escrever uma linha de código manualmente.",
                icon: "⚡",
              },
              {
                title: "Prompts Profissionais",
                desc: "Domine a arte de se comunicar com a IA. Prompts que geram resultados reais, não respostas genéricas. Frameworks testados em centenas de projetos.",
                icon: "🎯",
              },
              {
                title: "Automação de Workflows",
                desc: "Automatize tarefas repetitivas do seu dia a dia. Relatórios, análises, emails, planilhas — tudo rodando no piloto automático.",
                icon: "🔄",
              },
              {
                title: "Agentes de IA",
                desc: "Construa agentes inteligentes que trabalham por você. Desde assistentes pessoais até sistemas que tomam decisões e executam ações sozinhos.",
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
            Sua rotina <span className="text-gradient-accent">depois do Claude University</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cria apps em horas", desc: "Projetos que levariam semanas agora saem em uma tarde. Sem depender de dev, sem esperar orçamento." },
              { title: "Automatiza o operacional", desc: "Relatórios, emails, análises — tudo que era manual agora roda sozinho enquanto você foca no estratégico." },
              { title: "Cobra por projetos de IA", desc: "Clientes pagam R$3.000-10.000 por automações que você monta em poucas horas com o que aprendeu aqui." },
              { title: "Resolve problemas complexos", desc: "Análise de dados, pesquisa de mercado, planejamento estratégico — o Claude vira seu sócio intelectual." },
              { title: "Sai na frente do mercado", desc: "Enquanto 95% ainda usa o Claude como um Google glorificado, você opera no nível profissional." },
              { title: "Constrói sem código", desc: "Sites, sistemas, dashboards, bots — tudo sem precisar aprender JavaScript, Python ou qualquer linguagem." },
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
            Pra quem é o <span className="text-gradient-accent">Claude University?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              "Empreendedores que querem criar produtos digitais sem equipe de dev",
              "Profissionais de marketing que querem automatizar campanhas e análises",
              "Freelancers que querem oferecer serviços de IA e cobrar mais caro",
              "Gestores que querem otimizar processos e reduzir custos operacionais",
              "Curiosos de tecnologia que querem dominar IA antes de todo mundo",
              "Qualquer pessoa que quer sair do zero e criar aplicações reais com IA",
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
            O que nossos alunos <span className="text-gradient-accent">estão dizendo</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ricardo M.", role: "Empreendedor, São Paulo", text: "Em 2 semanas já tinha meu primeiro SaaS rodando. Coisa que eu orçava R$15.000 com dev, fiz sozinho seguindo o treinamento." },
              { name: "Camila S.", role: "Gestora de Marketing, BH", text: "Automatizei toda a geração de relatórios da minha equipe. Economizo 12 horas por semana agora. O investimento se pagou no primeiro dia." },
              { name: "Fernando L.", role: "Freelancer, Curitiba", text: "Comecei a oferecer automações com IA pros meus clientes. Meu ticket médio triplicou. Cobro R$5.000 por projetos que monto em 3 horas." },
              { name: "Ana Paula R.", role: "Advogada, Rio de Janeiro", text: "Zero conhecimento técnico. Hoje tenho um sistema que analisa contratos e gera pareceres automaticamente. Meus colegas não acreditam." },
              { name: "Marcos T.", role: "Consultor, Florianópolis", text: "O módulo de agentes mudou meu negócio. Tenho um assistente que faz pesquisa de mercado, monta apresentações e responde clientes." },
              { name: "Juliana K.", role: "Professora, Porto Alegre", text: "Achei que IA era coisa de programador. O treinamento me provou errada. Já criei 3 ferramentas pro meu trabalho sem escrever código." },
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
            Você tem 7 dias para testar tudo sem nenhum risco.
          </h2>
          <p className="mb-6" style={{ color: "var(--text-sec)" }}>
            Se por qualquer motivo você sentir que o treinamento não é pra você,
            basta enviar um email e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
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
              O Claude completo. Em português. <span className="text-gradient-accent">De uma vez.</span>
            </h2>
            <p className="text-sm" style={{ color: "var(--text-sec)" }}>
              Por menos do que você paga num jantar, você acessa um sistema completo
              que pode mudar a forma como você trabalha para sempre.
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
                    "Módulo 1: Claude Code na Prática",
                    "Módulo 2: Prompts Profissionais",
                    "Módulo 3: Automação de Workflows",
                    "Módulo 4: Agentes de IA",
                    "Acesso vitalício a atualizações",
                    "Comunidade exclusiva de alunos",
                    "Suporte direto por email",
                    "Templates e prompts prontos",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span style={{ color: "var(--accent)" }}>✓</span>
                      <span style={{ color: "var(--text-sec)" }}>{item}</span>
                    </div>
                  ))}
                  {[
                    "BÔNUS: Pack de 50+ prompts avançados",
                    "BÔNUS: Atualizações gratuitas por 1 ano",
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
              { q: "Preciso saber programar?", a: "Não. O treinamento foi feito para quem não tem nenhum conhecimento técnico. Você vai aprender tudo do zero, passo a passo." },
              { q: "Funciona no meu computador?", a: "Sim. O Claude funciona em qualquer computador com internet — Windows, Mac ou Linux. Não precisa de máquina potente." },
              { q: "Quanto tempo leva pra ver resultados?", a: "Alunos relatam criar seu primeiro projeto funcional em 1-2 semanas. Alguns em poucos dias. Depende da sua dedicação." },
              { q: "O acesso é vitalício?", a: "Sim. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do valor. Sem perguntas." },
              { q: "Tem suporte?", a: "Sim. Você tem acesso à comunidade de alunos e suporte direto por email para tirar dúvidas." },
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
            Quatro módulos. Um sistema.{" "}
            <span className="text-gradient-accent">Acesso vitalício.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10 text-left">
            <div className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "rgba(74, 222, 128, 0.2)" }}>
              <div className="font-bold mb-3" style={{ color: "#4ade80" }}>✓ Se você clicar agora:</div>
              <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                Em 30 minutos o Claude já conhece o seu negócio. Em uma semana você tem seu primeiro projeto rodando.
                Em um mês, você opera num nível que 95% das pessoas nem sabe que existe.
              </p>
            </div>
            <div className="p-6 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "rgba(248, 113, 113, 0.2)" }}>
              <div className="font-bold mb-3" style={{ color: "#f87171" }}>✗ Se você fechar essa página:</div>
              <p className="text-sm" style={{ color: "var(--text-sec)" }}>
                Volta pra tentar sozinho, juntando fragmento por fragmento de vídeos aleatórios no YouTube.
                Enquanto isso, quem agiu já está criando, vendendo e automatizando.
              </p>
            </div>
          </div>

          <CtaButton />

          <p className="mt-8 text-sm" style={{ color: "var(--muted)" }}>
            O sistema está montado. O treinamento está pronto. Só falta você.
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
