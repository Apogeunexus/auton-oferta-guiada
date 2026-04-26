"use client";

/**
 * Painel Auton Health
 * Versão curada · dados validados nos 4 documentos oficiais
 *
 * Abril/2026 — Fonte da verdade: Canvas Auton Atualizado v1.0
 * Multidão Faminta: 33/40 (NÃO 40/40)
 *
 * Conteúdo cruzado entre:
 *   - Oferta Auton.docx (Hormozi aplicado)
 *   - Estudo_Mercado_Saude_Integrativa_BR_2026.docx
 *   - Auton_x_Mercado_Aplicacao_Estrategica.docx
 *   - Canvas_Auton_Atualizado.docx  ← fonte primária
 */

import { useEffect, useMemo, useState } from "react";
import {
  Package, BarChart3, Target, Layout,
  Users, Heart, MapPin, TrendingUp, Crosshair, AlertTriangle,
  CheckCircle2, XCircle, Quote, ChevronRight, Menu as MenuIcon, X,
  DollarSign, Calculator, ListChecks, Shield, Sparkles, Network,
  Smartphone, Building2, GraduationCap, Stethoscope, FileText, Zap,
  Database, MessageSquare, Award, Lightbulb,
  Search, Command, Hash, ArrowRight as ArrowRightIcon,
} from "lucide-react";

const C = {
  bg: "var(--bg-primary, #EBF3F6)",
  bg2: "var(--bg-secondary, #D6E8F0)",
  card: "var(--card-bg, #FFFFFF)",
  primary: "var(--primary-color, #1e3a5f)",
  primarySoft: "rgba(30,58,95,0.08)",
  primarySoft2: "rgba(30,58,95,0.04)",
  border: "var(--border-color, #C4D9E5)",
  text: "var(--text-primary, #1A1A1A)",
  text2: "var(--text-secondary, #5B5B5B)",
  text3: "var(--text-tertiary, #7A7A7A)",
  green: "#15803D",
  greenSoft: "rgba(101,246,177,0.18)",
  amber: "#92400E",
  amberSoft: "rgba(255,214,77,0.22)",
  blue: "#1E40AF",
  blueSoft: "rgba(79,162,255,0.18)",
  red: "#DC2626",
  redSoft: "rgba(239,68,68,0.10)",
};

// ============================================================
// COMPONENTES VISUAIS
// ============================================================

function H2({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 mt-12 first:mt-0">
      {eyebrow && (
        <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.2em", color: C.primary }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold leading-tight" style={{ color: C.text }}>
        {children}
      </h2>
    </div>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg md:text-xl font-bold mt-8 mb-3" style={{ color: C.text }}>
      {children}
    </h3>
  );
}

function P({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p className="text-base leading-relaxed mb-3" style={{ color: muted ? C.text3 : C.text2 }}>
      {children}
    </p>
  );
}

function Card({
  children,
  highlight,
  dark,
  padding = "p-6",
  className = "",
}: {
  children: React.ReactNode;
  highlight?: boolean;
  dark?: boolean;
  padding?: string;
  className?: string;
}) {
  const style: React.CSSProperties = dark
    ? { background: C.primary, color: "#FFFFFF", boxShadow: "var(--shadow-md)" }
    : highlight
      ? { background: C.primarySoft2, border: `1.5px solid ${C.primary}`, boxShadow: "var(--shadow-md)" }
      : { background: C.card, border: `1px solid ${C.border}`, boxShadow: "var(--shadow-sm)" };
  return (
    <div className={`rounded-[18px] ${padding} ${className}`} style={style}>
      {children}
    </div>
  );
}

function Stat({
  value,
  label,
  hint,
  size = "lg",
  light,
}: {
  value: string | number;
  label: string;
  hint?: string;
  size?: "md" | "lg" | "xl";
  light?: boolean;
}) {
  const sizes = { md: "text-2xl", lg: "text-4xl", xl: "text-5xl md:text-6xl" };
  return (
    <div>
      <p
        className={`font-bold ${sizes[size]}`}
        style={{ color: light ? "#FFFFFF" : C.primary, lineHeight: 1.05 }}
      >
        {value}
      </p>
      <p
        className="text-sm font-semibold mt-1"
        style={{ color: light ? "rgba(255,255,255,0.95)" : C.text }}
      >
        {label}
      </p>
      {hint && (
        <p
          className="text-xs mt-1"
          style={{ color: light ? "rgba(255,255,255,0.65)" : C.text3 }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}

function ScoreBar({ value, max, label, hint }: { value: number; max: number; label: string; hint?: string }) {
  const pct = (value / max) * 100;
  return (
    <div className="mb-3">
      <div className="flex items-baseline justify-between mb-1.5">
        <p className="text-sm font-semibold" style={{ color: C.text }}>{label}</p>
        <p className="text-sm font-mono" style={{ color: C.primary }}>
          <span className="text-lg font-bold">{value}</span>
          <span className="opacity-50">/{max}</span>
        </p>
      </div>
      <div className="h-2 rounded-full overflow-hidden" style={{ background: C.bg2 }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: C.primary }} />
      </div>
      {hint && <p className="text-xs mt-1.5" style={{ color: C.text3 }}>{hint}</p>}
    </div>
  );
}

function PullQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <div
      className="border-l-4 pl-6 py-4 my-6 italic rounded-r-[14px]"
      style={{ borderColor: C.primary, background: C.primarySoft2 }}
    >
      <Quote className="w-5 h-5 mb-2" style={{ color: C.primary }} />
      <p className="text-base leading-relaxed" style={{ color: C.text }}>
        {children}
      </p>
      {author && (
        <p
          className="text-xs not-italic mt-3 font-semibold uppercase"
          style={{ letterSpacing: "0.15em", color: C.text3 }}
        >
          {author}
        </p>
      )}
    </div>
  );
}

function Pill({ variant = "primary", children }: { variant?: "primary" | "success" | "warn" | "info" | "danger"; children: React.ReactNode }) {
  const map = {
    primary: { bg: C.primarySoft, color: C.primary },
    success: { bg: C.greenSoft, color: C.green },
    warn: { bg: C.amberSoft, color: C.amber },
    info: { bg: C.blueSoft, color: C.blue },
    danger: { bg: C.redSoft, color: C.red },
  };
  const s = map[variant];
  return (
    <span
      className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold"
      style={{ background: s.bg, color: s.color, letterSpacing: "0.04em" }}
    >
      {children}
    </span>
  );
}

function DataTable({ headers, rows, highlightLast }: { headers: string[]; rows: (string | React.ReactNode)[][]; highlightLast?: boolean }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
        <thead>
          <tr style={{ background: C.primary, color: "#FFFFFF" }}>
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-3 font-semibold text-xs uppercase" style={{ letterSpacing: "0.06em" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => {
            const isLast = highlightLast && ri === rows.length - 1;
            return (
              <tr
                key={ri}
                style={{
                  borderTop: `1px solid ${C.border}`,
                  background: isLast ? C.primarySoft2 : "transparent",
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-4 py-3 align-top"
                    style={{
                      color: ci === 0 ? (isLast ? C.primary : C.text) : C.text2,
                      fontWeight: ci === 0 ? 600 : "inherit",
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BulletList({ items, icon: Icon = CheckCircle2, color = C.primary }: { items: (string | React.ReactNode)[]; icon?: any; color?: string }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3" style={{ color: C.text2 }}>
          <Icon className="w-4 h-4 mt-1 shrink-0" style={{ color }} />
          <span className="text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// ============================================================
// CONTEÚDO POR ABA
// ============================================================

const TABS = [
  { id: "mercado", num: "1", label: "O Mercado Brasileiro", icon: BarChart3, tagline: "Estudo de mercado · abril 2026" },
  { id: "estrategia", num: "2", label: "A Auton no Mercado", icon: Target, tagline: "Aplicação às decisões" },
  { id: "canvas", num: "3", label: "Lean Canvas desmembrado", icon: Layout, tagline: "13 blocos validados" },
  { id: "oferta", num: "4", label: "Ofertas", icon: Package, tagline: "Hormozi aplicado · oferta empacotada" },
];

const SECTIONS_BY_TAB: Record<string, { id: string; label: string }[]> = {
  oferta: [
    { id: "oferta-mercado", label: "Multidão Faminta" },
    { id: "oferta-avatar", label: "Avatar (Dra. Camila)" },
    { id: "oferta-vantagem", label: "Vantagem Injusta" },
    { id: "oferta-puv", label: "PUV travada" },
    { id: "oferta-pilares", label: "3 Pilares + 2 Extras" },
    { id: "oferta-valor", label: "Equação de Valor" },
    { id: "oferta-pricing", label: "Pricing oficial" },
    { id: "oferta-arsenal", label: "Arsenal de Vendas" },
    { id: "oferta-garantia", label: "Garantia" },
  ],
  mercado: [
    { id: "mercado-tam", label: "TAM · SAM · SOM" },
    { id: "mercado-pessoas", label: "Dimensionamento (pessoas)" },
    { id: "mercado-gasto", label: "Gasto da categoria" },
    { id: "mercado-cresc", label: "Crescimento e tendências" },
    { id: "mercado-comp", label: "Cenário competitivo" },
    { id: "mercado-veredicto", label: "Veredicto" },
  ],
  estrategia: [
    { id: "est-1", label: "Por que integrativa" },
    { id: "est-2", label: "Por que 8 profissões" },
    { id: "est-3", label: "Por que 797/1.197/3.997" },
    { id: "est-4", label: "GTM começa na USI" },
    { id: "est-5", label: "Math meta R$ 14,4M" },
    { id: "est-6", label: "Unit economics" },
    { id: "est-7", label: "Síntese executiva" },
  ],
  canvas: [
    { id: "c1", label: "§1 Multidão Faminta" },
    { id: "c2", label: "§2 Avatar" },
    { id: "c3", label: "§3 Problema" },
    { id: "c4", label: "§4 Solução" },
    { id: "c5", label: "§5 Vantagem Injusta" },
    { id: "c6", label: "§6 PUV" },
    { id: "c7", label: "§7 Concorrentes" },
    { id: "c8", label: "§8 Equação de Valor" },
    { id: "c9", label: "§9 Preço" },
    { id: "c10", label: "§10 Argumento" },
    { id: "c11", label: "§11 Arsenal" },
    { id: "c12", label: "§12 Motores Aquisição" },
    { id: "c13", label: "§13 Economia" },
  ],
};

// ============================================================
// PAGE
// ============================================================

// Lista plana com TODAS as seções de TODOS os docs (busca global + atalhos)
const FLAT_SECTIONS: { tab: string; tabNum: string; tabLabel: string; id: string; label: string }[] = TABS.flatMap(t =>
  (SECTIONS_BY_TAB[t.id] || []).map(s => ({
    tab: t.id, tabNum: t.num, tabLabel: t.label, id: s.id, label: s.label,
  }))
);

const STORAGE_KEY = "auton-painel-visited-v1";

export default function PainelPage() {
  const [tab, setTab] = useState("mercado");
  const [active, setActive] = useState(SECTIONS_BY_TAB.mercado[0].id);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const sections = SECTIONS_BY_TAB[tab];

  // Carrega visitados do localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setVisited(new Set(JSON.parse(saved)));
    } catch {}
  }, []);

  // Salva visitados
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(visited)));
    } catch {}
  }, [visited]);

  // Marca atual como visitado
  useEffect(() => {
    if (active) {
      setVisited(prev => {
        if (prev.has(active)) return prev;
        const next = new Set(prev);
        next.add(active);
        return next;
      });
    }
  }, [active]);

  useEffect(() => {
    setActive(sections[0]?.id || "");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [tab]);

  useEffect(() => {
    function onScroll() {
      const offset = 160;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= offset) current = s.id;
      }
      if (current) setActive(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tab, sections]);

  // Atalhos de teclado
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      // Cmd+K · Ctrl+K · "/" — abre palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen(true);
        return;
      }
      if (!isTyping && e.key === "/") {
        e.preventDefault();
        setPaletteOpen(true);
        return;
      }
      // Esc fecha palette
      if (e.key === "Escape" && paletteOpen) {
        setPaletteOpen(false);
        setPaletteQuery("");
        return;
      }
      if (isTyping || paletteOpen) return;

      // 1-4 muda doc
      if (["1", "2", "3", "4"].includes(e.key)) {
        const t = TABS[parseInt(e.key) - 1];
        if (t) setTab(t.id);
        return;
      }
      // J/K próxima/anterior
      if (e.key.toLowerCase() === "j" || e.key.toLowerCase() === "k") {
        const idx = sections.findIndex(s => s.id === active);
        const dir = e.key.toLowerCase() === "j" ? 1 : -1;
        const next = sections[idx + dir];
        if (next) goToInTab(tab, next.id);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paletteOpen, active, sections, tab]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileNavOpen(false);
  }

  function goToInTab(targetTab: string, sectionId: string) {
    if (targetTab === tab) {
      goTo(sectionId);
    } else {
      setTab(targetTab);
      // Aguarda render do novo tab
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
    setMobileNavOpen(false);
    setPaletteOpen(false);
    setPaletteQuery("");
  }

  // Resultados da busca
  const paletteResults = useMemo(() => {
    const q = paletteQuery.trim().toLowerCase();
    if (!q) return FLAT_SECTIONS;
    return FLAT_SECTIONS.filter(s =>
      s.label.toLowerCase().includes(q) ||
      s.tabLabel.toLowerCase().includes(q)
    );
  }, [paletteQuery]);

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b h-14" style={{ background: "rgba(255,255,255,0.95)", borderColor: C.border }}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 shrink-0">
            <button className="md:hidden p-2 rounded-lg" onClick={() => setMobileNavOpen(v => !v)} style={{ color: C.text }}>
              {mobileNavOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <span className="font-bold text-lg" style={{ color: C.primary }}>Auton</span>
            <span className="hidden sm:inline text-xs font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.text3 }}>· Painel Interno</span>
          </div>

          {/* Busca global */}
          <button
            onClick={() => setPaletteOpen(true)}
            className="flex-1 max-w-md flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors"
            style={{ background: C.bg2, color: C.text3, border: `1px solid ${C.border}` }}
          >
            <Search className="w-4 h-4" />
            <span className="flex-1 text-left">Buscar em todos os documentos...</span>
            <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono" style={{ background: C.card, border: `1px solid ${C.border}`, color: C.text2 }}>
              ⌘K
            </kbd>
          </button>

          <Pill variant="success">v1.0 · validada</Pill>
        </div>
      </header>

      {/* LAYOUT: sidebar grande sempre aberta + conteúdo */}
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-20 grid md:grid-cols-[300px_1fr] gap-10">
        {/* SIDEBAR PERSISTENTE COM TODOS OS DOCS */}
        <aside className={`${mobileNavOpen ? "block" : "hidden"} md:block`}>
          <nav className="md:sticky md:top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2" style={{ scrollbarWidth: "thin" }}>
            <div className="space-y-1 mb-4">
              <p className="text-[10px] font-bold uppercase px-3" style={{ letterSpacing: "0.18em", color: C.text3 }}>
                Atalhos
              </p>
              <div className="px-3 py-2 text-[11px] flex flex-wrap gap-x-3 gap-y-1" style={{ color: C.text3 }}>
                <span><kbd className="px-1 rounded" style={{ background: C.bg2, border: `1px solid ${C.border}` }}>⌘K</kbd> busca</span>
                <span><kbd className="px-1 rounded" style={{ background: C.bg2, border: `1px solid ${C.border}` }}>1-4</kbd> doc</span>
                <span><kbd className="px-1 rounded" style={{ background: C.bg2, border: `1px solid ${C.border}` }}>J/K</kbd> seção</span>
              </div>
            </div>

            {TABS.map(t => {
              const isActiveTab = tab === t.id;
              const tabSections = SECTIONS_BY_TAB[t.id] || [];
              const Icon = t.icon;
              return (
                <div key={t.id} className={isActiveTab ? "mb-4" : "mb-1"}>
                  <button
                    onClick={() => setTab(t.id)}
                    className="w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all mb-1"
                    style={{
                      background: isActiveTab ? C.primary : "transparent",
                      color: isActiveTab ? "#FFFFFF" : C.text,
                    }}
                  >
                    <span
                      className="text-[11px] font-mono shrink-0 px-1.5 py-0.5 rounded"
                      style={{
                        background: isActiveTab ? "rgba(255,255,255,0.2)" : C.primarySoft,
                        color: isActiveTab ? "#FFFFFF" : C.primary,
                      }}
                    >
                      {t.num}
                    </span>
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-bold leading-tight flex-1">{t.label}</span>
                    {!isActiveTab && (
                      <span className="text-[10px] shrink-0" style={{ color: C.text3 }}>
                        {tabSections.length}
                      </span>
                    )}
                    <ChevronRight
                      className="w-4 h-4 shrink-0 transition-transform"
                      style={{
                        color: isActiveTab ? "rgba(255,255,255,0.85)" : C.text3,
                        transform: isActiveTab ? "rotate(90deg)" : "rotate(0)",
                      }}
                    />
                  </button>

                  {isActiveTab && (
                  <ul className="space-y-0.5 ml-3">
                    {tabSections.map(s => {
                      const isActiveSection = isActiveTab && active === s.id;
                      const isVisited = visited.has(s.id);
                      return (
                        <li key={s.id}>
                          <button
                            onClick={() => goToInTab(t.id, s.id)}
                            className="w-full text-left flex items-center gap-2 px-3 py-1.5 rounded-md transition-all"
                            style={{
                              background: isActiveSection ? C.primarySoft : "transparent",
                              color: isActiveSection ? C.primary : C.text2,
                              borderLeft: `2px solid ${isActiveSection ? C.primary : "transparent"}`,
                              paddingLeft: 10,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{
                                background: isActiveSection
                                  ? C.primary
                                  : isVisited
                                    ? C.text3
                                    : "transparent",
                                border: `1px solid ${isActiveSection ? C.primary : isVisited ? C.text3 : C.border}`,
                              }}
                            />
                            <span className="text-[13px] leading-tight flex-1" style={{ color: isActiveSection ? C.primary : isVisited ? C.text2 : C.text3 }}>
                              {s.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  )}
                </div>
              );
            })}

            <div className="mt-6 p-3 rounded-[12px] text-[11px] leading-relaxed" style={{ background: C.bg2, color: C.text2 }}>
              <p className="font-semibold mb-1" style={{ color: C.primary }}>Fonte da verdade</p>
              <p>Canvas Auton Atualizado v1.0 · abril/2026. Todos os números validados nas 6 sessões Hormozi e cruzados com o estudo de mercado BR 2026.</p>
            </div>
          </nav>
        </aside>

        {/* CONTEÚDO */}
        <main className="min-w-0">
          {tab === "oferta" && <OfertaTab />}
          {tab === "mercado" && <MercadoTab />}
          {tab === "estrategia" && <EstrategiaTab />}
          {tab === "canvas" && <CanvasTab />}
        </main>
      </div>

      {/* COMMAND PALETTE */}
      {paletteOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={() => { setPaletteOpen(false); setPaletteQuery(""); }}
        >
          <div
            className="w-full max-w-2xl rounded-[16px] overflow-hidden"
            style={{ background: C.card, boxShadow: "0 24px 80px rgba(0,0,0,0.25)" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: C.border }}>
              <Search className="w-5 h-5" style={{ color: C.text3 }} />
              <input
                autoFocus
                type="text"
                placeholder="Buscar seção em qualquer documento..."
                value={paletteQuery}
                onChange={e => setPaletteQuery(e.target.value)}
                className="flex-1 outline-none text-base"
                style={{ background: "transparent", color: C.text }}
              />
              <kbd className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: C.bg2, border: `1px solid ${C.border}`, color: C.text3 }}>
                Esc
              </kbd>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {paletteResults.length === 0 ? (
                <p className="text-center py-12 text-sm" style={{ color: C.text3 }}>Nenhum resultado para "{paletteQuery}"</p>
              ) : (
                paletteResults.map((r, i) => (
                  <button
                    key={`${r.tab}-${r.id}`}
                    onClick={() => goToInTab(r.tab, r.id)}
                    className="w-full text-left flex items-center gap-3 px-4 py-3 transition-colors hover:bg-opacity-5"
                    style={{
                      background: i === 0 && paletteQuery ? C.primarySoft2 : "transparent",
                      borderTop: i > 0 ? `1px solid ${C.border}` : "none",
                    }}
                  >
                    <span
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0"
                      style={{ background: C.primarySoft, color: C.primary }}
                    >
                      {r.tabNum}
                    </span>
                    <Hash className="w-4 h-4 shrink-0" style={{ color: C.text3 }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold" style={{ color: C.text }}>{r.label}</p>
                      <p className="text-xs" style={{ color: C.text3 }}>{r.tabLabel}</p>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 shrink-0" style={{ color: C.text3 }} />
                  </button>
                ))
              )}
            </div>
            <div className="px-4 py-2 border-t flex items-center justify-between text-[11px]" style={{ borderColor: C.border, background: C.bg2, color: C.text3 }}>
              <span>{paletteResults.length} de {FLAT_SECTIONS.length} seções</span>
              <span><kbd className="px-1 rounded" style={{ background: C.card, border: `1px solid ${C.border}` }}>↵</kbd> ir</span>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t py-6 px-6" style={{ background: C.card, borderColor: C.border }}>
        <div className="max-w-[1400px] mx-auto text-xs" style={{ color: C.text3 }}>
          <p>Auton Health · Painel Interno · Uso restrito · Atualização: abril/2026 · 4 documentos integrados</p>
        </div>
      </footer>
    </div>
  );
}

// ============================================================
// ABA 1 — OFERTA
// ============================================================

function OfertaTab() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.25em", color: C.primary }}>Hormozi aplicado</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-4" style={{ color: C.text }}>A Oferta Auton v1.0</h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: C.text2 }}>
          Resultado da aplicação dos 13 blocos do método Hormozi à realidade da Auton Health, cruzado com o estudo de mercado BR 2026 e o MVP validado em abril/2026.
        </p>
      </div>

      {/* MERCADO */}
      <section id="oferta-mercado">
        <H2 eyebrow="§1 · Multidão Faminta">O mercado vale o esforço?</H2>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          <Card highlight padding="p-8">
            <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: C.primary }}>
              Pontuação validada
            </p>
            <p className="text-7xl font-bold leading-none mb-2" style={{ color: C.primary }}>33<span className="text-3xl opacity-50">/40</span></p>
            <p className="text-sm font-semibold" style={{ color: C.text }}>Mercado excelente, não perfeito</p>
            <p className="text-sm mt-1" style={{ color: C.text2 }}>30 a 35 = vale ir com cuidado</p>
          </Card>
          <Card>
            <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: C.primary }}>Breakdown</p>
            <ScoreBar value={8} max={10} label="Dor Forte" hint="Crônica, não aguda" />
            <ScoreBar value={7} max={10} label="Poder de Compra" hint="63% paga 11-20% da renda" />
            <ScoreBar value={9} max={10} label="Fácil de Achar" hint="Base USI: canal único" />
            <ScoreBar value={9} max={10} label="Em Crescimento" hint="CAGR conselhos 6-10%" />
          </Card>
        </div>

        <H3>Evidências de cada nota</H3>
        <Card padding="p-6" className="mb-4">
          <p className="font-semibold mb-2" style={{ color: C.text }}>🩺 Dor Forte · 8/10</p>
          <BulletList items={[
            "89% dos profissionais integrativos: \"quero curar, sou forçado a tratar\"",
            "Frases frequentes: \"Estou exausta\" 89% · \"Me sinto uma fraude\" 68% · \"Virei vendedora de consultas\" 92%",
            "A dor existe e é descrita com clareza, mas convive há anos. Limita a nota ao topo do intervalo forte.",
          ]} />
        </Card>
        <Card padding="p-6" className="mb-4">
          <p className="font-semibold mb-2" style={{ color: C.text }}>💰 Poder de Compra · 7/10</p>
          <BulletList items={[
            "Médicos (14% do público): R$ 1.497 são 2 a 6% da renda",
            "Nutri, psico, fisio, enfermeira e biomédica (63% do público): Starter R$ 797 são 11 a 20% da renda",
            "Hoje já pagam R$ 1.250 a 3.050/mês em ferramentas soltas. Auton consolida — não adiciona custo.",
          ]} />
        </Card>
        <Card padding="p-6" className="mb-4">
          <p className="font-semibold mb-2" style={{ color: C.text }}>🎯 Fácil de Achar · 9/10</p>
          <BulletList items={[
            "Base USI reúne o público em canal único: 5.000 alunos ativos + 3.000 formados no Método ADS",
            <><strong>MVP validou:</strong> 100 vendas em 170 expostos (58% conversão) em 20 dias, sem cancelamento</>,
            "89% do público tem afinidade direta com o Dr. Barakat",
            "Fora da USI, atingir o público depende de mídia paga ainda não testada com dinheiro real",
          ]} />
        </Card>
        <Card padding="p-6" className="mb-6">
          <p className="font-semibold mb-2" style={{ color: C.text }}>📈 Em Crescimento · 9/10</p>
          <BulletList items={[
            "Conselhos integrativos: CFBM 10,1% · COFFITO 6,4% · CFN 6,3% · CFP 6,1%",
            "Pós-graduação em nutrição funcional triplicou em 5 anos (40 → 120-150 cursos)",
            "Google Trends: +150% a +200% na busca por \"médico funcional\"",
            "IA clínica em hospitais: 8% (2020) → 35-40% (2025)",
          ]} />
        </Card>

        <Card dark padding="p-6">
          <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Riscos monitorados</p>
          <BulletList items={[
            <span style={{ color: "rgba(255,255,255,0.92)" }}><strong>Dependência da USI</strong> — canal principal da Fase 1 depende da continuidade da parceria</span>,
            <span style={{ color: "rgba(255,255,255,0.92)" }}><strong>Cancelamento real desconhecido</strong> — 20 dias de MVP não validam retenção de 24 meses</span>,
            <span style={{ color: "rgba(255,255,255,0.92)" }}><strong>Dependência do Dr. Barakat como rosto da marca</strong> — 89% do público tem afinidade direta com ele</span>,
          ]} icon={AlertTriangle} color="#FFD64D" />
        </Card>
      </section>

      {/* AVATAR */}
      <section id="oferta-avatar">
        <H2 eyebrow="§2 · Avatar / Cliente Ideal">Dra. Camila — 14 campos travados</H2>
        <P>O avatar travado entrega copy específica, preço sustentável, canal focado, objeções previstas e gatilhos claros. Cada campo precisa estar em frase afirmativa com dado concreto.</P>

        <Card padding="p-0" className="overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {[
                { k: "1. Nome fictício", v: "Dra. Camila" },
                { k: "2. Demografia", v: "Mulher, 38 anos (faixa 30-50), profissional de saúde em uma das 8 profissões USI, concentrada no Sudeste e Sul, renda líquida entre R$ 12 e 25 mil/mês." },
                { k: "3. Formação", v: "Aluna ativa da USI ou recém-formada (até 3 anos pós-graduação). Já conhece e, na maioria, já pratica o Método ADS." },
                { k: "4. Comportamento", v: "Atende sozinha, ~1 paciente/dia útil, consultas 90 min+. Documentação em casa à noite, sacrificando tempo pessoal." },
                { k: "5. Dor-Mãe", v: <strong>&ldquo;Sei que existe algo além dos sintomas, mas não consigo ver sozinha.&rdquo;</strong> },
                { k: "6. Gatilhos emocionais", v: <span><Pill variant="danger">&ldquo;Estou exausta&rdquo; 89%</Pill>{" "}<Pill variant="danger">&ldquo;Me sinto uma fraude&rdquo; 68%</Pill>{" "}<Pill variant="danger">&ldquo;Virei vendedora de consultas&rdquo; 92%</Pill></span> },
                { k: "7. Já tentou e falhou", v: "Secretária · Aumentar preço · Ferramentas genéricas de prontuário · Fazer sozinha (burnout) · Cursos e mentorias · ChatGPT genérico" },
                { k: "8. Objeção principal", v: <span><strong>&ldquo;E se eu pagar e não for o prometido?&rdquo;</strong> A raiz é o trauma com ferramentas antigas que prometeram transformação e entregaram funcionalidade.</span> },
                { k: "9. Sonho do Cliente (6 componentes)", v: "1) Tratar causa raiz, não sintoma · 2) Resultados clínicos consistentes · 3) Recuperar horas pessoais · 4) Reconectar com propósito · 5) Renda nova via marketplace · 6) Parar de atender sozinha" },
                { k: "10. Gatilho de compra (ordem)", v: "1) Endosso direto Dr. Barakat ou Bonanza · 2) Prova social de colega da mesma profissão · 3) Demonstração ao vivo em caso real · 4) Garantia forte que tira o risco" },
                { k: "11. Como quebrar a objeção", v: <span>Argumento operacional: <strong>&ldquo;o que você paga volta como receita multidisciplinar&rdquo;</strong>. Transforma a Auton de gasto em fonte de receita.</span> },
                { k: "12. Canal validado", v: <span>Principal: Instagram dos fundadores · Secundário: WhatsApp da USI · <Pill variant="success">Live com demo: 58% conv. no MVP</Pill></span> },
                { k: "13. Quem excluir", v: "Médicos convencionais sem interesse integrativo · Caçadores de promoção · Profissionais início de carreira sem volume · Alunos sem prática clínica" },
                { k: "14. Variações por profissão", v: <span>5 recortes profissionais somam <strong>84% do público ativo</strong>. Mesma dor raiz, muda renda/canal/objeção específica. Demais 3 (biomédica, dentista, enfermeira) entram por indicação.</span> },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.border}` }}>
                  <td className="px-5 py-4 align-top w-1/3 font-semibold" style={{ color: C.primary, background: C.primarySoft2 }}>
                    {row.k}
                  </td>
                  <td className="px-5 py-4 leading-relaxed" style={{ color: C.text }}>{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <H3>Evidências de que o avatar está certo</H3>
        <BulletList items={[
          <span><strong>MVP:</strong> 100 vendas em 170 expostos dentro da base USI (58% conv. em 20 dias). Todos os compradores encaixam no avatar.</span>,
          <span><strong>Dados Psicodemográficos:</strong> 89% afinidade Dr. Barakat · 92% &ldquo;virei vendedora&rdquo; · 68% &ldquo;me sinto fraude&rdquo;.</span>,
          <span><strong>Estudo de Mercado:</strong> 295 mil profissionais integrativos no Brasil · 133 mil em compra ativa.</span>,
          <span><strong>Conversão USI por profissão:</strong> as 8 profissões convertem acima de 0,9%.</span>,
        ]} />
      </section>

      {/* VANTAGEM INJUSTA */}
      <section id="oferta-vantagem">
        <H2 eyebrow="§5 · Vantagem Injusta">5 ativos que formam uma muralha</H2>
        <P>Cada ativo passa em 4 testes (não-transferível, anos pra refazer, prova existente, combinação que multiplica). Sozinhos são defensáveis; juntos, impossíveis de copiar em menos de uma década.</P>

        <div className="grid md:grid-cols-5 gap-3 mb-6">
          {[
            { n: 1, t: "Método ADS", d: "50 anos de prática clínica codificada", icon: Brain },
            { n: 2, t: "Base USI", d: "5k alunos ativos + 3k formados", icon: GraduationCap },
            { n: 3, t: "Marca Barakat + Bonanza", d: "Autoridade nacional, 89% afinidade", icon: Award },
            { n: 4, t: "Dados de causa raiz", d: "Compostam a cada consulta", icon: Database },
            { n: 5, t: "Efeito de rede", d: "Comunidade + marketplace", icon: Network },
          ].map((a) => {
            const Icon = a.icon as any;
            return (
              <Card key={a.n} className="text-center" padding="p-5">
                <Icon className="w-8 h-8 mx-auto mb-3" style={{ color: C.primary }} />
                <p className="text-3xl font-bold mb-1" style={{ color: C.primary, opacity: 0.4 }}>{a.n}</p>
                <p className="font-semibold text-sm mb-1" style={{ color: C.text }}>{a.t}</p>
                <p className="text-xs" style={{ color: C.text2 }}>{a.d}</p>
              </Card>
            );
          })}
        </div>

        <Card highlight padding="p-6">
          <p className="font-semibold mb-3" style={{ color: C.primary }}>Por que os 5 juntos &gt; soma das partes</p>
          <BulletList items={[
            "Método ADS sem Base USI vira livro didático sem distribuição",
            "Base USI sem Método ADS vira pós-graduação sem produto pra oferecer",
            "Marca dos fundadores sem Rede Auton vira autoridade sem ativo escalável",
            "Dados de causa raiz sem Método ADS viram dados sem significado clínico",
            "Efeito de rede sem os outros 4 vira app de mensagens sem razão pra ficar",
          ]} />
        </Card>
      </section>

      {/* PUV */}
      <section id="oferta-puv">
        <H2 eyebrow="§6 · Proposta Única de Valor">Frase-mãe travada</H2>

        <Card dark padding="p-8" className="mb-6">
          <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Frase oficial</p>
          <p className="text-2xl md:text-3xl font-bold leading-tight mb-4">A 1ª IA de causa raiz, agora em rede.</p>
          <p className="text-base leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.92)" }}>
            Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.
          </p>
          <p className="text-base font-semibold" style={{ color: "rgba(255,255,255,1)" }}>
            Auton: a plataforma sistêmica da saúde integrativa.
          </p>
        </Card>

        <H3>Versões por contexto</H3>
        <Card padding="p-5" className="mb-3">
          <Pill variant="info">Para o Investidor</Pill>
          <p className="mt-3 leading-relaxed" style={{ color: C.text2 }}>A Auton é o sistema operacional do ecossistema de saúde integrativa. A primeira plataforma que transforma 50 anos de metodologia clínica em infraestrutura escalável.</p>
        </Card>
        <Card padding="p-5" className="mb-3">
          <Pill variant="info">Para o Profissional</Pill>
          <p className="mt-3 leading-relaxed" style={{ color: C.text2 }}>A Auton é o ecossistema que a saúde integrativa sempre precisou. Uma plataforma que une todos os profissionais em torno de uma metodologia comum.</p>
        </Card>
        <Card padding="p-5" className="mb-6">
          <Pill variant="info">Para Marca</Pill>
          <p className="mt-3 leading-relaxed font-semibold" style={{ color: C.text }}>A saúde integrativa sempre soube que o paciente é único. Agora tem uma IA que pensa igual.</p>
        </Card>

        <H3>Formas PROIBIDAS de descrever a Auton</H3>
        <Card padding="p-6">
          <BulletList items={[
            <span><em>&ldquo;Software de IA para profissionais de saúde&rdquo;</em> — genérico, vira commodity</span>,
            <span><em>&ldquo;Prontuário eletrônico inteligente&rdquo;</em> — categoria saturada</span>,
            <span><em>&ldquo;ChatGPT para médicos&rdquo;</em> — diminui o produto e exclui não-médicos</span>,
            <span><em>&ldquo;Plataforma de gestão clínica&rdquo;</em> — não captura causa raiz nem rede</span>,
            <span><em>&ldquo;Ferramenta de IA clínica&rdquo;</em> — apaga o ecossistema</span>,
          ]} icon={XCircle} color={C.red} />
        </Card>
      </section>

      {/* PILARES */}
      <section id="oferta-pilares">
        <H2 eyebrow="§4 · Solução">3 Pilares + 2 Extras</H2>
        <P>Cada componente existe para resolver uma dor mapeada. 12 dores do Tipo 1 + 11 objeções do Tipo 2 = cobertura de 83% no Dia 1, 100% incluindo Fase 2.</P>

        {[
          { emoji: "🏛️", n: "Pilar 1", t: "Plataforma ADS — Diagnóstico Inteligente",
            comp: ["Motor ADS estruturado em 3 etapas (Análise → Diagnóstico → Solução)", "Análise funcional cruzando exames, sintomas e história", "Análise automatizada de exames com leitura de marcadores", "Protocolo personalizado pela IA", "Análise completa em 20 minutos pós-consulta", "Tradução técnica → linguagem simples", "Teleconsulta integrada (vídeo e áudio)", "Gestão de agenda e calendário", "Dashboard geral do consultório", "Painel de evolução do paciente", "Painel de casos anônimos com export PDF"],
            argumento: "Sua consulta inteira em um lugar só. Da agenda à teleconsulta, da análise de exames ao protocolo personalizado, com método no lugar de tentativa e erro.",
            status: "success" as const, statusLabel: "funcional, em produção" },
          { emoji: "📱", n: "Pilar 2", t: "App do Paciente — Adesão e Acompanhamento",
            comp: ["Checklist diário (treino + alimentar + terapêutico)", "Relatório antes e depois com comparativo visual", "Notificações e vídeos por orientação (Fase 2)", "Jornada automática de 21 dias com alerta de abandono (Fase 2)"],
            argumento: "Seu paciente não some entre consultas. Tem app, acompanha e vê evolução.",
            status: "warn" as const, statusLabel: "web funcional, mobile na fila" },
          { emoji: "🤝", n: "Pilar 3", t: "Rede Auton — Comunidade + Marketplace",
            comp: ["Comunidade fechada de casos clínicos com moderação", "Marketplace multidisciplinar (Auton 15% / profissional 85%)", "Sistema de indicação entre especialidades"],
            argumento: "Você não está mais sozinha. Discute casos com colegas que respeita e ganha renda indicando.",
            status: "warn" as const, statusLabel: "pronto, ainda não lançado publicamente" },
        ].map((p, i) => (
          <Card key={i} padding="p-6" className="mb-4">
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl shrink-0">{p.emoji}</span>
              <div className="flex-1 min-w-0">
                <Pill>{p.n}</Pill>
                <h4 className="text-xl font-bold mt-2 mb-1" style={{ color: C.text }}>{p.t}</h4>
              </div>
              <Pill variant={p.status}>{p.statusLabel}</Pill>
            </div>
            <p className="text-sm font-semibold mb-2" style={{ color: C.text3, letterSpacing: "0.05em" }}>COMPONENTES</p>
            <BulletList items={p.comp} />
            <div className="mt-4 pt-4 border-t" style={{ borderColor: C.border }}>
              <p className="text-sm font-semibold mb-1" style={{ color: C.text3, letterSpacing: "0.05em" }}>ARGUMENTO DE VENDA</p>
              <p className="italic" style={{ color: C.primary }}>&ldquo;{p.argumento}&rdquo;</p>
            </div>
          </Card>
        ))}

        <H3>Extras que acompanham</H3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card highlight padding="p-6">
            <p className="text-3xl mb-2">🚀</p>
            <p className="font-bold text-lg mb-2" style={{ color: C.text }}>Onboarding Concierge</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: C.text2 }}>Treinamento de 60 min + atendimento dedicado na 1ª semana + migração de dados grátis em 48h.</p>
            <p className="italic text-sm" style={{ color: C.primary }}>&ldquo;Você está usando produtivamente em 1 hora.&rdquo;</p>
          </Card>
          <Card highlight padding="p-6">
            <p className="text-3xl mb-2">🎓</p>
            <p className="font-bold text-lg mb-2" style={{ color: C.text }}>Plano Fundador</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: C.text2 }}>1 aula/semana com professor especialista + mentoria em grupo para recém-formadas.</p>
            <p className="italic text-sm" style={{ color: C.primary }}>&ldquo;Você não compra software, entra em programa de evolução contínua.&rdquo;</p>
          </Card>
        </div>
      </section>

      {/* EQUAÇÃO DE VALOR */}
      <section id="oferta-valor">
        <H2 eyebrow="§8 · Equação de Valor">Por que o cliente paga</H2>

        <PullQuote author="Hormozi · paráfrase">
          Valor = (Sonho × Probabilidade Percebida) ÷ (Tempo × Esforço). Toda feature, todo bônus, toda garantia tem que mexer em uma das 4 alavancas.
        </PullQuote>

        <H3>4 drivers do Sonho do Cliente</H3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { v: "R$ 8.750", l: "Tempo recuperado", h: "17,5h/mês × R$ 500/h", icon: TrendingUp },
            { v: "R$ 2.720", l: "Renda nova (rede)", h: "8 encam/mês × R$ 400 × 85%", icon: Network },
            { v: "R$ 1.000", l: "Retenção pacientes", h: "+2-3 consultas retidas/mês", icon: Heart },
            { v: "R$ 1.000", l: "Autoridade", h: "Indicações espontâneas", icon: Sparkles },
          ].map((d, i) => {
            const Icon = d.icon as any;
            return (
              <Card key={i} padding="p-5">
                <Icon className="w-6 h-6 mb-3" style={{ color: C.primary }} />
                <Stat value={d.v} label={d.l} hint={d.h} size="md" />
              </Card>
            );
          })}
        </div>

        <Card dark padding="p-8" className="mb-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>Sonho total</p>
              <p className="text-3xl font-bold">R$ 13.470</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>por mês</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>× Probabilidade</p>
              <p className="text-3xl font-bold">85%</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>provas reduzem risco</p>
            </div>
            <div className="text-center">
              <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}>= Valor percebido</p>
              <p className="text-3xl font-bold">R$ 11.450</p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>por mês</p>
            </div>
          </div>
        </Card>

        <H3>Retorno por plano</H3>
        <DataTable
          headers={["Plano", "Preço", "Valor entregue", "ROI mensal"]}
          rows={[
            ["Starter (mensal)", "R$ 997", "R$ 11.450", <Pill variant="success">11,5×</Pill>],
            ["Starter (anual)", "R$ 797", "R$ 11.450", <Pill variant="success">14,4×</Pill>],
            ["Pro (mensal)", "R$ 1.497", "R$ 11.450", <Pill variant="success">7,6×</Pill>],
            [<strong>Pro (anual) ⭐</strong>, "R$ 1.197", "R$ 11.450", <Pill variant="success">9,5×</Pill>],
            ["Enterprise (mensal)", "R$ 4.997+", "R$ 11.450+ (multi)", <Pill variant="success">≥6,6×</Pill>],
          ]}
        />
      </section>

      {/* PRICING */}
      <section id="oferta-pricing">
        <H2 eyebrow="§9 · Preço">Pricing oficial · Fase 2 (escala)</H2>
        <P>Escada Hormozi com Pro como hero (70% das vendas esperadas). Anual com 20% de desconto, sempre exibido como primário. Múltiplos entre tiers respeitam a regra Hormozi (3-5×).</P>

        <Card highlight padding="p-6" className="mb-6">
          <div className="flex items-baseline gap-4 mb-3 flex-wrap">
            <Pill variant="warn">Fase 1 · Validação · 200 vagas</Pill>
            <span className="text-sm font-semibold" style={{ color: C.text2 }}>Turma Fundadora</span>
          </div>
          <p className="text-3xl font-bold mb-1" style={{ color: C.primary }}>
            R$ 397/mês <span className="text-base font-normal" style={{ color: C.text2 }}>no anual (R$ 4.764)</span>
          </p>
          <p className="text-sm" style={{ color: C.text2 }}>ou R$ 497/mês no plano mensal · acesso completo · regra de migração para Fase 2 a definir</p>
        </Card>

        <H3>Fase 2 · Preço de escala (mês 7+)</H3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { n: "Starter", anual: "R$ 797", mensal: "R$ 997", del: "Plataforma ADS + Comunidade", market: false },
            { n: "Pro ⭐", anual: "R$ 1.197", mensal: "R$ 1.497", del: "Starter + Chat IA + Marketplace", market: true, hero: true },
            { n: "Enterprise", anual: "R$ 3.997+", mensal: "R$ 4.997+", del: "Pro + Multi-usuários + SLA + Onboarding dedicado", market: true },
          ].map((p) => (
            <Card key={p.n} dark={p.hero} highlight={!p.hero} padding="p-6">
              {p.hero && (
                <Pill variant="primary">
                  <span style={{ background: "#FFFFFF", color: C.primary, padding: "2px 8px", borderRadius: 999 }}>⭐ HERO · 70% das vendas</span>
                </Pill>
              )}
              <p className="text-xs font-bold uppercase mt-3 mb-2" style={{ letterSpacing: "0.18em", color: p.hero ? "rgba(255,255,255,0.85)" : C.text3 }}>{p.n}</p>
              <p className={`text-3xl font-bold mb-1`} style={{ color: p.hero ? "#FFFFFF" : C.primary }}>{p.anual}<span className="text-sm font-normal opacity-80">/mês anual</span></p>
              <p className="text-sm mb-4" style={{ color: p.hero ? "rgba(255,255,255,0.7)" : C.text2 }}>ou {p.mensal}/mês no mensal</p>
              <p className="text-sm leading-relaxed" style={{ color: p.hero ? "rgba(255,255,255,0.92)" : C.text2 }}>{p.del}</p>
              {p.market && <p className="text-xs mt-3" style={{ color: p.hero ? "rgba(255,255,255,0.75)" : C.text3 }}>✓ Marketplace ativo</p>}
            </Card>
          ))}
        </div>

        <H3>Análise de gaps</H3>
        <DataTable
          headers={["Transição", "Múltiplo", "Status"]}
          rows={[
            ["Starter → Pro", "1,5×", <Pill variant="success">aceitável (marketplace fecha decisão)</Pill>],
            ["Pro → Enterprise", "3,34×", <Pill variant="success">ideal (regra: 3-5×)</Pill>],
            ["Desconto anual uniforme", "20%", <Pill variant="success">ideal (regra: 16-25%)</Pill>],
          ]}
        />
      </section>

      {/* ARSENAL */}
      <section id="oferta-arsenal">
        <H2 eyebrow="§11 · Arsenal de Vendas">4 munições, sob demanda</H2>
        <P>Material que neutraliza objeções específicas. Não aparece na landing — o vendedor envia quando o cliente faz a objeção correspondente.</P>

        <DataTable
          headers={["Quando o cliente diz...", "→ Enviar"]}
          rows={[
            ["\"Caro · não tenho como justificar\"", <strong>PDF cálculo de ROI personalizado</strong>],
            ["\"Já tentei outras ferramentas\"", <strong>3 depoimentos em vídeo (cases reais)</strong>],
            ["\"Meu conselho profissional pode questionar\"", <strong>Parecer jurídico CFM/CFN/CFP + biblioteca compliance</strong>],
            ["\"Ainda tenho dúvida se serve pra mim\"", <strong>Diagnóstico 0 (avaliação gratuita pré-compra)</strong>],
          ]}
        />
      </section>

      {/* GARANTIA */}
      <section id="oferta-garantia">
        <H2 eyebrow="§Garantia">Risco zero · 7 dias incondicionais</H2>
        <Card highlight padding="p-8" className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4" style={{ color: C.primary }} />
          <p className="text-2xl md:text-3xl font-bold mb-3" style={{ color: C.text }}>Se em 7 dias não for o que mostramos, devolvemos 100%.</p>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: C.text2 }}>
            Sem perguntas, sem formulário, sem burocracia. Responde o e-mail do onboarding e o reembolso vai. O risco fica com a gente — porque confiamos no que construímos.
          </p>
        </Card>
      </section>
    </div>
  );
}

// ============================================================
// ABA 2 — MERCADO
// ============================================================

function MercadoTab() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.25em", color: C.primary }}>Estudo de Mercado · abril/2026</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-4" style={{ color: C.text }}>Mercado Brasileiro</h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: C.text2 }}>
          8 profissões regulamentadas · Horizonte 2024-2029 · Dados do CFM, CFN, COFFITO, CFP, CFBM, CFF, CFO, COFEN cruzados com PNAD, Demografia Médica e Distrito Healthtech.
        </p>
      </div>

      <section id="mercado-tam">
        <H2 eyebrow="2 · TAM, SAM e SOM">Três círculos concêntricos</H2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card padding="p-6">
            <Pill>TAM</Pill>
            <p className="text-3xl font-bold mt-3 mb-1" style={{ color: C.primary }}>2,9M</p>
            <p className="text-sm font-semibold" style={{ color: C.text }}>profissionais regulamentados</p>
            <p className="text-xs mt-1" style={{ color: C.text3 }}>R$ 24,4 bi/ano em stack auxiliar</p>
          </Card>
          <Card highlight padding="p-6">
            <Pill variant="success">SAM</Pill>
            <p className="text-3xl font-bold mt-3 mb-1" style={{ color: C.primary }}>295 mil</p>
            <p className="text-sm font-semibold" style={{ color: C.text }}>com prática integrativa/funcional</p>
            <p className="text-xs mt-1" style={{ color: C.text3 }}>R$ 1,12 bi/ano</p>
          </Card>
          <Card dark padding="p-6">
            <Pill variant="primary"><span style={{ background: "#fff", color: C.primary, padding: "2px 8px", borderRadius: 999 }}>SOM</span></Pill>
            <p className="text-3xl font-bold mt-3 mb-1">133 mil</p>
            <p className="text-sm font-semibold">em compra ativa nos últimos 12m</p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>10% capturado = R$ 112 MM ARR</p>
          </Card>
        </div>
      </section>

      <section id="mercado-pessoas">
        <H2 eyebrow="3 · Dimensionamento em pessoas">Por profissão</H2>
        <DataTable
          headers={["Profissão", "Ativos BR", "Afinidade integrativa", "Universo integrativo"]}
          rows={[
            ["Nutricionistas (CFN)", "183 mil", "20-30%", "37-55 mil"],
            ["Psicólogos (CFP)", "459 mil", "10-15%", "46-69 mil"],
            ["Fisioterapeutas (COFFITO)", "330 mil", "8-12%", "26-40 mil"],
            ["Médicos (CFM)", "578 mil", "5-8%", "29-46 mil"],
            ["Biomédicos (CFBM)", "70 mil", "20-30%", "14-21 mil"],
            ["Enfermeiros (COFEN)", "766 mil", "5-8%", "38-61 mil"],
            ["Farmacêuticos (CFF)", "246 mil", "8-12%", "20-30 mil"],
            ["Dentistas (CFO)", "354 mil", "3-5%", "11-18 mil"],
            [<strong>TOTAL</strong>, <strong>2,9 mi</strong>, "—", <strong>228-362 mil (central: 295 mil)</strong>],
          ]}
          highlightLast
        />
      </section>

      <section id="mercado-gasto">
        <H2 eyebrow="4 · Gasto da categoria em R$">Stack anual por tier de renda</H2>
        <DataTable
          headers={["Tier", "Profissões", "Renda mensal", "Stack anual médio"]}
          rows={[
            ["Top tier", "Médicos integrativos", "R$ 25-50k", "R$ 14-22 mil"],
            ["Mid tier", "Nutri/fisio top, alguns dentistas", "R$ 10-25k", "R$ 7-12 mil"],
            ["Base tier", "Maioria da base (psico, nutri, fisio, biomed, enf)", "R$ 4-10k", "R$ 3-6 mil"],
            ["Estudante/início", "Recém-formados", "—", "R$ 1,5-3 mil"],
          ]}
        />

        <Card padding="p-5" className="mt-4">
          <p className="font-semibold mb-2" style={{ color: C.primary }}>Decomposição do SAM (R$ 1,12 bi/ano)</p>
          <DataTable
            headers={["Subcategoria", "% do SAM", "R$ MM/ano"]}
            rows={[
              ["Marketing digital (anúncios, conteúdo)", "32%", "R$ 360 MM"],
              ["Educação continuada (pós, cursos)", "26%", "R$ 290 MM"],
              ["Software de gestão (EHR, agenda)", "18%", "R$ 200 MM"],
              ["IA clínica e copilotos", "10%", "R$ 110 MM"],
              ["Comunidades pagas e ferramentas horizontais", "14%", "R$ 160 MM"],
            ]}
          />
        </Card>
      </section>

      <section id="mercado-cresc">
        <H2 eyebrow="5 · Crescimento e tendências">Mercado em expansão</H2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card padding="p-6">
            <p className="font-semibold mb-3" style={{ color: C.primary }}>CAGR demográfico dos conselhos (2019-2024)</p>
            <BulletList items={[
              <span><strong>CFBM</strong> (biomedicina): 10,1%</span>,
              <span><strong>COFFITO</strong> (fisio): 6,4%</span>,
              <span><strong>CFN</strong> (nutri): 6,3%</span>,
              <span><strong>CFP</strong> (psico): 6,1%</span>,
            ]} />
            <p className="text-xs mt-2" style={{ color: C.text3 }}>Os 4 conselhos de maior CAGR são os de maior afinidade integrativa.</p>
          </Card>
          <Card padding="p-6">
            <p className="font-semibold mb-3" style={{ color: C.primary }}>Drivers culturais e tecnológicos</p>
            <BulletList items={[
              "Pós em nutrição funcional triplicou em 5 anos (40 → 120-150 cursos)",
              "Google Trends \"médico funcional\": +150% a +200%",
              "Telemedicina: 50 mil consultas/ano (2019) → 7-10 milhões/ano (2024)",
              "IA clínica em hospitais: 8% (2020) → 35-40% (2025)",
            ]} />
          </Card>
        </div>

        <Card highlight padding="p-6">
          <p className="font-semibold mb-3" style={{ color: C.primary }}>Projeção do ICP ativo (2026-2029)</p>
          <DataTable
            headers={["Cenário", "CAGR", "ICP ativo 2029", "SAM financeiro 2029"]}
            rows={[
              ["Conservador", "+5%", "162 mil", "R$ 1,36 bi"],
              ["Realista", "+8%", "180 mil", "R$ 1,52 bi"],
              ["Otimista", "+12%", "210 mil", "R$ 1,77 bi"],
            ]}
          />
        </Card>
      </section>

      <section id="mercado-comp">
        <H2 eyebrow="6 · Cenário Competitivo">4 camadas, players por camada</H2>

        <H3>Camada 1 — Prontuário eletrônico e gestão</H3>
        <DataTable
          headers={["Player", "Preço/mês", "Usuários BR", "Foco"]}
          rows={[
            ["Amigo Tech", "R$ 0-150", "65 mil+", "Líder freemium"],
            ["HiDoctor", "R$ 85-195", "40-60 mil", "Tradicional, com IA básica"],
            ["iClinic", "R$ 119-159", "30-45 mil", "EHR completo"],
            ["Amplimed", "R$ 99+", "—", "Telemed + gestão"],
          ]}
        />

        <H3>Camada 2 — IA clínica, transcrição, copilotos</H3>
        <DataTable
          headers={["Player", "Preço/mês", "Usuários BR", "Observação"]}
          rows={[
            ["VOA Health", "~R$ 300", "60 mil+", "Líder em IA clínica BR"],
            ["Naomed", "R$ 99+", "—", "Documentação automática"],
            ["Clinicorp IA", "—", "—", "Embutido em ERP odonto"],
            ["Noa (Docplanner)", "—", "—", "Embutido em Doctoralia"],
          ]}
        />

        <H3>Camada 3 — Educação integrativa</H3>
        <DataTable
          headers={["Player", "Foco"]}
          rows={[
            [<strong>USI · Universidade Saúde Integrativa</strong>, <span><strong>Parceira da Auton</strong> · 5k ativos + 3k formados no Método ADS</span>],
            ["VP Online (Valeria Paschoal)", "Referência histórica em nutrição funcional"],
            ["IBRAMI · ABRAN", "Formação em medicina integrativa"],
          ]}
        />

        <Card dark padding="p-6" className="mt-4">
          <p className="font-bold mb-2">📍 Brecha competitiva</p>
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
            <strong>Nenhum player junta as 4 camadas em uma única plataforma.</strong> Saúde integrativa não tem dono. Auton ocupa o vácuo: prontuário + IA + comunidade + marketplace, com Método ADS e USI como fundação.
          </p>
        </Card>
      </section>

      <section id="mercado-veredicto">
        <H2 eyebrow="9 · Veredicto Final">Qualidade do mercado · nota por critério</H2>
        <DataTable
          headers={["Critério", "Nota (1-10)", "Justificativa"]}
          rows={[
            ["Tamanho", "8", "133k em compra ativa, R$ 1,12 bi/ano"],
            ["Crescimento", "9", "CAGR conselhos 6-10%, drivers culturais fortes"],
            ["Concentração", "9", "Base USI reúne 5k+3k em canal único"],
            ["Defensibilidade", "9", "5 ativos compostos · sem concorrente direto"],
            ["Maturidade tecnológica", "7", "IA clínica em consolidação, janela 12-18 meses"],
          ]}
        />

        <Card highlight padding="p-6" className="mt-6">
          <p className="font-bold text-lg mb-2" style={{ color: C.primary }}>Principal barreira de entrada</p>
          <p className="leading-relaxed" style={{ color: C.text2 }}>
            <strong>Distribuição.</strong> Os 133 mil profissionais do ICP ativo estão em canais já ocupados por incumbentes (USI, IBRAMI, comunidades fechadas, Instagram dos fundadores).
            <br /><br />
            <strong>Vantagem injusta da Auton:</strong> a parceria USI dá acesso direto ao maior canal disponível, e a marca dos fundadores reduz CAC.
          </p>
        </Card>
      </section>
    </div>
  );
}

// ============================================================
// ABA 3 — ESTRATÉGIA
// ============================================================

function EstrategiaTab() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.25em", color: C.primary }}>Aplicação às decisões</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-4" style={{ color: C.text }}>Auton × Mercado</h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: C.text2 }}>
          7 perguntas estratégicas com resposta validada nos dados do estudo de mercado. Cada decisão tem evidência numérica, não opinião.
        </p>
      </div>

      <section id="est-1">
        <H2 eyebrow="1 · Por quê">Saúde integrativa, não saúde genérica</H2>
        <DataTable
          headers={["Saúde genérica", "Saúde integrativa"]}
          rows={[
            ["TAM 2,9M, dominado por incumbentes (Amigo 65k+, HiDoctor 40-60k, iClinic 30-45k, VOA 60k+)", "295 mil profissionais, zero player verticalizado"],
            ["Briga de preço, margens de 30-40%", "Categoria nova, defensável, ticket R$ 797-3.997"],
            ["CAC alto, retenção baixa", "CAC reduzido por canal USI + marca Barakat"],
            ["Crescimento de mercado vegetativo", "CAGR 6-10% nos conselhos integrativos"],
          ]}
        />
        <Card highlight padding="p-5" className="mt-4">
          <p className="font-bold" style={{ color: C.primary }}>Conclusão: atacar saúde genérica = guerra de preço. Atacar integrativa = categoria nova.</p>
        </Card>
      </section>

      <section id="est-2">
        <H2 eyebrow="2 · Por quê">8 profissões, não 1</H2>
        <P>O Método ADS é raciocínio clínico aplicável a qualquer profissão de causa raiz. Restringir a 1 profissão limita o TAM em 5-10× sem ganho real.</P>
        <DataTable
          headers={["Profissão", "Conv. USI", "ICP ativo BR", "Prioridade GTM"]}
          rows={[
            ["Nutricionistas", "1,8%", "37-55 mil", <Pill variant="success">Tier 1 ⭐</Pill>],
            ["Fisioterapeutas", "1,5%", "26-40 mil", <Pill variant="success">Tier 1 ⭐</Pill>],
            ["Médicos integrativos", "2,1%", "29-46 mil", <Pill variant="success">Tier 1 ⭐</Pill>],
            ["Psicólogos", "1,2%", "46-69 mil", <Pill variant="info">Tier 2</Pill>],
            ["Biomédicos", "1,4%", "14-21 mil", <Pill variant="info">Tier 2</Pill>],
            ["Farmacêuticos", "1,1%", "20-30 mil", <Pill variant="warn">Tier 3</Pill>],
            ["Dentistas", "0,9%", "11-18 mil", <Pill variant="warn">Tier 3</Pill>],
            ["Enfermeiros", "1,0%", "38-61 mil", <Pill variant="warn">Tier 3</Pill>],
          ]}
        />
        <P><strong>Tier 1 (nutri + fisio + médicos) = 74 mil profissionais = 56% do ICP ativo.</strong> GTM ataca esse tier primeiro; Tier 2 e 3 entram por demanda orgânica via base USI.</P>
      </section>

      <section id="est-3">
        <H2 eyebrow="3 · Por quê">Pricing R$ 797 / R$ 1.197 / R$ 3.997</H2>
        <P>Validado por 3 ângulos: (i) stack que o profissional já paga hoje, (ii) tier de renda por profissão, (iii) benchmark competitivo.</P>

        <H3>(i) Stack consolidado atual</H3>
        <DataTable
          headers={["Item", "R$/mês típico"]}
          rows={[
            ["EHR + agenda (HiDoctor, Amplimed)", "R$ 100-200"],
            ["IA clínica (VOA, Naomed)", "R$ 99-300"],
            ["Marketing digital (anúncios + conteúdo)", "R$ 600-1.500"],
            ["Educação continuada (pós, cursos)", "R$ 300-600"],
            ["Comunidade paga (WhatsApp, Telegram)", "R$ 97-300"],
            ["Ferramentas horizontais (Notion, Calendly)", "R$ 50-150"],
            [<strong>TOTAL típico</strong>, <strong>R$ 1.250-3.050/mês</strong>],
          ]}
          highlightLast
        />
        <Card highlight padding="p-5" className="mt-4">
          <p className="font-semibold" style={{ color: C.primary }}>Auton Pro R$ 1.197 substitui EHR + IA + parte da educação + comunidade. Não adiciona — consolida.</p>
        </Card>

        <H3>(ii) Pricing × tier de renda</H3>
        <DataTable
          headers={["Tier", "Renda mensal", "Plano natural"]}
          rows={[
            ["Top tier · Médicos integrativos", "R$ 25-50k", <Pill variant="primary">Pro/Enterprise (2-6% renda)</Pill>],
            ["Mid tier · Nutri/fisio top", "R$ 10-25k", <Pill variant="primary">Pro (5-12% renda)</Pill>],
            ["Base tier · maioria da base", "R$ 4-10k", <Pill variant="primary">Starter (8-20% renda)</Pill>],
          ]}
        />
      </section>

      <section id="est-4">
        <H2 eyebrow="4 · Por quê">GTM começa na USI</H2>
        <BulletList items={[
          "USI é a única base externa quente disponível: 5k ativos + 3k formados no Método ADS",
          <span><strong>MVP validou PMF:</strong> 100 vendas em 170 expostos (58% conv) em 20 dias, zero churn até o momento</span>,
          "Capacidade operacional: 400-500 leads qualificados/mês via USI",
          "Mídia paga (Meta/Instagram) entra como camada 2 para alcançar quem está fora da USI",
        ]} />
        <DataTable
          headers={["Canal", "Alcance", "Conversão esperada", "CAC"]}
          rows={[
            ["USI (base atual)", "5k alunos ativos", "30-58% (validado)", "R$ 80-150"],
            ["Instagram fundadores", "150k+ seguidores", "1-3%", "R$ 200-400"],
            ["Mídia paga Meta", "Escalável", "0,5-1%", "R$ 800-1.500"],
            ["Indicação entre pares", "Variável", "10-20%", "R$ 0 (orgânico)"],
          ]}
        />
      </section>

      <section id="est-5">
        <H2 eyebrow="5 · Math">Meta R$ 14,4M ARR em 12 meses</H2>

        <DataTable
          headers={["Cenário", "USI conv.", "Mídia paga", "Total clientes", "ARR"]}
          rows={[
            ["Conservador", "5%", "100/mês", "~700", "R$ 10-12 MM"],
            [<strong>Realista ⭐</strong>, "8%", "200/mês", "~1.000", <strong>R$ 14-16 MM</strong>],
            ["Otimista", "12%", "350/mês", "~1.400", "R$ 20-22 MM"],
          ]}
          highlightLast
        />

        <H3>Distribuição esperada por plano (cenário Realista)</H3>
        <DataTable
          headers={["Plano", "Preço anual/mês", "% clientes", "# clientes", "ARR parcial"]}
          rows={[
            ["Starter (R$ 797)", "R$ 9.564/ano", "55%", "550", "R$ 5,26 MM"],
            ["Pro (R$ 1.197)", "R$ 14.364/ano", "35%", "350", "R$ 5,03 MM"],
            ["Enterprise (R$ 3.997+)", "R$ 47.964+/ano", "10%", "100", "R$ 4,80 MM"],
            [<strong>TOTAL</strong>, "—", "100%", <strong>1.000</strong>, <strong>R$ 15,80 MM</strong>],
          ]}
          highlightLast
        />
      </section>

      <section id="est-6">
        <H2 eyebrow="6 · Unit Economics">Ratios validados</H2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <Card padding="p-5">
            <Stat value="52:1" label="LTV : CAC" hint="vs benchmark SaaS 3:1" size="lg" />
          </Card>
          <Card padding="p-5">
            <Stat value="< 2 m" label="Payback" hint="vs benchmark SaaS 12-24m" size="lg" />
          </Card>
          <Card padding="p-5">
            <Stat value="~75%" label="Margem bruta" hint="modelo SaaS" size="lg" />
          </Card>
          <Card padding="p-5">
            <Stat value="R$ 31k" label="LTV médio" hint="Pro · 24 meses" size="lg" />
          </Card>
        </div>

        <Card dark padding="p-6">
          <p className="font-bold mb-3">Riscos primários (a observar 90+ dias)</p>
          <BulletList items={[
            <span style={{ color: "rgba(255,255,255,0.92)" }}><strong>Retenção real</strong> — churn trimestral &gt; 15% derruba LTV pra R$ 16-18k e LTV:CAC pra 32:1 (ainda saudável, mas reduz)</span>,
            <span style={{ color: "rgba(255,255,255,0.92)" }}><strong>Upgrade dos 100 MVP</strong> — R$ 297 → R$ 797-1.197 ao fim dos 6 meses. Churn esperado: 30-50%</span>,
          ]} icon={AlertTriangle} color="#FFD64D" />
        </Card>
      </section>

      <section id="est-7">
        <H2 eyebrow="7 · Síntese">Executiva</H2>
        <Card highlight padding="p-6">
          <BulletList items={[
            "Nicho saúde integrativa: SAM R$ 1,12 bi/ano, CAGR 12%, vácuo competitivo",
            "8 profissões servidas via ADS · GTM prioriza Tier 1 (nutri + fisio + médicos = 56% do ICP)",
            "Pricing R$ 797/1.197/3.997 consolida stack fragmentado de R$ 1.250-3.050/mês",
            "GTM começa USI (PMF validado em MVP) · escala via mídia paga Meta/Instagram",
            "Meta 1.000 clientes em 12m · ARR R$ 15,80 MM no cenário realista",
            "LTV:CAC 52:1 · payback < 2m · margem bruta ~75%",
          ]} />
        </Card>
      </section>
    </div>
  );
}

// ============================================================
// ABA 4 — CANVAS
// ============================================================

function CanvasTab() {
  return (
    <div>
      <div className="mb-12">
        <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.25em", color: C.primary }}>Canvas Auton Atualizado · v1.0</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-4" style={{ color: C.text }}>13 blocos validados</h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: C.text2 }}>
          O canvas que explica a Auton de ponta a ponta. Cada bloco tem decisão fechada, evidência e número validado em abril/2026.
        </p>
      </div>

      <CanvasBloco id="c1" num={1} icon={Users} title="Multidão Faminta" score="33/40">
        <P><strong>Mercado excelente, não perfeito.</strong> Os 4 critérios Hormozi puxaram a nota acima de 30 (vale ir com cuidado), mas abaixo de 36 (mercado ideal raro).</P>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <Card padding="p-4" className="text-center"><Stat value="8/10" label="Dor Forte" size="md" /></Card>
          <Card padding="p-4" className="text-center"><Stat value="7/10" label="Poder de Compra" size="md" /></Card>
          <Card padding="p-4" className="text-center"><Stat value="9/10" label="Fácil de Achar" size="md" /></Card>
          <Card padding="p-4" className="text-center"><Stat value="9/10" label="Em Crescimento" size="md" /></Card>
        </div>
        <P>Detalhe completo na <strong>aba Oferta v1.0 · Multidão Faminta</strong>.</P>
      </CanvasBloco>

      <CanvasBloco id="c2" num={2} icon={Crosshair} title="Avatar / Cliente Ideal">
        <P>Avatar travado em 14 campos (4 blocos: Identidade, Dor e Emoção, Decisão de Compra, Contexto e Limite). Perfil principal: <strong>Dra. Camila</strong>.</P>
        <Card highlight padding="p-5" className="mb-3">
          <p className="text-base italic font-semibold mb-2" style={{ color: C.text }}>&ldquo;Sei que existe algo além dos sintomas, mas não consigo ver sozinha.&rdquo;</p>
          <p className="text-sm" style={{ color: C.text3 }}>Dor-mãe travada · pronta para uso em copy</p>
        </Card>
        <P>5 variações por profissão somam 84% do público ativo. Detalhe na aba Oferta · Avatar.</P>
      </CanvasBloco>

      <CanvasBloco id="c3" num={3} icon={AlertTriangle} title="Problema">
        <P>23 problemas relevantes mapeados, em 2 tipos:</P>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <Card padding="p-5">
            <Pill variant="primary">Tipo 1 · Dores Inerentes</Pill>
            <p className="text-4xl font-bold mt-3 mb-2" style={{ color: C.primary }}>12</p>
            <p className="text-sm" style={{ color: C.text2 }}>Resolvidas pelos 3 pilares (Plataforma ADS, App Paciente, Rede Auton)</p>
          </Card>
          <Card padding="p-5">
            <Pill variant="info">Tipo 2 · Objeções de Compra</Pill>
            <p className="text-4xl font-bold mt-3 mb-2" style={{ color: C.primary }}>11</p>
            <p className="text-sm" style={{ color: C.text2 }}>7 neutralizadas pelos extras + Rede; 4 vão para o Arsenal de Vendas</p>
          </Card>
        </div>
        <Card padding="p-5">
          <p className="font-semibold mb-2" style={{ color: C.text }}>5 Bloqueadores · todos resolvidos</p>
          <BulletList items={[
            "Trauma pós-ferramenta → Garantia 7 dias",
            "Sem tempo de aprender → Onboarding 60min + concierge",
            "Sem tempo análise profunda → AI ADS gera análise em 20 min",
            "Paciente não adere → App paciente com checklist",
            "Caixa apertado cancela → ROI via marketplace + pausa 30d",
          ]} />
        </Card>
      </CanvasBloco>

      <CanvasBloco id="c4" num={4} icon={Package} title="Solução · 3 Pilares + 2 Extras">
        <P>Cobertura problema/solução: <strong>83% no Dia 1</strong>, 100% incluindo Fase 2. Nenhum componente é gordura.</P>
        <BulletList items={[
          <span><strong>🏛️ Plataforma ADS</strong> — Diagnóstico Inteligente (motor ADS + análise + protocolo + ops)</span>,
          <span><strong>📱 App do Paciente</strong> — Adesão e Acompanhamento (checklist diário + relatório antes/depois)</span>,
          <span><strong>🤝 Rede Auton</strong> — Comunidade + Marketplace (15% Auton / 85% profissional)</span>,
          <span><strong>🚀 Onboarding Concierge</strong> — 60 min + 1ª semana dedicada + migração 48h</span>,
          <span><strong>🎓 Plano Fundador</strong> — 1 aula/semana + mentoria em grupo</span>,
        ]} />
        <P>Detalhe completo na aba Oferta · 3 Pilares.</P>
      </CanvasBloco>

      <CanvasBloco id="c5" num={5} icon={Shield} title="Vantagem Injusta · 5 ativos compostos">
        <P>5 ativos que passam nos 4 testes (não-transferível, anos pra refazer, prova existente, combinação multiplicadora). Sozinhos defensáveis; juntos, impossíveis de copiar em &lt; 1 década.</P>
        <DataTable
          headers={["Ativo", "Por que não copiável"]}
          rows={[
            ["Método ADS", "50 anos de prática clínica codificada"],
            ["Base USI", "5k ativos + 3k formados · canal único"],
            ["Marca Barakat + Bonanza", "89% afinidade · autoridade nacional"],
            ["Dados de causa raiz", "Compostam a cada consulta · ativo de saída"],
            ["Efeito de rede", "Comunidade + marketplace ativo"],
          ]}
        />
      </CanvasBloco>

      <CanvasBloco id="c6" num={6} icon={Award} title="Proposta Única de Valor">
        <Card dark padding="p-6">
          <p className="text-xl md:text-2xl font-bold leading-tight mb-3">A 1ª IA de causa raiz, agora em rede.</p>
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.</p>
          <p className="font-semibold mt-2">Auton: a plataforma sistêmica da saúde integrativa.</p>
        </Card>
        <P>Detalhe + versões por contexto na aba Oferta · PUV.</P>
      </CanvasBloco>

      <CanvasBloco id="c7" num={7} icon={BarChart3} title="Concorrentes · zonas e brechas">
        <DataTable
          headers={["Zona", "Players", "Posição da Auton"]}
          rows={[
            ["1 · Commodity (R$ 85-200)", "iClinic, HiDoctor, Amplimed, Naomed", "Não compete · não é EHR genérico"],
            ["2 · Premium genérica (R$ 300-500)", "AmigoTech, Support Health, VOA", "Não compete · não é IA generalista"],
            ["3 · Categoria única (R$ 497-2.000+)", "AUTON (sozinha)", <strong>Único player verticalizado em saúde integrativa</strong>],
          ]}
        />
        <Card highlight padding="p-5" className="mt-4">
          <p className="font-bold" style={{ color: C.primary }}>Teste de commodity: 0/3 · NÃO é commodity.</p>
        </Card>
      </CanvasBloco>

      <CanvasBloco id="c8" num={8} icon={Calculator} title="Equação de Valor">
        <P><strong>Valor percebido R$ 11.450/mês.</strong> Cliente paga R$ 1.197 (Pro anual) e percebe R$ 11.450 → ROI 9,5×.</P>
        <P>Detalhe completo na aba Oferta · Equação de Valor.</P>
      </CanvasBloco>

      <CanvasBloco id="c9" num={9} icon={DollarSign} title="Preço · 3 tiers + Fundadora">
        <DataTable
          headers={["Plano", "Anual", "Mensal", "Múltiplo Hormozi"]}
          rows={[
            [<span><strong>Turma Fundadora</strong> (200 vagas)</span>, "R$ 397/mês", "R$ 497/mês", "—"],
            ["Starter", "R$ 797/mês", "R$ 997/mês", "Base"],
            [<strong>Pro ⭐</strong>, "R$ 1.197/mês", "R$ 1.497/mês", "1,5× (regra: 1,5-3×)"],
            ["Enterprise", "R$ 3.997+/mês", "R$ 4.997+/mês", "3,34× (regra: 3-5×)"],
          ]}
        />
      </CanvasBloco>

      <CanvasBloco id="c10" num={10} icon={Lightbulb} title="Argumento de Venda">
        <PullQuote>
          Você paga R$ 1.197/mês pelo Pro. Recebe R$ 11.450/mês em valor. ROI de 9,5× todo mês.
        </PullQuote>
        <P>Não é opinião. É matemática. Se o cliente discorda, discorda dos dados — e os dados são do MVP.</P>
        <H3>3 momentos da venda</H3>
        <BulletList items={[
          <span><strong>Abertura:</strong> &ldquo;Sua hora clínica vale R$ 500. A Auton recupera 17h/mês.&rdquo;</span>,
          <span><strong>Fechamento:</strong> &ldquo;Você paga R$ 1.197 e recebe R$ 11.450. ROI 9,5×.&rdquo;</span>,
          <span><strong>Objeção de preço:</strong> &ldquo;O que você paga volta como receita multidisciplinar. Não é gasto, é alavanca.&rdquo;</span>,
        ]} />
      </CanvasBloco>

      <CanvasBloco id="c11" num={11} icon={ListChecks} title="Arsenal de Vendas">
        <P>4 munições, sob demanda. Não aparecem na landing — vendedor envia quando aparece a objeção correspondente.</P>
        <DataTable
          headers={["Objeção", "Munição"]}
          rows={[
            ["Caro · não justifico", "PDF cálculo de ROI personalizado"],
            ["Já tentei outras ferramentas", "3 depoimentos em vídeo"],
            ["Conselho pode questionar", "Parecer jurídico CFM/CFN/CFP"],
            ["Ainda tenho dúvida", "Diagnóstico 0 (avaliação grátis)"],
          ]}
        />
      </CanvasBloco>

      <CanvasBloco id="c12" num={12} icon={Network} title="Motores de Aquisição · 6 motores">
        <P>Cada motor tem hipótese, métrica e responsável. Sequência de ativação: 1 → 2 → 3 → 4 → 5 → 6.</P>
        <div className="space-y-3">
          {[
            { n: 1, t: "Base de Alunos USI", d: "5k ativos + 3k formados · canal principal Fase 1", icon: GraduationCap, status: "ativo" },
            { n: 2, t: "Redes Sociais Auton", d: "Instagram + LinkedIn institucionais", icon: MessageSquare, status: "ativo" },
            { n: 3, t: "Redes Sociais Dr. Barakat", d: "150k+ seguidores · 89% afinidade do público", icon: Stethoscope, status: "ativo" },
            { n: 4, t: "Redes Sociais Dr. Bonanza", d: "Diretor Acadêmico USI · audiência aluna", icon: Stethoscope, status: "ativo" },
            { n: 5, t: "Embaixadores", d: "5-10 profissionais com histórico de resultado", icon: Award, status: "fila" },
            { n: 6, t: "Indicações entre Pares", d: "Rede orgânica · CAC zero", icon: Users, status: "ativo" },
          ].map((m) => {
            const Icon = m.icon as any;
            return (
              <Card key={m.n} padding="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: C.primarySoft }}>
                    <Icon className="w-5 h-5" style={{ color: C.primary }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold" style={{ color: C.text }}>Motor {m.n} · {m.t}</p>
                    <p className="text-sm" style={{ color: C.text2 }}>{m.d}</p>
                  </div>
                  <Pill variant={m.status === "ativo" ? "success" : "warn"}>{m.status}</Pill>
                </div>
              </Card>
            );
          })}
        </div>
        <P><strong>Amplificador transversal:</strong> Mídia Paga Meta/Instagram entra na Fase 2, depois de validar funil orgânico.</P>
      </CanvasBloco>

      <CanvasBloco id="c13" num={13} icon={DollarSign} title="Economia do Negócio">
        <H3>Money Model</H3>
        <DataTable
          headers={["Métrica", "Valor", "Premissa"]}
          rows={[
            ["ARPU médio (Pro anual)", "R$ 1.197/mês", "Plano hero esperado (35% mix)"],
            ["LTV (24m)", "R$ 31.000", "Churn médio 4%/mês após estabilização"],
            ["CAC blendado", "R$ 600", "Mix USI (R$ 100) + mídia paga (R$ 1.500)"],
            ["LTV : CAC", "52 : 1", "Benchmark SaaS: 3:1"],
            ["Payback", "< 2 meses", "Benchmark SaaS: 12-24m"],
            ["Margem bruta", "~75%", "Modelo SaaS"],
            ["MRR/cliente · marketplace", "R$ 300", "Premissa conservadora · 8 encam × R$ 400 × 15%"],
            ["Take rate marketplace", "15%", "Auton fica · 85% profissional"],
          ]}
        />
        <P>Detalhe + cenários por canal e profissão na aba Estratégia · Unit Economics.</P>
      </CanvasBloco>
    </div>
  );
}

function CanvasBloco({ id, num, icon: Icon, title, score, children }: { id: string; num: number; icon: any; title: string; score?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: C.primary, color: "#FFFFFF" }}>
          <span className="text-sm font-bold">§{num}</span>
        </div>
        <Icon className="w-5 h-5" style={{ color: C.primary }} />
        {score && <Pill variant="success">{score}</Pill>}
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: C.text }}>{title}</h2>
      {children}
    </section>
  );
}

// Brain icon mock para o caso de não importar
function Brain(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  );
}
