"use client";

/**
 * Painel Interno da Oferta Auton Health
 * Software de apresentação e discussão da oferta consolidada
 * para alinhar time de marketing, vendas e produto.
 */

import { useEffect, useState } from "react";
import {
  Target, Crosshair, DollarSign, Calculator, ListChecks, Package, FileText, Rocket,
  Quote, Star, TrendingUp, Users, Network, ShieldCheck, Zap, ChevronRight,
  Menu as MenuIcon, X,
} from "lucide-react";

const SECTIONS = [
  { id: "icp", label: "Mercado e ICP", chapter: "Cap 3", icon: Target },
  { id: "posicionamento", label: "Posicionamento", chapter: "Cap 4", icon: Crosshair },
  { id: "pricing", label: "Pricing", chapter: "Cap 5", icon: DollarSign },
  { id: "valor", label: "Equação de Valor", chapter: "Cap 6", icon: Calculator },
  { id: "stack", label: "Problem & Solution Stack", chapter: "Caps 8+9", icon: ListChecks },
  { id: "trim", label: "Oferta Empacotada", chapter: "Cap 10", icon: Package },
  { id: "final", label: "A Oferta Final", chapter: "1 página", icon: FileText },
  { id: "proximos", label: "Próximos Passos", chapter: "Caps 11-16", icon: Rocket },
];

const C = {
  bg: "var(--bg-primary)",
  bg2: "var(--bg-secondary)",
  card: "var(--card-bg)",
  primary: "var(--primary-color)",
  border: "var(--border-color)",
  text: "var(--text-primary)",
  text2: "var(--text-secondary)",
  text3: "var(--text-tertiary)",
};

function SectionHeader({ chapter, title, subtitle }: { chapter: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.2em", color: C.primary }}>{chapter}</p>
      <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ color: C.text }}>{title}</h2>
      {subtitle && <p className="text-lg leading-relaxed" style={{ color: C.text2 }}>{subtitle}</p>}
    </div>
  );
}

function Card({ children, highlight = false, dark = false, className = "" }: { children: React.ReactNode; highlight?: boolean; dark?: boolean; className?: string }) {
  const style: React.CSSProperties = dark
    ? { background: C.primary, color: "#FFFFFF", boxShadow: "var(--shadow-md)" }
    : highlight
      ? { background: "rgba(30,58,95,0.05)", border: `1.5px solid ${C.primary}`, boxShadow: "var(--shadow-md)" }
      : { background: C.card, border: `1px solid ${C.border}`, boxShadow: "var(--shadow-sm)" };
  return <div className={`rounded-[18px] p-6 ${className}`} style={style}>{children}</div>;
}

function PullQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <div className="border-l-4 pl-6 py-4 my-6 italic" style={{ borderColor: C.primary, color: C.text2 }}>
      <Quote className="w-5 h-5 mb-2" style={{ color: C.primary }} />
      <p className="text-lg leading-relaxed">{children}</p>
      {author && <p className="text-xs not-italic mt-3 font-semibold uppercase" style={{ letterSpacing: "0.15em", color: C.text3 }}>{author}</p>}
    </div>
  );
}

function StatusPill({ variant, children }: { variant: "ok" | "warn" | "todo" | "removed"; children: React.ReactNode }) {
  const map = {
    ok: { bg: "rgba(101,246,177,0.18)", color: "#15803D" },
    warn: { bg: "rgba(255,214,77,0.22)", color: "#92400E" },
    todo: { bg: "rgba(79,162,255,0.18)", color: "#1E40AF" },
    removed: { bg: "rgba(122,122,122,0.15)", color: "#525252" },
  };
  const s = map[variant];
  return <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: s.bg, color: s.color, letterSpacing: "0.04em" }}>{children}</span>;
}

export default function PainelOfertaPage() {
  const [active, setActive] = useState("icp");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const offset = 120;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= offset) current = s.id;
      }
      setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  }

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b" style={{ background: "rgba(255,255,255,0.92)", borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg" onClick={() => setNavOpen((v) => !v)} aria-label="Menu" style={{ color: C.text }}>
              {navOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <span className="font-bold text-lg" style={{ color: C.primary }}>Auton</span>
            <span className="hidden sm:inline text-xs font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.text3 }}>· Painel da Oferta · uso interno</span>
          </div>
          <StatusPill variant="ok">v1.0 travada</StatusPill>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-[260px_1fr] gap-10">
        <aside className={`${navOpen ? "block" : "hidden"} md:block`}>
          <nav className="md:sticky md:top-24">
            <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: "0.2em", color: C.text3 }}>Estrutura</p>
            <ul className="space-y-1">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <button onClick={() => goTo(s.id)} className="w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all" style={{ background: isActive ? "rgba(30,58,95,0.08)" : "transparent", color: isActive ? C.primary : C.text2 }}>
                      <s.icon className="w-4 h-4 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold leading-tight" style={{ color: isActive ? C.primary : C.text }}>{s.label}</p>
                        <p className="text-[11px] mt-0.5" style={{ color: C.text3 }}>{s.chapter}</p>
                      </div>
                      {isActive && <ChevronRight className="w-4 h-4 mt-0.5" />}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-8 p-4 rounded-[14px] text-xs leading-relaxed" style={{ background: C.bg2, color: C.text2 }}>
              <p className="font-semibold mb-1" style={{ color: C.primary }}>Como usar</p>
              <p>Este painel é para alinhar o time de marketing, vendas e produto na oferta v1.0 travada. Cada seção tem decisões já fechadas. O que abrir discussão, registrar nas pendências.</p>
            </div>
          </nav>
        </aside>

        <main className="space-y-24">
          <section className="-mt-4">
            <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.25em", color: C.primary }}>Painel Interno · Time de Marketing</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6" style={{ color: C.text }}>A Oferta Auton, consolidada.</h1>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ color: C.text2 }}>
              Resultado de seis sessões aplicadas do livro <em>$100M Offers</em> (Alex Hormozi) à realidade da Auton Health. Esse é o nosso ponto de partida para discussão.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <StatusPill variant="ok">Score Mercado 40/40</StatusPill>
              <StatusPill variant="ok">Posicionamento travado</StatusPill>
              <StatusPill variant="ok">Pricing oficial</StatusPill>
              <StatusPill variant="ok">ROI 9,5×</StatusPill>
              <StatusPill variant="warn">Caps 11-16 pendentes</StatusPill>
            </div>
          </section>

          <section id="icp">
            <SectionHeader chapter="Cap 3 · Starving Crowd" title="Mercado e ICP" subtitle="A multidão faminta certa, no nicho certo, com o avatar certo." />
            <div className="grid md:grid-cols-2 gap-5 mb-8">
              <Card>
                <p className="text-xs font-bold uppercase mb-2" style={{ color: C.primary, letterSpacing: "0.18em" }}>Score Starving Crowd</p>
                <p className="text-6xl font-bold leading-none mb-2" style={{ color: C.primary }}>40/40</p>
                <p className="text-sm" style={{ color: C.text2 }}>Verde máximo. Mercado raro de tão alinhado.</p>
              </Card>
              <Card highlight>
                <p className="text-xs font-bold uppercase mb-2" style={{ color: C.text3, letterSpacing: "0.18em" }}>Frase-âncora do ICP</p>
                <p className="text-lg italic font-medium leading-relaxed" style={{ color: C.text }}>&ldquo;Sei que existe algo além dos sintomas, mas não consigo ver sozinha.&rdquo;</p>
              </Card>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Os 4 critérios Hormozi</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <thead>
                  <tr style={{ background: C.primary, color: "#FFFFFF" }}>
                    <th className="text-left px-4 py-3 font-semibold">Critério</th>
                    <th className="text-left px-4 py-3 font-semibold">Pergunta</th>
                    <th className="text-left px-4 py-3 font-semibold">Nota</th>
                    <th className="text-left px-4 py-3 font-semibold">Por quê</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Massive Pain", "Eles estão tão frustrados que não conseguem dormir?", "10/10", "89% relatam quero curar mas sou forçada a tratar."],
                    ["Purchasing Power", "Podem pagar pelo valor?", "10/10", "Marketplace gera renda nova. O produto se paga."],
                    ["Easy to Target", "Você os encontra?", "10/10", "Base USI 3.000 + Instagram Barakat + lives 58% conv."],
                    ["Growing", "Mercado expandindo?", "10/10", "Comunidade cria network effect. Cresce sozinho."],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                      <td className="px-4 py-3 font-semibold" style={{ color: C.text }}>{row[0]}</td>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[1]}</td>
                      <td className="px-4 py-3"><StatusPill variant="ok">{row[2]}</StatusPill></td>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Niche Down · 3 Camadas</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { layer: "Camada 1", desc: "Saúde", price: "R$ 100/mês", note: "commodity" },
                { layer: "Camada 2", desc: "Medicina integrativa", price: "R$ 500/mês", note: "premium acessível" },
                { layer: "Camada 3 · NOSSA", desc: "Profissional aluna USI + rede multidisciplinar", price: "R$ 997-2.000+/mês", note: "premium defensável", current: true },
              ].map((l, i) => (
                <Card key={i} highlight={l.current}>
                  <p className="text-xs font-bold uppercase mb-1" style={{ color: C.text3, letterSpacing: "0.15em" }}>{l.layer}</p>
                  <p className="font-semibold text-base mb-2" style={{ color: C.text }}>{l.desc}</p>
                  <p className="text-2xl font-bold mb-1" style={{ color: C.primary }}>{l.price}</p>
                  <p className="text-xs" style={{ color: C.text3 }}>{l.note}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Avatar · Dra. Camila (v2)</h3>
            <div className="overflow-hidden rounded-[14px] mb-10" style={{ background: C.card, boxShadow: "var(--shadow-sm)" }}>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Demografia", "Mulher, 38 anos (faixa 30-50), profissional de saúde (8 profissões USI), Sudeste/Sul, renda líquida R$ 12-25k/mês"],
                    ["Formação", "Aluna USI ou recém-formada (até 3 anos pós-graduação)"],
                    ["Comportamento", "Autônoma. ~1 paciente/dia. Consultas 90min+. Documentação em casa à noite."],
                    ["Dor-mãe", "Sei que existe algo além dos sintomas, mas não consigo ver sozinha."],
                    ["Gatilhos emocionais", "Estou exausta 89% · Me sinto uma fraude 68% · Virei vendedora de consultas 92%"],
                    ["Objeção dominante", "E se eu pagar e não for o prometido? (trauma pós-ferramenta)"],
                    ["Dream Outcome", "1) Tratar causa raiz · 2) Resultados únicos · 3) Recuperar tempo · 4) Recuperar propósito · 5) Renda adicional · 6) Rede de apoio"],
                    ["Canal de aquisição", "Instagram (Barakat/Bonanza) + WhatsApp (USI). Live converte 58%."],
                    ["NÃO-Avatar", "Médico convencional sem interesse integrativo · Caçador de promoção"],
                  ].map(([k, v], i) => (
                    <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}>
                      <td className="px-4 py-3 font-semibold align-top w-1/3" style={{ color: C.primary, background: C.bg2 }}>{k}</td>
                      <td className="px-4 py-3" style={{ color: C.text }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Compound Moat · 5 Vantagens Inimitáveis</h3>
            <div className="grid md:grid-cols-5 gap-3">
              {[
                { n: "1", t: "Método ADS", d: "50 anos de prática codificada" },
                { n: "2", t: "Base USI", d: "3.000 alunos formados" },
                { n: "3", t: "Marca Barakat+Bonanza", d: "Autoridade nacional" },
                { n: "4", t: "Dados causa raiz", d: "Compostam a cada consulta" },
                { n: "5", t: "Network effect", d: "Comunidade + marketplace" },
              ].map((m) => (
                <Card key={m.n} className="text-center">
                  <p className="text-3xl font-bold mb-2" style={{ color: C.primary, opacity: 0.4 }}>{m.n}</p>
                  <p className="font-semibold text-sm mb-1" style={{ color: C.text }}>{m.t}</p>
                  <p className="text-xs" style={{ color: C.text2 }}>{m.d}</p>
                </Card>
              ))}
            </div>
          </section>

          <section id="posicionamento">
            <SectionHeader chapter="Cap 4 · Commodity Problem" title="Posicionamento Final" subtitle="Como saímos da briga de feature/preço e criamos uma categoria própria." />
            <Card dark className="mb-10">
              <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Frase oficial</p>
              <p className="text-2xl md:text-3xl font-bold leading-tight mb-3">A 1ª IA de causa raiz, agora em rede.</p>
              <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.
                <br />
                <strong>Auton: a plataforma sistêmica da saúde integrativa.</strong>
              </p>
            </Card>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Análise dos 8 concorrentes</h3>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <thead style={{ background: C.bg2 }}>
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Zona</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Concorrente</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Preço</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Lacuna vs Auton</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1 · Commodity", "iClinic", "R$ 119-159", "Sem IA clínica nem método"],
                    ["1 · Commodity", "HiDoctor", "R$ 85-195", "IA só transcreve"],
                    ["1 · Commodity", "Amplimed", "R$ 99+", "Foco gestão, IA superficial"],
                    ["1 · Commodity", "Naomed", "R$ 99+", "Documentação automática só"],
                    ["2 · Premium genérica", "AmigoTech", "R$ 300-500*", "IA genérica, sem método ADS"],
                    ["2 · Premium genérica", "Support Health", "—", "ERP médico, IA secundária"],
                    ["2 · Premium genérica", "VOA Health", "R$ 300", "Só transcrição, sem BR"],
                    ["Horizontal", "ChatGPT Plus", "R$ 100", "Não é médico, sem contexto"],
                    ["3 · Categoria única", "AUTON", "R$ 497-2.000+", "SEM concorrente direto. 5 vantagens compostas."],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.border}`, background: row[1] === "AUTON" ? "rgba(30,58,95,0.06)" : "transparent" }}>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[0]}</td>
                      <td className="px-4 py-3 font-semibold" style={{ color: row[1] === "AUTON" ? C.primary : C.text }}>{row[1]}</td>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[2]}</td>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Formas BANIDAS de descrever a Auton</h3>
            <Card>
              <ul className="space-y-2" style={{ color: C.text2 }}>
                {[
                  "Software de IA para profissionais de saúde",
                  "Prontuário eletrônico inteligente",
                  "ChatGPT para médicos",
                  "Plataforma de gestão clínica",
                  "Ferramenta de IA clínica",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-4 h-4 mt-1 shrink-0" style={{ color: "#EF4444" }} />
                    <span><em>&ldquo;{b}&rdquo;</em> commoditiza a marca</span>
                  </li>
                ))}
              </ul>
            </Card>

            <PullQuote author="Alex Hormozi · $100M Offers, Cap 4">
              Pare de competir. Comece a categorizar. Mercados competitivos exigem ofertas melhores. Mercados de monopólio só exigem uma oferta.
            </PullQuote>
          </section>

          <section id="pricing">
            <SectionHeader chapter="Cap 5 · Virtuous Cycle" title="Pricing Oficial" subtitle="Escada Hormozi com Pro como hero. Anual com 20% de desconto, sempre primário." />
            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Fase 1 · Validação · 200 vagas</h3>
            <Card highlight className="mb-10">
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <p className="text-xs font-bold uppercase" style={{ letterSpacing: "0.18em", color: C.primary }}>Turma Fundadora</p>
                <StatusPill variant="warn">vagas limitadas</StatusPill>
              </div>
              <p className="text-3xl font-bold mb-1" style={{ color: C.primary }}>R$ 397/mês <span className="text-base font-normal" style={{ color: C.text2 }}>no anual (R$ 4.764/ano)</span></p>
              <p className="text-base mb-3" style={{ color: C.text2 }}>ou R$ 497/mês no plano mensal</p>
              <p className="text-sm" style={{ color: C.text2 }}>Acesso completo durante a validação · marketplace ativo · regra de migração para a fase de escala a definir.</p>
            </Card>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Fase 2 · Escala</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { name: "Starter", monthly: "R$ 997", annual: "R$ 797", delivers: "Funcionalidades básicas + comunidade", market: "❌ sem marketplace" },
                { name: "Pro", monthly: "R$ 1.497", annual: "R$ 1.197", delivers: "Starter + chat IA contextual + marketplace", market: "✅ Auton 15%", hero: true },
                { name: "Enterprise", monthly: "R$ 4.997+", annual: "R$ 3.997+", delivers: "Pro + multi-usuários + SLA + onboarding dedicado", market: "✅ customizado" },
              ].map((p) => (
                <Card key={p.name} dark={p.hero} highlight={!p.hero}>
                  {p.hero && <p className="text-xs font-bold uppercase mb-2 inline-block px-2 py-0.5 rounded-full" style={{ background: "#FFFFFF", color: C.primary, letterSpacing: "0.08em" }}>⭐ Hero · 70% das vendas</p>}
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: p.hero ? "rgba(255,255,255,0.85)" : C.text3 }}>{p.name}</p>
                  <p className="text-3xl font-bold mb-1" style={{ color: p.hero ? "#FFFFFF" : C.primary }}>{p.annual}<span className="text-sm font-normal" style={{ opacity: 0.85 }}>/mês anual</span></p>
                  <p className="text-sm mb-4" style={{ color: p.hero ? "rgba(255,255,255,0.7)" : C.text2 }}>ou {p.monthly}/mês no mensal</p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: p.hero ? "rgba(255,255,255,0.95)" : C.text2 }}>{p.delivers}</p>
                  <p className="text-xs" style={{ color: p.hero ? "rgba(255,255,255,0.75)" : C.text3 }}>Marketplace: {p.market}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Análise de gaps (lente Hormozi)</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { transition: "Starter → Pro", gap: "1,5×", status: "Aceitável · marketplace fecha decisão" },
                { transition: "Pro → Enterprise", gap: "3,34×", status: "Ideal (regra Hormozi: 3-5×)" },
                { transition: "Desconto anual", gap: "20%", status: "Ideal (regra Hormozi: 16-25%)" },
              ].map((g, i) => (
                <Card key={i}>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: C.text3 }}>{g.transition}</p>
                  <p className="text-3xl font-bold mb-2" style={{ color: C.primary }}>{g.gap}</p>
                  <p className="text-sm" style={{ color: C.text2 }}>{g.status}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Simulação · 1.000 clientes (mix 20/70/10)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <thead style={{ background: C.primary, color: "#FFFFFF" }}>
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Plano</th>
                    <th className="text-left px-4 py-3 font-semibold">Clientes</th>
                    <th className="text-left px-4 py-3 font-semibold">Ticket</th>
                    <th className="text-left px-4 py-3 font-semibold">MRR</th>
                    <th className="text-left px-4 py-3 font-semibold">ARR</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starter", "200", "R$ 997", "R$ 199.400", "R$ 2,4M"],
                    ["Pro (HERO)", "700", "R$ 1.497", "R$ 1.257.900", "R$ 15,1M"],
                    ["Enterprise", "100", "R$ 4.997", "R$ 499.700", "R$ 6,0M"],
                  ].map((r, i) => (
                    <tr key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                      {r.map((c, j) => <td key={j} className="px-4 py-3" style={{ color: j === 0 ? C.text : C.text2, fontWeight: j === 0 ? 600 : 400 }}>{c}</td>)}
                    </tr>
                  ))}
                  <tr style={{ borderTop: `2px solid ${C.primary}`, background: "rgba(30,58,95,0.04)" }}>
                    <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>TOTAL</td>
                    <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>1.000</td>
                    <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>ARPU R$ 1.957</td>
                    <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>R$ 1,95M</td>
                    <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>R$ 23,5M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="valor">
            <SectionHeader chapter="Cap 6 · Value Equation" title="Equação de Valor" subtitle="Quanto vale entregar a Auton · 4 drivers quantificados, ROI 9,5× no Pro anual." />
            <PullQuote author="Hormozi · paráfrase">Valor = (Resultado dos Sonhos × Probabilidade Percebida) ÷ (Tempo × Esforço). As 4 únicas alavancas.</PullQuote>
            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Os 4 drivers de valor</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: TrendingUp, value: "R$ 8.750", label: "Tempo economizado", desc: "17,5h/mês × R$ 500/h" },
                { icon: Network, value: "R$ 2.720", label: "Renda nova", desc: "8 encaminhamentos × R$ 400 × 85%" },
                { icon: Users, value: "R$ 1.000", label: "Retenção", desc: "+2-3 consultas retidas/mês" },
                { icon: Star, value: "R$ 1.000", label: "Autoridade", desc: "Indicações espontâneas" },
              ].map((d, i) => (
                <Card key={i}>
                  <d.icon className="w-6 h-6 mb-3" style={{ color: C.primary }} />
                  <p className="text-2xl font-bold mb-1" style={{ color: C.primary }}>{d.value}</p>
                  <p className="font-semibold text-sm mb-1" style={{ color: C.text }}>{d.label}</p>
                  <p className="text-xs" style={{ color: C.text2 }}>{d.desc}</p>
                </Card>
              ))}
            </div>

            <Card dark className="mb-10">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Dream Outcome</p>
                  <p className="text-3xl font-bold">R$ 13.470/mês</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>× Likelihood</p>
                  <p className="text-3xl font-bold">85%</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>= Valor percebido</p>
                  <p className="text-3xl font-bold">R$ 11.450/mês</p>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>ROI por plano</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { plan: "Starter mensal", price: "R$ 997", roi: "5,5×" },
                { plan: "Starter anual", price: "R$ 797", roi: "6,9×" },
                { plan: "Pro mensal ⭐", price: "R$ 1.497", roi: "7,65×" },
                { plan: "Pro anual ⭐", price: "R$ 1.197", roi: "9,56×", best: true },
              ].map((r) => (
                <Card key={r.plan} highlight={r.best}>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: C.text3 }}>{r.plan}</p>
                  <p className="text-sm mb-1" style={{ color: C.text2 }}>Paga {r.price}</p>
                  <p className="text-3xl font-bold" style={{ color: C.primary }}>ROI {r.roi}</p>
                  {r.best && <p className="text-xs mt-2 font-semibold" style={{ color: "#15803D" }}>Melhor relação valor-preço</p>}
                </Card>
              ))}
            </div>

            <Card highlight>
              <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: C.primary }}>Argumento de venda copy-ready</p>
              <p className="text-xl font-bold leading-relaxed mb-2" style={{ color: C.text }}>&ldquo;Você paga R$ 1.497/mês pelo Pro. Recebe R$ 11.450/mês em valor. ROI de 7,6× todo mês. No anual, 9,5×.&rdquo;</p>
              <p className="text-sm" style={{ color: C.text2 }}>Não é opinião. É matemática. Se o cliente discorda, discorda dos dados.</p>
            </Card>
          </section>

          <section id="stack">
            <SectionHeader chapter="Caps 8 + 9" title="Problem & Solution Stack" subtitle="26 problemas mapeados, 26 soluções nomeadas. 74% já existe no produto." />
            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Os 3 tipos de problema</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { type: "Dores Inerentes", n: 12, fix: "PRODUTO CORE" },
                { type: "Objeções de Compra", n: 11, fix: "OFERTA (garantia, bônus, prova social)" },
                { type: "Fricções Operacionais", n: 3, fix: "TIME DE PRODUTO (removidas da oferta)" },
              ].map((t, i) => (
                <Card key={i}>
                  <p className="text-5xl font-bold mb-2" style={{ color: C.primary }}>{t.n}</p>
                  <p className="font-semibold mb-2" style={{ color: C.text }}>{t.type}</p>
                  <p className="text-sm" style={{ color: C.text2 }}>Resolvidas por <strong>{t.fix}</strong></p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Os 5 dealbreakers · todos cobertos</h3>
            <div className="overflow-hidden rounded-[14px] mb-10" style={{ background: C.card, boxShadow: "var(--shadow-sm)" }}>
              <table className="w-full text-sm">
                <thead style={{ background: C.bg2 }}>
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>#</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Dealbreaker</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Solução</th>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: C.text }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "Trauma pós-ferramenta", "Garantia 7 dias dinheiro de volta"],
                    ["3", "Sem tempo de aprender", "Onboarding 60min + call concierge"],
                    ["14", "Sem tempo análise profunda", "AI ADS gera análise em 20 min"],
                    ["19", "Paciente não adere em casa", "App paciente web com checklist"],
                    ["26", "Caixa apertado cancela", "ROI via marketplace + pausa 30d"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}>
                      <td className="px-4 py-3 font-bold" style={{ color: C.primary }}>#{row[0]}</td>
                      <td className="px-4 py-3" style={{ color: C.text }}>{row[1]}</td>
                      <td className="px-4 py-3" style={{ color: C.text2 }}>{row[2]}</td>
                      <td className="px-4 py-3"><StatusPill variant="ok">já existe</StatusPill></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>4 itens a CRIAR pré-lançamento</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { n: "5", t: "3 depoimentos em vídeo + Diagnóstico 0", time: "1-2 sem", lvl: "🟢 Quick win" },
                { n: "6", t: "PDF cálculo de ROI (1 página)", time: "3-5 dias", lvl: "🟢 Quick win" },
                { n: "7", t: "Plano Fundador com aula semanal", time: "3-4 sem", lvl: "🟡 Produção média" },
                { n: "8", t: "Parecer jurídico CFM/CFN/CFP + biblioteca", time: "3-6 sem", lvl: "🟡 Produção média" },
              ].map((it, i) => (
                <Card key={i}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl font-bold" style={{ color: C.primary, opacity: 0.4 }}>#{it.n}</span>
                    <div className="flex-1">
                      <p className="font-semibold mb-2" style={{ color: C.text }}>{it.t}</p>
                      <div className="flex gap-2 flex-wrap items-center">
                        <StatusPill variant="todo">{it.time}</StatusPill>
                        <span className="text-xs" style={{ color: C.text2 }}>{it.lvl}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section id="trim">
            <SectionHeader chapter="Cap 10 · Trim & Stack" title="Oferta Empacotada" subtitle="21 soluções ativas viram 5 Vehicles + Arsenal de Vendas. Trim 0 · ninguém cortado." />
            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Os 5 Vehicles</h3>
            <div className="space-y-4 mb-10">
              {[
                { cat: "PRODUTO PRINCIPAL", emoji: "🏛️", name: "Plataforma ADS · Diagnóstico Inteligente", desc: "Motor Método ADS + Análise multidimensional + Protocolo personalizado IA + Análise em 20 min + Tradução técnica + Dashboard de casos com export PDF", pitch: "Transforme cada consulta em diagnóstico de causa raiz com método." },
                { cat: "PRODUTO PRINCIPAL", emoji: "📱", name: "App do Paciente · Adesão e Acompanhamento", desc: "App web com checklist (treino + alimentar + terapêutico) + Dashboard evolução + Relatório antes/depois", pitch: "Seu paciente não some entre consultas. Tem app, acompanha, vê evolução." },
                { cat: "PRODUTO PRINCIPAL", emoji: "🤝", name: "Rede Auton · Comunidade + Marketplace", desc: "Comunidade fechada de casos + Marketplace multidisciplinar (Auton 15% / profissional 85%)", pitch: "Você não está mais sozinha. Discute com colegas e ganha indicando." },
                { cat: "EXTRA", emoji: "🚀", name: "Onboarding Concierge", desc: "Curso 60min + Call concierge na 1ª semana + Migração gratuita em 48h", pitch: "Você está usando produtivamente em 1 hora, sem migrar nada manualmente." },
                { cat: "EXTRA", emoji: "🎓", name: "Plano Fundador", desc: "1 aula por semana com professor especialista", pitch: "Você não compra software. Entra em programa de evolução profissional contínua." },
              ].map((v, i) => (
                <Card key={i}>
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{v.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.15em", color: C.text3 }}>{v.cat}</p>
                      <h4 className="text-lg font-bold mb-2" style={{ color: C.text }}>{v.name}</h4>
                      <p className="text-sm mb-3 leading-relaxed" style={{ color: C.text2 }}>{v.desc}</p>
                      <p className="text-sm italic" style={{ color: C.primary }}>“{v.pitch}”</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Arsenal de Vendas (sob demanda)</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { obj: "Cliente cético sobre risco", item: "PDF da garantia 7 dias dinheiro de volta" },
                { obj: "Cliente cético sobre resultado", item: "3 depoimentos em vídeo" },
                { obj: "Marido/sócio questiona investimento", item: "PDF cálculo de ROI" },
                { obj: "Conselho profissional preocupa", item: "Parecer jurídico + biblioteca compliance" },
              ].map((a, i) => (
                <Card key={i}>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.15em", color: C.text3 }}>Quando o cliente diz</p>
                  <p className="font-semibold mb-3" style={{ color: C.text }}>{a.obj}</p>
                  <p className="text-sm flex items-start gap-2" style={{ color: C.text2 }}>
                    <ChevronRight className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.primary }} />
                    <span>Enviar: <strong style={{ color: C.text }}>{a.item}</strong></span>
                  </p>
                </Card>
              ))}
            </div>
          </section>

          <section id="final">
            <SectionHeader chapter="1 página · executiva" title="A Oferta Auton Final" subtitle="Resumo cabível em 1 página, pronto para uso em landing, pitch ou call." />
            <Card dark className="mb-6">
              <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Posicionamento</p>
              <p className="text-xl md:text-2xl font-bold leading-tight">
                A 1ª IA de causa raiz, agora em rede.
                <br />
                <span style={{ color: "rgba(255,255,255,0.85)" }}>Auton · a plataforma sistêmica da saúde integrativa.</span>
              </p>
            </Card>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Card>
                <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: C.primary }}>Pricing</p>
                <ul className="space-y-2 text-sm" style={{ color: C.text2 }}>
                  <li><strong style={{ color: C.text }}>Turma Fundadora:</strong> R$ 397/mês anual · 200 vagas</li>
                  <li><strong style={{ color: C.text }}>Starter:</strong> R$ 797/mês anual</li>
                  <li><strong style={{ color: C.text }}>Pro ⭐:</strong> R$ 1.197/mês anual (hero)</li>
                  <li><strong style={{ color: C.text }}>Enterprise:</strong> R$ 3.997/mês anual a partir de</li>
                </ul>
              </Card>
              <Card>
                <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: C.primary }}>Valor entregue</p>
                <ul className="space-y-2 text-sm" style={{ color: C.text2 }}>
                  <li>Dream Outcome: <strong style={{ color: C.text }}>R$ 13.470/mês</strong></li>
                  <li>Likelihood: <strong style={{ color: C.text }}>85%</strong></li>
                  <li>Valor percebido: <strong style={{ color: C.text }}>R$ 11.450/mês</strong></li>
                  <li>ROI no Pro anual: <strong style={{ color: C.primary }}>9,5×</strong></li>
                </ul>
              </Card>
            </div>
            <Card>
              <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: C.primary }}>Oferta empacotada (5 Vehicles)</p>
              <ul className="space-y-2 text-sm" style={{ color: C.text2 }}>
                <li>🏛️ <strong style={{ color: C.text }}>Plataforma ADS</strong> · diagnóstico inteligente</li>
                <li>📱 <strong style={{ color: C.text }}>App do Paciente</strong> · adesão + acompanhamento</li>
                <li>🤝 <strong style={{ color: C.text }}>Rede Auton</strong> · comunidade + marketplace</li>
                <li>🚀 <strong style={{ color: C.text }}>Onboarding Concierge</strong> · 60min + 48h migração</li>
                <li>🎓 <strong style={{ color: C.text }}>Plano Fundador</strong> · aula semanal</li>
              </ul>
              <p className="text-xs mt-4 pt-4 border-t italic" style={{ color: C.text3, borderColor: C.border }}>+ Arsenal de Vendas sob demanda.</p>
            </Card>
          </section>

          <section id="proximos">
            <SectionHeader chapter="Caps 11-16 · pendentes" title="Próximos Passos" subtitle="O que falta turbinar na oferta + pendências críticas mapeadas." />
            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Capítulos 11-16 · vão turbinar a oferta v1.0</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { cap: "Cap 11", t: "Enhancing the Offer", a: "Como turbinar a v1.0 travada" },
                { cap: "Cap 12", t: "Scarcity (Escassez)", a: "Limite de 200 vagas Fundadora" },
                { cap: "Cap 13", t: "Urgency (Urgência)", a: "Deadline lançamento março/2026" },
                { cap: "Cap 14", t: "Bonuses (Bônus)", a: "Quais ingredientes viram bônus nomeados?" },
                { cap: "Cap 15", t: "Guarantees (Garantias)", a: "Anti-hipotética + ROI marketplace" },
                { cap: "Cap 16", t: "Naming / MAGIC", a: "Nome oficial dos Vehicles + oferta toda" },
              ].map((c, i) => (
                <Card key={i}>
                  <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: C.primary }}>{c.cap}</p>
                  <p className="font-semibold mb-2" style={{ color: C.text }}>{c.t}</p>
                  <p className="text-sm" style={{ color: C.text2 }}>{c.a}</p>
                </Card>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4" style={{ color: C.text }}>Pendências críticas</h3>
            <div className="space-y-3">
              {[
                { p: "Refazer P&L com pricing novo + premissas realistas", impact: "🔴 Alto" },
                { p: "Refazer copy da landing oficial autonhealth.com.br", impact: "🔴 Alto" },
                { p: "Refazer Pitch Deck (8 slides com tração real)", impact: "🟡 Médio" },
                { p: "Refazer Apresentação Auton (8-10 slides foco em transformação)", impact: "🟡 Médio" },
                { p: "Refazer Lean Canvas com método Hormozi", impact: "🔴 Alto" },
                { p: "Estratégia de distribuição executável (canais, funis, tráfego)", impact: "🔴 Alto" },
                { p: "Lançar publicamente Marketplace + Comunidade", impact: "🟡 Médio" },
                { p: "Definir regra de migração dos Fundadores", impact: "🟡 Médio" },
                { p: "Terminar leitura dos Caps 11-16 do livro", impact: "🔴 Pré-requisito" },
              ].map((it, i) => (
                <Card key={i}>
                  <div className="flex items-center gap-4">
                    <Zap className="w-5 h-5 shrink-0" style={{ color: C.primary }} />
                    <p className="flex-1 text-sm" style={{ color: C.text }}>{it.p}</p>
                    <span className="text-xs font-semibold whitespace-nowrap" style={{ color: C.text2 }}>{it.impact}</span>
                  </div>
                </Card>
              ))}
            </div>

            <Card dark className="mt-10 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-3" style={{ color: "#FFFFFF" }} />
              <p className="text-2xl font-bold mb-2">Oferta v1.0 · TRAVADA</p>
              <p className="text-base" style={{ color: "rgba(255,255,255,0.85)" }}>
                Posicionamento, pricing, valor, ICP, oferta empacotada.
                <br />
                Pronta para discussão executiva e priorização de execução.
              </p>
            </Card>
          </section>
        </main>
      </div>

      <footer className="border-t py-8 px-6" style={{ background: C.card, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs" style={{ color: C.text3 }}>
          <p>Auton Health · Painel Interno da Oferta · Uso restrito a marketing, vendas e produto</p>
          <p>Conteúdo extraído de <em>Oferta Auton.docx</em> · base $100M Offers (Hormozi)</p>
        </div>
      </footer>
    </div>
  );
}
