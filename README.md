# Auton — Oferta Guiada

Software dedicado de apresentação da oferta Auton Health, em formato de tour
didático interativo de 16 passos.

## Conceito

Aplicação leve, standalone, projetada para ser usada em:
- Live de vendas (45 min, com Q&A)
- Demo 1:1 com profissional de saúde (25–30 min)
- Treinamento do time comercial
- Apresentação a clínicas e parceiros institucionais

## Estrutura narrativa

Sequência baseada em **\$100M Offers (Hormozi)** adaptada à Auton:

| # | Bloco | Slides | Tempo |
|---|---|---|---|
| 1 | Abertura | 3 | ~3 min |
| 2 | Problema | 2 | ~4 min |
| 3 | Solução | 3 | ~6 min |
| 4 | Prova | 2 | ~4 min |
| 5 | Oferta | 4 | ~8 min |
| 6 | Fechamento | 2 | ~3 min |

## Stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- Lucide React (ícones)
- Zero dependência fora do que existe na app principal

## Design System

Tokens replicados de `apps/frontend/src/app/globals.css` do monorepo Auton:
- `--primary-color: #1e3a5f` (Auton Blue)
- `--bg-primary: #EBF3F6`
- `--card-bg: #FFFFFF`
- `--border-color: #C4D9E5`
- Radius (`--radius-xl: 24px`) e shadows seguindo o padrão dos cards

## Atalhos de teclado

| Tecla | Ação |
|---|---|
| `→` `Espaço` `PageDown` | Próximo |
| `←` `PageUp` | Anterior |
| `1` a `6` | Pular pro bloco N |
| `O` | Visão geral |
| `Esc` | Sai |

## Dev

\`\`\`bash
npm install
npm run dev
\`\`\`

Abre em `http://localhost:3000`.
