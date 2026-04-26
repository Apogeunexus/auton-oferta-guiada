"use client";

/**
 * Painel Interno da Oferta Auton Health
 * Conteúdo replicado integralmente do "Oferta Auton.docx".
 * Geração automática a partir do documento original.
 */

import { useEffect, useState } from "react";
import {
  Target, Crosshair, DollarSign, Calculator, ListChecks, Package, FileText, Rocket,
  Quote, ChevronRight, Menu as MenuIcon, X, ShieldCheck,
} from "lucide-react";

const ICONS = { Target, Crosshair, DollarSign, Calculator, ListChecks, Package, FileText, Rocket };

const SECTIONS = [
  {
    "id": "icp",
    "icon": "Target",
    "label": "Capítulo 3",
    "chapter": "Cap 1"
  },
  {
    "id": "posicionamento",
    "icon": "Crosshair",
    "label": "Capítulo 4",
    "chapter": "Cap 2"
  },
  {
    "id": "pricing",
    "icon": "DollarSign",
    "label": "Capítulo 5",
    "chapter": "Cap 3"
  },
  {
    "id": "valor",
    "icon": "Calculator",
    "label": "Capítulo 6",
    "chapter": "Cap 4"
  },
  {
    "id": "stack",
    "icon": "ListChecks",
    "label": "Capítulos 8 + 9",
    "chapter": "Cap 5"
  },
  {
    "id": "trim",
    "icon": "Package",
    "label": "Capítulo 10",
    "chapter": "Cap 6"
  },
  {
    "id": "final",
    "icon": "FileText",
    "label": "A Oferta Auton Final",
    "chapter": "Cap 7"
  },
  {
    "id": "proximos",
    "icon": "Rocket",
    "label": "Próximos Passos",
    "chapter": "Cap 8"
  }
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

function SectionHeader({ chapter, title }: { chapter: string; title: string }) {
  return (
    <div className="mb-8 pb-6 border-b" style={{ borderColor: C.border }}>
      <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.2em", color: C.primary }}>{chapter}</p>
      <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: C.text }}>{title}</h2>
    </div>
  );
}

function PullQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <div className="border-l-4 pl-6 py-4 my-6 italic rounded-r-lg" style={{ borderColor: C.primary, color: C.text2, background: "rgba(30,58,95,0.04)" }}>
      <Quote className="w-5 h-5 mb-2" style={{ color: C.primary }} />
      <p className="text-base leading-relaxed">{children}</p>
      {author && <p className="text-xs not-italic mt-3 font-semibold uppercase" style={{ letterSpacing: "0.15em", color: C.text3 }}>{author}</p>}
    </div>
  );
}

function StatusBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold" style={{ background: "rgba(101,246,177,0.18)", color: "#15803D", letterSpacing: "0.04em" }}>
      {children}
    </span>
  );
}

export default function PainelOfertaPage() {
  const [active, setActive] = useState(SECTIONS[0]?.id || "");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      const offset = 140;
      let current = SECTIONS[0]?.id;
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
          <StatusBadge>v1.0 travada</StatusBadge>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-[260px_1fr] gap-10">
        <aside className={`${navOpen ? "block" : "hidden"} md:block`}>
          <nav className="md:sticky md:top-24">
            <p className="text-xs font-bold uppercase mb-4" style={{ letterSpacing: "0.2em", color: C.text3 }}>Estrutura</p>
            <ul className="space-y-1">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                const Icon = (ICONS as any)[s.icon];
                return (
                  <li key={s.id}>
                    <button onClick={() => goTo(s.id)} className="w-full text-left flex items-start gap-3 px-3 py-2.5 rounded-lg transition-all" style={{ background: isActive ? "rgba(30,58,95,0.08)" : "transparent", color: isActive ? C.primary : C.text2 }}>
                      {Icon && <Icon className="w-4 h-4 mt-0.5 shrink-0" />}
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
              <p>Este painel reproduz integralmente o documento Oferta Auton.docx. Use para discutir com o time de marketing, vendas e produto.</p>
            </div>
          </nav>
        </aside>

        <main className="space-y-20 max-w-none prose-styled">
          <section className="-mt-4">
            <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.25em", color: C.primary }}>Painel Interno · Time de Marketing</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6" style={{ color: C.text }}>A Oferta Auton, consolidada.</h1>
            <p className="text-xl leading-relaxed max-w-2xl mb-6" style={{ color: C.text2 }}>Resultado da aplicação do livro <em>$100M Offers</em> (Alex Hormozi) à realidade da Auton Health. Documento integral replicado abaixo.</p>
            <div className="rounded-[18px] p-6 inline-block" style={{ background: C.primary, color: "#FFFFFF" }}>
              <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Posicionamento oficial</p>
              <p className="text-lg font-bold">A 1ª IA de causa raiz, agora em rede.</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.</p>
            </div>
          </section>

<section id="icp">
<SectionHeader chapter={`Capítulo 1`} title={`1. Capítulo 3 — Starving Crowd (Multidão Faminta)`} />
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Mercado: medicina integrativa no Brasil. Sub-mercado: alunos e órbita da USI. Nicho final (Camada 3): profissional de saúde mulher 30-50, aluna USI, autônoma, em transição, com dor “curar × tratar”, buscando rede de apoio e renda multidisciplinar.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Score Starving Crowd — 40/40 (verde máximo)`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Hormozi fornece 4 perguntas diagnósticas para validar qualquer mercado. Cada critério recebe nota de 0 a 10.`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Critério`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Pergunta Hormozi`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Nota`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Justificativa`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Massive Pain (Dor Massiva)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Eles estão tão frustrados que não conseguem dormir?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`10/10`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`89% dos profissionais reportam “quero curar mas sou forçada a tratar”. Dor de identidade + exaustão + sensação de fraude.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Purchasing Power (Poder de Compra)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Eles podem pagar o que a solução vale?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`10/10`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Marketplace multidisciplinar gera renda nova pro profissional. Auton deixa de ser gasto e vira alavanca de receita.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Easy to Target (Fácil de Segmentar)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Você consegue encontrá-los facilmente?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`10/10`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Base USI 3.000 alunos + grupos WhatsApp + Instagram Barakat. Live com 58% de conversão validou canal.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Growing (Em Crescimento)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Este mercado está expandindo ou se contraindo?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`10/10`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Comunidade fechada cria network effect. Cada usuário novo aumenta valor pros outros. Growth auto-reforçado.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TOTAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Starving Crowd Score`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`40/40`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Mercado perfeito. Raro.`}</td>
</tr>
</tbody></table></div>
<PullQuote author={`Alex Hormozi`}>{`“O melhor mercado é aquele que te devolve mais do que você investe nele.”`}</PullQuote>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Niche Down (Nichamento) — 3 Camadas`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Mesmo produto muda de preço conforme a profundidade do nicho.`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Camada`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Descrição`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Preço defensável`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Camada 1 — Mercado Amplo`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Saúde`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 100/mês (commodity)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Camada 2 — Sub-mercado`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Medicina integrativa`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 500/mês (premium acessível)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Camada 3 — Nicho Final`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Profissional de saúde aluna USI + rede multidisciplinar`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 997 – 2.000+/mês (premium defensável)`}</td>
</tr>
</tbody></table></div>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Mesmo produto. Preço até 20× maior. Muda apenas o avatar.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Avatar Sheet — Dra. Camila (v2)`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`ICP representativo de qualquer profissional de saúde da base USI. Todo marketing, pitch, copy, oferta, preço e canal se guia por este avatar.`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Dimensão`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Descrição`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Nome fictício`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Dra. Camila`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Demografia`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Mulher, 38 anos (30-50), profissional de saúde (8 profissões USI), Sudeste/Sul, renda líquida R$ 12-25k/mês`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Formação`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Aluna USI ou recém-formada (até 3 anos pós-graduação)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Comportamento`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Autônoma. ~1 paciente/dia. Consultas aprofundadas 90min+. Faz documentação em casa à noite.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Dor-Mãe (copy-ready)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Sei que existe algo além dos sintomas, mas não consigo ver sozinha.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Gatilhos emocionais`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Estou exausta” 89% | “Me sinto uma fraude” 68% | “Virei vendedora de consultas” 92%`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Já tentou (e falhou)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Secretária, aumentar preço, outras ferramentas, fazer sozinha, cursos, ChatGPT genérico`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Objeção dominante`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“E se eu pagar e não for o prometido?” (trauma pós-ferramenta)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Dream Outcome (6 componentes)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`1) Tratar causa raiz | 2) Resultados únicos | 3) Recuperar tempo | 4) Recuperar propósito | 5) Renda adicional via marketplace | 6) Rede de apoio multidisciplinar`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Canal de aquisição`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Instagram (Barakat/Bonanza) + WhatsApp (USI). Formato validado: live (58% conversão).`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Gatilho de compra (stack)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Endosso Barakat/Bonanza + Prova social de par + Demo ao vivo + Garantia forte`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Neutralizador de objeção`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ROI do marketplace: “o que você paga volta em forma de receita multidisciplinar”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Gatilho extra: pertencimento`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Comunidade fechada: “Você não está mais sozinha.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`NÃO-Avatar (quem excluir)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Médico convencional sem interesse integrativo | Caçador de promoção`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Starving Crowd Score`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`40/40 — VERDE MÁXIMO`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Compound Moat — 5 Vantagens Inimitáveis`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Nenhuma dessas 5 sozinha é fortíssima. As 5 juntas são muralha.`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`#`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Vantagem`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Por que é inimitável`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Método ADS`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`50 anos de prática proprietária dos fundadores codificada em IA`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Base USI`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`3.000 alunos já formados na metodologia`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`3`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Marca Barakat + Bonanza`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`30+ anos cada, autoridade nacional consolidada`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`4`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Dados de causa raiz`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Compostam a cada consulta — fosso cresce com uso`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`5`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Network Effect`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Comunidade fechada + marketplace multidisciplinar`}</td>
</tr>
</tbody></table></div>
<PullQuote>{`“Quando você combina um método proprietário, distribuição quente, autoridade de marca pessoal, dados que se acumulam e efeito de rede — você não tem uma empresa. Você tem um fosso econômico.”`}</PullQuote>
</section>

<section id="posicionamento">
<SectionHeader chapter={`Capítulo 2`} title={`2. Capítulo 4 — Commodity Problem (Problema da Commoditização)`} />
<PullQuote author={`Alex Hormozi`}>{`“Você não tem problema de leads. Você não tem problema de vendas. Você tem problema de commoditização.”`}</PullQuote>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`A saída (Cap 4): sair da categoria competida e criar uma categoria de um só (category of one). Mercados competitivos exigem ofertas melhores. Mercados de monopólio só exigem uma oferta.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Estudo dos 8 Concorrentes — 3 Zonas do Mercado`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Zona`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Concorrente`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Preço mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Entregáveis`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Desvantagem vs Auton`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1 - Commodity`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`iClinic`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 119-159`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Prontuário + agenda + teleconsulta + gestão financeira`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sem IA clínica. Sem método proprietário. Sem rede. Zero foco em saúde integrativa.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1 - Commodity`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`HiDoctor`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 85-195`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`EHR + agenda + IA básica de transcrição`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA só transcreve. Não diagnostica. Não foca em causa raiz nem integrativa.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1 - Commodity`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Amplimed`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`A partir R$ 99`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Prontuário + telemedicina + gestão`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Foco em telemedicina e gestão. IA superficial. Sem rede multidisciplinar.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1 - Commodity`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Naomed`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`A partir R$ 99`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Documentação clínica com IA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Gera notas clínicas auto. Não raciocina. Não tem método.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2 - Premium genérica`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`AmigoTech`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não público (~R$ 300-500)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`EHR + Amigo Intelligence + transcrição + contabilidade. 65 mil profissionais.`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA genérica não treinada em Método ADS. Sem rede. Sem foco integrativo.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2 - Premium genérica`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Support Health`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não público`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ERP médico + prontuário + estoque + teleconsulta + IA secundária`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`É ERP (gestão operacional). IA é feature complementar.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2 - Premium genérica`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`VOA Health (EUA)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`~US$ 60 = R$ 300`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Transcrição IA em tempo real`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Só transcreve. Produto americano sem adaptação ao BR.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Horizontal`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ChatGPT Plus`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`US$ 20 = R$ 100`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA conversacional genérica`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não é médico. Não conhece Método ADS. Sem comunidade, sem marketplace.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "rgba(30,58,95,0.06)" }}>
<td className="px-4 py-3 align-top" style={{ color: C.primary, fontWeight: 600 }}>{`3 - Categoria única`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.primary, fontWeight: 400 }}>{`AUTON`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 497-2.000+`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA de causa raiz (ADS) + comunidade fechada + marketplace + chat contextual + modelo próprio`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`SEM CONCORRENTE DIRETO. Compound Moat de 5 vantagens. Impossível replicar sem os fundadores.`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Teste de Commodity — Score 0/3 (não é commodity)`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Pergunta Hormozi`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Concorrentes Zona 1-2`}</th>
<th className="text-left px-4 py-3 font-semibold">{`AUTON`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cliente escolhe por preço?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sim`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não — por especialização`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Concorrentes fazem o mesmo com roupa diferente?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sim`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não — único com método + rede`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Alguém replica em 12 meses?`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sim`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Impossível sem os fundadores`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Posicionamento Final Travado`}</h3>
<PullQuote>{`“A 1ª IA de causa raiz, agora em rede.
Diagnóstico inteligente.
Discussão entre colegas.
Rede de apoio multidisciplinar.
Auton: a plataforma sistêmica da saúde integrativa.”`}</PullQuote>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Por que essa frase ganha`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Preserva a marca já construída — expandindo “1ª IA para causa raiz” com “agora em rede”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Cobre as 3 features novas: chat contextualizado → “diagnóstico inteligente”; comunidade → “discussão entre colegas”; marketplace → “rede de apoio multidisciplinar”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Ancora na dor-mãe (“não consigo ver sozinha” encontra resposta em “agora em rede”).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Cria categoria de um só — “plataforma sistêmica da saúde integrativa” é território inexplorado.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Funciona em qualquer canal (headline, pitch, live, WhatsApp, bio).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Formas banidas de descrever a Auton`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Software de IA para profissionais de saúde (genérico, commodity)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Prontuário eletrônico inteligente (categoria saturada)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`ChatGPT para médicos (sub-valoriza)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Plataforma de gestão clínica (não captura causa raiz nem rede)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Ferramenta de IA clínica (apaga o ecossistema)`}</p>
</section>

<section id="pricing">
<SectionHeader chapter={`Capítulo 3`} title={`3. Capítulo 5 — Virtuous Cycle of Price (Ciclo Virtuoso do Preço)`} />
<PullQuote author={`Alex Hormozi`}>{`“Cobre o que vale, não o que você se sente confortável em cobrar.”`}</PullQuote>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Os 7 Princípios de Pricing Aplicados`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Cobre pelo valor entregue, não pelo custo de entregar.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Tier do meio (Pro) custa 1,5× o Starter — torna o Pro o no-brainer.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Enterprise ancora por cima — custa 3,34× o Pro (dentro da regra 3-5×).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Starter existe para ancorar, não para ser o mais vendido.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Desconto anual uniforme de 20% (dentro da faixa 16-25%).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Marketplace é o motor de upgrade — só aparece no Pro e no Enterprise.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Preço alto eleva valor percebido e cria ciclo virtuoso (engajamento → resultado → caso → preço maior).`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Pricing Oficial da Auton`}</h3>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Fase 1 — Validação (6 meses, 200 vagas limitadas)`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Plano`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Anual`}</th>
<th className="text-left px-4 py-3 font-semibold">{`O que entrega`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Marketplace`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TURMA FUNDADORA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 497`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 397/mês (R$ 4.764/ano à vista)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Acesso completo durante a validação + 3 features novas (comunidade, chat IA, marketplace)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Ativo durante a validação`}</td>
</tr>
</tbody></table></div>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Fase 2 — Escala (daqui 6 meses)`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Plano`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Anual (20% desc)`}</th>
<th className="text-left px-4 py-3 font-semibold">{`O que entrega`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Marketplace`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`STARTER`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 797/mês (R$ 9.564/ano)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Funcionalidades básicas + comunidade`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`SEM marketplace (motor de upgrade)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRO ⭐ (HERO)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.497`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.197/mês (R$ 14.364/ano)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Starter + chat IA contextual (modelo próprio + frontier) + marketplace ativo`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Auton fica com 15% das transações`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`ENTERPRISE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`A partir de R$ 4.997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`A partir de R$ 3.997/mês (R$ 47.964/ano)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Pro + múltiplos usuários + diagnóstico de implantação + onboarding dedicado + SLA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Ativo, condições customizadas`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Análise de Gaps (lente Hormozi)`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Transição`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Gap`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Status`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Starter → Pro (mensal)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`1,5× (+50%)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Aceitável — marketplace fecha a decisão`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Pro → Enterprise (mensal)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`3,34×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Ideal (regra Hormozi: 3-5×)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Desconto anual uniforme`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`20%`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Ideal (regra Hormozi: 16-25%)`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Simulação de Receita — 1.000 clientes (mix 20/70/10)`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Plano`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Clientes`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Ticket mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`MRR mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`ARR anual`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Starter`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`200`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 199.400`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 2.392.800`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Pro (HERO)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`700`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.497`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.257.900 (assinatura + R$ 210k marketplace)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 15.094.800`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Enterprise`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`100`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 4.997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 499.700`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 5.996.400`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TOTAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`1.000`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ARPU R$ 1.957`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.957.000`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 23.484.000`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Regras de Uso e Comunicação por Plano`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Starter`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Posicionar como “entrada” e “teste do ecossistema”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Enfatizar: “suas básicas + comunidade fechada”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Não mencionar marketplace no material. Cliente que perguntar → direcionar pro Pro.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Pro (foco de 70% das vendas)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`70% do pitch, landing e lives devem girar em torno do Pro.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Argumento principal: “o marketplace paga parte da sua assinatura”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Mostrar a matemática: R$ 1.497 de assinatura, com 3-10 encaminhamentos/mês gera mais do que paga.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Enterprise`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Comunicar como “fale com nosso time”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Piso publicado: “a partir de R$ 4.997/mês”.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Onboarding dedicado é diferencial tangível.`}</p>
</section>

<section id="valor">
<SectionHeader chapter={`Capítulo 4`} title={`4. Capítulo 6 — Equação de Valor (Value Equation)`} />
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Valor = (Dream Outcome × Probabilidade Percebida) / (Tempo × Esforço).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Para aumentar o valor percebido só existem 4 alavancas: aumentar o sonho, aumentar a prova, diminuir o tempo, diminuir o esforço. Toda feature, todo bônus, toda garantia tem que atuar em pelo menos uma dessas 4.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Aplicação Auton — 4 Drivers Quantificados`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Ganho do cliente`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Valor mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Cálculo`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Natureza`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1. Tempo economizado`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 8.750`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`50% de economia sobre 35h/mês em documentação + análise + protocolo = 17,5h × R$ 500/hora`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Oportunidade (tempo vira consultas novas, estudo, descanso)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2. Marketplace (renda nova)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 2.720`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`8 encaminhamentos/mês × R$ 400 × 85% pro profissional (Auton fica com 15%)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Receita direta nova (não existiria sem a plataforma)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`3. Retenção de pacientes`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.000`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Qualidade clínica maior = adesão maior. Estimativa: +2-3 consultas retidas/mês × R$ 400`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Receita recorrente preservada (lifetime value maior)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`4. Autoridade e cases`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.000`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Comunidade + Método ADS + cases documentados aumentam reputação e indicações`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Pacientes novos por indicação espontânea`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`DREAM OUTCOME TOTAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 13.470`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Soma dos 4 ganhos`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Valor bruto antes da Likelihood`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`VALOR PERCEBIDO (85%)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 11.450`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 13.470 × 0,85`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`O que o cliente efetivamente acredita que vai receber`}</td>
</tr>
</tbody></table></div>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Likelihood = 85% vem da soma de 4 drivers: Barakat + Bonanza endossando (+25%), 60 betas com 80% de redução de tempo (+20%), demo ao vivo em caso real (+25%), garantia forte (+15%).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Time Delay = 1 (primeira consulta já entrega valor). Effort = 1 (1 hora de onboarding, sem migração obrigatória). Denominadores mínimos.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`ROI por Plano`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Plano`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Preço mensal`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Valor percebido`}</th>
<th className="text-left px-4 py-3 font-semibold">{`ROI`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Observação`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Starter mensal`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 5.500 (sem marketplace)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`5,5×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Motor de upgrade pro Pro`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Starter anual`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 797`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 5.500`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`6,9×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Mesmo valor com 20% desconto`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRO MENSAL ⭐ (HERO)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.497`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 11.450`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`7,65×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Marketplace + tudo do Starter + chat IA`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRO ANUAL (melhor ROI)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 1.197`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 11.450`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`9,56×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Melhor relação valor-preço da escada`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Enterprise mensal`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`A partir R$ 4.997`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`R$ 33.000+ (multi-usuários)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`6,6×`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Valor escala com nº de profissionais`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Argumento de Venda (Copy-Ready)`}</h3>
<PullQuote>{`“Você paga R$ 1.497/mês pelo Pro.
Recebe R$ 11.450/mês em valor.
ROI de 7,6× todo mês. No anual, 9,5×.”`}</PullQuote>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`A quebra que convence o cético`}</p>
<PullQuote>{`“Vou te mostrar os R$ 11.450 de onde vêm:`}</PullQuote>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`R$ 8.750/mês — 50% do seu tempo recuperado em documentação e análise (17,5h × R$ 500/h).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`R$ 2.720/mês — 8 encaminhamentos/mês na rede multidisciplinar × 85% de R$ 400.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`R$ 1.000/mês — qualidade clínica maior retém pacientes.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`R$ 1.000/mês — autoridade + cases geram indicação espontânea.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Soma R$ 13.470 × 85% de confiança = R$ 11.450. Paga R$ 1.497. ROI 7,6×.”`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Por que o argumento é inatacável`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Não é opinião — é matemática. Cada número vem de premissa concreta (dados dos betas, média real do ICP, projeção operacional do marketplace, drivers somados de Likelihood).`}</p>
</section>

<section id="stack">
<SectionHeader chapter={`Capítulo 5`} title={`5. Capítulos 8 + 9 — Problem Stack & Solution Stack`} />
<PullQuote>{`“Your offer is literally the sum of all solutions to all problems.” — “Sua oferta é literalmente a soma de todas as soluções para todos os problemas.”`}</PullQuote>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Mapeamos 26 problemas do ICP em 3 fases da jornada (ANTES da compra, DURANTE o uso, APÓS o resultado). Pra cada problema, 1 solução específica e nomeada.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Os 3 Tipos de Problema`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Tipo`}</th>
<th className="text-left px-4 py-3 font-semibold">{`O que é`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Resolvido por`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TIPO 1 — Dores Inerentes (12 problemas)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Problemas que o cliente TEM hoje na vida profissional`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PRODUTO CORE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TIPO 2 — Objeções de Compra (11 problemas)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Fricções que aparecem SÓ no momento da decisão`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OFERTA (garantia, bônus, prova social, copy)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`TIPO 3 — Fricções Operacionais (3 problemas)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Bugs, lentidão, features em roadmap`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`TIME DE PRODUTO (removidas da oferta)`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Tabela Master — 26 Problemas × Soluções`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`#`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Problema`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Solução`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Tipo`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Status`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`E se eu pagar e não for o prometido? (trauma pós-ferramenta)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Garantia 7 dias dinheiro de volta`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE - Dealbreaker`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`2`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA não entende complexidade integrativa`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Demo ao vivo com caso real do cliente na venda`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`3`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não tenho tempo de aprender mais uma ferramenta`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Onboarding 60min no curso + call concierge na 1ª semana`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE - Dealbreaker`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`4`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Já uso outro sistema, não quero migrar`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Migração de dados gratuita em 48h`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`5`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Já tentei tudo e nada funcionou (ceticismo)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`3 depoimentos em vídeo + Diagnóstico 0 (avaliação gratuita)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PRECISA CRIAR (1-2 sem)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`6`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Marido/parceiro questiona o investimento`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PDF 1 página com cálculo de ROI (R$ 1.497 → R$ 11.450)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PRECISA CRIAR (3-5 dias)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`7`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sou recém-formada, ainda não preciso`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Plano Fundador com 1 aula/semana com professor específico`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PRECISA DESENVOLVER (3-4 sem)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`8`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Meu conselho (CFM/CFN/CFP) vai questionar uso de IA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Parecer jurídico pronto + biblioteca de compliance`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PRECISA DESENVOLVER (3-6 sem)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`9`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não tenho pacientes suficientes pra justificar`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Rede de apoio (marketplace) + comunidade de estudos`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`10`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Tenho poucos integrativos, maioria convênio`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Rede de apoio amplia base de pacientes integrativos`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`11`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Consulta vira tentativa e erro disfarçada de ciência`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Motor Método ADS estrutura em Análise → Diagnóstico → Solução`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`12`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Exames na referência não explicam sintomas reais`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Análise funcional multidimensional (exames + sintomas + história)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`13`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Protocolos genéricos falham em casos complexos`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Protocolo personalizado gerado por IA baseado no padrão individual`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`14`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não tenho tempo pra análise causal profunda`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA gera análise completa em 20 min pós-consulta (profissional só valida)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE - Dealbreaker`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`15`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sinto falta de apoio multidisciplinar, atendo sozinha`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Marketplace multidisciplinar + Comunidade fechada`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE (pronto, não lançado)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`16`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Bugs ocasionais`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resolvido via suporte (não entra na oferta)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`FRICÇÃO OPERACIONAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`REMOVIDO`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`17`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Lentidão pontual`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resolvido via suporte (não entra na oferta)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`FRICÇÃO OPERACIONAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`REMOVIDO`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`18`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Faltam features em roadmap`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resolvido via suporte (não entra na oferta)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`FRICÇÃO OPERACIONAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`REMOVIDO`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`19`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Paciente não adere ao protocolo em casa`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`App paciente web com checklist (plano treino + alimentar + terapêutico)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE - Dealbreaker`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`20`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não consigo acompanhar evolução longitudinal`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Dashboard de evolução do paciente (gráficos sintomas + exames)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`21`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não tenho como provar resultados pro paciente`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Relatório antes/depois com comparativo visual`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`22`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Não tenho casos pra mostrar (marketing profissional)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Dashboard de casos anonimizados + export PDF`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`23`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Paciente esquece as instruções do protocolo`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Push notifications + vídeos curtos por orientação`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`BACKLOG (depende de app mobile)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`24`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Paciente não entende instruções complexas`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Tradução técnica para linguagem cotidiana com ícones visuais`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`25`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Paciente abandona tratamento em 2-3 semanas`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Jornada automatizada de 21 dias + alertas de abandono`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`DOR INERENTE`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`BACKLOG (depende de automação)`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`26`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Caixa apertado — cliente cancela`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ROI via marketplace (ferramenta gera renda) + plano pausa 30 dias`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`OBJEÇÃO COMPRA`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`JÁ EXISTE - Dealbreaker`}</td>
</tr>
</tbody></table></div>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Descoberta Estratégica`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`74% da oferta Auton já existe como feature no produto. Só 4 itens precisam ser criados pré-lançamento:`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`#5 — 3 depoimentos em vídeo + Diagnóstico 0 (gravação + processo)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`#6 — PDF cálculo de ROI (1 página pronta)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`#7 — Plano Fundador com aula semanal (calendário + gravações)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`#8 — Parecer jurídico + biblioteca de compliance (advogado contratado)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Nenhum desses exige desenvolvimento de produto. Tudo é material estático ou produção de conteúdo.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Os 5 Dealbreakers — Todos com Solução Pronta`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`#`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Dealbreaker`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Solução`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Status`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`1`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Trauma pós-ferramenta`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Garantia 7 dias dinheiro de volta`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`✅ Já existe`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`3`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sem tempo de aprender`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Onboarding 60min + call concierge`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`✅ Já existe`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`14`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Sem tempo análise profunda`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`IA em 20 min pós-consulta`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`✅ Já existe`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`19`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Paciente não adere em casa`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`App paciente web com checklist`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`✅ Já existe`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`26`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Caixa apertado cancela`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`ROI via marketplace + pausa 30d`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`✅ Já existe`}</td>
</tr>
</tbody></table></div>
</section>

<section id="trim">
<SectionHeader chapter={`Capítulo 6`} title={`6. Capítulo 10 — Trim & Stack (Oferta Empacotada)`} />
<PullQuote>{`“Trim what doesn’t add value. Stack what amplifies value.” — “Corte o que não adiciona valor. Empilhe o que amplifica valor.”`}</PullQuote>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Os 4 Movimentos Executados`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`TRIM (cortar) — 0 soluções cortadas. Todas as 21 ativas têm valor.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`CORE vs BÔNUS — 10 soluções no Core, 11 viram bônus ou processo de venda.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`STACK em DELIVERY VEHICLES — 5 Vehicles principais + Arsenal de Vendas separado.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`ORDEM DE REVELAÇÃO — Vehicles 1-3 na landing; Vehicles 4-5 no pitch; Arsenal sob demanda.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Decisões Estratégicas Tomadas`}</h3>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Decisão 1 — Kit Confiança & Compliance vira Arsenal de Vendas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Garantia, depoimentos, PDF ROI e parecer jurídico não aparecem como bônus na landing. Funcionam melhor como “munição” do time de vendas, entregue quando o cliente faz uma objeção específica.`}</p>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Decisão 2 — Flex Comercial (Plano de Pausa) removido da oferta`}</p>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Decisão estratégica de apostar em ROI real via marketplace como mecanismo de retenção. Se a Auton entrega R$ 11.000+ de valor, cliente em “caixa apertado” não cancela porque a ferramenta paga sozinha. Risco: se aparecer churn por motivo financeiro depois do lançamento, revisitar.`}</p>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Decisão 3 — Backlog mobile separado da oferta principal`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Push notifications e jornada de 21 dias dependem do app mobile, que ainda não existe. Lançamos com app web (que já existe e atende o dealbreaker #19) e adicionamos mobile na Fase 2.`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Os Vehicles em Detalhe`}</h3>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Categoria`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Vehicle`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Componentes`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Argumento de venda`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRODUTO PRINCIPAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`🏛️ Plataforma ADS — Diagnóstico Inteligente`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Motor Método ADS + Análise multidimensional + Protocolo personalizado IA + Análise em 20 min + Tradução técnica → linguagem simples + Dashboard de casos com export PDF`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Transforme cada consulta em diagnóstico de causa raiz com método, em vez de tentativa e erro.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRODUTO PRINCIPAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`📱 App do Paciente — Adesão e Acompanhamento`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`App web com checklist (planos treino + alimentar + terapêutico) + Dashboard de evolução longitudinal + Relatório antes/depois com comparativo visual`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Seu paciente não some entre consultas — tem app, acompanha, vê evolução.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`PRODUTO PRINCIPAL`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`🤝 Rede Auton — Comunidade + Marketplace`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Comunidade fechada de casos clínicos + Marketplace multidisciplinar (Auton 15% / profissional 85%)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Você não está mais sozinha — discute com colegas e ganha indicando.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`EXTRAS QUE ACOMPANHAM`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`🚀 Onboarding Concierge`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Curso 60min na plataforma + Call concierge dedicada na 1ª semana + Migração de dados gratuita em 48h`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Você está usando produtivamente em 1 hora, sem migrar nada manualmente.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`EXTRAS QUE ACOMPANHAM`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`🎓 Plano Fundador`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`1 aula por semana com professor especialista (não necessariamente Barakat)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`“Você não compra software — entra em programa de evolução profissional contínua.”`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`ARSENAL DE VENDAS (sob demanda)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Garantia 7 dias`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Devolução total do dinheiro em 7 dias, sem perguntas`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resposta para cliente cético sobre risco — se não gostar, devolvemos.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`ARSENAL DE VENDAS (sob demanda)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`3 depoimentos em vídeo`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`3 betas satisfeitos gravando depoimento sobre uso real e resultado`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resposta para cliente cético sobre resultado — olha o que outros profissionais dizem.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`ARSENAL DE VENDAS (sob demanda)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`PDF cálculo de ROI`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Documento de 1 página com matemática R$ 1.497 → R$ 11.450 entregue`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resposta para marido/sócio que questiona investimento — faça a conta.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`ARSENAL DE VENDAS (sob demanda)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Parecer jurídico + compliance`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Parecer pronto pelos conselhos (CFM/CFN/CFP) + biblioteca de cases de uso conforme compliance`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Resposta para preocupação com conselho profissional — tudo em conformidade.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`BACKLOG (Fase 2 — mobile)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Push notifications + vídeos por orientação`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`App mobile do paciente com push notifications + vídeos curtos explicando cada orientação`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Aumenta drasticamente adesão do paciente — lançado na Fase 2.`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`BACKLOG (Fase 2 — mobile)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Jornada automatizada de 21 dias`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Fluxo automatizado de engajamento nos primeiros 21 dias do paciente + alertas de abandono pro profissional`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Reduz churn de paciente em 40-60% — lançado na Fase 2.`}</td>
</tr>
</tbody></table></div>
</section>

<section id="final">
<SectionHeader chapter={`Capítulo 7`} title={`7. A Oferta Auton Final — 1 página`} />
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Posicionamento`}</h3>
<PullQuote>{`“A 1ª IA de causa raiz, agora em rede.
Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.
Auton: a plataforma sistêmica da saúde integrativa.”`}</PullQuote>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Pricing`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Turma Fundadora (validação): R$ 397/mês anual ou R$ 497/mês mensal — 200 vagas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Starter: R$ 997 mensal / R$ 797 anual`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Pro (hero): R$ 1.497 mensal / R$ 1.197 anual`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Enterprise: a partir de R$ 4.997 mensal`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Valor Entregue`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Dream Outcome: R$ 13.470/mês`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Likelihood (com nossas provas): 85%`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Valor percebido pelo cliente: R$ 11.450/mês`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`ROI no Pro: 7,6× mensal / 9,5× anual`}</p>
<h3 className="text-xl font-bold mt-8 mb-4" style={{ color: C.text }}>{`Oferta Empacotada`}</h3>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Produto Principal (3 Vehicles na landing)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`🏛️ Plataforma ADS — Diagnóstico Inteligente`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Motor Método ADS + Análise multidimensional + Protocolo personalizado por IA + Análise em 20 min pós-consulta + Tradução técnica → linguagem simples + Dashboard de casos com export.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`📱 App do Paciente — Adesão e Acompanhamento`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`App web com checklist (planos de treino + alimentar + terapêutico) + Dashboard de evolução longitudinal + Relatório antes/depois com comparativo visual.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`🤝 Rede Auton — Comunidade + Marketplace`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Comunidade fechada de casos clínicos + Marketplace multidisciplinar (15% comissão para Auton, 85% para o profissional).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Extras que acompanham (2 Vehicles revelados no pitch)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`🚀 Onboarding Concierge`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Curso 60min na plataforma + Call concierge dedicada na 1ª semana + Migração de dados gratuita em 48h.`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`🎓 Plano Fundador`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`1 aula por semana com professor especialista (não necessariamente Barakat).`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Arsenal de Vendas (sob demanda, não na landing)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Cliente cético sobre risco → PDF da garantia 7 dias dinheiro de volta`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Cliente cético sobre resultado → 3 depoimentos em vídeo`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Marido/sócio questiona investimento → PDF cálculo de ROI`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Conselho profissional preocupa → parecer jurídico + biblioteca compliance`}</p>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Backlog pós-lançamento (Fase 2 — depende de app mobile)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Push notifications + vídeos curtos por orientação para o paciente`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Jornada automatizada de 21 dias do paciente`}</p>
</section>

<section id="proximos">
<SectionHeader chapter={`Capítulo 8`} title={`8. Próximos Passos — Capítulos 11 a 16`} />
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`A oferta Auton v1.0 está travada. Os Capítulos 11-16 da Seção IV de “$100M Offers” vão turbinar essa oferta.`}</p>
<div className="overflow-x-auto mb-6">
<table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
<thead>
<tr style={{ background: C.primary, color: "#FFFFFF" }}>
<th className="text-left px-4 py-3 font-semibold">{`Capítulo`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Tema`}</th>
<th className="text-left px-4 py-3 font-semibold">{`Aplicação prevista`}</th>
</tr></thead><tbody>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 11`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Enhancing the Offer`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Como turbinar a oferta v1.0 travada`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 12`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Scarcity (Escassez)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Limite de 200 vagas no Plano Fundador`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 13`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Urgency (Urgência)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Deadline real do lançamento março/2026`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 14`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Bonuses (Bônus)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Quais dos 21 ingredientes viram bônus nomeados?`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 15`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Guarantees (Garantias)`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Garantia anti-hipotética + garantia de ROI do marketplace`}</td>
</tr>
<tr style={{ borderTop: `1px solid ${C.border}`, background: "transparent" }}>
<td className="px-4 py-3 align-top" style={{ color: C.text, fontWeight: 600 }}>{`Cap 16`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Naming / MAGIC`}</td>
<td className="px-4 py-3 align-top" style={{ color: C.text2, fontWeight: 400 }}>{`Nome oficial de cada Vehicle e da oferta toda`}</td>
</tr>
</tbody></table></div>
<p className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{`Pendências críticas mapeadas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Refazer P&L com pricing novo (R$ 997 / 1.497 / 4.997) e premissas realistas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Atualizar landing autonhealth.com.br com “agora em rede” + pricing`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Reescrever Pitch Deck em 8 slides com tração real`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Reescrever Apresentação comercial em 8-10 slides focados em transformação`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Atualizar Lean Canvas com pricing oficial e oferta v1.0`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Lançar publicamente Marketplace + Comunidade (prontos, não lançados)`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`4 items a criar pré-lançamento`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`PDF cálculo de ROI (1 página, R$ 1.497 → R$ 11.450) — 3-5 dias`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`3 depoimentos em vídeo + processo Diagnóstico 0 — 1-2 semanas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Plano Fundador com aula semanal (professor, calendário, formato) — 3-4 semanas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Parecer jurídico + biblioteca compliance (CFM/CFN/CFP) — 3-6 semanas`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Regra pós-lançamento a definir`}</p>
<p className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{`Regra de migração dos Fundadores (Turma Fundadora → Starter/Pro/Enterprise) — antes do lançamento da escala`}</p>
</section>
        </main>
      </div>

      <footer className="border-t py-8 px-6" style={{ background: C.card, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs" style={{ color: C.text3 }}>
          <p>Auton Health · Painel Interno da Oferta · Uso restrito a marketing, vendas e produto</p>
          <p>Conteúdo replicado integralmente de <em>Oferta Auton.docx</em></p>
        </div>
      </footer>
    </div>
  );
}
