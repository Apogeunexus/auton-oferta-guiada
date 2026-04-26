"use client";

/**
 * Oferta Guiada · Auton Health
 *
 * Wizard didático em 16 passos para apresentar a oferta Auton de forma
 * clara, passo a passo, ao profissional de saúde ou time comercial.
 *
 * Sequência narrativa baseada em $100M Offers (Hormozi) adaptada à Auton:
 *   ABERTURA  · 1-3  (capa, quem somos, dor)
 *   PROBLEMA  · 4-5  (origem do problema, custo invisível)
 *   SOLUÇÃO   · 6-8  (Auton, Método ADS, 8 capacidades)
 *   PROVA     · 9-10 (9 domínios, fundadores)
 *   OFERTA    · 11-14 (valor, planos, bônus, garantia)
 *   FECHAMENTO· 15-16 (escassez, próximos passos)
 *
 * Atalhos:
 *   →  ou  PageDown  ou  Espaço  → próximo passo
 *   ←  ou  PageUp                 → passo anterior
 *   Esc                           → sair
 *   1–9                           → ir direto pro bloco
 *
 * Usa os tokens CSS do design system Auton (globals.css):
 *   --primary-color, --bg-primary, --bg-secondary, --card-bg, --border-color,
 *   --text-primary, --text-secondary, --text-tertiary, --radius-xl, etc.
 */

import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Frown,
  Clock,
  AlertTriangle,
  Layers,
  Brain,
  Stethoscope,
  Activity,
  Droplets,
  HeartPulse,
  Puzzle,
  ShieldCheck,
  Utensils,
  TrendingUp,
  FlaskConical,
  Video,
  Sparkles,
  ClipboardList,
  MessageSquare,
  Network,
  Calendar,
  CheckCircle2,
  Scale,
  FileCheck,
  Play,
  Gift,
  Lock,
  Timer,
  ListChecks,
  ChevronUp,
} from "lucide-react";

// ============================================================
// TIPOS
// ============================================================

type Block = "abertura" | "problema" | "solucao" | "prova" | "oferta" | "fechamento";

interface Step {
  id: string;
  block: Block;
  number: number;
  title: string;
  eyebrow: string;
  duration: string;
  render: () => React.ReactNode;
}

const BLOCKS: { id: Block; label: string; color: string }[] = [
  { id: "abertura", label: "Abertura", color: "#1e3a5f" },
  { id: "problema", label: "Problema", color: "#1e3a5f" },
  { id: "solucao", label: "Solução", color: "#1e3a5f" },
  { id: "prova", label: "Prova", color: "#1e3a5f" },
  { id: "oferta", label: "Oferta", color: "#1e3a5f" },
  { id: "fechamento", label: "Fechamento", color: "#1e3a5f" },
];

// ============================================================
// TODOS OS 16 SLIDES
// ============================================================

const STEPS: Step[] = [
  // ----------------- BLOCO 1 — ABERTURA -----------------
  {
    id: "capa",
    block: "abertura",
    number: 1,
    eyebrow: "Bloco 1 · Abertura",
    title: "Capa",
    duration: "30s",
    render: () => (
      <div
        className="rounded-[24px] p-12 md:p-20 text-center text-white"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-color, #1e3a5f) 0%, #2d4a6f 100%)",
          boxShadow: "0 18px 44px rgba(0,0,0,.18)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase mb-6"
          style={{ letterSpacing: "0.2em", color: "rgba(255,255,255,0.7)" }}
        >
          Auton Health
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-6">
          A 1ª IA de causa raiz da saúde integrativa.
        </h1>
        <p className="text-lg md:text-xl text-white/85">
          Apresentação ao profissional de saúde.
        </p>
      </div>
    ),
  },
  {
    id: "quem-somos",
    block: "abertura",
    number: 2,
    eyebrow: "Bloco 1 · Abertura",
    title: "Quem somos em uma frase",
    duration: "1 min",
    render: () => (
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-2xl md:text-4xl font-bold leading-tight text-[var(--text-primary,#1A1A1A)] mb-12">
          Auton é a primeira plataforma de IA pensada para o profissional que
          quer{" "}
          <span style={{ color: "var(--primary-color, #1e3a5f)" }}>
            tratar a causa, não o sintoma
          </span>
          .
        </p>
        <div className="flex justify-center gap-8 mt-12">
          {[
            { name: "Dr. Mohamad Barakat", crm: "CRM SP 68874" },
            { name: "Dr. Marcelo Bonanza", crm: "CRMBA 14684" },
          ].map((f) => (
            <div key={f.name} className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center"
                style={{ background: "rgba(30,58,95,0.08)" }}
              >
                <Stethoscope
                  className="w-9 h-9"
                  style={{ color: "var(--primary-color, #1e3a5f)" }}
                />
              </div>
              <p className="font-semibold text-sm text-[var(--text-primary,#1A1A1A)]">
                {f.name}
              </p>
              <p className="text-xs text-[var(--text-tertiary,#7A7A7A)]">
                {f.crm}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "dor",
    block: "abertura",
    number: 3,
    eyebrow: "Bloco 1 · Abertura",
    title: "Você reconhece isso?",
    duration: "2 min",
    render: () => (
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {[
          "Sei que o sintoma é só a ponta, mas não tenho estrutura pra investigar o que tá debaixo.",
          "Termino o expediente documentando até tarde. A próxima consulta começa antes da anterior fechar.",
          "Comecei a atender mais e resolver menos. Não foi pra isso que me formei.",
          "Curso após curso, continuo juntando peça solta. Falta um método que una tudo.",
        ].map((q, i) => (
          <div
            key={i}
            className="p-6 rounded-[18px] border"
            style={{
              background: "var(--card-bg, #fff)",
              borderColor: "var(--border-color, #C4D9E5)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
            }}
          >
            <Frown
              className="w-6 h-6 mb-3"
              style={{ color: "var(--primary-color, #1e3a5f)" }}
            />
            <p className="italic leading-relaxed text-[var(--text-primary,#1A1A1A)]">
              &ldquo;{q}&rdquo;
            </p>
          </div>
        ))}
      </div>
    ),
  },

  // ----------------- BLOCO 2 — PROBLEMA -----------------
  {
    id: "origem",
    block: "problema",
    number: 4,
    eyebrow: "Bloco 2 · Problema",
    title: "Por que esse problema persiste",
    duration: "2 min",
    render: () => (
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-2xl md:text-3xl font-semibold leading-tight text-[var(--text-primary,#1A1A1A)] mb-12">
          A saúde moderna nunca criou um sistema para integrar complexidade
          biológica e pensar a{" "}
          <span style={{ color: "var(--primary-color, #1e3a5f)" }}>
            causa raiz em tempo real
          </span>
          .
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { icon: Layers, label: "Dados\nfragmentados" },
            { icon: Clock, label: "Tempo\nescasso" },
            { icon: Brain, label: "Tudo na\nsua cabeça" },
          ].map((it, i) => (
            <div key={i} className="text-center">
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                style={{ background: "rgba(30,58,95,0.08)" }}
              >
                <it.icon
                  className="w-7 h-7"
                  style={{ color: "var(--primary-color, #1e3a5f)" }}
                />
              </div>
              <p className="text-sm font-medium text-[var(--text-primary,#1A1A1A)] whitespace-pre-line">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "custo",
    block: "problema",
    number: 5,
    eyebrow: "Bloco 2 · Problema",
    title: "O custo invisível de continuar assim",
    duration: "2 min",
    render: () => (
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            num: "35h",
            label: "/mês em documentação e análise por profissional autônomo",
          },
          {
            num: "0%",
            label: "de raciocínio integrativo padronizado entre consultas",
          },
          {
            num: "—",
            label: "perda silenciosa de pacientes complexos que somem entre consultas",
          },
        ].map((d, i) => (
          <div
            key={i}
            className="p-8 rounded-[18px] border text-center"
            style={{
              background: "var(--card-bg, #fff)",
              borderColor: "var(--border-color, #C4D9E5)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
            }}
          >
            <p
              className="text-5xl font-bold mb-3"
              style={{ color: "var(--primary-color, #1e3a5f)" }}
            >
              {d.num}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary,#5B5B5B)]">
              {d.label}
            </p>
          </div>
        ))}
      </div>
    ),
  },

  // ----------------- BLOCO 3 — SOLUÇÃO -----------------
  {
    id: "apresentacao",
    block: "solucao",
    number: 6,
    eyebrow: "Bloco 3 · Solução",
    title: "Apresentamos a Auton",
    duration: "2 min",
    render: () => (
      <div className="text-center max-w-3xl mx-auto">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-8"
          style={{
            background: "var(--primary-color, #1e3a5f)",
          }}
        >
          <Network className="w-12 h-12 text-white" />
        </div>
        <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-primary,#1A1A1A)] mb-6">
          A Auton é a{" "}
          <strong style={{ color: "var(--primary-color, #1e3a5f)" }}>
            plataforma sistêmica da saúde integrativa
          </strong>
          . Centenas de agentes de IA pensando em causa raiz, organizados em
          camadas clínicas, codificados a partir do{" "}
          <strong style={{ color: "var(--primary-color, #1e3a5f)" }}>
            Método ADS
          </strong>
          .
        </p>
      </div>
    ),
  },
  {
    id: "metodo-ads",
    block: "solucao",
    number: 7,
    eyebrow: "Bloco 3 · Solução",
    title: "O Método ADS em 3 letras",
    duration: "3 min",
    render: () => (
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { letter: "A", name: "Análise", desc: "Mapa biológico do paciente" },
          {
            letter: "D",
            name: "Diagnóstico",
            desc: "Conexão dos pontos invisíveis",
          },
          {
            letter: "S",
            name: "Solução",
            desc: "Plano terapêutico personalizado",
          },
        ].map((s) => (
          <div
            key={s.letter}
            className="rounded-[24px] p-10 text-center text-white"
            style={{
              background: "var(--primary-color, #1e3a5f)",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
            }}
          >
            <p className="text-7xl font-bold leading-none mb-4">{s.letter}</p>
            <p
              className="text-xs font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.2em", color: "rgba(255,255,255,0.85)" }}
            >
              {s.name}
            </p>
            <p className="text-sm text-white/85 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "capacidades",
    block: "solucao",
    number: 8,
    eyebrow: "Bloco 3 · Solução",
    title: "As 8 capacidades",
    duration: "5 min",
    render: () => (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {[
          { icon: FlaskConical, t: "Análise integrativa de exames" },
          { icon: Brain, t: "AI ADS codificado" },
          { icon: Video, t: "Teleconsulta com IA" },
          { icon: Sparkles, t: "Base de conhecimento" },
          { icon: ClipboardList, t: "Soluções terapêuticas" },
          { icon: MessageSquare, t: "Comunidade fechada" },
          { icon: Network, t: "Rede multidisciplinar" },
          { icon: Calendar, t: "Agenda integrada" },
        ].map((c, i) => (
          <div
            key={i}
            className="p-5 rounded-[18px] border text-center"
            style={{
              background: "var(--card-bg, #fff)",
              borderColor: "var(--border-color, #C4D9E5)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
            }}
          >
            <div
              className="w-11 h-11 rounded-2xl mx-auto mb-3 flex items-center justify-center"
              style={{ background: "rgba(30,58,95,0.08)" }}
            >
              <c.icon
                className="w-5 h-5"
                style={{ color: "var(--primary-color, #1e3a5f)" }}
              />
            </div>
            <p className="text-sm font-medium text-[var(--text-primary,#1A1A1A)]">
              {c.t}
            </p>
          </div>
        ))}
      </div>
    ),
  },

  // ----------------- BLOCO 4 — PROVA -----------------
  {
    id: "dominios",
    block: "prova",
    number: 9,
    eyebrow: "Bloco 4 · Prova",
    title: "A equipe multidisciplinar invisível",
    duration: "3 min",
    render: () => (
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-base mb-8 text-[var(--text-secondary,#5B5B5B)]">
          Centenas de agentes especializados, organizados em camadas clínicas,
          24/7 ao seu lado.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: Activity, l: "Metabolismo" },
            { icon: Droplets, l: "Hormônios" },
            { icon: Brain, l: "Psiquiatria integrativa" },
            { icon: HeartPulse, l: "Saúde mental" },
            { icon: Puzzle, l: "Neurodivergência" },
            { icon: AlertTriangle, l: "Inflamação crônica" },
            { icon: ShieldCheck, l: "Autoimunidade" },
            { icon: Utensils, l: "Saúde intestinal" },
            { icon: TrendingUp, l: "Longevidade e performance" },
          ].map((d, i) => (
            <div
              key={i}
              className="p-4 rounded-[14px] border flex items-center gap-3"
              style={{
                background: "var(--card-bg, #fff)",
                borderColor: "var(--border-color, #C4D9E5)",
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(30,58,95,0.08)" }}
              >
                <d.icon
                  className="w-4 h-4"
                  style={{ color: "var(--primary-color, #1e3a5f)" }}
                />
              </div>
              <p className="text-sm font-medium text-[var(--text-primary,#1A1A1A)]">
                {d.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "fundadores",
    block: "prova",
    number: 10,
    eyebrow: "Bloco 4 · Prova",
    title: "Quem está atrás disso",
    duration: "3 min",
    render: () => (
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            name: "Dr. Mohamad Barakat",
            crm: "CRM SP 68874",
            bullets: [
              "30+ anos em prática clínica integrativa",
              "Fundador do Instituto Dr. Barakat (12 núcleos)",
              "Coautor do Método ADS, base clínica codificada na AI",
            ],
          },
          {
            name: "Dr. Marcelo Bonanza",
            crm: "CRMBA 14684",
            bullets: [
              "20+ anos em prática clínica integrativa",
              "Diretor Acadêmico da USI, 3.000 profissionais formados",
              "Autor de 10+ livros publicados no Brasil e em Portugal",
            ],
          },
        ].map((f) => (
          <div
            key={f.name}
            className="p-6 rounded-[24px] border"
            style={{
              background: "var(--card-bg, #fff)",
              borderColor: "var(--border-color, #C4D9E5)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
            }}
          >
            <div
              className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
              style={{ background: "rgba(30,58,95,0.08)" }}
            >
              <Stethoscope
                className="w-8 h-8"
                style={{ color: "var(--primary-color, #1e3a5f)" }}
              />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary,#1A1A1A)] mb-1">
              {f.name}
            </h3>
            <span
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(30,58,95,0.08)",
                color: "var(--primary-color, #1e3a5f)",
                letterSpacing: "0.08em",
              }}
            >
              {f.crm}
            </span>
            <ul className="space-y-2">
              {f.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary,#5B5B5B)]"
                >
                  <CheckCircle2
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: "var(--primary-color, #1e3a5f)" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },

  // ----------------- BLOCO 5 — OFERTA -----------------
  {
    id: "valor",
    block: "oferta",
    number: 11,
    eyebrow: "Bloco 5 · Oferta",
    title: "Quanto vale na sua prática",
    duration: "4 min",
    render: () => (
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-[24px] p-10 mb-6 text-center"
          style={{
            background: "var(--card-bg, #fff)",
            border: "1px solid var(--border-color, #C4D9E5)",
            boxShadow: "0 10px 30px rgba(0,0,0,.12)",
          }}
        >
          <Clock
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: "var(--primary-color, #1e3a5f)" }}
          />
          <p className="text-3xl md:text-4xl font-bold text-[var(--text-primary,#1A1A1A)] mb-2">
            Até{" "}
            <span style={{ color: "var(--primary-color, #1e3a5f)" }}>
              17 horas por mês
            </span>{" "}
            recuperadas.
          </p>
          <p className="text-base text-[var(--text-secondary,#5B5B5B)]">
            em documentação e análise clínica
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { l: "Sua hora clínica", v: "R$ 500", c: "var(--text-primary,#1A1A1A)" },
            {
              l: "Você recupera/mês",
              v: "R$ 8.500",
              c: "var(--primary-color, #1e3a5f)",
            },
            { l: "Auton se paga em", v: "~2,5h", c: "var(--primary-color, #1e3a5f)" },
          ].map((d, i) => (
            <div
              key={i}
              className="p-5 rounded-[18px] border text-center"
              style={{
                background: "var(--card-bg, #fff)",
                borderColor: "var(--border-color, #C4D9E5)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase mb-2"
                style={{
                  letterSpacing: "0.18em",
                  color: "var(--text-tertiary,#7A7A7A)",
                }}
              >
                {d.l}
              </p>
              <p className="text-2xl font-bold" style={{ color: d.c }}>
                {d.v}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-4 text-[var(--text-tertiary,#7A7A7A)]">
          Estimativa baseada em betas, 90 dias de uso contínuo. Sua realidade
          pode variar.
        </p>
      </div>
    ),
  },
  {
    id: "planos",
    block: "oferta",
    number: 12,
    eyebrow: "Bloco 5 · Oferta",
    title: "Os 3 planos",
    duration: "4 min",
    render: () => (
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {[
          {
            n: "Starter",
            p: "R$ 797",
            d: "Plataforma + Comunidade",
          },
          {
            n: "Pro",
            p: "R$ 1.197",
            d: "Tudo + Chat IA + Rede",
            hero: true,
          },
          {
            n: "Enterprise",
            p: "a partir de R$ 3.997",
            d: "Tudo + Multi-usuário + SLA",
          },
        ].map((pl) => (
          <div
            key={pl.n}
            className="p-6 rounded-[24px] relative"
            style={
              pl.hero
                ? {
                    background: "var(--primary-color, #1e3a5f)",
                    color: "#fff",
                    boxShadow: "0 18px 44px rgba(0,0,0,.18)",
                  }
                : {
                    background: "var(--card-bg, #fff)",
                    border: "1px solid var(--border-color, #C4D9E5)",
                    boxShadow: "0 4px 14px rgba(0,0,0,.08)",
                  }
            }
          >
            {pl.hero && (
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[10px] font-bold rounded-full"
                style={{
                  background: "#fff",
                  color: "var(--primary-color, #1e3a5f)",
                  letterSpacing: "0.08em",
                }}
              >
                MAIS ESCOLHIDO
              </span>
            )}
            <p
              className="text-xs font-semibold uppercase mb-3"
              style={{
                letterSpacing: "0.18em",
                color: pl.hero
                  ? "rgba(255,255,255,0.85)"
                  : "var(--text-tertiary,#7A7A7A)",
              }}
            >
              {pl.n}
            </p>
            <p className="text-3xl font-bold mb-1">{pl.p}</p>
            <p
              className="text-xs mb-4"
              style={{
                color: pl.hero
                  ? "rgba(255,255,255,0.7)"
                  : "var(--text-tertiary,#7A7A7A)",
              }}
            >
              /mês no plano anual (-20%)
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: pl.hero ? "rgba(255,255,255,0.95)" : "var(--text-secondary,#5B5B5B)",
              }}
            >
              {pl.d}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "bonus",
    block: "oferta",
    number: 13,
    eyebrow: "Bloco 5 · Oferta",
    title: "Bônus inclusos no plano anual",
    duration: "3 min",
    render: () => (
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-[24px] p-8 mb-4"
          style={{
            background: "var(--card-bg, #fff)",
            border: "1px solid var(--border-color, #C4D9E5)",
            boxShadow: "0 4px 14px rgba(0,0,0,.08)",
          }}
        >
          {[
            {
              icon: Scale,
              t: "Parecer jurídico CFM/CFN/CFP + biblioteca compliance",
              v: "R$ 3.500",
            },
            {
              icon: FileCheck,
              t: "PDF cálculo de ROI personalizado",
              v: "R$ 500",
            },
            {
              icon: Play,
              t: "3 vídeos com cases reais",
              v: "R$ 1.500",
            },
            {
              icon: Gift,
              t: "Onboarding Concierge 1:1",
              v: "R$ 1.200",
            },
          ].map((b, i, arr) => (
            <div
              key={i}
              className={`flex items-center gap-4 py-3 ${
                i < arr.length - 1 ? "border-b" : ""
              }`}
              style={{ borderColor: "var(--border-color, #C4D9E5)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(30,58,95,0.08)" }}
              >
                <b.icon
                  className="w-5 h-5"
                  style={{ color: "var(--primary-color, #1e3a5f)" }}
                />
              </div>
              <p className="flex-1 text-sm font-medium text-[var(--text-primary,#1A1A1A)]">
                {b.t}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: "var(--primary-color, #1e3a5f)" }}
              >
                {b.v}
              </p>
            </div>
          ))}
        </div>
        <div
          className="rounded-[18px] p-6 text-center text-white"
          style={{ background: "var(--primary-color, #1e3a5f)" }}
        >
          <p
            className="text-xs font-semibold uppercase mb-1"
            style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)" }}
          >
            Total em bônus
          </p>
          <p className="text-3xl font-bold">R$ 6.700</p>
          <p className="text-sm mt-1 text-white/85">
            grátis no plano anual
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "garantia",
    block: "oferta",
    number: 14,
    eyebrow: "Bloco 5 · Oferta",
    title: "Garantia incondicional de 7 dias",
    duration: "2 min",
    render: () => (
      <div className="text-center max-w-2xl mx-auto">
        <div
          className="w-28 h-28 rounded-full mx-auto mb-8 flex items-center justify-center"
          style={{ background: "rgba(30,58,95,0.08)" }}
        >
          <ShieldCheck
            className="w-14 h-14"
            style={{ color: "var(--primary-color, #1e3a5f)" }}
          />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-primary,#1A1A1A)] mb-6 leading-tight">
          Zero risco. Se não servir, devolvemos seu dinheiro.
        </h3>
        <p className="text-lg text-[var(--text-secondary,#5B5B5B)] leading-relaxed">
          Você tem 7 dias de garantia incondicional. Se a Auton não entregar o
          que mostramos aqui, devolvemos 100% do valor. Sem perguntas, sem
          burocracia.
        </p>
      </div>
    ),
  },

  // ----------------- BLOCO 6 — FECHAMENTO -----------------
  {
    id: "escassez",
    block: "fechamento",
    number: 15,
    eyebrow: "Bloco 6 · Fechamento",
    title: "Por que decidir agora",
    duration: "2 min",
    render: () => (
      <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {[
          {
            icon: Lock,
            t: "Preço de lançamento protegido",
            d: "Quem entra agora mantém o valor de hoje pra sempre.",
          },
          {
            icon: Timer,
            t: "Onboarding Concierge limitado",
            d: "200 profissionais por trimestre. Quando enche, fecha.",
          },
          {
            icon: Gift,
            t: "Marketplace inclusivo",
            d: "Quem entra agora ganha acesso à rede multidisciplinar quando lançar, sem custo extra.",
          },
        ].map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-[24px] border"
            style={{
              background: "var(--card-bg, #fff)",
              borderColor: "var(--border-color, #C4D9E5)",
              boxShadow: "0 4px 14px rgba(0,0,0,.08)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
              style={{ background: "rgba(30,58,95,0.08)" }}
            >
              <s.icon
                className="w-6 h-6"
                style={{ color: "var(--primary-color, #1e3a5f)" }}
              />
            </div>
            <p className="font-semibold text-base mb-2 text-[var(--text-primary,#1A1A1A)]">
              {s.t}
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-secondary,#5B5B5B)]">
              {s.d}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "cta",
    block: "fechamento",
    number: 16,
    eyebrow: "Bloco 6 · Fechamento",
    title: "Como começar",
    duration: "1 min",
    render: () => (
      <div className="max-w-3xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { n: "1", t: "Escolha seu plano" },
            { n: "2", t: "Receba acesso imediato + call de onboarding" },
            { n: "3", t: "Use já na primeira consulta" },
          ].map((s) => (
            <div
              key={s.n}
              className="p-6 rounded-[24px] border"
              style={{
                background: "var(--card-bg, #fff)",
                borderColor: "var(--border-color, #C4D9E5)",
                boxShadow: "0 4px 14px rgba(0,0,0,.08)",
              }}
            >
              <p
                className="text-4xl font-bold mb-3"
                style={{ color: "var(--primary-color, #1e3a5f)", opacity: 0.4 }}
              >
                {s.n}
              </p>
              <p className="text-sm font-medium text-[var(--text-primary,#1A1A1A)]">
                {s.t}
              </p>
            </div>
          ))}
        </div>
        <a
          href="/planos"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl text-white font-bold text-lg"
          style={{
            background: "var(--primary-color, #1e3a5f)",
            boxShadow: "0 10px 30px rgba(0,0,0,.18)",
          }}
        >
          Começar agora <ArrowRight className="w-5 h-5" />
        </a>
        <p className="mt-4 text-xs text-[var(--text-tertiary,#7A7A7A)]">
          7 dias de garantia · sem fidelidade
        </p>
      </div>
    ),
  },
];

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================

export default function OfertaGuiadaPage() {
  const [step, setStep] = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const total = STEPS.length;
  const current = STEPS[step];
  const progress = ((step + 1) / total) * 100;

  const next = useCallback(
    () => setStep((s) => Math.min(s + 1, total - 1)),
    [total]
  );
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const goTo = useCallback((i: number) => setStep(Math.max(0, Math.min(i, total - 1))), [total]);

  // Atalhos de teclado
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (showOverview) {
        if (e.key === "Escape") setShowOverview(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Escape") {
        if (typeof window !== "undefined") window.history.back();
      } else if (/^[1-6]$/.test(e.key)) {
        // Pula pro primeiro slide do bloco
        const blockIndex = parseInt(e.key, 10) - 1;
        const blockId = BLOCKS[blockIndex]?.id;
        const firstStep = STEPS.findIndex((s) => s.block === blockId);
        if (firstStep >= 0) goTo(firstStep);
      } else if (e.key === "o" || e.key === "O") {
        setShowOverview((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, showOverview]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "var(--bg-primary, #EBF3F6)",
        color: "var(--text-primary, #1A1A1A)",
      }}
    >
      {/* HEADER */}
      <header
        className="px-6 py-4 border-b"
        style={{
          background: "var(--card-bg, #fff)",
          borderColor: "var(--border-color, #C4D9E5)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              className="font-bold text-lg"
              style={{ color: "var(--primary-color, #1e3a5f)" }}
            >
              Auton
            </span>
            <span
              className="text-xs font-semibold uppercase hidden md:inline"
              style={{
                letterSpacing: "0.18em",
                color: "var(--text-tertiary, #7A7A7A)",
              }}
            >
              · Oferta Guiada
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowOverview(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors"
              style={{
                color: "var(--text-secondary, #5B5B5B)",
                background: "var(--bg-secondary, #D6E8F0)",
              }}
              title="Ver todos os passos (atalho: O)"
            >
              <ListChecks className="w-4 h-4" />
              Visão geral
            </button>
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.history.back();
              }}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--text-tertiary, #7A7A7A)" }}
              title="Sair (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Barra de progresso */}
        <div className="max-w-7xl mx-auto mt-3">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-semibold tabular-nums"
              style={{ color: "var(--text-tertiary, #7A7A7A)" }}
            >
              {step + 1}/{total}
            </span>
            <div
              className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: "var(--bg-secondary, #D6E8F0)" }}
            >
              <div
                className="h-full transition-all duration-300 ease-out rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "var(--primary-color, #1e3a5f)",
                }}
              />
            </div>
            <span
              className="text-xs hidden md:inline"
              style={{ color: "var(--text-tertiary, #7A7A7A)" }}
            >
              ⏱ {current.duration}
            </span>
          </div>
        </div>
      </header>

      {/* SLIDE */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10 md:py-14 overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase mb-2"
              style={{
                letterSpacing: "0.2em",
                color: "var(--primary-color, #1e3a5f)",
              }}
            >
              {current.eyebrow}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              {current.title}
            </h2>
          </div>
          <div>{current.render()}</div>
        </div>
      </main>

      {/* FOOTER NAV */}
      <footer
        className="px-6 py-4 border-t"
        style={{
          background: "var(--card-bg, #fff)",
          borderColor: "var(--border-color, #C4D9E5)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background: "var(--bg-secondary, #D6E8F0)",
              color: "var(--text-primary, #1A1A1A)",
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </button>

          {/* Bullets dos blocos */}
          <div className="hidden md:flex items-center gap-1.5">
            {BLOCKS.map((b, i) => {
              const firstStep = STEPS.findIndex((s) => s.block === b.id);
              const isActive = current.block === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => goTo(firstStep)}
                  className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase transition-all"
                  style={{
                    letterSpacing: "0.05em",
                    background: isActive
                      ? "var(--primary-color, #1e3a5f)"
                      : "transparent",
                    color: isActive
                      ? "#fff"
                      : "var(--text-tertiary, #7A7A7A)",
                  }}
                  title={`Ir para ${b.label} (atalho: ${i + 1})`}
                >
                  {i + 1}. {b.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={next}
            disabled={step === total - 1}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: "var(--primary-color, #1e3a5f)" }}
          >
            Próximo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <p
          className="text-center text-[11px] mt-3 hidden md:block"
          style={{ color: "var(--text-tertiary, #7A7A7A)" }}
        >
          Atalhos: ← → navegar · 1-6 pular blocos · O visão geral · Esc sair
        </p>
      </footer>

      {/* MODAL VISÃO GERAL */}
      {showOverview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.6)" }}
          onClick={() => setShowOverview(false)}
        >
          <div
            className="w-full max-w-3xl rounded-[24px] overflow-hidden"
            style={{
              background: "var(--card-bg, #fff)",
              maxHeight: "85vh",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="px-6 py-4 flex items-center justify-between border-b"
              style={{ borderColor: "var(--border-color, #C4D9E5)" }}
            >
              <h3 className="font-bold text-lg">Visão geral · 16 passos</h3>
              <button
                onClick={() => setShowOverview(false)}
                className="p-2 rounded-lg"
                style={{ color: "var(--text-tertiary, #7A7A7A)" }}
              >
                <ChevronUp className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto" style={{ maxHeight: "70vh" }}>
              {BLOCKS.map((b) => {
                const blockSteps = STEPS.filter((s) => s.block === b.id);
                return (
                  <div key={b.id} className="mb-6">
                    <p
                      className="text-xs font-semibold uppercase mb-3"
                      style={{
                        letterSpacing: "0.18em",
                        color: "var(--primary-color, #1e3a5f)",
                      }}
                    >
                      {b.label}
                    </p>
                    <div className="space-y-1">
                      {blockSteps.map((s) => {
                        const i = STEPS.findIndex((x) => x.id === s.id);
                        const isCurrent = i === step;
                        return (
                          <button
                            key={s.id}
                            onClick={() => {
                              goTo(i);
                              setShowOverview(false);
                            }}
                            className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg transition-colors"
                            style={{
                              background: isCurrent
                                ? "var(--bg-secondary, #D6E8F0)"
                                : "transparent",
                            }}
                          >
                            <span
                              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{
                                background: isCurrent
                                  ? "var(--primary-color, #1e3a5f)"
                                  : "var(--bg-secondary, #D6E8F0)",
                                color: isCurrent
                                  ? "#fff"
                                  : "var(--text-secondary, #5B5B5B)",
                              }}
                            >
                              {s.number}
                            </span>
                            <span className="text-sm font-medium flex-1">
                              {s.title}
                            </span>
                            <span
                              className="text-xs"
                              style={{
                                color: "var(--text-tertiary, #7A7A7A)",
                              }}
                            >
                              {s.duration}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
