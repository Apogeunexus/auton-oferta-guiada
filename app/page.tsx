"use client";

/**
 * Painel Interno da Auton Health
 *
 * Apresenta de forma ampla e clara:
 *   - Oferta v1.0 (Hormozi aplicado)
 *   - Estudo de Mercado BR 2026
 *   - Aplicação Estratégica do Mercado às Decisões
 *   - Lean Canvas atualizado (13 blocos)
 *
 * Conteúdo replicado integralmente dos 4 documentos originais.
 */

import { useEffect, useState, useMemo } from "react";
import {
  Package, BarChart3, Target, Layout, Quote, ChevronRight,
  Menu as MenuIcon, X,
} from "lucide-react";

const ICONS = { Package, BarChart3, Target, Layout };

type Element = { type: "p"; text: string } | { type: "table"; rows: string[][] };
type Section = { id: string; num: string; title: string; full_title: string; elements: Element[] };
type Tab = { id: string; label: string; icon: string; tagline: string; sections: Section[] };

const DATASET: Tab[] = [
  {
    "id": "oferta",
    "label": "Oferta v1.0",
    "icon": "Package",
    "tagline": "Hormozi aplicado · 8 capítulos",
    "sections": [
      {
        "id": "oferta-1",
        "num": "1",
        "title": "Capítulo 3 — Starving Crowd (Multidão Faminta)",
        "full_title": "1. Capítulo 3 — Starving Crowd (Multidão Faminta)",
        "elements": [
          {
            "type": "p",
            "text": "Mercado: medicina integrativa no Brasil. Sub-mercado: alunos e órbita da USI. Nicho final (Camada 3): profissional de saúde mulher 30-50, aluna USI, autônoma, em transição, com dor “curar × tratar”, buscando rede de apoio e renda multidisciplinar."
          },
          {
            "type": "p",
            "text": "1.1. Score Starving Crowd — 40/40 (verde máximo)"
          },
          {
            "type": "p",
            "text": "Hormozi fornece 4 perguntas diagnósticas para validar qualquer mercado. Cada critério recebe nota de 0 a 10."
          },
          {
            "type": "table",
            "rows": [
              [
                "Critério",
                "Pergunta Hormozi",
                "Nota",
                "Justificativa"
              ],
              [
                "Massive Pain (Dor Massiva)",
                "Eles estão tão frustrados que não conseguem dormir?",
                "10/10",
                "89% dos profissionais reportam “quero curar mas sou forçada a tratar”. Dor de identidade + exaustão + sensação de fraude."
              ],
              [
                "Purchasing Power (Poder de Compra)",
                "Eles podem pagar o que a solução vale?",
                "10/10",
                "Marketplace multidisciplinar gera renda nova pro profissional. Auton deixa de ser gasto e vira alavanca de receita."
              ],
              [
                "Easy to Target (Fácil de Segmentar)",
                "Você consegue encontrá-los facilmente?",
                "10/10",
                "Base USI 3.000 alunos + grupos WhatsApp + Instagram Barakat. Live com 58% de conversão validou canal."
              ],
              [
                "Growing (Em Crescimento)",
                "Este mercado está expandindo ou se contraindo?",
                "10/10",
                "Comunidade fechada cria network effect. Cada usuário novo aumenta valor pros outros. Growth auto-reforçado."
              ],
              [
                "TOTAL",
                "Starving Crowd Score",
                "40/40",
                "Mercado perfeito. Raro."
              ]
            ]
          },
          {
            "type": "p",
            "text": "“O melhor mercado é aquele que te devolve mais do que você investe nele.” — Alex Hormozi"
          },
          {
            "type": "p",
            "text": "1.2. Niche Down (Nichamento) — 3 Camadas"
          },
          {
            "type": "p",
            "text": "Mesmo produto muda de preço conforme a profundidade do nicho."
          },
          {
            "type": "table",
            "rows": [
              [
                "Camada",
                "Descrição",
                "Preço defensável"
              ],
              [
                "Camada 1 — Mercado Amplo",
                "Saúde",
                "R$ 100/mês (commodity)"
              ],
              [
                "Camada 2 — Sub-mercado",
                "Medicina integrativa",
                "R$ 500/mês (premium acessível)"
              ],
              [
                "Camada 3 — Nicho Final",
                "Profissional de saúde aluna USI + rede multidisciplinar",
                "R$ 997 – 2.000+/mês (premium defensável)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Mesmo produto. Preço até 20× maior. Muda apenas o avatar."
          },
          {
            "type": "p",
            "text": "1.3. Avatar Sheet — Dra. Camila (v2)"
          },
          {
            "type": "p",
            "text": "ICP representativo de qualquer profissional de saúde da base USI. Todo marketing, pitch, copy, oferta, preço e canal se guia por este avatar."
          },
          {
            "type": "table",
            "rows": [
              [
                "Dimensão",
                "Descrição"
              ],
              [
                "Nome fictício",
                "Dra. Camila"
              ],
              [
                "Demografia",
                "Mulher, 38 anos (30-50), profissional de saúde (8 profissões USI), Sudeste/Sul, renda líquida R$ 12-25k/mês"
              ],
              [
                "Formação",
                "Aluna USI ou recém-formada (até 3 anos pós-graduação)"
              ],
              [
                "Comportamento",
                "Autônoma. ~1 paciente/dia. Consultas aprofundadas 90min+. Faz documentação em casa à noite."
              ],
              [
                "Dor-Mãe (copy-ready)",
                "“Sei que existe algo além dos sintomas, mas não consigo ver sozinha.”"
              ],
              [
                "Gatilhos emocionais",
                "“Estou exausta” 89% | “Me sinto uma fraude” 68% | “Virei vendedora de consultas” 92%"
              ],
              [
                "Já tentou (e falhou)",
                "Secretária, aumentar preço, outras ferramentas, fazer sozinha, cursos, ChatGPT genérico"
              ],
              [
                "Objeção dominante",
                "“E se eu pagar e não for o prometido?” (trauma pós-ferramenta)"
              ],
              [
                "Dream Outcome (6 componentes)",
                "1) Tratar causa raiz | 2) Resultados únicos | 3) Recuperar tempo | 4) Recuperar propósito | 5) Renda adicional via marketplace | 6) Rede de apoio multidisciplinar"
              ],
              [
                "Canal de aquisição",
                "Instagram (Barakat/Bonanza) + WhatsApp (USI). Formato validado: live (58% conversão)."
              ],
              [
                "Gatilho de compra (stack)",
                "Endosso Barakat/Bonanza + Prova social de par + Demo ao vivo + Garantia forte"
              ],
              [
                "Neutralizador de objeção",
                "ROI do marketplace: “o que você paga volta em forma de receita multidisciplinar”"
              ],
              [
                "Gatilho extra: pertencimento",
                "Comunidade fechada: “Você não está mais sozinha.”"
              ],
              [
                "NÃO-Avatar (quem excluir)",
                "Médico convencional sem interesse integrativo | Caçador de promoção"
              ],
              [
                "Starving Crowd Score",
                "40/40 — VERDE MÁXIMO"
              ]
            ]
          },
          {
            "type": "p",
            "text": "1.4. Compound Moat — 5 Vantagens Inimitáveis"
          },
          {
            "type": "p",
            "text": "Nenhuma dessas 5 sozinha é fortíssima. As 5 juntas são muralha."
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Vantagem",
                "Por que é inimitável"
              ],
              [
                "1",
                "Método ADS",
                "50 anos de prática proprietária dos fundadores codificada em IA"
              ],
              [
                "2",
                "Base USI",
                "3.000 alunos já formados na metodologia"
              ],
              [
                "3",
                "Marca Barakat + Bonanza",
                "30+ anos cada, autoridade nacional consolidada"
              ],
              [
                "4",
                "Dados de causa raiz",
                "Compostam a cada consulta — fosso cresce com uso"
              ],
              [
                "5",
                "Network Effect",
                "Comunidade fechada + marketplace multidisciplinar"
              ]
            ]
          },
          {
            "type": "p",
            "text": "“Quando você combina um método proprietário, distribuição quente, autoridade de marca pessoal, dados que se acumulam e efeito de rede — você não tem uma empresa. Você tem um fosso econômico.”"
          }
        ]
      },
      {
        "id": "oferta-2",
        "num": "2",
        "title": "Capítulo 4 — Commodity Problem (Problema da Commoditização)",
        "full_title": "2. Capítulo 4 — Commodity Problem (Problema da Commoditização)",
        "elements": [
          {
            "type": "p",
            "text": "“Você não tem problema de leads. Você não tem problema de vendas. Você tem problema de commoditização.” — Alex Hormozi"
          },
          {
            "type": "p",
            "text": "A saída (Cap 4): sair da categoria competida e criar uma categoria de um só (category of one). Mercados competitivos exigem ofertas melhores. Mercados de monopólio só exigem uma oferta."
          },
          {
            "type": "p",
            "text": "2.1. Estudo dos 8 Concorrentes — 3 Zonas do Mercado"
          },
          {
            "type": "table",
            "rows": [
              [
                "Zona",
                "Concorrente",
                "Preço mensal",
                "Entregáveis",
                "Desvantagem vs Auton"
              ],
              [
                "1 - Commodity",
                "iClinic",
                "R$ 119-159",
                "Prontuário + agenda + teleconsulta + gestão financeira",
                "Sem IA clínica. Sem método proprietário. Sem rede. Zero foco em saúde integrativa."
              ],
              [
                "1 - Commodity",
                "HiDoctor",
                "R$ 85-195",
                "EHR + agenda + IA básica de transcrição",
                "IA só transcreve. Não diagnostica. Não foca em causa raiz nem integrativa."
              ],
              [
                "1 - Commodity",
                "Amplimed",
                "A partir R$ 99",
                "Prontuário + telemedicina + gestão",
                "Foco em telemedicina e gestão. IA superficial. Sem rede multidisciplinar."
              ],
              [
                "1 - Commodity",
                "Naomed",
                "A partir R$ 99",
                "Documentação clínica com IA",
                "Gera notas clínicas auto. Não raciocina. Não tem método."
              ],
              [
                "2 - Premium genérica",
                "AmigoTech",
                "Não público (~R$ 300-500)",
                "EHR + Amigo Intelligence + transcrição + contabilidade. 65 mil profissionais.",
                "IA genérica não treinada em Método ADS. Sem rede. Sem foco integrativo."
              ],
              [
                "2 - Premium genérica",
                "Support Health",
                "Não público",
                "ERP médico + prontuário + estoque + teleconsulta + IA secundária",
                "É ERP (gestão operacional). IA é feature complementar."
              ],
              [
                "2 - Premium genérica",
                "VOA Health (EUA)",
                "~US$ 60 = R$ 300",
                "Transcrição IA em tempo real",
                "Só transcreve. Produto americano sem adaptação ao BR."
              ],
              [
                "Horizontal",
                "ChatGPT Plus",
                "US$ 20 = R$ 100",
                "IA conversacional genérica",
                "Não é médico. Não conhece Método ADS. Sem comunidade, sem marketplace."
              ],
              [
                "3 - Categoria única",
                "AUTON",
                "R$ 497-2.000+",
                "IA de causa raiz (ADS) + comunidade fechada + marketplace + chat contextual + modelo próprio",
                "SEM CONCORRENTE DIRETO. Compound Moat de 5 vantagens. Impossível replicar sem os fundadores."
              ]
            ]
          },
          {
            "type": "p",
            "text": "2.2. Teste de Commodity — Score 0/3 (não é commodity)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Pergunta Hormozi",
                "Concorrentes Zona 1-2",
                "AUTON"
              ],
              [
                "Cliente escolhe por preço?",
                "Sim",
                "Não — por especialização"
              ],
              [
                "Concorrentes fazem o mesmo com roupa diferente?",
                "Sim",
                "Não — único com método + rede"
              ],
              [
                "Alguém replica em 12 meses?",
                "Sim",
                "Impossível sem os fundadores"
              ]
            ]
          },
          {
            "type": "p",
            "text": "2.3. Posicionamento Final Travado"
          },
          {
            "type": "p",
            "text": "“A 1ª IA de causa raiz, agora em rede.\nDiagnóstico inteligente.\nDiscussão entre colegas.\nRede de apoio multidisciplinar.\nAuton: a plataforma sistêmica da saúde integrativa.”"
          },
          {
            "type": "p",
            "text": "Por que essa frase ganha"
          },
          {
            "type": "p",
            "text": "Preserva a marca já construída — expandindo “1ª IA para causa raiz” com “agora em rede”."
          },
          {
            "type": "p",
            "text": "Cobre as 3 features novas: chat contextualizado → “diagnóstico inteligente”; comunidade → “discussão entre colegas”; marketplace → “rede de apoio multidisciplinar”."
          },
          {
            "type": "p",
            "text": "Ancora na dor-mãe (“não consigo ver sozinha” encontra resposta em “agora em rede”)."
          },
          {
            "type": "p",
            "text": "Cria categoria de um só — “plataforma sistêmica da saúde integrativa” é território inexplorado."
          },
          {
            "type": "p",
            "text": "Funciona em qualquer canal (headline, pitch, live, WhatsApp, bio)."
          },
          {
            "type": "p",
            "text": "Formas banidas de descrever a Auton"
          },
          {
            "type": "p",
            "text": "Software de IA para profissionais de saúde (genérico, commodity)"
          },
          {
            "type": "p",
            "text": "Prontuário eletrônico inteligente (categoria saturada)"
          },
          {
            "type": "p",
            "text": "ChatGPT para médicos (sub-valoriza)"
          },
          {
            "type": "p",
            "text": "Plataforma de gestão clínica (não captura causa raiz nem rede)"
          },
          {
            "type": "p",
            "text": "Ferramenta de IA clínica (apaga o ecossistema)"
          }
        ]
      },
      {
        "id": "oferta-3",
        "num": "3",
        "title": "Capítulo 5 — Virtuous Cycle of Price (Ciclo Virtuoso do Preço)",
        "full_title": "3. Capítulo 5 — Virtuous Cycle of Price (Ciclo Virtuoso do Preço)",
        "elements": [
          {
            "type": "p",
            "text": "“Cobre o que vale, não o que você se sente confortável em cobrar.” — Alex Hormozi"
          },
          {
            "type": "p",
            "text": "3.1. Os 7 Princípios de Pricing Aplicados"
          },
          {
            "type": "p",
            "text": "Cobre pelo valor entregue, não pelo custo de entregar."
          },
          {
            "type": "p",
            "text": "Tier do meio (Pro) custa 1,5× o Starter — torna o Pro o no-brainer."
          },
          {
            "type": "p",
            "text": "Enterprise ancora por cima — custa 3,34× o Pro (dentro da regra 3-5×)."
          },
          {
            "type": "p",
            "text": "Starter existe para ancorar, não para ser o mais vendido."
          },
          {
            "type": "p",
            "text": "Desconto anual uniforme de 20% (dentro da faixa 16-25%)."
          },
          {
            "type": "p",
            "text": "Marketplace é o motor de upgrade — só aparece no Pro e no Enterprise."
          },
          {
            "type": "p",
            "text": "Preço alto eleva valor percebido e cria ciclo virtuoso (engajamento → resultado → caso → preço maior)."
          },
          {
            "type": "p",
            "text": "3.2. Pricing Oficial da Auton"
          },
          {
            "type": "p",
            "text": "Fase 1 — Validação (6 meses, 200 vagas limitadas)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Mensal",
                "Anual",
                "O que entrega",
                "Marketplace"
              ],
              [
                "TURMA FUNDADORA",
                "R$ 497",
                "R$ 397/mês (R$ 4.764/ano à vista)",
                "Acesso completo durante a validação + 3 features novas (comunidade, chat IA, marketplace)",
                "Ativo durante a validação"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Fase 2 — Escala (daqui 6 meses)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Mensal",
                "Anual (20% desc)",
                "O que entrega",
                "Marketplace"
              ],
              [
                "STARTER",
                "R$ 997",
                "R$ 797/mês (R$ 9.564/ano)",
                "Funcionalidades básicas + comunidade",
                "SEM marketplace (motor de upgrade)"
              ],
              [
                "PRO ⭐ (HERO)",
                "R$ 1.497",
                "R$ 1.197/mês (R$ 14.364/ano)",
                "Starter + chat IA contextual (modelo próprio + frontier) + marketplace ativo",
                "Auton fica com 15% das transações"
              ],
              [
                "ENTERPRISE",
                "A partir de R$ 4.997",
                "A partir de R$ 3.997/mês (R$ 47.964/ano)",
                "Pro + múltiplos usuários + diagnóstico de implantação + onboarding dedicado + SLA",
                "Ativo, condições customizadas"
              ]
            ]
          },
          {
            "type": "p",
            "text": "3.3. Análise de Gaps (lente Hormozi)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Transição",
                "Gap",
                "Status"
              ],
              [
                "Starter → Pro (mensal)",
                "1,5× (+50%)",
                "Aceitável — marketplace fecha a decisão"
              ],
              [
                "Pro → Enterprise (mensal)",
                "3,34×",
                "Ideal (regra Hormozi: 3-5×)"
              ],
              [
                "Desconto anual uniforme",
                "20%",
                "Ideal (regra Hormozi: 16-25%)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "3.4. Simulação de Receita — 1.000 clientes (mix 20/70/10)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Clientes",
                "Ticket mensal",
                "MRR mensal",
                "ARR anual"
              ],
              [
                "Starter",
                "200",
                "R$ 997",
                "R$ 199.400",
                "R$ 2.392.800"
              ],
              [
                "Pro (HERO)",
                "700",
                "R$ 1.497",
                "R$ 1.257.900 (assinatura + R$ 210k marketplace)",
                "R$ 15.094.800"
              ],
              [
                "Enterprise",
                "100",
                "R$ 4.997",
                "R$ 499.700",
                "R$ 5.996.400"
              ],
              [
                "TOTAL",
                "1.000",
                "ARPU R$ 1.957",
                "R$ 1.957.000",
                "R$ 23.484.000"
              ]
            ]
          },
          {
            "type": "p",
            "text": "3.5. Regras de Uso e Comunicação por Plano"
          },
          {
            "type": "p",
            "text": "Starter"
          },
          {
            "type": "p",
            "text": "Posicionar como “entrada” e “teste do ecossistema”."
          },
          {
            "type": "p",
            "text": "Enfatizar: “suas básicas + comunidade fechada”."
          },
          {
            "type": "p",
            "text": "Não mencionar marketplace no material. Cliente que perguntar → direcionar pro Pro."
          },
          {
            "type": "p",
            "text": "Pro (foco de 70% das vendas)"
          },
          {
            "type": "p",
            "text": "70% do pitch, landing e lives devem girar em torno do Pro."
          },
          {
            "type": "p",
            "text": "Argumento principal: “o marketplace paga parte da sua assinatura”."
          },
          {
            "type": "p",
            "text": "Mostrar a matemática: R$ 1.497 de assinatura, com 3-10 encaminhamentos/mês gera mais do que paga."
          },
          {
            "type": "p",
            "text": "Enterprise"
          },
          {
            "type": "p",
            "text": "Comunicar como “fale com nosso time”."
          },
          {
            "type": "p",
            "text": "Piso publicado: “a partir de R$ 4.997/mês”."
          },
          {
            "type": "p",
            "text": "Onboarding dedicado é diferencial tangível."
          }
        ]
      },
      {
        "id": "oferta-4",
        "num": "4",
        "title": "Capítulo 6 — Equação de Valor (Value Equation)",
        "full_title": "4. Capítulo 6 — Equação de Valor (Value Equation)",
        "elements": [
          {
            "type": "p",
            "text": "Valor = (Dream Outcome × Probabilidade Percebida) / (Tempo × Esforço)."
          },
          {
            "type": "p",
            "text": "Para aumentar o valor percebido só existem 4 alavancas: aumentar o sonho, aumentar a prova, diminuir o tempo, diminuir o esforço. Toda feature, todo bônus, toda garantia tem que atuar em pelo menos uma dessas 4."
          },
          {
            "type": "p",
            "text": "4.1. Aplicação Auton — 4 Drivers Quantificados"
          },
          {
            "type": "table",
            "rows": [
              [
                "Ganho do cliente",
                "Valor mensal",
                "Cálculo",
                "Natureza"
              ],
              [
                "1. Tempo economizado",
                "R$ 8.750",
                "50% de economia sobre 35h/mês em documentação + análise + protocolo = 17,5h × R$ 500/hora",
                "Oportunidade (tempo vira consultas novas, estudo, descanso)"
              ],
              [
                "2. Marketplace (renda nova)",
                "R$ 2.720",
                "8 encaminhamentos/mês × R$ 400 × 85% pro profissional (Auton fica com 15%)",
                "Receita direta nova (não existiria sem a plataforma)"
              ],
              [
                "3. Retenção de pacientes",
                "R$ 1.000",
                "Qualidade clínica maior = adesão maior. Estimativa: +2-3 consultas retidas/mês × R$ 400",
                "Receita recorrente preservada (lifetime value maior)"
              ],
              [
                "4. Autoridade e cases",
                "R$ 1.000",
                "Comunidade + Método ADS + cases documentados aumentam reputação e indicações",
                "Pacientes novos por indicação espontânea"
              ],
              [
                "DREAM OUTCOME TOTAL",
                "R$ 13.470",
                "Soma dos 4 ganhos",
                "Valor bruto antes da Likelihood"
              ],
              [
                "VALOR PERCEBIDO (85%)",
                "R$ 11.450",
                "R$ 13.470 × 0,85",
                "O que o cliente efetivamente acredita que vai receber"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Likelihood = 85% vem da soma de 4 drivers: Barakat + Bonanza endossando (+25%), 60 betas com 80% de redução de tempo (+20%), demo ao vivo em caso real (+25%), garantia forte (+15%)."
          },
          {
            "type": "p",
            "text": "Time Delay = 1 (primeira consulta já entrega valor). Effort = 1 (1 hora de onboarding, sem migração obrigatória). Denominadores mínimos."
          },
          {
            "type": "p",
            "text": "4.2. ROI por Plano"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Preço mensal",
                "Valor percebido",
                "ROI",
                "Observação"
              ],
              [
                "Starter mensal",
                "R$ 997",
                "R$ 5.500 (sem marketplace)",
                "5,5×",
                "Motor de upgrade pro Pro"
              ],
              [
                "Starter anual",
                "R$ 797",
                "R$ 5.500",
                "6,9×",
                "Mesmo valor com 20% desconto"
              ],
              [
                "PRO MENSAL ⭐ (HERO)",
                "R$ 1.497",
                "R$ 11.450",
                "7,65×",
                "Marketplace + tudo do Starter + chat IA"
              ],
              [
                "PRO ANUAL (melhor ROI)",
                "R$ 1.197",
                "R$ 11.450",
                "9,56×",
                "Melhor relação valor-preço da escada"
              ],
              [
                "Enterprise mensal",
                "A partir R$ 4.997",
                "R$ 33.000+ (multi-usuários)",
                "6,6×",
                "Valor escala com nº de profissionais"
              ]
            ]
          },
          {
            "type": "p",
            "text": "4.3. Argumento de Venda (Copy-Ready)"
          },
          {
            "type": "p",
            "text": "“Você paga R$ 1.497/mês pelo Pro.\nRecebe R$ 11.450/mês em valor.\nROI de 7,6× todo mês. No anual, 9,5×.”"
          },
          {
            "type": "p",
            "text": "A quebra que convence o cético"
          },
          {
            "type": "p",
            "text": "“Vou te mostrar os R$ 11.450 de onde vêm:"
          },
          {
            "type": "p",
            "text": "R$ 8.750/mês — 50% do seu tempo recuperado em documentação e análise (17,5h × R$ 500/h)."
          },
          {
            "type": "p",
            "text": "R$ 2.720/mês — 8 encaminhamentos/mês na rede multidisciplinar × 85% de R$ 400."
          },
          {
            "type": "p",
            "text": "R$ 1.000/mês — qualidade clínica maior retém pacientes."
          },
          {
            "type": "p",
            "text": "R$ 1.000/mês — autoridade + cases geram indicação espontânea."
          },
          {
            "type": "p",
            "text": "Soma R$ 13.470 × 85% de confiança = R$ 11.450. Paga R$ 1.497. ROI 7,6×.”"
          },
          {
            "type": "p",
            "text": "Por que o argumento é inatacável"
          },
          {
            "type": "p",
            "text": "Não é opinião — é matemática. Cada número vem de premissa concreta (dados dos betas, média real do ICP, projeção operacional do marketplace, drivers somados de Likelihood)."
          }
        ]
      },
      {
        "id": "oferta-5",
        "num": "5",
        "title": "Capítulos 8 + 9 — Problem Stack & Solution Stack",
        "full_title": "5. Capítulos 8 + 9 — Problem Stack & Solution Stack",
        "elements": [
          {
            "type": "p",
            "text": "“Your offer is literally the sum of all solutions to all problems.” — “Sua oferta é literalmente a soma de todas as soluções para todos os problemas.”"
          },
          {
            "type": "p",
            "text": "Mapeamos 26 problemas do ICP em 3 fases da jornada (ANTES da compra, DURANTE o uso, APÓS o resultado). Pra cada problema, 1 solução específica e nomeada."
          },
          {
            "type": "p",
            "text": "5.1. Os 3 Tipos de Problema"
          },
          {
            "type": "table",
            "rows": [
              [
                "Tipo",
                "O que é",
                "Resolvido por"
              ],
              [
                "TIPO 1 — Dores Inerentes (12 problemas)",
                "Problemas que o cliente TEM hoje na vida profissional",
                "PRODUTO CORE"
              ],
              [
                "TIPO 2 — Objeções de Compra (11 problemas)",
                "Fricções que aparecem SÓ no momento da decisão",
                "OFERTA (garantia, bônus, prova social, copy)"
              ],
              [
                "TIPO 3 — Fricções Operacionais (3 problemas)",
                "Bugs, lentidão, features em roadmap",
                "TIME DE PRODUTO (removidas da oferta)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "5.2. Tabela Master — 26 Problemas × Soluções"
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Problema",
                "Solução",
                "Tipo",
                "Status"
              ],
              [
                "1",
                "E se eu pagar e não for o prometido? (trauma pós-ferramenta)",
                "Garantia 7 dias dinheiro de volta",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE - Dealbreaker"
              ],
              [
                "2",
                "IA não entende complexidade integrativa",
                "Demo ao vivo com caso real do cliente na venda",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE"
              ],
              [
                "3",
                "Não tenho tempo de aprender mais uma ferramenta",
                "Onboarding 60min no curso + call concierge na 1ª semana",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE - Dealbreaker"
              ],
              [
                "4",
                "Já uso outro sistema, não quero migrar",
                "Migração de dados gratuita em 48h",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE"
              ],
              [
                "5",
                "Já tentei tudo e nada funcionou (ceticismo)",
                "3 depoimentos em vídeo + Diagnóstico 0 (avaliação gratuita)",
                "OBJEÇÃO COMPRA",
                "PRECISA CRIAR (1-2 sem)"
              ],
              [
                "6",
                "Marido/parceiro questiona o investimento",
                "PDF 1 página com cálculo de ROI (R$ 1.497 → R$ 11.450)",
                "OBJEÇÃO COMPRA",
                "PRECISA CRIAR (3-5 dias)"
              ],
              [
                "7",
                "Sou recém-formada, ainda não preciso",
                "Plano Fundador com 1 aula/semana com professor específico",
                "OBJEÇÃO COMPRA",
                "PRECISA DESENVOLVER (3-4 sem)"
              ],
              [
                "8",
                "Meu conselho (CFM/CFN/CFP) vai questionar uso de IA",
                "Parecer jurídico pronto + biblioteca de compliance",
                "OBJEÇÃO COMPRA",
                "PRECISA DESENVOLVER (3-6 sem)"
              ],
              [
                "9",
                "Não tenho pacientes suficientes pra justificar",
                "Rede de apoio (marketplace) + comunidade de estudos",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE"
              ],
              [
                "10",
                "Tenho poucos integrativos, maioria convênio",
                "Rede de apoio amplia base de pacientes integrativos",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE"
              ],
              [
                "11",
                "Consulta vira tentativa e erro disfarçada de ciência",
                "Motor Método ADS estrutura em Análise → Diagnóstico → Solução",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "12",
                "Exames na referência não explicam sintomas reais",
                "Análise funcional multidimensional (exames + sintomas + história)",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "13",
                "Protocolos genéricos falham em casos complexos",
                "Protocolo personalizado gerado por IA baseado no padrão individual",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "14",
                "Não tenho tempo pra análise causal profunda",
                "IA gera análise completa em 20 min pós-consulta (profissional só valida)",
                "DOR INERENTE",
                "JÁ EXISTE - Dealbreaker"
              ],
              [
                "15",
                "Sinto falta de apoio multidisciplinar, atendo sozinha",
                "Marketplace multidisciplinar + Comunidade fechada",
                "DOR INERENTE",
                "JÁ EXISTE (pronto, não lançado)"
              ],
              [
                "16",
                "Bugs ocasionais",
                "Resolvido via suporte (não entra na oferta)",
                "FRICÇÃO OPERACIONAL",
                "REMOVIDO"
              ],
              [
                "17",
                "Lentidão pontual",
                "Resolvido via suporte (não entra na oferta)",
                "FRICÇÃO OPERACIONAL",
                "REMOVIDO"
              ],
              [
                "18",
                "Faltam features em roadmap",
                "Resolvido via suporte (não entra na oferta)",
                "FRICÇÃO OPERACIONAL",
                "REMOVIDO"
              ],
              [
                "19",
                "Paciente não adere ao protocolo em casa",
                "App paciente web com checklist (plano treino + alimentar + terapêutico)",
                "DOR INERENTE",
                "JÁ EXISTE - Dealbreaker"
              ],
              [
                "20",
                "Não consigo acompanhar evolução longitudinal",
                "Dashboard de evolução do paciente (gráficos sintomas + exames)",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "21",
                "Não tenho como provar resultados pro paciente",
                "Relatório antes/depois com comparativo visual",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "22",
                "Não tenho casos pra mostrar (marketing profissional)",
                "Dashboard de casos anonimizados + export PDF",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "23",
                "Paciente esquece as instruções do protocolo",
                "Push notifications + vídeos curtos por orientação",
                "DOR INERENTE",
                "BACKLOG (depende de app mobile)"
              ],
              [
                "24",
                "Paciente não entende instruções complexas",
                "Tradução técnica para linguagem cotidiana com ícones visuais",
                "DOR INERENTE",
                "JÁ EXISTE"
              ],
              [
                "25",
                "Paciente abandona tratamento em 2-3 semanas",
                "Jornada automatizada de 21 dias + alertas de abandono",
                "DOR INERENTE",
                "BACKLOG (depende de automação)"
              ],
              [
                "26",
                "Caixa apertado — cliente cancela",
                "ROI via marketplace (ferramenta gera renda) + plano pausa 30 dias",
                "OBJEÇÃO COMPRA",
                "JÁ EXISTE - Dealbreaker"
              ]
            ]
          },
          {
            "type": "p",
            "text": "5.3. Descoberta Estratégica"
          },
          {
            "type": "p",
            "text": "74% da oferta Auton já existe como feature no produto. Só 4 itens precisam ser criados pré-lançamento:"
          },
          {
            "type": "p",
            "text": "#5 — 3 depoimentos em vídeo + Diagnóstico 0 (gravação + processo)"
          },
          {
            "type": "p",
            "text": "#6 — PDF cálculo de ROI (1 página pronta)"
          },
          {
            "type": "p",
            "text": "#7 — Plano Fundador com aula semanal (calendário + gravações)"
          },
          {
            "type": "p",
            "text": "#8 — Parecer jurídico + biblioteca de compliance (advogado contratado)"
          },
          {
            "type": "p",
            "text": "Nenhum desses exige desenvolvimento de produto. Tudo é material estático ou produção de conteúdo."
          },
          {
            "type": "p",
            "text": "5.4. Os 5 Dealbreakers — Todos com Solução Pronta"
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Dealbreaker",
                "Solução",
                "Status"
              ],
              [
                "1",
                "Trauma pós-ferramenta",
                "Garantia 7 dias dinheiro de volta",
                "✅ Já existe"
              ],
              [
                "3",
                "Sem tempo de aprender",
                "Onboarding 60min + call concierge",
                "✅ Já existe"
              ],
              [
                "14",
                "Sem tempo análise profunda",
                "IA em 20 min pós-consulta",
                "✅ Já existe"
              ],
              [
                "19",
                "Paciente não adere em casa",
                "App paciente web com checklist",
                "✅ Já existe"
              ],
              [
                "26",
                "Caixa apertado cancela",
                "ROI via marketplace + pausa 30d",
                "✅ Já existe"
              ]
            ]
          }
        ]
      },
      {
        "id": "oferta-6",
        "num": "6",
        "title": "Capítulo 10 — Trim & Stack (Oferta Empacotada)",
        "full_title": "6. Capítulo 10 — Trim & Stack (Oferta Empacotada)",
        "elements": [
          {
            "type": "p",
            "text": "“Trim what doesn’t add value. Stack what amplifies value.” — “Corte o que não adiciona valor. Empilhe o que amplifica valor.”"
          },
          {
            "type": "p",
            "text": "6.1. Os 4 Movimentos Executados"
          },
          {
            "type": "p",
            "text": "TRIM (cortar) — 0 soluções cortadas. Todas as 21 ativas têm valor."
          },
          {
            "type": "p",
            "text": "CORE vs BÔNUS — 10 soluções no Core, 11 viram bônus ou processo de venda."
          },
          {
            "type": "p",
            "text": "STACK em DELIVERY VEHICLES — 5 Vehicles principais + Arsenal de Vendas separado."
          },
          {
            "type": "p",
            "text": "ORDEM DE REVELAÇÃO — Vehicles 1-3 na landing; Vehicles 4-5 no pitch; Arsenal sob demanda."
          },
          {
            "type": "p",
            "text": "6.2. Decisões Estratégicas Tomadas"
          },
          {
            "type": "p",
            "text": "Decisão 1 — Kit Confiança & Compliance vira Arsenal de Vendas"
          },
          {
            "type": "p",
            "text": "Garantia, depoimentos, PDF ROI e parecer jurídico não aparecem como bônus na landing. Funcionam melhor como “munição” do time de vendas, entregue quando o cliente faz uma objeção específica."
          },
          {
            "type": "p",
            "text": "Decisão 2 — Flex Comercial (Plano de Pausa) removido da oferta"
          },
          {
            "type": "p",
            "text": "Decisão estratégica de apostar em ROI real via marketplace como mecanismo de retenção. Se a Auton entrega R$ 11.000+ de valor, cliente em “caixa apertado” não cancela porque a ferramenta paga sozinha. Risco: se aparecer churn por motivo financeiro depois do lançamento, revisitar."
          },
          {
            "type": "p",
            "text": "Decisão 3 — Backlog mobile separado da oferta principal"
          },
          {
            "type": "p",
            "text": "Push notifications e jornada de 21 dias dependem do app mobile, que ainda não existe. Lançamos com app web (que já existe e atende o dealbreaker #19) e adicionamos mobile na Fase 2."
          },
          {
            "type": "p",
            "text": "6.3. Os Vehicles em Detalhe"
          },
          {
            "type": "table",
            "rows": [
              [
                "Categoria",
                "Vehicle",
                "Componentes",
                "Argumento de venda"
              ],
              [
                "PRODUTO PRINCIPAL",
                "🏛️ Plataforma ADS — Diagnóstico Inteligente",
                "Motor Método ADS + Análise multidimensional + Protocolo personalizado IA + Análise em 20 min + Tradução técnica → linguagem simples + Dashboard de casos com export PDF",
                "“Transforme cada consulta em diagnóstico de causa raiz com método, em vez de tentativa e erro.”"
              ],
              [
                "PRODUTO PRINCIPAL",
                "📱 App do Paciente — Adesão e Acompanhamento",
                "App web com checklist (planos treino + alimentar + terapêutico) + Dashboard de evolução longitudinal + Relatório antes/depois com comparativo visual",
                "“Seu paciente não some entre consultas — tem app, acompanha, vê evolução.”"
              ],
              [
                "PRODUTO PRINCIPAL",
                "🤝 Rede Auton — Comunidade + Marketplace",
                "Comunidade fechada de casos clínicos + Marketplace multidisciplinar (Auton 15% / profissional 85%)",
                "“Você não está mais sozinha — discute com colegas e ganha indicando.”"
              ],
              [
                "EXTRAS QUE ACOMPANHAM",
                "🚀 Onboarding Concierge",
                "Curso 60min na plataforma + Call concierge dedicada na 1ª semana + Migração de dados gratuita em 48h",
                "“Você está usando produtivamente em 1 hora, sem migrar nada manualmente.”"
              ],
              [
                "EXTRAS QUE ACOMPANHAM",
                "🎓 Plano Fundador",
                "1 aula por semana com professor especialista (não necessariamente Barakat)",
                "“Você não compra software — entra em programa de evolução profissional contínua.”"
              ],
              [
                "ARSENAL DE VENDAS (sob demanda)",
                "Garantia 7 dias",
                "Devolução total do dinheiro em 7 dias, sem perguntas",
                "Resposta para cliente cético sobre risco — se não gostar, devolvemos."
              ],
              [
                "ARSENAL DE VENDAS (sob demanda)",
                "3 depoimentos em vídeo",
                "3 betas satisfeitos gravando depoimento sobre uso real e resultado",
                "Resposta para cliente cético sobre resultado — olha o que outros profissionais dizem."
              ],
              [
                "ARSENAL DE VENDAS (sob demanda)",
                "PDF cálculo de ROI",
                "Documento de 1 página com matemática R$ 1.497 → R$ 11.450 entregue",
                "Resposta para marido/sócio que questiona investimento — faça a conta."
              ],
              [
                "ARSENAL DE VENDAS (sob demanda)",
                "Parecer jurídico + compliance",
                "Parecer pronto pelos conselhos (CFM/CFN/CFP) + biblioteca de cases de uso conforme compliance",
                "Resposta para preocupação com conselho profissional — tudo em conformidade."
              ],
              [
                "BACKLOG (Fase 2 — mobile)",
                "Push notifications + vídeos por orientação",
                "App mobile do paciente com push notifications + vídeos curtos explicando cada orientação",
                "Aumenta drasticamente adesão do paciente — lançado na Fase 2."
              ],
              [
                "BACKLOG (Fase 2 — mobile)",
                "Jornada automatizada de 21 dias",
                "Fluxo automatizado de engajamento nos primeiros 21 dias do paciente + alertas de abandono pro profissional",
                "Reduz churn de paciente em 40-60% — lançado na Fase 2."
              ]
            ]
          }
        ]
      },
      {
        "id": "oferta-7",
        "num": "7",
        "title": "A Oferta Auton Final — 1 página",
        "full_title": "7. A Oferta Auton Final — 1 página",
        "elements": [
          {
            "type": "p",
            "text": "7.1. Posicionamento"
          },
          {
            "type": "p",
            "text": "“A 1ª IA de causa raiz, agora em rede.\nDiagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar.\nAuton: a plataforma sistêmica da saúde integrativa.”"
          },
          {
            "type": "p",
            "text": "7.2. Pricing"
          },
          {
            "type": "p",
            "text": "Turma Fundadora (validação): R$ 397/mês anual ou R$ 497/mês mensal — 200 vagas"
          },
          {
            "type": "p",
            "text": "Starter: R$ 997 mensal / R$ 797 anual"
          },
          {
            "type": "p",
            "text": "Pro (hero): R$ 1.497 mensal / R$ 1.197 anual"
          },
          {
            "type": "p",
            "text": "Enterprise: a partir de R$ 4.997 mensal"
          },
          {
            "type": "p",
            "text": "7.3. Valor Entregue"
          },
          {
            "type": "p",
            "text": "Dream Outcome: R$ 13.470/mês"
          },
          {
            "type": "p",
            "text": "Likelihood (com nossas provas): 85%"
          },
          {
            "type": "p",
            "text": "Valor percebido pelo cliente: R$ 11.450/mês"
          },
          {
            "type": "p",
            "text": "ROI no Pro: 7,6× mensal / 9,5× anual"
          },
          {
            "type": "p",
            "text": "7.4. Oferta Empacotada"
          },
          {
            "type": "p",
            "text": "Produto Principal (3 Vehicles na landing)"
          },
          {
            "type": "p",
            "text": "🏛️ Plataforma ADS — Diagnóstico Inteligente"
          },
          {
            "type": "p",
            "text": "Motor Método ADS + Análise multidimensional + Protocolo personalizado por IA + Análise em 20 min pós-consulta + Tradução técnica → linguagem simples + Dashboard de casos com export."
          },
          {
            "type": "p",
            "text": "📱 App do Paciente — Adesão e Acompanhamento"
          },
          {
            "type": "p",
            "text": "App web com checklist (planos de treino + alimentar + terapêutico) + Dashboard de evolução longitudinal + Relatório antes/depois com comparativo visual."
          },
          {
            "type": "p",
            "text": "🤝 Rede Auton — Comunidade + Marketplace"
          },
          {
            "type": "p",
            "text": "Comunidade fechada de casos clínicos + Marketplace multidisciplinar (15% comissão para Auton, 85% para o profissional)."
          },
          {
            "type": "p",
            "text": "Extras que acompanham (2 Vehicles revelados no pitch)"
          },
          {
            "type": "p",
            "text": "🚀 Onboarding Concierge"
          },
          {
            "type": "p",
            "text": "Curso 60min na plataforma + Call concierge dedicada na 1ª semana + Migração de dados gratuita em 48h."
          },
          {
            "type": "p",
            "text": "🎓 Plano Fundador"
          },
          {
            "type": "p",
            "text": "1 aula por semana com professor especialista (não necessariamente Barakat)."
          },
          {
            "type": "p",
            "text": "Arsenal de Vendas (sob demanda, não na landing)"
          },
          {
            "type": "p",
            "text": "Cliente cético sobre risco → PDF da garantia 7 dias dinheiro de volta"
          },
          {
            "type": "p",
            "text": "Cliente cético sobre resultado → 3 depoimentos em vídeo"
          },
          {
            "type": "p",
            "text": "Marido/sócio questiona investimento → PDF cálculo de ROI"
          },
          {
            "type": "p",
            "text": "Conselho profissional preocupa → parecer jurídico + biblioteca compliance"
          },
          {
            "type": "p",
            "text": "Backlog pós-lançamento (Fase 2 — depende de app mobile)"
          },
          {
            "type": "p",
            "text": "Push notifications + vídeos curtos por orientação para o paciente"
          },
          {
            "type": "p",
            "text": "Jornada automatizada de 21 dias do paciente"
          }
        ]
      },
      {
        "id": "oferta-8",
        "num": "8",
        "title": "Próximos Passos — Capítulos 11 a 16",
        "full_title": "8. Próximos Passos — Capítulos 11 a 16",
        "elements": [
          {
            "type": "p",
            "text": "A oferta Auton v1.0 está travada. Os Capítulos 11-16 da Seção IV de “$100M Offers” vão turbinar essa oferta."
          },
          {
            "type": "table",
            "rows": [
              [
                "Capítulo",
                "Tema",
                "Aplicação prevista"
              ],
              [
                "Cap 11",
                "Enhancing the Offer",
                "Como turbinar a oferta v1.0 travada"
              ],
              [
                "Cap 12",
                "Scarcity (Escassez)",
                "Limite de 200 vagas no Plano Fundador"
              ],
              [
                "Cap 13",
                "Urgency (Urgência)",
                "Deadline real do lançamento março/2026"
              ],
              [
                "Cap 14",
                "Bonuses (Bônus)",
                "Quais dos 21 ingredientes viram bônus nomeados?"
              ],
              [
                "Cap 15",
                "Guarantees (Garantias)",
                "Garantia anti-hipotética + garantia de ROI do marketplace"
              ],
              [
                "Cap 16",
                "Naming / MAGIC",
                "Nome oficial de cada Vehicle e da oferta toda"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Pendências críticas mapeadas"
          },
          {
            "type": "p",
            "text": "Refazer P&L com pricing novo (R$ 997 / 1.497 / 4.997) e premissas realistas"
          },
          {
            "type": "p",
            "text": "Atualizar landing autonhealth.com.br com “agora em rede” + pricing"
          },
          {
            "type": "p",
            "text": "Reescrever Pitch Deck em 8 slides com tração real"
          },
          {
            "type": "p",
            "text": "Reescrever Apresentação comercial em 8-10 slides focados em transformação"
          },
          {
            "type": "p",
            "text": "Atualizar Lean Canvas com pricing oficial e oferta v1.0"
          },
          {
            "type": "p",
            "text": "Lançar publicamente Marketplace + Comunidade (prontos, não lançados)"
          },
          {
            "type": "p",
            "text": "4 items a criar pré-lançamento"
          },
          {
            "type": "p",
            "text": "PDF cálculo de ROI (1 página, R$ 1.497 → R$ 11.450) — 3-5 dias"
          },
          {
            "type": "p",
            "text": "3 depoimentos em vídeo + processo Diagnóstico 0 — 1-2 semanas"
          },
          {
            "type": "p",
            "text": "Plano Fundador com aula semanal (professor, calendário, formato) — 3-4 semanas"
          },
          {
            "type": "p",
            "text": "Parecer jurídico + biblioteca compliance (CFM/CFN/CFP) — 3-6 semanas"
          },
          {
            "type": "p",
            "text": "Regra pós-lançamento a definir"
          },
          {
            "type": "p",
            "text": "Regra de migração dos Fundadores (Turma Fundadora → Starter/Pro/Enterprise) — antes do lançamento da escala"
          }
        ]
      }
    ]
  },
  {
    "id": "mercado",
    "label": "Mercado BR",
    "icon": "BarChart3",
    "tagline": "Estudo de mercado · 2026",
    "sections": [
      {
        "id": "mercado-1",
        "num": "1",
        "title": "Sumário Executivo",
        "full_title": "1. Sumário Executivo",
        "elements": [
          {
            "type": "p",
            "text": "O mercado brasileiro de profissionais de saúde regulamentados soma 2,9 milhões de registros ativos distribuídos em 8 conselhos federais (CFM, CFO, COFEN, CFN, CFF, CFP, COFFITO, CFBM). Dentro desse universo, estima-se que aproximadamente 295 mil profissionais praticam alguma forma de saúde integrativa, funcional ou complementar — o equivalente a cerca de 10% do total. Desses, cerca de 133 mil são considerados ativos em aquisição de educação continuada, software clínico, ferramentas de inteligência artificial ou comunidades profissionais pagas no período de 12 meses."
          },
          {
            "type": "p",
            "text": "O gasto anual médio por profissional ativo em soluções auxiliares à prática (marketing digital, educação, software, IA clínica, ferramentas horizontais) é estimado em R$ 8.400/ano, resultando em um SAM (Serviceable Available Market) de aproximadamente R$ 1,12 bilhão por ano. O TAM amplo, considerando toda a saúde regulamentada, alcança R$ 15 a 20 bilhões anuais."
          },
          {
            "type": "p",
            "text": "As quatro profissões com maior afinidade integrativa (nutricionistas, fisioterapeutas, psicólogos e biomédicos) são também as que apresentam os maiores CAGRs demográficos no período 2019–2024 (6,1% a 10,1% ao ano), indicando confluência favorável entre tendência cultural e crescimento do universo profissional. O mercado de healthtech brasileiro cresce a 23% ao ano em número de startups, e a busca online por termos como “medicina funcional” e “nutricionista funcional” aumentou entre 120% e 200% nos últimos cinco anos."
          },
          {
            "type": "p",
            "text": "O cenário competitivo está segmentado em quatro camadas principais: prontuário eletrônico (dominado por Amigo Tech, HiDoctor e iClinic), IA clínica (VOA Health lidera com 60 mil profissionais, em disputa aberta com Noa, Naomed e Amplimed IA), educação integrativa (USI, VP/Valeria Paschoal, IBRAMI, Afya e ABRAN) e comunidades pagas (mercado hiperfragmentado, sem player dominante). Nenhum dos líderes atuais é posicionado especificamente para o profissional integrativo — há espaço em branco técnico e de posicionamento."
          }
        ]
      },
      {
        "id": "mercado-2",
        "num": "2",
        "title": "TAM, SAM e SOM",
        "full_title": "2. TAM, SAM e SOM",
        "elements": [
          {
            "type": "p",
            "text": "Os números abaixo representam o mercado de profissionais de saúde brasileiros organizados em três círculos concêntricos: o universo total regulamentado (TAM), o subconjunto com prática integrativa ou funcional (SAM) e a fração ativa em compra de soluções no último ano (SAM servicerable)."
          },
          {
            "type": "table",
            "rows": [
              [
                "Métrica",
                "Universo",
                "Ticket anual médio",
                "Valor"
              ],
              [
                "TAM",
                "2,9 milhões de profissionais (8 conselhos)",
                "R$ 5–7 mil",
                "R$ 15–20 bi/ano"
              ],
              [
                "SAM",
                "295 mil profissionais integrativa/funcional",
                "R$ 8 mil",
                "R$ 2,36 bi/ano"
              ],
              [
                "SAM ativo",
                "133 mil ICP ativo em compra 12m",
                "R$ 8.400",
                "R$ 1,12 bi/ano"
              ],
              [
                "SAM regional SP+RJ+MG",
                "66 mil ICP ativo (50% do BR)",
                "R$ 8.400",
                "R$ 555 MM/ano"
              ]
            ]
          },
          {
            "type": "p",
            "text": "O SAM ativo (R$ 1,12 bi/ano) representa o mercado realisticamente endereçável por qualquer player que ofereça solução no stack do profissional integrativo. Um player com captura de 10% desse mercado ao longo de cinco anos atinge ARR de aproximadamente R$ 112 milhões."
          }
        ]
      },
      {
        "id": "mercado-3",
        "num": "3",
        "title": "Dimensionamento em Pessoas",
        "full_title": "3. Dimensionamento em Pessoas",
        "elements": [
          {
            "type": "p",
            "text": "3.1 Universo por profissão (2024)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Profissão (Conselho)",
                "Ativos BR",
                "Afinidade integrativa",
                "Penetração integrativa",
                "Universo"
              ],
              [
                "Médicos (CFM)",
                "575.000",
                "Média-Alta",
                "5–8%",
                "29–46 mil"
              ],
              [
                "Dentistas (CFO)",
                "380.000",
                "Média",
                "3–5%",
                "11–19 mil"
              ],
              [
                "Enfermeiros nível superior (COFEN)",
                "850.000",
                "Média (barreira CLT 78%)",
                "3–5%",
                "25–42 mil"
              ],
              [
                "Nutricionistas (CFN)",
                "190.000",
                "Muito Alta (9/10 naturopatia)",
                "20–30%",
                "38–57 mil"
              ],
              [
                "Farmacêuticos (CFF)",
                "240.000",
                "Alta (fito+homeopatia+manipulação)",
                "6–9%",
                "14–22 mil"
              ],
              [
                "Psicólogos (CFP)",
                "470.000",
                "Alta (terapia integrativa no topo)",
                "12–18%",
                "56–85 mil"
              ],
              [
                "Fisioterapeutas (COFFITO)",
                "320.000",
                "Muito Alta (8,5/10 ozônio)",
                "15–25%",
                "48–80 mil"
              ],
              [
                "Biomédicos (CFBM)",
                "70.000",
                "Alta (8,5/10 ozônio, ortomolecular)",
                "10–15%",
                "7–11 mil"
              ],
              [
                "TOTAL BR",
                "3,09 milhões",
                "Média ~8%",
                "—",
                "228–362 mil"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Universo total de profissionais com prática integrativa ou funcional no Brasil: entre 228 mil (cenário conservador) e 362 mil (cenário otimista). Ponto central realista: aproximadamente 295 mil. As três profissões com maior penetração integrativa (nutricionistas 25%, fisioterapeutas 20%, psicólogos 15%) concentram cerca de 60% do universo total."
          },
          {
            "type": "p",
            "text": "3.2 ICP ativo (em compra nos últimos 12 meses)"
          },
          {
            "type": "p",
            "text": "Nem todo profissional integrativo está em momento ativo de aquisição de ferramentas, educação ou comunidade. Aplicando fator de ativação estimado entre 30% e 55% por profissão (calibrado contra bases conhecidas: USI 5 mil alunos ativos, VP Centro 5–8 mil ativos + 40 mil alumni, IBRAMI 2–4 mil, Afya com aproximadamente 12 mil em trilhas integrativas, ABRAN 6 mil sócios), chega-se a um ICP ativo entre 80 mil (conservador) e 200 mil (otimista), com ponto central realista em 133 mil."
          },
          {
            "type": "table",
            "rows": [
              [
                "Profissão",
                "Universo integrativo",
                "Fator ativação",
                "ICP ativo",
                "Share"
              ],
              [
                "Fisioterapeutas",
                "64 mil",
                "45%",
                "29 mil",
                "22%"
              ],
              [
                "Psicólogos",
                "70 mil",
                "40%",
                "28 mil",
                "21%"
              ],
              [
                "Nutricionistas",
                "47 mil",
                "55%",
                "26 mil",
                "20%"
              ],
              [
                "Médicos",
                "37 mil",
                "50%",
                "19 mil",
                "14%"
              ],
              [
                "Enfermeiros superior",
                "33 mil",
                "30%",
                "10 mil",
                "8%"
              ],
              [
                "Farmacêuticos",
                "18 mil",
                "50%",
                "9 mil",
                "7%"
              ],
              [
                "Dentistas",
                "15 mil",
                "45%",
                "7 mil",
                "5%"
              ],
              [
                "Biomédicos",
                "9 mil",
                "50%",
                "5 mil",
                "3%"
              ],
              [
                "TOTAL BR",
                "295 mil",
                "~45%",
                "133 mil",
                "100%"
              ]
            ]
          },
          {
            "type": "p",
            "text": "3.3 Cenários"
          },
          {
            "type": "table",
            "rows": [
              [
                "Cenário",
                "Premissas",
                "ICP ativo BR"
              ],
              [
                "Conservador",
                "Penetração integrativa no piso; ativação 35%",
                "80 mil"
              ],
              [
                "Realista",
                "Penetração média; ativação 45%",
                "133 mil"
              ],
              [
                "Otimista",
                "Penetração no topo; ativação 55%",
                "200 mil"
              ]
            ]
          },
          {
            "type": "p",
            "text": "3.4 Recorte geográfico (cenário realista)"
          },
          {
            "type": "p",
            "text": "Aplicando os pesos regionais típicos da saúde brasileira (Demografia Médica 2023, PNAD Contínua, concentração de profissionais em capitais), o eixo Sudeste concentra aproximadamente metade do ICP ativo nacional."
          },
          {
            "type": "table",
            "rows": [
              [
                "Região",
                "Share",
                "ICP ativo",
                "Nota"
              ],
              [
                "São Paulo",
                "32%",
                "~42 mil",
                "Capital + Campinas + ABC + Ribeirão; concentração de VP, IBRAMI e ABMI"
              ],
              [
                "Rio de Janeiro",
                "10%",
                "~13 mil",
                "Capital + Barra + Niterói; forte base médica"
              ],
              [
                "Minas Gerais",
                "8%",
                "~11 mil",
                "Belo Horizonte + interior de alta renda"
              ],
              [
                "Sul (RS+SC+PR)",
                "15%",
                "~20 mil",
                "Porto Alegre, Curitiba, Florianópolis"
              ],
              [
                "Nordeste",
                "22%",
                "~29 mil",
                "Pulverizado; Recife, Salvador, Fortaleza"
              ],
              [
                "Outras regiões",
                "13%",
                "~18 mil",
                "Centro-Oeste e Norte"
              ],
              [
                "Total BR",
                "100%",
                "133 mil",
                ""
              ]
            ]
          }
        ]
      },
      {
        "id": "mercado-4",
        "num": "4",
        "title": "Gasto da Categoria em R$",
        "full_title": "4. Gasto da Categoria em R$",
        "elements": [
          {
            "type": "p",
            "text": "O gasto anual do profissional integrativo em soluções auxiliares à prática clínica e ao negócio é heterogêneo — depende fortemente da renda, do regime de trabalho (autônomo vs. CLT) e do estágio de carreira. A estratificação por tier de renda revela três faixas distintas."
          },
          {
            "type": "p",
            "text": "4.1 Stack anual por tier de renda"
          },
          {
            "type": "table",
            "rows": [
              [
                "Tier",
                "Profissões",
                "Renda mensal",
                "Stack anual médio"
              ],
              [
                "Premium",
                "Médicos",
                "R$ 20–50 mil",
                "R$ 22 mil"
              ],
              [
                "Médio",
                "Dentistas com consultório próprio; farmacêuticos com farmácia própria",
                "R$ 8–12 mil",
                "R$ 10 mil"
              ],
              [
                "Base",
                "Nutricionistas, psicólogos, fisioterapeutas, enfermeiros, biomédicos",
                "R$ 4–7 mil",
                "R$ 5.500"
              ]
            ]
          },
          {
            "type": "p",
            "text": "4.2 Decomposição do SAM por subcategoria"
          },
          {
            "type": "p",
            "text": "No SAM ativo de R$ 1,12 bi/ano, o maior bolso é marketing digital — profissionais integrativos são altamente dependentes de Instagram e conteúdo educativo para aquisição de pacientes privados. Em seguida vem educação continuada (categoria que só cresce, dada a natureza de formação permanente do segmento), ferramentas horizontais (ChatGPT, contabilidade PJ, produtividade), software clínico e, por fim, IA clínica — esta última ainda em curva inicial de adoção mas crescendo rapidamente."
          },
          {
            "type": "table",
            "rows": [
              [
                "Subcategoria",
                "% do SAM",
                "R$ MM/ano",
                "Players de referência"
              ],
              [
                "Marketing digital (Ads, freela social, CRM, perfil pago)",
                "55%",
                "616",
                "RD Station, Meta/Google Ads, Doctoralia Pro, freelas"
              ],
              [
                "Educação continuada (pós, cursos, comunidades)",
                "20%",
                "224",
                "USI, VP, IBRAMI, ABRAN, Afya, Sanar"
              ],
              [
                "Ferramentas horizontais (IA geral, agenda, contabilidade)",
                "12%",
                "134",
                "ChatGPT, Notion, Contabilizei, Calendly"
              ],
              [
                "Software clínico / EHR",
                "8%",
                "90",
                "Amigo Tech, iClinic, HiDoctor, Amplimed, Feegow"
              ],
              [
                "IA clínica / transcrição / copiloto",
                "5%",
                "56",
                "VOA, Noa, Naomed, Clinicorp IA, Amplimed IA"
              ],
              [
                "Total SAM ativo",
                "100%",
                "1.120",
                ""
              ]
            ]
          },
          {
            "type": "p",
            "text": "4.3 Cenários do SAM financeiro"
          },
          {
            "type": "table",
            "rows": [
              [
                "Cenário",
                "ICP ativo",
                "Ticket ponderado",
                "SAM anual"
              ],
              [
                "Conservador",
                "80 mil",
                "R$ 6.500",
                "R$ 520 MM"
              ],
              [
                "Realista",
                "133 mil",
                "R$ 8.400",
                "R$ 1,12 bi"
              ],
              [
                "Otimista",
                "200 mil",
                "R$ 10.500",
                "R$ 2,10 bi"
              ]
            ]
          }
        ]
      },
      {
        "id": "mercado-5",
        "num": "5",
        "title": "Crescimento e Tendências",
        "full_title": "5. Crescimento e Tendências",
        "elements": [
          {
            "type": "p",
            "text": "5.1 CAGR demográfico dos conselhos (2019–2024)"
          },
          {
            "type": "p",
            "text": "Os conselhos com maior CAGR são também os que concentram as profissões de maior afinidade integrativa. Essa confluência entre crescimento demográfico e tendência cultural sustenta a projeção de expansão do ICP ativo nos próximos cinco anos."
          },
          {
            "type": "table",
            "rows": [
              [
                "Conselho (profissão)",
                "2019",
                "2024",
                "CAGR 5 anos"
              ],
              [
                "CFBM (biomédicos)",
                "65 mil",
                "105 mil",
                "10,1%"
              ],
              [
                "COFFITO (fisio + TO)",
                "290 mil",
                "395 mil",
                "6,4%"
              ],
              [
                "CFN (nutricionistas)",
                "155 mil",
                "210 mil",
                "6,3%"
              ],
              [
                "CFP (psicólogos)",
                "380 mil",
                "510 mil",
                "6,1%"
              ],
              [
                "COFEN (enfermagem total)",
                "2,30 mi",
                "2,85 mi",
                "4,4%"
              ],
              [
                "CFF (farmacêuticos)",
                "215 mil",
                "260 mil",
                "3,9%"
              ],
              [
                "CFO (dentistas)",
                "330 mil",
                "382 mil",
                "3,0%"
              ],
              [
                "CFM (médicos)",
                "502 mil",
                "575 mil",
                "2,8%"
              ]
            ]
          },
          {
            "type": "p",
            "text": "5.2 Drivers específicos da saúde integrativa e funcional"
          },
          {
            "type": "p",
            "text": "Pós-graduações em nutrição funcional: crescimento de aproximadamente 40 para 120–150 cursos em 5 anos (triplicou)."
          },
          {
            "type": "p",
            "text": "Pós em saúde integrativa ou funcional: 15 para 50–70 cursos no mesmo período."
          },
          {
            "type": "p",
            "text": "Google Trends — termo “médico funcional”: +150% a +200% em 5 anos."
          },
          {
            "type": "p",
            "text": "Google Trends — termo “nutricionista funcional”: +120% a +160%."
          },
          {
            "type": "p",
            "text": "Telemedicina: consultas online passaram de 50 mil/ano (2019) para 7–10 milhões/ano (2024), segundo dados do CFM e SBIS."
          },
          {
            "type": "p",
            "text": "Adoção de IA clínica em hospitais brasileiros: 8% em 2020 para 35–40% em 2025, segundo TIC Saúde e ANAHP."
          },
          {
            "type": "p",
            "text": "PNPIC (Política Nacional de Práticas Integrativas e Complementares) ampliou cobertura no SUS para 29 práticas desde 2017."
          },
          {
            "type": "p",
            "text": "5.3 Mercado de healthtech brasileiro (referência setorial)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Ano",
                "Startups healthtech",
                "Investimento (USD)",
                "Fonte"
              ],
              [
                "2019",
                "~380",
                "US$ 70 MM",
                "Distrito Healthtech Report 2020"
              ],
              [
                "2020",
                "~540",
                "US$ 110 MM",
                "Distrito 2021"
              ],
              [
                "2021",
                "~680",
                "US$ 510 MM (pico)",
                "Distrito 2022"
              ],
              [
                "2022",
                "~820",
                "US$ 280 MM",
                "Distrito 2023"
              ],
              [
                "2023",
                "~950",
                "US$ 180 MM",
                "Distrito 2024"
              ],
              [
                "2024",
                "~1.050",
                "US$ 220 MM",
                "Distrito, ABSS, Liga Ventures"
              ]
            ]
          },
          {
            "type": "p",
            "text": "CAGR do número de startups healthtech 2019–2024: aproximadamente 23% ao ano. Investimento sofreu correção pós-2021 mas permanece em patamar quatro vezes superior a 2019."
          },
          {
            "type": "p",
            "text": "5.4 Projeção do ICP ativo (2026–2029)"
          },
          {
            "type": "p",
            "text": "A projeção aplica CAGR ponderado pelas profissões de maior afinidade integrativa (nutri, fisio, psico, biomed), que crescem entre 6% e 10% ao ano no universo profissional. Somando-se a expansão de pós-graduações, telemedicina e Google Trends, chega-se a uma estimativa de CAGR do ICP ativo entre 8% e 16%, com ponto central em 12% ao ano."
          },
          {
            "type": "table",
            "rows": [
              [
                "Cenário",
                "CAGR",
                "ICP ativo 2029",
                "SAM financeiro 2029"
              ],
              [
                "Conservador",
                "8%",
                "~195 mil",
                "R$ 1,6 bi/ano"
              ],
              [
                "Base",
                "12%",
                "~234 mil",
                "R$ 2,0 bi/ano"
              ],
              [
                "Otimista",
                "16%",
                "~280 mil",
                "R$ 2,4 bi/ano"
              ]
            ]
          }
        ]
      },
      {
        "id": "mercado-6",
        "num": "6",
        "title": "Cenário Competitivo",
        "full_title": "6. Cenário Competitivo",
        "elements": [
          {
            "type": "p",
            "text": "O cenário competitivo do mercado que serve profissionais de saúde integrativa no Brasil é composto por quatro camadas principais: prontuário eletrônico e gestão de consultório, IA clínica, educação continuada em saúde integrativa/funcional, e comunidades profissionais pagas. Em cada camada existem players maduros, mas nenhum deles é posicionado especificamente para o profissional integrativo — a maior parte dos produtos foi construída para a medicina convencional ou para gestão administrativa genérica."
          },
          {
            "type": "p",
            "text": "6.1 Prontuário eletrônico e gestão de consultório"
          },
          {
            "type": "table",
            "rows": [
              [
                "Player",
                "Preço (R$/mês)",
                "Usuários BR estimados",
                "Foco"
              ],
              [
                "Amigo Tech",
                "Amigo One gratuito; Clinic/Intelligence sob consulta",
                "65 mil+ profissionais",
                "Multiprofissional, freemium agressivo"
              ],
              [
                "HiDoctor (Centralx)",
                "99–249 + licença desktop perpétua",
                "40–60 mil",
                "Médico tradicional, base legada"
              ],
              [
                "iClinic (Afya)",
                "139–379 por usuário",
                "30–45 mil",
                "Médico; ecossistema Afya"
              ],
              [
                "Doctoralia Practice",
                "179–429 por usuário",
                "20–35 mil assinantes pagos",
                "Ligado a marketplace de pacientes"
              ],
              [
                "Amplimed",
                "129–349 por usuário",
                "15–25 mil",
                "Médico cloud-native"
              ],
              [
                "Feegow",
                "249–899 por clínica",
                "4–6 mil clínicas",
                "Gestão multiusuário"
              ],
              [
                "Simples Dental",
                "189–549 por clínica",
                "10–14 mil clínicas odonto",
                "Líder em odontologia"
              ],
              [
                "Ninsaúde Apolo",
                "99–299 por usuário",
                "8–15 mil",
                "Multiprofissional"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Observação: Amigo Tech tornou-se o player com maior base de profissionais no Brasil (mais de 65 mil), apoiado em modelo freemium do Amigo One (aplicativo gratuito) e cross-sell para o Amigo Clinic pago. Nenhum dos players da tabela oferece campos nativos para anamnese funcional estruturada, protocolos de suplementação ortomolecular com checagem de interações, integração com laboratórios funcionais (painéis de microbioma, neurotransmissores urinários, perfis ortomoleculares) ou timeline no padrão IFM (Institute for Functional Medicine)."
          },
          {
            "type": "p",
            "text": "6.2 IA clínica, transcrição e copilotos"
          },
          {
            "type": "table",
            "rows": [
              [
                "Player",
                "Preço (R$/mês)",
                "Usuários BR",
                "Observação"
              ],
              [
                "VOA Health",
                "249 (Pro anual)",
                "60 mil+ profissionais (out/2025)",
                "Líder em tração; scribe em tempo real"
              ],
              [
                "Amigo Intelligence",
                "Sob consulta (embutido)",
                "Cross-sell na base de 65 mil Amigo Tech",
                "Organiza prontuário + interpretação de exames"
              ],
              [
                "Noa (Docplanner)",
                "150–300",
                "Cross-sell no marketplace Doctoralia",
                "Notas clínicas pós-consulta"
              ],
              [
                "Clinicorp IA",
                "299 (sem fidelidade)",
                "Não divulgado",
                "Integrado ao Clinicorp odonto/médico"
              ],
              [
                "Naomed / Noa Notes",
                "197–497",
                "2–5 mil",
                "Scribe + prontuário leve"
              ],
              [
                "Amplimed IA (add-on)",
                "+79 a 149 sobre plano base",
                "3–6 mil",
                "Upsell na base Amplimed"
              ],
              [
                "Lara.ai",
                "179–399",
                "1–2 mil",
                "Early-stage"
              ],
              [
                "Clinia.ai",
                "199–449",
                "800–2 mil",
                "Early-stage"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Categoria em crescimento acelerado (CAGR estimado superior a 80% ao ano). VOA Health disparou de praticamente zero para mais de 60 mil profissionais em menos de dois anos. Janela de consolidação estimada em 18–24 meses antes de M&A pelos grandes de EHR. Nenhum scribe do mercado está especificamente fine-tuned em vocabulário integrativo (MTHFR, permeabilidade intestinal, timeline IFM, cortisol salivar, cronobiologia, fitoterápicos e suplementação ortomolecular)."
          },
          {
            "type": "p",
            "text": "6.3 Educação continuada em saúde integrativa e funcional"
          },
          {
            "type": "table",
            "rows": [
              [
                "Player",
                "Preço",
                "Alunos/alumni estimados",
                "Foco"
              ],
              [
                "USI – Universidade Saúde Integrativa",
                "R$ 150–350/mês (pós)",
                "5 mil ativos / 3 mil formados",
                "Integrativa + funcional multiprofissional"
              ],
              [
                "VP – Valeria Paschoal Centro de Nutrição Funcional",
                "R$ 12–25 mil (pós total)",
                "5–8 mil ativos / 40 mil alumni",
                "Nutrição funcional (desde 1998)"
              ],
              [
                "IBRAMI",
                "R$ 6–18 mil (pós/cursos)",
                "2–4 mil ativos / ~12 mil alumni",
                "Saúde integrativa com foco médico"
              ],
              [
                "ABRAN (parte em funcional)",
                "R$ 60–225/mês",
                "~6 mil sócios",
                "Nutrologia / nutrição funcional"
              ],
              [
                "Afya Educa (trilhas integrativas)",
                "R$ 300–600/mês",
                "~12 mil em trilhas integrativas",
                "Médico generalista com módulos"
              ],
              [
                "Hospital Einstein / Sírio-Libanês",
                "R$ 3–20 mil por módulo",
                "Turmas de 100–500",
                "Lifestyle e saúde integrativa premium"
              ],
              [
                "Sanar / SanarFlix",
                "R$ 46,90–129/mês",
                "150–250 mil assinantes (parte em integrativa)",
                "Amplo, maior em medicina convencional"
              ],
              [
                "Institutos locais (ozônio, ortomolecular, fito)",
                "Variado",
                "10–15 mil somados",
                "Nichos específicos"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Estima-se que o universo agregado de alunos pagantes de educação integrativa ou funcional no Brasil está entre 45 mil e 65 mil pessoas. Valeria Paschoal é referência histórica dominante em nutrição funcional (base cumulativa de mais de 40 mil alunos formados desde 1998). Afya e Sanar dominam o mercado geral de educação médica mas têm oferta relativamente rasa em integrativa. USI aparece como o player mais relevante em formação multiprofissional integrativa ativa."
          },
          {
            "type": "p",
            "text": "6.4 Comunidades profissionais pagas"
          },
          {
            "type": "p",
            "text": "O mercado de comunidades pagas para profissionais integrativos é hiperfragmentado, informal e sem player dominante consolidado. Predominam grupos de WhatsApp e Telegram (tickets típicos de R$ 97 a R$ 297/mês), mentorias de médicos e nutricionistas com audiência nas redes sociais (tickets de R$ 3 mil a R$ 15 mil/ano) e pequenas comunidades em plataformas como Circle e Mighty Networks. O universo total agregado de profissionais pagantes em comunidades disperas está estimado entre 30 mil e 50 mil pessoas, movimentando aproximadamente R$ 80 a R$ 150 milhões anuais. Nenhuma plataforma consolidou a camada de comunidade profissional integrativa em escala nacional."
          },
          {
            "type": "p",
            "text": "6.5 Leitura consolidada do competitivo"
          },
          {
            "type": "table",
            "rows": [
              [
                "Camada",
                "Líder(es)",
                "TAM pagantes BR",
                "Maturidade"
              ],
              [
                "EHR / Prontuário",
                "Amigo Tech, HiDoctor, iClinic, Simples Dental",
                "150–250 mil",
                "Madura e consolidada"
              ],
              [
                "IA Clínica",
                "VOA Health, Amigo Intelligence, Noa",
                "60–80 mil (crescendo)",
                "Early-stage"
              ],
              [
                "Educação integrativa",
                "VP, USI, Afya, ABRAN",
                "45–65 mil",
                "Madura mas fragmentada"
              ],
              [
                "Comunidades pagas",
                "Nenhum — fragmentado",
                "30–50 mil",
                "Imatura"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Barreiras estruturais do mercado: (i) Certificação SBIS-CFM NGS2 para prontuário eletrônico com assinatura digital leva 12–24 meses e custa entre R$ 200 mil e R$ 500 mil; (ii) Custo de aquisição de cliente (CAC) em profissional autônomo de saúde gira entre R$ 400 e R$ 900 — exige LTV robusto ou canais proprietários para viabilidade econômica; (iii) Integrações clínicas essenciais (laboratórios funcionais, Memed, ePharma, farmácias de manipulação, TISS) demandam 20 ou mais parcerias técnicas, cada uma com ciclo de 3 a 9 meses."
          }
        ]
      },
      {
        "id": "mercado-7",
        "num": "7",
        "title": "Riscos do Dimensionamento",
        "full_title": "7. Riscos do Dimensionamento",
        "elements": [
          {
            "type": "p",
            "text": "Todo estudo de dimensionamento opera com premissas — esta seção mapeia as três principais fontes de subestimação e as três principais fontes de superestimação do SAM financeiro."
          },
          {
            "type": "p",
            "text": "7.1 Riscos de subestimação (mercado real pode ser maior)"
          },
          {
            "type": "p",
            "text": "A categoria de IA clínica cresce a mais de 80% ao ano. A penetração de 18% que usamos pode atingir 35–45% em 18 meses, o que dobraria a linha de IA clínica no SAM."
          },
          {
            "type": "p",
            "text": "Profissionais integrativos frequentemente mantêm múltiplas pós-graduações em paralelo (funcional + fitoterapia + ortomolecular + comunidade paga). A linha de educação pode ser 1,5 a 2 vezes maior do que a estimativa conservadora aqui usada."
          },
          {
            "type": "p",
            "text": "A afinidade integrativa pode estar subestimada em profissões-chave. Dados qualitativos indicam que entre nutricionistas com atuação clínica privada, a fração com viés funcional pode chegar a 30–40%, não aos 25% aplicados no cenário realista."
          },
          {
            "type": "p",
            "text": "7.2 Riscos de superestimação (mercado real pode ser menor)"
          },
          {
            "type": "p",
            "text": "O fator de ativação (45%) é estimado por triangulação com bases conhecidas. Se o fator real estiver entre 30% e 35%, o ICP ativo cai para entre 90 e 105 mil, reduzindo o SAM para R$ 750–880 MM."
          },
          {
            "type": "p",
            "text": "Há double-counting potencial entre subcategorias: Noa está embutido no ecossistema Doctoralia, Amplimed IA está embutido no Amplimed, Amigo Intelligence no Amigo Clinic. Sobreposição estimada de 10% a 15%."
          },
          {
            "type": "p",
            "text": "Profissionais Base tier (nutri, psico, fisio, enf, biomed) gastam menos que R$ 5.500/ano se a economia brasileira estagnar. Em cenário de recessão, o ticket pode cair para R$ 3.500–4.000/ano, reduzindo o SAM em cerca de 20%."
          }
        ]
      },
      {
        "id": "mercado-8",
        "num": "8",
        "title": "Fontes Consultadas",
        "full_title": "8. Fontes Consultadas",
        "elements": [
          {
            "type": "p",
            "text": "8.1 Primárias (confiança alta)"
          },
          {
            "type": "p",
            "text": "CFM – Conselho Federal de Medicina; Demografia Médica no Brasil 2023–2024 (FMUSP/AMB/CFM)"
          },
          {
            "type": "p",
            "text": "CFO – Conselho Federal de Odontologia (website.cfo.org.br/estatisticas)"
          },
          {
            "type": "p",
            "text": "COFEN – Enfermagem em Números; Fiocruz Perfil da Enfermagem 2022"
          },
          {
            "type": "p",
            "text": "CFN – Conselho Federal de Nutricionistas (cfn.org.br/numeros)"
          },
          {
            "type": "p",
            "text": "CFF – Conselho Federal de Farmácia (cff.org.br/dados)"
          },
          {
            "type": "p",
            "text": "CFP – Conselho Federal de Psicologia (site.cfp.org.br)"
          },
          {
            "type": "p",
            "text": "COFFITO – Conselho Federal de Fisioterapia e Terapia Ocupacional (coffito.gov.br)"
          },
          {
            "type": "p",
            "text": "CFBM – Conselho Federal de Biomedicina (cfbm.gov.br)"
          },
          {
            "type": "p",
            "text": "IBGE – PNAD Contínua 2023 (rendimento por ocupação)"
          },
          {
            "type": "p",
            "text": "Ministério do Trabalho – RAIS 2023"
          },
          {
            "type": "p",
            "text": "8.2 Players e preços (verificados em 2025)"
          },
          {
            "type": "p",
            "text": "Amigo Tech – amigotech.com.br (65 mil+ profissionais)"
          },
          {
            "type": "p",
            "text": "iClinic – iclinic.com.br/precos"
          },
          {
            "type": "p",
            "text": "HiDoctor – hidoctor.com.br/p/comprar"
          },
          {
            "type": "p",
            "text": "Amplimed – amplimed.com.br/planos-e-recursos"
          },
          {
            "type": "p",
            "text": "Feegow – feegowclinic.com.br/precos-e-planos"
          },
          {
            "type": "p",
            "text": "Doctoralia Practice – doctoralia.com.br/para-profissionais"
          },
          {
            "type": "p",
            "text": "Simples Dental – simplesdental.com"
          },
          {
            "type": "p",
            "text": "VOA Health – voa.health; blog.voa.health (60 mil+ em out/2025)"
          },
          {
            "type": "p",
            "text": "Naomed – naomed.com.br"
          },
          {
            "type": "p",
            "text": "Clinicorp IA – clinicorp.com/clinicorp-ia"
          },
          {
            "type": "p",
            "text": "Noa (Docplanner) – noa.ai/pt-br/preco"
          },
          {
            "type": "p",
            "text": "8.3 Educação integrativa/funcional"
          },
          {
            "type": "p",
            "text": "USI – Universidade Saúde Integrativa"
          },
          {
            "type": "p",
            "text": "VP – vponline.com.br (Valeria Paschoal)"
          },
          {
            "type": "p",
            "text": "IBRAMI – ibrami.com.br"
          },
          {
            "type": "p",
            "text": "ABRAN – abran.org.br"
          },
          {
            "type": "p",
            "text": "Unyleya – unyleya.edu.br/pos-graduacao-ead/curso/saude-integrativa"
          },
          {
            "type": "p",
            "text": "PEBMED / Whitebook – whitebook.pebmed.com.br/planos"
          },
          {
            "type": "p",
            "text": "SanarFlix – sanarflix.com.br"
          },
          {
            "type": "p",
            "text": "Hospital Einstein Ensino – einstein.br/ensino"
          },
          {
            "type": "p",
            "text": "Sírio-Libanês Ensino – ensino.hsl.org.br"
          },
          {
            "type": "p",
            "text": "8.4 Mercado e tendências"
          },
          {
            "type": "p",
            "text": "Distrito – Healthtech Report 2020–2024 (distrito.me)"
          },
          {
            "type": "p",
            "text": "ABSS – Associação Brasileira de Startups de Saúde (absstartups.com.br)"
          },
          {
            "type": "p",
            "text": "ACATE – Setor Saúde"
          },
          {
            "type": "p",
            "text": "SEBRAE – Panorama de Consultórios e Clínicas 2023"
          },
          {
            "type": "p",
            "text": "TIC Saúde – CGI.br/NIC.br (cetic.br)"
          },
          {
            "type": "p",
            "text": "ANAHP – Observatório 2024"
          },
          {
            "type": "p",
            "text": "CNSaúde – Anuário"
          },
          {
            "type": "p",
            "text": "Saúde Digital Brasil – saudedigitalbrasil.com.br"
          },
          {
            "type": "p",
            "text": "Google Trends – trends.google.com.br"
          },
          {
            "type": "p",
            "text": "MEC e-MEC – emec.mec.gov.br (pós-graduações lato sensu)"
          },
          {
            "type": "p",
            "text": "8.5 Regulatórias"
          },
          {
            "type": "p",
            "text": "Ministério da Saúde – Portaria GM/MS 971/2006 (PNPIC) e 849/2017 (ampliação PICS)"
          },
          {
            "type": "p",
            "text": "Ministério da Saúde – Portaria GM/MS 3.232/2020 (Política Nacional de Saúde Digital)"
          },
          {
            "type": "p",
            "text": "CFM – Resolução 2.314/2022 (telemedicina permanente)"
          },
          {
            "type": "p",
            "text": "ANS – IN 265/2022 (interoperabilidade)"
          },
          {
            "type": "p",
            "text": "ANPD – Guia LGPD e saúde (2023)"
          }
        ]
      },
      {
        "id": "mercado-9",
        "num": "9",
        "title": "Veredicto Final",
        "full_title": "9. Veredicto Final",
        "elements": [
          {
            "type": "p",
            "text": "Os números abaixo sintetizam o posicionamento do mercado brasileiro de profissionais de saúde integrativa em abril de 2026, com projeção até 2029. Representam o consenso central entre cenários conservador, realista e otimista aplicados sobre dados primários dos oito conselhos federais e triangulação com bases de educação integrativa conhecidas."
          },
          {
            "type": "table",
            "rows": [
              [
                "Indicador",
                "Valor (cenário realista)"
              ],
              [
                "TAM – saúde regulamentada BR",
                "2,9 milhões de profissionais / R$ 15–20 bi em stack auxiliar"
              ],
              [
                "SAM – universo integrativa BR",
                "295 mil profissionais / R$ 2,36 bi anuais"
              ],
              [
                "SAM ativo (em compra 12 meses)",
                "133 mil profissionais / R$ 1,12 bi anuais"
              ],
              [
                "Concentração regional (SP+RJ+MG)",
                "50% do SAM ativo / aproximadamente 66 mil profissionais"
              ],
              [
                "CAGR projetado 2024–2029",
                "12% (base); ICP ativo alcança 234 mil em 2029"
              ],
              [
                "SAM financeiro 2029 (base)",
                "R$ 2,0 bi anuais"
              ],
              [
                "Profissões-núcleo do ICP",
                "Nutricionistas, fisioterapeutas, psicólogos, médicos (68% do ICP)"
              ],
              [
                "Profissões de expansão",
                "Farmacêuticos, dentistas, enfermeiros superior, biomédicos"
              ],
              [
                "Líder em EHR por tamanho de base",
                "Amigo Tech (65 mil+ profissionais)"
              ],
              [
                "Líder em IA clínica por tração",
                "VOA Health (60 mil+ em out/2025)"
              ],
              [
                "Líder histórico em educação funcional",
                "VP – Valeria Paschoal (40 mil alumni)"
              ],
              [
                "Lacuna estrutural do mercado",
                "Nenhum player verticalizado especificamente em integrativa"
              ]
            ]
          },
          {
            "type": "p",
            "text": "9.1 Qualidade do mercado (nota de 1 a 10)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Critério",
                "Nota",
                "Justificativa"
              ],
              [
                "Dor",
                "9",
                "Conflito estrutural entre prática integrativa e ferramentas construídas para medicina convencional"
              ],
              [
                "Dinheiro",
                "8",
                "SAM de R$ 1,12 bi/ano; ticket médio do profissional integrativo é 1,5 a 2× o da média"
              ],
              [
                "Alcance",
                "7",
                "ICP concentrado em poucos canais conhecidos (USI, VP, congressos, Instagram), o que facilita marketing mas limita expansão sem parcerias"
              ],
              [
                "Crescimento",
                "9",
                "CAGR 12% base; 4 de 8 profissões-núcleo crescem 6–10% ao ano demograficamente"
              ]
            ]
          },
          {
            "type": "p",
            "text": "9.2 Principal barreira de entrada"
          },
          {
            "type": "p",
            "text": "A principal barreira de entrada é a distribuição. Os 133 mil profissionais do ICP ativo estão concentrados em canais relativamente poucos e já ocupados por players estabelecidos: bases de educação (USI, VP, IBRAMI, ABRAN), congressos (ABMI, AMBA, ABRAN), Instagram profissional (92% dos nutricionistas, 88% dos psicólogos, 85% dos fisioterapeutas e biomédicos) e grupos de WhatsApp fechados. Qualquer entrante precisa ou conquistar parceria com uma das grandes bases de educação, ou investir pesadamente em conteúdo orgânico e mídia paga (CAC estimado de R$ 400 a R$ 900). Barreiras secundárias incluem certificação SBIS-CFM NGS2 (12–24 meses, R$ 200–500 mil) e integrações técnicas com laboratórios funcionais, farmácias de manipulação e sistemas de prescrição digital."
          }
        ]
      }
    ]
  },
  {
    "id": "estrategia",
    "label": "Estratégia",
    "icon": "Target",
    "tagline": "Aplicação às decisões",
    "sections": [
      {
        "id": "estrategia-1",
        "num": "1",
        "title": "Por que saúde integrativa (e não saúde genérica)",
        "full_title": "1. Por que saúde integrativa (e não saúde genérica)",
        "elements": [
          {
            "type": "p",
            "text": "O mercado brasileiro de saúde regulamentada soma 2,9 milhões de profissionais (TAM ~R$ 15-20 bi/ano em stack auxiliar). Atacar horizontalmente esse universo é inviável — a categoria é dominada por Amigo Tech (65 mil+), HiDoctor (40-60 mil), iClinic (30-45 mil) e VOA Health (60 mil+ em IA clínica). Competir por preço nesse espaço é suicídio."
          },
          {
            "type": "p",
            "text": "Saúde integrativa é o recorte onde existe (a) dor estrutural não atendida, (b) poder de compra, (c) crescimento acelerado e (d) zero players verticalizados. Os quatro critérios clássicos de nicho se alinham."
          },
          {
            "type": "table",
            "rows": [
              [
                "Critério",
                "Número",
                "Evidência",
                "Fonte"
              ],
              [
                "Dor estrutural",
                "89%",
                "profissionais relatam frustração “quero curar, sou forçado a tratar”",
                "PDF Dados Psicodemográficos"
              ],
              [
                "SAM financeiro",
                "R$ 1,12 bi/ano",
                "133 mil ICP ativo × R$ 8.400/ano",
                "Estudo de Mercado seção 4"
              ],
              [
                "Crescimento",
                "CAGR 12%",
                "puxado por CFBM 10,1%, COFFITO 6,4%, CFN 6,3%, CFP 6,1%",
                "Conselhos 2019-2024"
              ],
              [
                "Vácuo competitivo",
                "0 players",
                "nenhum EHR, IA, comunidade verticalizado em integrativa",
                "Estudo seção 6"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Conclusão: atacar saúde genérica = guerra de preço contra incumbentes com 60k+ base. Atacar saúde integrativa = categoria nova, defensável, em crescimento."
          }
        ]
      },
      {
        "id": "estrategia-2",
        "num": "2",
        "title": "Por que 8 profissões (e não 1)",
        "full_title": "2. Por que 8 profissões (e não 1)",
        "elements": [
          {
            "type": "p",
            "text": "O método ADS é fundamentado em raciocínio clínico integrativo aplicável a qualquer profissão que opere na lógica de causa raiz. A arquitetura do produto é multiprofissional por design — restringir a uma única profissão jogaria fora a vantagem injusta da metodologia."
          },
          {
            "type": "p",
            "text": "Validação externa: os dados de conversão USI (2.654 alunos, 50+ variáveis coletadas) confirmam adoção consistente entre profissões diferentes. Nenhuma fica abaixo de 0,9%."
          },
          {
            "type": "table",
            "rows": [
              [
                "Profissão",
                "Conv. USI",
                "ICP ativo BR",
                "Afinidade integrativa",
                "Prioridade GTM"
              ],
              [
                "Médicos",
                "3,12%",
                "19 mil",
                "Média-Alta",
                "Tier 1 (Pro + Enterprise)"
              ],
              [
                "Farmacêuticos",
                "2,89%",
                "9 mil",
                "Alta",
                "Tier 2"
              ],
              [
                "Nutricionistas",
                "2,76%",
                "26 mil",
                "Muito Alta (9/10)",
                "Tier 1 (Starter/Pro)"
              ],
              [
                "Biomédicos",
                "1,95%",
                "5 mil",
                "Alta",
                "Tier 2"
              ],
              [
                "Dentistas",
                "1,85%",
                "7 mil",
                "Média",
                "Tier 3"
              ],
              [
                "Fisioterapeutas",
                "1,68%",
                "29 mil",
                "Muito Alta (8,5/10)",
                "Tier 1 (Starter)"
              ],
              [
                "Psicólogos",
                "1,42%",
                "28 mil",
                "Alta",
                "Tier 2"
              ],
              [
                "Enfermeiros",
                "0,92%",
                "10 mil",
                "Média (78% CLT)",
                "Tier 3"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Diferença entre profissões servidas (8, via ADS) e profissões atacadas primeiro no GTM (Tier 1: nutri + fisio + médicos = 74 mil, 56% do ICP). Tier 2 e Tier 3 entram por demanda orgânica da base USI e indicação cruzada, sem esforço dedicado de marketing."
          }
        ]
      },
      {
        "id": "estrategia-3",
        "num": "3",
        "title": "Por que o pricing R$ 797 / R$ 1.197 / R$ 3.997",
        "full_title": "3. Por que o pricing R$ 797 / R$ 1.197 / R$ 3.997",
        "elements": [
          {
            "type": "p",
            "text": "O ticket é validado por três ângulos: (i) stack consolidado que o profissional integrativo já paga hoje em múltiplas ferramentas; (ii) tiers de renda por profissão; (iii) benchmark competitivo."
          },
          {
            "type": "p",
            "text": "3.1 Stack consolidado atual do profissional integrativo"
          },
          {
            "type": "table",
            "rows": [
              [
                "Item",
                "R$/mês típico",
                "Referência"
              ],
              [
                "Prontuário eletrônico",
                "150-250",
                "iClinic R$ 139-379; Amplimed R$ 129-349"
              ],
              [
                "IA clínica / transcrição",
                "200-300",
                "VOA R$ 249; Clinicorp IA R$ 299"
              ],
              [
                "Educação continuada (pós amortizada)",
                "300-700",
                "USI/VP/IBRAMI pós em integrativa"
              ],
              [
                "Comunidade paga (grupo/mentoria)",
                "100-300",
                "mentorias funcionais + grupos WhatsApp"
              ],
              [
                "Marketing freela social",
                "500-1.500",
                "freela saúde R$ 900-4.000"
              ],
              [
                "Total stack fragmentado",
                "R$ 1.250-3.050/mês",
                ""
              ]
            ]
          },
          {
            "type": "p",
            "text": "Auton Pro (R$ 1.197/mês) substitui EHR + IA + parte da educação + comunidade. Ticket está dentro da faixa de gasto atual — não é adição, é consolidação."
          },
          {
            "type": "p",
            "text": "3.2 Pricing × tier de renda"
          },
          {
            "type": "table",
            "rows": [
              [
                "Tier",
                "Profissões",
                "Renda mensal",
                "Plano natural"
              ],
              [
                "Premium",
                "Médicos",
                "R$ 20-50 mil",
                "Pro R$ 1.197 (2-6% renda)"
              ],
              [
                "Médio",
                "Dentistas/farma com negócio próprio",
                "R$ 8-12 mil",
                "Pro ou Starter"
              ],
              [
                "Base",
                "Nutri, psico, fisio, enf, biomed",
                "R$ 4-7 mil",
                "Starter R$ 797 (11-20% renda)"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Starter R$ 797 é agressivo para Base tier (11-20% da renda), mas justificável porque consolida ferramentas que o profissional já paga separadamente e libera horas por semana (ROI mensurável)."
          }
        ]
      },
      {
        "id": "estrategia-4",
        "num": "4",
        "title": "Por que o GTM começa na USI",
        "full_title": "4. Por que o GTM começa na USI",
        "elements": [
          {
            "type": "p",
            "text": "A USI é a única base externa quente disponível no momento — 5.000 alunos ativos + 3.000 formados no método ADS. Instituto Dr. Barakat (12 núcleos) é canal interno (sócio fundador), não canal B2B externo."
          },
          {
            "type": "p",
            "text": "O MVP validou PMF dentro da base USI: 100 vendas em 170 expostos = 58% de conversão, em 20 dias, com zero churn até o momento. Isso é product-market fit em público auto-selecionado."
          },
          {
            "type": "table",
            "rows": [
              [
                "Canal",
                "Alcance",
                "Conversão esperada",
                "Custo de aquisição"
              ],
              [
                "USI — base remanescente",
                "4.830 alunos não expostos",
                "15-25% (ajuste preço MVP→Pro)",
                "Baixo (canal direto)"
              ],
              [
                "Mídia paga Instagram/Meta",
                "Ilimitado",
                "2-5%",
                "R$ 400-900/cliente"
              ],
              [
                "Indicação entre pares",
                "Orgânico",
                "Alta (>30%)",
                "Incentivo sobre conversão"
              ],
              [
                "Parcerias (VP, IBRAMI, ABRAN)",
                "40-60 mil alunos",
                "Não-priorizado em 12m",
                "Revenue share futuro"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Sequência recomendada: expandir exposição USI para os 4.830 restantes (capacidade operacional de 400-500 leads qualificados/mês) + camada de mídia paga para alcançar quem está fora da USI."
          }
        ]
      },
      {
        "id": "estrategia-5",
        "num": "5",
        "title": "Math da meta R$ 14,4M ARR em 12 meses",
        "full_title": "5. Math da meta R$ 14,4M ARR em 12 meses",
        "elements": [
          {
            "type": "p",
            "text": "Meta declarada: 1.000 clientes no plano Pro (R$ 1.197/mês anual). A composição real em 12 meses tende a ser mix de planos (reflexo dos tiers de renda), com mesmo patamar financeiro."
          },
          {
            "type": "table",
            "rows": [
              [
                "Cenário",
                "USI conv.",
                "Mídia paga",
                "Total clientes",
                "ARR"
              ],
              [
                "Conservador",
                "12% × 5k = 600",
                "0",
                "600",
                "R$ 7,75 MM"
              ],
              [
                "Realista",
                "20% × 5k = 1.000",
                "+200",
                "1.200",
                "R$ 15,80 MM"
              ],
              [
                "Otimista",
                "28% × 5k = 1.400",
                "+600",
                "2.000",
                "R$ 26,33 MM"
              ]
            ]
          },
          {
            "type": "p",
            "text": "5.1 Distribuição esperada por plano (cenário Realista)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Preço anual/mês",
                "% clientes",
                "# clientes",
                "ARR parcial"
              ],
              [
                "Starter R$ 797",
                "R$ 9.564/ano",
                "60%",
                "720",
                "R$ 6,89 MM"
              ],
              [
                "Pro R$ 1.197",
                "R$ 14.364/ano",
                "35%",
                "420",
                "R$ 6,03 MM"
              ],
              [
                "Enterprise R$ 3.997",
                "R$ 47.964/ano",
                "5%",
                "60",
                "R$ 2,88 MM"
              ],
              [
                "Total",
                "",
                "100%",
                "1.200",
                "R$ 15,80 MM"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Leitura: meta de 1.000 clientes é alcançável no cenário realista. Meta financeira (R$ 14,4M) é alcançável com mix natural — Starter concentra a maioria da base (nutri + psico + fisio), Pro captura médicos e Enterprise captura clínicas Tier 1."
          }
        ]
      },
      {
        "id": "estrategia-6",
        "num": "6",
        "title": "Unit Economics",
        "full_title": "6. Unit Economics",
        "elements": [
          {
            "type": "table",
            "rows": [
              [
                "Métrica",
                "Valor",
                "Premissa"
              ],
              [
                "Ticket médio ponderado",
                "R$ 13.150/ano",
                "mix 60/35/5 entre Starter/Pro/Enterprise"
              ],
              [
                "Retenção assumida",
                "24 meses",
                "SaaS B2B vertical com PMF forte"
              ],
              [
                "LTV",
                "R$ 26.300",
                "ticket × retenção"
              ],
              [
                "CAC blended",
                "R$ 500",
                "USI (baixo custo) + mídia paga (R$ 600-900)"
              ],
              [
                "LTV:CAC",
                "52:1",
                "benchmark SaaS saudável: 3:1"
              ],
              [
                "Payback",
                "< 2 meses",
                "primeiro mês já amortiza CAC"
              ],
              [
                "Margem bruta SaaS",
                "~75%",
                "infraestrutura IA + suporte"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Ratios extremamente favoráveis. Risco primário não é unit economics — é retenção real a ser observada após 90 dias. Churn trimestral acima de 15% derruba LTV para R$ 16-18k e LTV:CAC para 32:1 (ainda saudável)."
          },
          {
            "type": "p",
            "text": "Segundo risco: upgrade dos 100 clientes MVP (R$ 297) para pricing pleno (R$ 797-1.197) ao fim do período de 6 meses. Churn esperado no upgrade: 30-50%. Mesmo com churn de 50%, restam 50 clientes pagando pricing pleno = base inicial consolidada."
          }
        ]
      },
      {
        "id": "estrategia-7",
        "num": "7",
        "title": "Síntese Executiva",
        "full_title": "7. Síntese Executiva",
        "elements": [
          {
            "type": "p",
            "text": "Nicho saúde integrativa: SAM R$ 1,12 bi/ano, CAGR 12%, vácuo competitivo em software+IA+comunidade."
          },
          {
            "type": "p",
            "text": "8 profissões servidas via ADS; GTM prioriza Tier 1 (nutri + fisio + médicos = 74 mil / 56% do ICP)."
          },
          {
            "type": "p",
            "text": "Pricing R$ 797/1.197/3.997 consolida stack fragmentado de R$ 1.250-3.050/mês, não adiciona custo."
          },
          {
            "type": "p",
            "text": "GTM começa em USI (5k alunos, 58% PMF validado em MVP), escala via mídia paga Meta/Instagram."
          },
          {
            "type": "p",
            "text": "Meta 1.000 clientes em 12m = cenário realista; ARR projetado R$ 15,80 MM com mix natural de planos."
          },
          {
            "type": "p",
            "text": "LTV:CAC 52:1, payback <2 meses, margem bruta ~75% — unit economics robusto."
          }
        ]
      }
    ]
  },
  {
    "id": "canvas",
    "label": "Lean Canvas",
    "icon": "Layout",
    "tagline": "13 blocos · v1.0",
    "sections": [
      {
        "id": "canvas-1",
        "num": "1",
        "title": "Multidão Faminta",
        "full_title": "§1 · Multidão Faminta",
        "elements": [
          {
            "type": "p",
            "text": "1.1 O que este bloco analisa"
          },
          {
            "type": "p",
            "text": "Este bloco valida se o mercado onde a Auton quer atuar vale o esforço. A análise usa quatro critérios e chega a uma nota final que diz: vale seguir, exige cuidado, ou melhor recuar."
          },
          {
            "type": "p",
            "text": "A pontuação final da Auton é 33 de 40. É um mercado excelente, mas não perfeito."
          },
          {
            "type": "p",
            "text": "1.2 Os quatro critérios"
          },
          {
            "type": "p",
            "text": "Dor Forte. O público não só quer, precisa da solução. A intensidade da dor diz o máximo que dá para cobrar."
          },
          {
            "type": "p",
            "text": "Poder de Compra. O público tem dinheiro, ou pode remanejar dinheiro, para pagar a solução no preço necessário."
          },
          {
            "type": "p",
            "text": "Fácil de Achar. O público está reunido em lugares que dá para encontrar (listas, grupos, canais, associações)."
          },
          {
            "type": "p",
            "text": "Em Crescimento. O mercado está expandindo. Um mercado em queda engole qualquer esforço."
          },
          {
            "type": "p",
            "text": "1.3 Como as notas são construídas"
          },
          {
            "type": "p",
            "text": "Cada critério começa em 10 (cenário ideal) e perde pontos conforme a Auton se afasta desse ideal. A nota total soma os quatro."
          },
          {
            "type": "p",
            "text": "Como ler o resultado: 36 a 40 é mercado ideal, raro. 30 a 35 é mercado excelente, vale ir com cuidado. 20 a 29 é viável, mas exige oferta e vendas muito fortes. Abaixo de 20, o esforço não compensa."
          },
          {
            "type": "p",
            "text": "1.4 Pontuação da Auton: 33/40"
          },
          {
            "type": "table",
            "rows": [
              [
                "Critério",
                "Ideal",
                "Estado atual",
                "Desc.",
                "Nota"
              ],
              [
                "Dor Forte",
                "Dor tão forte que o cliente compra na hora que ouve a solução",
                "A dor existe e o cliente sabe descrever, mas vive com ela há anos. Já gasta entre R$ 1.250 e R$ 3.050 por mês em soluções soltas, então tem orçamento, mas não tem pressa de resolver.",
                "−2",
                "8"
              ],
              [
                "Poder de Compra",
                "Todo o público comprando sem apertar o bolso",
                "Médicos (14% do público) compram o Pro sem dificuldade. Os outros 63% ganham R$ 4 a 7 mil por mês; o Starter de R$ 797 é entre 11% e 20% da renda. O MVP rodou a R$ 297, então o preço pleno ainda precisa ser testado em volume.",
                "−3",
                "7"
              ],
              [
                "Fácil de Achar",
                "Público reunido em vários canais já validados",
                "A USI junta 5.000 alunos ativos e 3.000 formados em um único canal. O MVP converteu 58%. Para ir além desses 8.000, a Auton precisa de mídia paga, que ainda não foi testada com dinheiro real.",
                "−1",
                "9"
              ],
              [
                "Em Crescimento",
                "Mercado empurrado por tendência que não tem como parar",
                "Os conselhos mais integrativos crescem entre 6% e 10% ao ano. Pós em nutrição funcional triplicou em 5 anos. IA em saúde pulou de 8% para 35% de adoção. É tendência forte, mas ainda pode ser revertida por regulação ou fim de ciclo.",
                "−1",
                "9"
              ],
              [
                "TOTAL",
                "",
                "",
                "",
                "33/40"
              ]
            ]
          },
          {
            "type": "p",
            "text": "1.5 Evidências de cada nota"
          },
          {
            "type": "p",
            "text": "Dor Forte · 8/10"
          },
          {
            "type": "p",
            "text": "89% dos profissionais integrativos dizem: quero curar, sou forçado a tratar"
          },
          {
            "type": "p",
            "text": "Frases frequentes: Estou exausta (89%), Me sinto uma fraude (68%), Virei vendedora de consultas (92%)"
          },
          {
            "type": "p",
            "text": "A dor existe e é descrita com clareza, mas convive há anos. Isso limita a nota ao topo do intervalo forte, sem chegar ao ideal"
          },
          {
            "type": "p",
            "text": "Poder de Compra · 7/10"
          },
          {
            "type": "p",
            "text": "Médicos (14% do público): R$ 1.497 são 2 a 6% da renda"
          },
          {
            "type": "p",
            "text": "Nutri, psico, fisio, enfermeira e biomédica (63% do público): Starter R$ 797 são 11 a 20% da renda"
          },
          {
            "type": "p",
            "text": "Hoje esses profissionais já pagam R$ 1.250 a 3.050/mês em ferramentas soltas. A Auton junta tudo em uma assinatura, mas o preço pleno ainda precisa ser testado em volume"
          },
          {
            "type": "p",
            "text": "Fácil de Achar · 9/10"
          },
          {
            "type": "p",
            "text": "Base USI reúne o público em canal único: 5.000 alunos ativos + 3.000 formados no Método ADS"
          },
          {
            "type": "p",
            "text": "MVP validou: 100 vendas em 170 expostos (58% de conversão) em 20 dias, sem cancelamento"
          },
          {
            "type": "p",
            "text": "89% do público tem afinidade direta com o Dr. Barakat"
          },
          {
            "type": "p",
            "text": "Fora da USI, atingir o público depende de mídia paga ainda não testada com dinheiro real"
          },
          {
            "type": "p",
            "text": "Em Crescimento · 9/10"
          },
          {
            "type": "p",
            "text": "Conselhos mais integrativos: CFBM 10,1%, COFFITO 6,4%, CFN 6,3%, CFP 6,1%"
          },
          {
            "type": "p",
            "text": "Pós-graduação em nutrição funcional triplicou em 5 anos"
          },
          {
            "type": "p",
            "text": "Google Trends: +150 a 200% na busca por médico funcional"
          },
          {
            "type": "p",
            "text": "IA clínica em hospitais: 8% (2020) para 35 a 40% (2025)"
          },
          {
            "type": "p",
            "text": "Tendência cultural e tecnológica forte, mas reversível por regulação ou fim de ciclo"
          },
          {
            "type": "p",
            "text": "1.6 Pontos que ficam fora da nota"
          },
          {
            "type": "p",
            "text": "Três pontos não são falhas de mercado, são riscos de execução. Ficam monitorados no §13:"
          },
          {
            "type": "p",
            "text": "Dependência da USI. O canal principal da Fase 1 depende da continuidade da parceria."
          },
          {
            "type": "p",
            "text": "Cancelamento real ainda desconhecido. 20 dias de MVP não validam retenção de 24 meses."
          },
          {
            "type": "p",
            "text": "Dependência do Dr. Barakat como rosto da marca. 89% do público tem afinidade direta com ele."
          },
          {
            "type": "p",
            "text": "1.7 As três camadas de nicho"
          },
          {
            "type": "p",
            "text": "O mesmo produto tem preços diferentes conforme o nicho. A Auton usa três camadas:"
          },
          {
            "type": "table",
            "rows": [
              [
                "Camada",
                "Descrição",
                "Tamanho",
                "Preço que se sustenta"
              ],
              [
                "Camada 1 · Mercado Amplo",
                "Saúde em geral",
                "2,9 milhões",
                "R$ 100/mês"
              ],
              [
                "Camada 2 · Sub-mercado",
                "Medicina integrativa no Brasil",
                "295 mil",
                "R$ 500/mês"
              ],
              [
                "Camada 3 · Nicho Final",
                "Profissional da base USI com rede multidisciplinar",
                "8.000 perto / 133 mil no BR",
                "R$ 997 a 4.997/mês"
              ]
            ]
          },
          {
            "type": "p",
            "text": "O salto de 10 a 50 vezes no preço entre a Camada 1 e a Camada 3 não vem de mudança no produto. Vem de mudança no público."
          },
          {
            "type": "p",
            "text": "1.8 Por que saúde integrativa e não saúde em geral"
          },
          {
            "type": "p",
            "text": "Saúde em geral já tem donos: Amigo Tech (65 mil+), HiDoctor (40 a 60 mil), iClinic (30 a 45 mil), VOA (60 mil+ em IA clínica). Quem entra ali briga por preço e margem apertada."
          },
          {
            "type": "p",
            "text": "Saúde integrativa tem condição oposta: nenhum concorrente junta prontuário + IA + comunidade + marketplace. Categoria nova, defensável, com os quatro critérios acima de 7."
          },
          {
            "type": "p",
            "text": "1.9 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton opera em mercado 33/40. Os três critérios abaixo de 10 refletem dor crônica (não aguda), público com bolso desigual e canal de escala ainda não testado fora da USI. O crescimento forte e a facilidade de encontrar o público dentro da USI sustentam a decisão de ir. A oferta precisa compensar a diferença de 7 pontos sendo forte, condição que a versão 1.0 atende."
          }
        ]
      },
      {
        "id": "canvas-2",
        "num": "2",
        "title": "Avatar / Cliente Ideal",
        "full_title": "§2 · Avatar / Cliente Ideal",
        "elements": [
          {
            "type": "p",
            "text": "2.1 O que este bloco define"
          },
          {
            "type": "p",
            "text": "Este bloco define quem, dentro do mercado validado, a Auton vai servir com prioridade. Um avatar bem travado vale mais que dez segmentações mal feitas. Com ele, a copy fica específica, o preço fica defensável, o canal fica focado e a venda fica previsível."
          },
          {
            "type": "p",
            "text": "2.2 O que um avatar travado entrega"
          },
          {
            "type": "p",
            "text": "Copy específica que reconhece a dor do cliente nas palavras dele"
          },
          {
            "type": "p",
            "text": "Preço que se sustenta porque é ajustado à renda e à prioridade real desse perfil"
          },
          {
            "type": "p",
            "text": "Canal focado porque cada perfil frequenta lugares específicos"
          },
          {
            "type": "p",
            "text": "Objeções previstas que deixam a venda preparada antes do primeiro não"
          },
          {
            "type": "p",
            "text": "Gatilhos de compra claros porque pessoas parecidas decidem de formas parecidas"
          },
          {
            "type": "p",
            "text": "2.3 Os 14 campos do avatar"
          },
          {
            "type": "p",
            "text": "O avatar completo tem 14 campos em 4 blocos:"
          },
          {
            "type": "p",
            "text": "Identidade: Nome, Demografia, Formação, Comportamento"
          },
          {
            "type": "p",
            "text": "Dor e emoção: Dor-Mãe, Gatilhos emocionais, Já tentou e falhou"
          },
          {
            "type": "p",
            "text": "Decisão de compra: Objeção principal, Sonho do Cliente, Gatilho de compra, Como quebrar a objeção"
          },
          {
            "type": "p",
            "text": "Contexto e limite: Canal validado, Quem excluir, Variações por profissão"
          },
          {
            "type": "p",
            "text": "Cada campo tem que estar preenchido com frase afirmativa e dado concreto. Campo vago em avatar vira copy vaga em anúncio."
          },
          {
            "type": "p",
            "text": "2.4 Avatar da Auton: Dra. Camila"
          },
          {
            "type": "p",
            "text": "1. Nome fictício"
          },
          {
            "type": "p",
            "text": "Dra. Camila."
          },
          {
            "type": "p",
            "text": "2. Demografia"
          },
          {
            "type": "p",
            "text": "Mulher, 38 anos (faixa de 30 a 50), profissional de saúde em uma das 8 profissões USI, concentrada no Sudeste e Sul, renda líquida entre R$ 12 e 25 mil por mês."
          },
          {
            "type": "p",
            "text": "3. Formação"
          },
          {
            "type": "p",
            "text": "Aluna ativa da USI ou recém-formada (até 3 anos de pós-graduação). Já conhece e, na maioria dos casos, já pratica o Método ADS em alguma extensão."
          },
          {
            "type": "p",
            "text": "4. Comportamento"
          },
          {
            "type": "p",
            "text": "Atende sozinha, em média 1 paciente por dia útil, em consultas aprofundadas de 90 minutos ou mais. Faz a documentação em casa, à noite, sacrificando o tempo pessoal para manter a qualidade clínica."
          },
          {
            "type": "p",
            "text": "5. Dor-Mãe"
          },
          {
            "type": "p",
            "text": "Sei que existe algo além dos sintomas, mas não consigo ver sozinha."
          },
          {
            "type": "p",
            "text": "6. Gatilhos emocionais"
          },
          {
            "type": "p",
            "text": "\"Estou exausta\" 89%"
          },
          {
            "type": "p",
            "text": "\"Me sinto uma fraude\" 68%"
          },
          {
            "type": "p",
            "text": "\"Virei vendedora de consultas\" 92%"
          },
          {
            "type": "p",
            "text": "7. Já tentou e falhou"
          },
          {
            "type": "p",
            "text": "Contratou secretária (só resolveu parte administrativa)"
          },
          {
            "type": "p",
            "text": "Aumentou o preço (aumentou a pressão por resultados)"
          },
          {
            "type": "p",
            "text": "Testou ferramentas genéricas de prontuário"
          },
          {
            "type": "p",
            "text": "Tentou fazer sozinha (chegou no burnout)"
          },
          {
            "type": "p",
            "text": "Comprou cursos e mentorias (a dor volta depois de 30 dias)"
          },
          {
            "type": "p",
            "text": "Usou ChatGPT (resposta genérica, sem método)"
          },
          {
            "type": "p",
            "text": "8. Objeção principal"
          },
          {
            "type": "p",
            "text": "E se eu pagar e não for o prometido?"
          },
          {
            "type": "p",
            "text": "A raiz é o trauma com ferramentas antigas que prometeram transformação e entregaram só funcionalidade."
          },
          {
            "type": "p",
            "text": "9. Sonho do Cliente (6 componentes)"
          },
          {
            "type": "p",
            "text": "1. Tratar causa raiz, não sintoma"
          },
          {
            "type": "p",
            "text": "2. Ter resultados clínicos consistentes em cada caso"
          },
          {
            "type": "p",
            "text": "3. Recuperar horas de vida pessoal gastas em documentação"
          },
          {
            "type": "p",
            "text": "4. Reconectar com o propósito que a levou à saúde integrativa"
          },
          {
            "type": "p",
            "text": "5. Ganhar renda nova via marketplace multidisciplinar"
          },
          {
            "type": "p",
            "text": "6. Parar de atender sozinha e ter rede de apoio"
          },
          {
            "type": "p",
            "text": "10. Gatilho de compra"
          },
          {
            "type": "p",
            "text": "A compra acontece quando os quatro gatilhos aparecem nesta ordem. Mudar a ordem reduz a conversão."
          },
          {
            "type": "p",
            "text": "1. Endosso direto de Dr. Barakat ou Dr. Bonanza"
          },
          {
            "type": "p",
            "text": "2. Prova social de colega da mesma profissão usando"
          },
          {
            "type": "p",
            "text": "3. Demonstração ao vivo em caso clínico real"
          },
          {
            "type": "p",
            "text": "4. Garantia forte que tira o risco financeiro"
          },
          {
            "type": "p",
            "text": "11. Como quebrar a objeção"
          },
          {
            "type": "p",
            "text": "O argumento operacional é: \"o que você paga volta como receita multidisciplinar\". Isso transforma a Auton de gasto em fonte de receita, o que libera a objeção do trauma anterior."
          },
          {
            "type": "p",
            "text": "12. Canal validado"
          },
          {
            "type": "p",
            "text": "Principal: Instagram dos fundadores (Dr. Barakat e Dr. Bonanza)"
          },
          {
            "type": "p",
            "text": "Secundário: grupos de WhatsApp da USI"
          },
          {
            "type": "p",
            "text": "Formato campeão: live com demonstração (58% de conversão no MVP)"
          },
          {
            "type": "p",
            "text": "13. Quem excluir"
          },
          {
            "type": "p",
            "text": "Médico convencional sem interesse integrativo (não adota, gera ruído)"
          },
          {
            "type": "p",
            "text": "Caçador de promoção (não fica, agride o ticket médio)"
          },
          {
            "type": "p",
            "text": "Profissional em início de carreira sem pacientes recorrentes (não tem volume para retorno)"
          },
          {
            "type": "p",
            "text": "Aluno em curso sem prática clínica (não é público pagante hoje)"
          },
          {
            "type": "p",
            "text": "2.5 Variações por profissão"
          },
          {
            "type": "p",
            "text": "A Dra. Camila é o perfil principal. Cinco recortes profissionais compõem a base pagante. Todos têm a mesma dor raiz (\"não consigo ver sozinha\") e mudam em renda, canal e objeção específica."
          },
          {
            "type": "table",
            "rows": [
              [
                "Profissão",
                "% ICP",
                "Renda líquida",
                "Canal principal",
                "Objeção específica",
                "Plano natural"
              ],
              [
                "Médica integrativa",
                "14%",
                "R$ 20 a 50 mil",
                "LinkedIn + WhatsApp",
                "IA não entende a complexidade integrativa",
                "Pro R$ 1.497"
              ],
              [
                "Nutricionista funcional",
                "20%",
                "R$ 4 a 7 mil (R$ 8 a 12k com consultório próprio)",
                "Instagram + YouTube",
                "Minha abordagem é muito personalizada para a IA capturar",
                "Starter R$ 797"
              ],
              [
                "Fisioterapeuta integrativa",
                "22%",
                "R$ 4 a 7 mil (R$ 8 a 12k com consultório próprio)",
                "Instagram + YouTube",
                "É feito para médicos, não para mim",
                "Starter R$ 797"
              ],
              [
                "Psicóloga sistêmica",
                "21%",
                "R$ 4 a 7 mil",
                "Instagram + YouTube",
                "Psicologia é relacional, não dá para protocolar",
                "Starter R$ 797"
              ],
              [
                "Farmacêutica clínica",
                "7%",
                "R$ 4 a 7 mil (R$ 8 a 12k com farmácia própria)",
                "Instagram + Facebook",
                "Vai ignorar minha atuação e priorizar médicos",
                "Starter ou Pro"
              ]
            ]
          },
          {
            "type": "p",
            "text": "As cinco variações somam 84% do público ativo do Brasil. As outras 3 profissões (biomédica, dentista, enfermeira) entram por indicação e base USI, sem esforço dedicado de marketing no primeiro ciclo."
          },
          {
            "type": "p",
            "text": "2.6 Quem excluir do funil"
          },
          {
            "type": "p",
            "text": "Tão importante quanto saber quem é o cliente é saber quem não é. Quatro perfis foram excluídos da estratégia:"
          },
          {
            "type": "p",
            "text": "Médicos convencionais sem interesse integrativo. A dor raiz não existe. A Auton vira ruído."
          },
          {
            "type": "p",
            "text": "Profissionais em início de carreira sem pacientes. O retorno depende de volume clínico que não existe ainda."
          },
          {
            "type": "p",
            "text": "Caçadores de promoção. Entram pela oferta fundadora e saem quando vira preço pleno."
          },
          {
            "type": "p",
            "text": "Profissionais CLT sem autonomia. A Auton devolve autonomia clínica. Sem espaço para usá-la, a ferramenta fica subutilizada."
          },
          {
            "type": "p",
            "text": "2.7 Evidências de que o avatar está certo"
          },
          {
            "type": "p",
            "text": "MVP: 100 vendas em 170 expostos dentro da base USI (58% de conversão em 20 dias). Todos os compradores encaixam no avatar."
          },
          {
            "type": "p",
            "text": "Dados Psicodemográficos: 89% tem afinidade com Dr. Barakat, 92% vive o gatilho \"virei vendedora de consultas\", 68% vive \"me sinto uma fraude\"."
          },
          {
            "type": "p",
            "text": "Estudo de Mercado: 295 mil profissionais integrativos no Brasil, 133 mil em compra ativa. A Dra. Camila está nesse grupo."
          },
          {
            "type": "p",
            "text": "Conversão USI por profissão: as 8 profissões convertem acima de 0,9%, o que confirma que a dor raiz é igual em todas."
          },
          {
            "type": "p",
            "text": "2.8 Conclusão"
          },
          {
            "type": "p",
            "text": "A Dra. Camila é um perfil único com cinco recortes profissionais. A dor raiz é igual em todos: administrar uma prática integrativa sozinha em um sistema que não reconhece causa raiz, gerando exaustão, sensação de fraude e distância do propósito. Renda, canal e objeção específica mudam por profissão; a copy principal, o gatilho de compra e a quebra de objeção são os mesmos. Isso permite operar cinco recortes pagantes sem multiplicar cinco funis de marketing."
          }
        ]
      },
      {
        "id": "canvas-3",
        "num": "3",
        "title": "Problema",
        "full_title": "§3 · Problema",
        "elements": [
          {
            "type": "p",
            "text": "3.1 O que este bloco mapeia"
          },
          {
            "type": "p",
            "text": "A Auton existe para resolver problemas do avatar. Este bloco lista todos os problemas relevantes e separa em tipos, porque cada tipo é tratado por uma área diferente do negócio."
          },
          {
            "type": "p",
            "text": "A oferta é a soma das soluções para esses problemas. Se um problema fica fora do mapa, a solução correspondente fica fora da oferta, e o cliente percebe o buraco na hora de decidir."
          },
          {
            "type": "p",
            "text": "3.2 Os dois tipos de problema"
          },
          {
            "type": "p",
            "text": "Tipo 1, Dores Inerentes. Problemas que o cliente já vive hoje. São dores da prática clínica e do dia a dia profissional. Resolvidos pelo produto."
          },
          {
            "type": "p",
            "text": "Tipo 2, Objeções de Compra. Atritos que aparecem só na hora de pagar. Não são dores clínicas, são medos, dúvidas e inseguranças da decisão. Resolvidos pela oferta (garantia, bônus, prova social, copy)."
          },
          {
            "type": "p",
            "text": "3.3 Por que separar é parte do método"
          },
          {
            "type": "p",
            "text": "Cada tipo tem dono diferente. Misturar faz o vendedor tentar resolver problema de produto e vice-versa. Nenhum dos dois dá certo."
          },
          {
            "type": "p",
            "text": "Regra prática:"
          },
          {
            "type": "p",
            "text": "Tipo 1 vai para o §4 Solução como pilar do produto"
          },
          {
            "type": "p",
            "text": "Tipo 2 vai para o §11 Arsenal de Vendas como material sob demanda"
          },
          {
            "type": "p",
            "text": "3.4 Tipo 1: Dores Inerentes (12 problemas)"
          },
          {
            "type": "p",
            "text": "São os problemas que o cliente vive na prática clínica hoje. Cada um tem uma solução correspondente no produto Auton."
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Dor do cliente",
                "Solução Auton",
                "Status"
              ],
              [
                "1",
                "Consulta vira tentativa e erro no lugar de método",
                "Motor ADS: Análise, Diagnóstico e Solução estruturados",
                "Existe"
              ],
              [
                "2",
                "Exames normais não explicam os sintomas do paciente",
                "Análise funcional que cruza exames, sintomas e história",
                "Existe"
              ],
              [
                "3",
                "Protocolos genéricos falham em casos complexos",
                "Protocolo personalizado pela IA com base no padrão do paciente",
                "Existe"
              ],
              [
                "4",
                "Não tenho tempo de fazer análise profunda",
                "IA entrega análise completa em 20 minutos após a consulta",
                "Existe / Bloqueador"
              ],
              [
                "5",
                "Atendo sozinha, sem apoio de outras áreas",
                "Marketplace multidisciplinar e comunidade fechada",
                "Existe"
              ],
              [
                "6",
                "Paciente não segue o protocolo em casa",
                "App do paciente com checklist de treino, alimentar e terapêutico",
                "Existe / Bloqueador"
              ],
              [
                "7",
                "Não consigo acompanhar a evolução ao longo do tempo",
                "Painel de evolução com gráficos de sintomas e exames",
                "Existe"
              ],
              [
                "8",
                "Não tenho como provar resultados para o paciente",
                "Relatório antes e depois com comparativo visual",
                "Existe"
              ],
              [
                "9",
                "Não tenho casos para mostrar no meu marketing",
                "Painel de casos anônimos com export em PDF",
                "Existe"
              ],
              [
                "10",
                "Paciente esquece as instruções do protocolo",
                "Notificações e vídeos curtos por orientação",
                "Fila Fase 2"
              ],
              [
                "11",
                "Paciente não entende instruções técnicas",
                "Tradução técnica para linguagem simples com ícones",
                "Existe"
              ],
              [
                "12",
                "Paciente abandona tratamento em 2 a 3 semanas",
                "Jornada automática de 21 dias com alerta de abandono",
                "Fila Fase 2"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Resumo: 10 das 12 dores têm solução pronta. Só 2 dependem do app mobile (Fase 2). Cobertura no Dia 1: 83% do total."
          },
          {
            "type": "p",
            "text": "3.5 Tipo 2: Objeções de Compra (11 problemas)"
          },
          {
            "type": "p",
            "text": "São medos, dúvidas e inseguranças que aparecem entre \"quero\" e \"compro\". Cada um tem uma resposta específica que vira material de venda."
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Objeção",
                "Como responder",
                "Status"
              ],
              [
                "1",
                "E se eu pagar e não for o prometido? (trauma com ferramenta antiga)",
                "Garantia de 7 dias com dinheiro de volta",
                "Existe / Bloqueador"
              ],
              [
                "2",
                "IA não entende a complexidade integrativa",
                "Demonstração ao vivo com caso real do cliente",
                "Existe"
              ],
              [
                "3",
                "Não tenho tempo de aprender mais uma ferramenta",
                "Treinamento de 60 min + atendimento dedicado na primeira semana",
                "Existe / Bloqueador"
              ],
              [
                "4",
                "Já uso outro sistema, não quero migrar",
                "Migração de dados grátis em 48 horas",
                "Existe"
              ],
              [
                "5",
                "Já tentei tudo e nada funcionou (descrença)",
                "3 depoimentos em vídeo e Diagnóstico 0 (avaliação inicial grátis)",
                "Criar em 1 a 2 semanas"
              ],
              [
                "6",
                "Marido ou parceiro questiona o investimento",
                "PDF de 1 página com cálculo de retorno (R$ 1.497 vira R$ 11.450)",
                "Criar em 3 a 5 dias"
              ],
              [
                "7",
                "Sou recém-formada, ainda não preciso",
                "Plano Fundador com 1 aula por semana de professor específico",
                "Criar em 3 a 4 semanas"
              ],
              [
                "8",
                "Meu conselho vai questionar o uso de IA",
                "Parecer jurídico pronto e biblioteca de conformidade",
                "Criar em 3 a 6 semanas"
              ],
              [
                "9",
                "Não tenho pacientes suficientes para justificar",
                "Rede de apoio (marketplace) e comunidade de estudos",
                "Existe"
              ],
              [
                "10",
                "Tenho poucos pacientes integrativos, maioria é convênio",
                "Rede de apoio amplia a base de pacientes integrativos",
                "Existe"
              ],
              [
                "11",
                "Estou apertada de caixa, não posso pagar",
                "Retorno via marketplace e plano de pausa por 30 dias",
                "Existe / Bloqueador"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Resumo: 7 das 11 objeções têm resposta pronta. 4 precisam ser produzidas (PDFs, vídeos, parecer jurídico, calendário). Prazo total: 6 semanas."
          },
          {
            "type": "p",
            "text": "3.6 Os 5 Bloqueadores"
          },
          {
            "type": "p",
            "text": "Dentro dos 23 problemas relevantes, cinco têm status especial: se não tiverem solução pronta no momento da venda, a conversão vai perto de zero."
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Bloqueador",
                "Tipo",
                "Solução",
                "Status"
              ],
              [
                "1",
                "Trauma com ferramenta anterior",
                "Objeção",
                "Garantia 7 dias com dinheiro de volta",
                "Pronto"
              ],
              [
                "2",
                "Sem tempo de aprender",
                "Objeção",
                "Treinamento de 60 min + atendimento dedicado na 1ª semana",
                "Pronto"
              ],
              [
                "3",
                "Sem tempo para análise profunda",
                "Dor",
                "IA gera análise em 20 min após a consulta",
                "Pronto"
              ],
              [
                "4",
                "Paciente não segue protocolo em casa",
                "Dor",
                "App do paciente com checklist",
                "Pronto"
              ],
              [
                "5",
                "Caixa apertado leva ao cancelamento",
                "Objeção",
                "Retorno via marketplace e pausa de 30 dias",
                "Pronto"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Resumo: todos os 5 bloqueadores têm solução pronta. A Auton pode ir ao mercado sem buracos críticos. Os 4 itens a criar do §3.5 são respostas a objeções secundárias, não bloqueadores."
          },
          {
            "type": "p",
            "text": "3.7 O que o mapa mostra"
          },
          {
            "type": "p",
            "text": "Primeiro: 74% da oferta Auton já existe como funcionalidade. Só 4 itens precisam ser criados antes do lançamento, todos material de venda, não desenvolvimento."
          },
          {
            "type": "p",
            "text": "Segundo: os 5 bloqueadores estão resolvidos. Dá para lançar a Fase 1 agora, sem esperar a Fase 2."
          },
          {
            "type": "p",
            "text": "Terceiro: cada tipo tem dono único. Vendedor trata Tipo 2. Produto entrega Tipo 1. Isso elimina conflito e acelera execução."
          },
          {
            "type": "p",
            "text": "3.8 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton tem 23 problemas relevantes mapeados, 18 soluções ativas e 5 bloqueadores resolvidos. A oferta comercial é construída sobre os 12 problemas do Tipo 1 (que viram pilares do produto) somados aos 11 problemas do Tipo 2 (que viram arsenal comercial). Cada dor que o cliente fala encontra uma solução correspondente, com nome, componente e prova. É esse encaixe que torna o ticket R$ 997 a 4.997 defensável."
          }
        ]
      },
      {
        "id": "canvas-4",
        "num": "4",
        "title": "Solução",
        "full_title": "§4 · Solução",
        "elements": [
          {
            "type": "p",
            "text": "4.1 O que este bloco define"
          },
          {
            "type": "p",
            "text": "A solução é o conjunto de componentes da Auton organizados em pilares. Cada componente existe para resolver uma dor mapeada no §3. A arquitetura segue quatro princípios para o empacotamento da oferta."
          },
          {
            "type": "p",
            "text": "4.2 Quatro princípios para montar a oferta"
          },
          {
            "type": "p",
            "text": "Corte o que não agrega valor. Funcionalidade que não resolve dor mapeada sai do produto ou vai para fila."
          },
          {
            "type": "p",
            "text": "Agrupe o que amplifica valor. Funcionalidades com boa combinação viram um pilar único, com nome e argumento próprios."
          },
          {
            "type": "p",
            "text": "Separe produto de material de venda. O que o cliente usa na prática é produto. O que convence o cliente a comprar (garantia, depoimento, PDF) é arsenal e fica no §11."
          },
          {
            "type": "p",
            "text": "Revele na ordem certa. Nem todo pilar aparece na landing. A landing mostra os pilares principais; o pitch revela os extras; o arsenal aparece sob demanda."
          },
          {
            "type": "p",
            "text": "4.3 Mapa dos pilares da Auton"
          },
          {
            "type": "p",
            "text": "A Auton tem 3 pilares principais e 2 extras. Arsenal de vendas fica separado no §11."
          },
          {
            "type": "table",
            "rows": [
              [
                "Categoria",
                "Pilar",
                "Resolve quantas dores"
              ],
              [
                "Principal",
                "Plataforma ADS (Diagnóstico Inteligente + base operacional: agenda, teleconsulta, análise de exames, dashboard)",
                "7 dores clínicas do §3.4 (casos 1, 2, 3, 4, 7, 9, 11) + demandas operacionais de agenda e teleconsulta"
              ],
              [
                "Principal",
                "App do Paciente (Adesão e Acompanhamento)",
                "3 dores do §3.4 (casos 6, 8, mais 10 e 12 na Fase 2)"
              ],
              [
                "Principal",
                "Rede Auton (Comunidade e Marketplace)",
                "1 dor do §3.4 (caso 5)"
              ],
              [
                "Extra",
                "Onboarding Concierge",
                "Objeções 3 e 4 do §3.5"
              ],
              [
                "Extra",
                "Plano Fundador",
                "Objeção 7 do §3.5"
              ]
            ]
          },
          {
            "type": "p",
            "text": "4.4 Pilar 1: Plataforma ADS (Diagnóstico Inteligente)"
          },
          {
            "type": "p",
            "text": "O que é: motor de raciocínio clínico integrativo que transforma cada consulta em diagnóstico de causa raiz, apoiado em toda a infraestrutura operacional do consultório."
          },
          {
            "type": "p",
            "text": "Componentes clínicos (Método ADS):"
          },
          {
            "type": "p",
            "text": "Motor ADS estruturado em 3 etapas (Análise, Diagnóstico, Solução)"
          },
          {
            "type": "p",
            "text": "Análise funcional que cruza exames, sintomas e história"
          },
          {
            "type": "p",
            "text": "Análise automatizada de exames com leitura de marcadores e padrões"
          },
          {
            "type": "p",
            "text": "Protocolo personalizado pela IA com base no padrão do paciente"
          },
          {
            "type": "p",
            "text": "Análise completa em 20 minutos após a consulta"
          },
          {
            "type": "p",
            "text": "Tradução técnica para linguagem simples com ícones"
          },
          {
            "type": "p",
            "text": "Componentes operacionais (base do consultório):"
          },
          {
            "type": "p",
            "text": "Teleconsulta integrada (vídeo e áudio dentro da plataforma)"
          },
          {
            "type": "p",
            "text": "Gestão de agenda e calendário"
          },
          {
            "type": "p",
            "text": "Dashboard geral do consultório (visão de pacientes, sessões e produtividade)"
          },
          {
            "type": "p",
            "text": "Painel de evolução do paciente ao longo do tempo"
          },
          {
            "type": "p",
            "text": "Painel de casos anônimos com export em PDF"
          },
          {
            "type": "p",
            "text": "Argumento de venda: sua consulta inteira em um lugar só. Da agenda à teleconsulta, da análise de exames ao protocolo personalizado, com método no lugar de tentativa e erro."
          },
          {
            "type": "p",
            "text": "Dores resolvidas: casos 1, 2, 3, 4, 7, 9 e 11 do §3.4, mais o conjunto de demandas operacionais de agenda, teleconsulta e análise de exames."
          },
          {
            "type": "p",
            "text": "Status: funcional, em produção."
          },
          {
            "type": "p",
            "text": "4.5 Pilar 2: App do Paciente (Adesão e Acompanhamento)"
          },
          {
            "type": "p",
            "text": "O que é: aplicativo web que acompanha o paciente entre as consultas e transforma os protocolos em rotina prática."
          },
          {
            "type": "p",
            "text": "Componentes:"
          },
          {
            "type": "p",
            "text": "Checklist diário com plano de treino, alimentar e terapêutico"
          },
          {
            "type": "p",
            "text": "Relatório antes e depois com comparativo visual"
          },
          {
            "type": "p",
            "text": "Notificações e vídeos por orientação (Fase 2)"
          },
          {
            "type": "p",
            "text": "Jornada automática de 21 dias com alerta de abandono (Fase 2)"
          },
          {
            "type": "p",
            "text": "Argumento de venda: seu paciente não some entre consultas. Tem app, acompanha e vê evolução."
          },
          {
            "type": "p",
            "text": "Dores resolvidas: casos 6 e 8 do §3.4 no Dia 1; 10 e 12 na Fase 2."
          },
          {
            "type": "p",
            "text": "Status: web funcional. Mobile e jornada automática na fila."
          },
          {
            "type": "p",
            "text": "4.6 Pilar 3: Rede Auton (Comunidade + Marketplace)"
          },
          {
            "type": "p",
            "text": "O que é: rede fechada que junta discussão clínica entre colegas com encaminhamento multidisciplinar remunerado."
          },
          {
            "type": "p",
            "text": "Componentes:"
          },
          {
            "type": "p",
            "text": "Comunidade fechada de casos clínicos com moderação"
          },
          {
            "type": "p",
            "text": "Marketplace multidisciplinar (Auton 15% / profissional 85%)"
          },
          {
            "type": "p",
            "text": "Sistema de indicação entre especialidades"
          },
          {
            "type": "p",
            "text": "Argumento de venda: você não está mais sozinha. Discute casos com colegas que respeita e ganha renda indicando."
          },
          {
            "type": "p",
            "text": "Dores resolvidas: caso 5 do §3.4 e objeções 9 e 10 do §3.5."
          },
          {
            "type": "p",
            "text": "Status: pronto, ainda não lançado publicamente."
          },
          {
            "type": "p",
            "text": "4.7 Extras que acompanham"
          },
          {
            "type": "p",
            "text": "Onboarding Concierge: treinamento de 60 minutos + atendimento dedicado na primeira semana + migração de dados grátis em 48 horas. Argumento: você está usando de forma produtiva em uma hora, sem migrar nada manualmente."
          },
          {
            "type": "p",
            "text": "Plano Fundador: uma aula por semana com professor especialista + mentoria em grupo para recém-formadas. Argumento: você não compra software, entra em um programa de evolução contínua."
          },
          {
            "type": "p",
            "text": "4.8 Fila consciente (fora da oferta atual)"
          },
          {
            "type": "p",
            "text": "Três componentes ficam fora da Fase 1 por dependerem de desenvolvimento:"
          },
          {
            "type": "p",
            "text": "App mobile do paciente depende de desenvolvimento nativo (Fase 2)"
          },
          {
            "type": "p",
            "text": "Notificações e vídeos dependem do app mobile (Fase 2)"
          },
          {
            "type": "p",
            "text": "Jornada automática de 21 dias depende de automação + mobile (Fase 2)"
          },
          {
            "type": "p",
            "text": "4.9 Cobertura problema/solução"
          },
          {
            "type": "p",
            "text": "12 dores do Tipo 1: 10 têm solução ativa nos 3 pilares, 2 aguardam Fase 2. Cobertura Dia 1: 83%."
          },
          {
            "type": "p",
            "text": "11 objeções do Tipo 2: 7 são neutralizadas pelos extras e pela Rede Auton, 4 vão para o Arsenal de Vendas (§11)."
          },
          {
            "type": "p",
            "text": "5 bloqueadores: todos cobertos por componentes existentes."
          },
          {
            "type": "p",
            "text": "Nenhum componente da Auton é gordura. Cada um resolve uma dor ou neutraliza uma objeção."
          },
          {
            "type": "p",
            "text": "4.10 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton é uma oferta de 3 pilares principais que resolvem 83% das dores do avatar no Dia 1, com 2 extras que neutralizam as objeções mais frequentes. A arquitetura se sustenta porque cada componente existe em resposta a uma dor ou objeção mapeada. Essa condição torna o ticket R$ 997 a 4.997 defensável no §9."
          }
        ]
      },
      {
        "id": "canvas-5",
        "num": "5",
        "title": "Vantagem Injusta",
        "full_title": "§5 · Vantagem Injusta",
        "elements": [
          {
            "type": "p",
            "text": "5.1 O que este bloco defende"
          },
          {
            "type": "p",
            "text": "A vantagem injusta é o conjunto de ativos que concorrente não consegue copiar em prazo curto. Sem ela, qualquer empresa com capital replica a Auton em 12 meses e transforma a categoria em commodity. Vantagem injusta é o ativo que não se compra, que precisa de tempo para construir e que cresce com o uso."
          },
          {
            "type": "p",
            "text": "5.2 O que torna um ativo uma vantagem injusta de verdade"
          },
          {
            "type": "p",
            "text": "Um ativo qualifica como vantagem injusta quando passa em 4 testes:"
          },
          {
            "type": "p",
            "text": "Não dá para transferir. Não pode ser comprado ou contratado por um concorrente."
          },
          {
            "type": "p",
            "text": "Tempo para refazer. Exige anos de construção, não trimestres."
          },
          {
            "type": "p",
            "text": "Prova existente. Já demonstrou valor no mundo real, não em projeção."
          },
          {
            "type": "p",
            "text": "Combinação. Junto com outros ativos, vale mais do que a soma das partes."
          },
          {
            "type": "p",
            "text": "Ativo que passa nos 4 testes é vantagem real. Ativo que falha em um deles é vantagem temporária."
          },
          {
            "type": "p",
            "text": "5.3 Os 5 ativos da Auton"
          },
          {
            "type": "table",
            "rows": [
              [
                "#",
                "Ativo",
                "Dá para copiar?",
                "Tempo para refazer",
                "Prova"
              ],
              [
                "1",
                "Método ADS codificado em IA",
                "Não",
                "50 anos de prática dos fundadores",
                "60 testadores com 100% de melhora clínica"
              ],
              [
                "2",
                "Base USI com 3.000 formados e 5.000 alunos",
                "Não",
                "10 anos de construção institucional",
                "58% de conversão no MVP"
              ],
              [
                "3",
                "Marca dos fundadores Barakat e Bonanza",
                "Não",
                "Mais de 30 anos cada",
                "89% do público tem afinidade direta"
              ],
              [
                "4",
                "Base de dados de causa raiz que cresce a cada consulta",
                "Não",
                "Cresce de forma composta com o uso",
                "Ativo estratégico para saída"
              ],
              [
                "5",
                "Efeito de rede (comunidade + marketplace)",
                "Não",
                "Exige massa crítica de usuários",
                "Valida upgrade do Starter para o Pro"
              ]
            ]
          },
          {
            "type": "p",
            "text": "5.4 Por que os 5 juntos são mais fortes que separados"
          },
          {
            "type": "p",
            "text": "Cada ativo sozinho é defensável, mas pode ser copiado no longo prazo. A força real está na combinação:"
          },
          {
            "type": "p",
            "text": "Método ADS sem base USI vira livro didático sem distribuição"
          },
          {
            "type": "p",
            "text": "Base USI sem Método ADS vira pós-graduação sem produto para oferecer"
          },
          {
            "type": "p",
            "text": "Marca dos fundadores sem Rede Auton vira autoridade sem ativo escalável"
          },
          {
            "type": "p",
            "text": "Dados de causa raiz sem Método ADS viram dados sem significado clínico"
          },
          {
            "type": "p",
            "text": "Efeito de rede sem os outros quatro vira app de mensagens sem razão de ficar"
          },
          {
            "type": "p",
            "text": "A Auton é a única empresa que tem os 5 ao mesmo tempo. Qualquer concorrente precisaria reconstruir cada um do zero e orquestrar a combinação, o que não se faz em menos de uma década."
          },
          {
            "type": "p",
            "text": "5.5 O que os 5 ativos entregam na prática"
          },
          {
            "type": "p",
            "text": "Defesa contra commodity: o §7 vai mostrar que a Auton é categoria única; esses 5 ativos são o motivo."
          },
          {
            "type": "p",
            "text": "Preço que se sustenta: o §9 sustenta ticket de R$ 997 a 4.997 porque o cliente não encontra substituto completo."
          },
          {
            "type": "p",
            "text": "Saída estratégica: os dados de causa raiz são o ativo que torna a Auton atrativa para Big Pharma e fundos de healthtech."
          },
          {
            "type": "p",
            "text": "Custo de aquisição baixo: a marca dos fundadores e a base USI reduzem drasticamente o CAC."
          },
          {
            "type": "p",
            "text": "5.6 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton opera sobre 5 ativos que juntos formam uma muralha de uma década de construção. Nenhum sozinho é suficiente para impedir concorrência; combinados, tornam a Auton impossível de copiar em tempo relevante de mercado. É essa muralha que permite posicionar a oferta como categoria única (§6 e §7) e cobrar 10 a 50 vezes mais que a camada commodity."
          }
        ]
      },
      {
        "id": "canvas-6",
        "num": "6",
        "title": "Proposta Única de Valor",
        "full_title": "§6 · Proposta Única de Valor",
        "elements": [
          {
            "type": "p",
            "text": "6.1 O que este bloco trava"
          },
          {
            "type": "p",
            "text": "A Proposta Única de Valor (PUV) é a frase única que representa a Auton em qualquer canal. Sem PUV travada, cada anúncio, pitch e landing recria o posicionamento do zero, e cada recriação dilui a mensagem."
          },
          {
            "type": "p",
            "text": "6.2 O que uma PUV precisa fazer"
          },
          {
            "type": "p",
            "text": "Uma PUV bem construída faz 4 coisas ao mesmo tempo:"
          },
          {
            "type": "p",
            "text": "Nomeia a categoria em que a empresa compete (de preferência uma categoria única)"
          },
          {
            "type": "p",
            "text": "Reconhece a dor do avatar nas palavras dele"
          },
          {
            "type": "p",
            "text": "Entrega a promessa em unidade que dá para entender"
          },
          {
            "type": "p",
            "text": "Bloqueia comparação direta com alternativas"
          },
          {
            "type": "p",
            "text": "Quando a PUV faz menos que isso, vira slogan. Slogan é decoração. PUV é operação."
          },
          {
            "type": "p",
            "text": "6.3 Frase-mãe travada"
          },
          {
            "type": "p",
            "text": "A 1ª IA de causa raiz, agora em rede. Diagnóstico inteligente. Discussão entre colegas. Rede de apoio multidisciplinar. Auton: a plataforma sistêmica da saúde integrativa."
          },
          {
            "type": "p",
            "text": "Por que essa frase ganha:"
          },
          {
            "type": "p",
            "text": "Preserva a marca já construída (\"1ª IA para causa raiz\") e amplia com \"agora em rede\""
          },
          {
            "type": "p",
            "text": "Cobre as 3 camadas do produto: chat vira \"diagnóstico inteligente\"; comunidade vira \"discussão entre colegas\"; marketplace vira \"rede de apoio multidisciplinar\""
          },
          {
            "type": "p",
            "text": "Encaixa na dor-mãe do avatar: \"não consigo ver sozinha\" encontra resposta em \"agora em rede\""
          },
          {
            "type": "p",
            "text": "Cria categoria única: \"plataforma sistêmica da saúde integrativa\" é território inexplorado"
          },
          {
            "type": "p",
            "text": "Funciona em qualquer canal (headline, pitch, live, WhatsApp, bio)"
          },
          {
            "type": "p",
            "text": "6.4 Versões por contexto"
          },
          {
            "type": "p",
            "text": "Para o Investidor: A Auton é o sistema operacional do ecossistema de saúde integrativa. A primeira plataforma que transforma 50 anos de metodologia clínica em infraestrutura escalável para 295 mil profissionais integrativos no Brasil."
          },
          {
            "type": "p",
            "text": "Para o Profissional de Saúde: A Auton é o ecossistema que a saúde integrativa sempre precisou. Uma plataforma que une todos os profissionais em torno de uma metodologia comum, onde cada consulta alimenta o sistema, cada profissional fortalece o ecossistema e o paciente finalmente recebe o cuidado que a medicina convencional nunca entregou."
          },
          {
            "type": "p",
            "text": "Para Marca: A saúde integrativa sempre soube que o paciente é único. Agora tem uma IA que pensa igual."
          },
          {
            "type": "p",
            "text": "6.5 Formas proibidas de descrever a Auton"
          },
          {
            "type": "p",
            "text": "Toda equipe que fala da Auton precisa evitar essas descrições porque cada uma destrói o posicionamento:"
          },
          {
            "type": "p",
            "text": "\"Software de IA para profissionais de saúde\" (genérico, vira commodity)"
          },
          {
            "type": "p",
            "text": "\"Prontuário eletrônico inteligente\" (categoria saturada)"
          },
          {
            "type": "p",
            "text": "\"ChatGPT para médicos\" (diminui o produto)"
          },
          {
            "type": "p",
            "text": "\"Plataforma de gestão clínica\" (não captura causa raiz nem rede)"
          },
          {
            "type": "p",
            "text": "\"Ferramenta de IA clínica\" (apaga o ecossistema)"
          },
          {
            "type": "p",
            "text": "6.6 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton é a primeira IA de causa raiz, agora em rede, a plataforma sistêmica da saúde integrativa. A PUV travada é a síntese do que foi construído nos §4 e §5. Toda comunicação da empresa deve partir dessa frase. Nenhuma descrição alternativa pode ser usada sem aprovação."
          }
        ]
      },
      {
        "id": "canvas-7",
        "num": "7",
        "title": "Concorrentes e Padrões de Mercado",
        "full_title": "§7 · Concorrentes e Padrões de Mercado",
        "elements": [
          {
            "type": "p",
            "text": "7.1 O que este bloco mapeia"
          },
          {
            "type": "p",
            "text": "Este bloco mapeia o campo competitivo e prova que a Auton ocupa uma categoria única. Sem esse mapeamento, \"categoria única\" é só afirmação; com ele, vira fato."
          },
          {
            "type": "p",
            "text": "7.2 As 3 zonas do mercado"
          },
          {
            "type": "p",
            "text": "O mercado de software para profissionais de saúde no Brasil tem 3 zonas com lógicas e preços distintos:"
          },
          {
            "type": "p",
            "text": "Zona 1 · Commodity (R$ 85 a 195/mês). Prontuários tradicionais sem IA clínica real. Competem por preço e base instalada. Exemplos: iClinic, HiDoctor, Amplimed, Naomed."
          },
          {
            "type": "p",
            "text": "Zona 2 · Premium Genérica (R$ 300 a 500/mês). Plataformas com IA de transcrição ou sistema de gestão. Servem qualquer especialidade. Exemplos: Amigo Tech, Support Health, VOA Health."
          },
          {
            "type": "p",
            "text": "Zona 3 · Categoria Única (R$ 497 a 4.997+/mês). Verticalização completa em saúde integrativa com metodologia própria + IA + comunidade + marketplace. Ocupada só pela Auton."
          },
          {
            "type": "p",
            "text": "7.3 Mapeamento dos 8 concorrentes"
          },
          {
            "type": "table",
            "rows": [
              [
                "Zona",
                "Concorrente",
                "Preço",
                "Desvantagem em relação à Auton"
              ],
              [
                "Zona 1",
                "iClinic",
                "R$ 119-159",
                "Sem IA clínica, sem método próprio, sem rede, zero foco em integrativo"
              ],
              [
                "Zona 1",
                "HiDoctor",
                "R$ 85-195",
                "IA só transcreve, não diagnostica, sem análise de causa raiz"
              ],
              [
                "Zona 1",
                "Amplimed",
                "A partir R$ 99",
                "Foco em telemedicina e gestão, IA superficial, sem rede"
              ],
              [
                "Zona 1",
                "Naomed",
                "A partir R$ 99",
                "Gera notas automáticas, não raciocina, sem método"
              ],
              [
                "Zona 2",
                "AmigoTech",
                "~R$ 300-500",
                "IA genérica não treinada em ADS, sem rede, sem foco integrativo"
              ],
              [
                "Zona 2",
                "Support Health",
                "Não público",
                "Sistema de gestão, a IA é apenas complementar"
              ],
              [
                "Zona 2",
                "VOA Health",
                "~R$ 300",
                "Só transcreve, produto americano sem adaptação ao Brasil"
              ],
              [
                "Horizontal",
                "ChatGPT Plus",
                "R$ 100",
                "Não é clínico, não conhece ADS, sem comunidade e sem marketplace"
              ]
            ]
          },
          {
            "type": "p",
            "text": "7.4 Teste de commodity aplicado à Auton"
          },
          {
            "type": "p",
            "text": "O teste usa 3 perguntas. Cada \"sim\" indica risco de virar commodity."
          },
          {
            "type": "table",
            "rows": [
              [
                "Pergunta",
                "Zonas 1 e 2",
                "Auton"
              ],
              [
                "Cliente escolhe pelo preço?",
                "Sim",
                "Não. Escolhe por especialização integrativa"
              ],
              [
                "Concorrentes fazem o mesmo com roupa diferente?",
                "Sim",
                "Não. Nenhum combina método + IA + rede"
              ],
              [
                "Alguém consegue copiar em 12 meses?",
                "Sim",
                "Não. Exige fundadores, base USI e dados acumulados"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Resultado Auton: 0/3. Não é commodity."
          },
          {
            "type": "p",
            "text": "7.5 Padrões dominantes do mercado"
          },
          {
            "type": "p",
            "text": "Seis padrões aparecem em todos os concorrentes das Zonas 1 e 2. A Auton responde a cada um:"
          },
          {
            "type": "p",
            "text": "Mensagem principal: \"economize tempo em documentação\". Apelo forte, mas raso. A Auton compete em categoria superior: \"resolva o caso clínico, não só o registro\"."
          },
          {
            "type": "p",
            "text": "Modelo de entrada: trial grátis de 7 a 14 dias. A Auton adota garantia de 7 dias com reembolso: mesmo risco reverso, maior compromisso."
          },
          {
            "type": "p",
            "text": "Validação clínica: todos buscam KOLs. A Auton tem Barakat e Bonanza nativos."
          },
          {
            "type": "p",
            "text": "Verticalização: tendência crescente. A Auton já nasce verticalizada em integrativa."
          },
          {
            "type": "p",
            "text": "Integração com agenda e teleconsulta: é expectativa base. A Auton cobre."
          },
          {
            "type": "p",
            "text": "Conformidade e LGPD: decisivo. A Auton tem criptografia, política de privacidade alinhada à LGPD e parecer jurídico em produção."
          },
          {
            "type": "p",
            "text": "7.6 Dores não atendidas pelo mercado atual"
          },
          {
            "type": "p",
            "text": "Sete dores são relevantes e nenhum concorrente resolve:"
          },
          {
            "type": "p",
            "text": "Medo legal ao usar IA (quem responde por erro)"
          },
          {
            "type": "p",
            "text": "Dificuldade de mostrar resultados clínicos para paciente e convênio"
          },
          {
            "type": "p",
            "text": "Falta de integração entre anamnese, exames e plano terapêutico"
          },
          {
            "type": "p",
            "text": "Pressão por resultados mensuráveis (adesão, melhora, retorno)"
          },
          {
            "type": "p",
            "text": "Isolamento profissional sem rede multidisciplinar acessível"
          },
          {
            "type": "p",
            "text": "Falta de autonomia para profissionais não-médicos"
          },
          {
            "type": "p",
            "text": "Excesso de tempo e burocracia em documentação"
          },
          {
            "type": "p",
            "text": "7.7 A brecha ocupada pela Auton"
          },
          {
            "type": "p",
            "text": "Hoje o mercado não oferece um produto que combine: método clínico validado + IA treinada nele + rede multidisciplinar + respaldo médico + formação contínua + autonomia dentro da conformidade. A Auton é a primeira a ocupar essa combinação."
          },
          {
            "type": "p",
            "text": "7.8 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton opera em categoria única no mercado brasileiro de software clínico integrativo. Zonas 1 e 2 competem em eficiência administrativa; a Auton compete em autonomia clínica e qualidade diagnóstica. O teste de commodity marca 0/3 contra 3/3 das zonas inferiores. A brecha é estrutural, cobre 7 dores relevantes que nenhum concorrente atende e depende de 5 ativos que a Auton já tem."
          }
        ]
      },
      {
        "id": "canvas-8",
        "num": "8",
        "title": "Equação de Valor",
        "full_title": "§8 · Equação de Valor",
        "elements": [
          {
            "type": "p",
            "text": "8.1 O que este bloco quantifica"
          },
          {
            "type": "p",
            "text": "Este bloco quantifica em reais por mês quanto valor o cliente recebe ao pagar a Auton. Sem essa quantificação, o preço do §9 é opinião e o argumento do §10 é abstrato. Com ela, ambos viram matemática."
          },
          {
            "type": "p",
            "text": "8.2 A estrutura da Equação"
          },
          {
            "type": "p",
            "text": "O valor percebido pelo cliente tem 4 alavancas:"
          },
          {
            "type": "p",
            "text": "Valor = (Sonho do Cliente × Confiança) ÷ (Tempo até o Resultado × Esforço)"
          },
          {
            "type": "p",
            "text": "Aumentar valor significa: ampliar o sonho, elevar a confiança, reduzir o tempo e reduzir o esforço. Toda funcionalidade, bônus e garantia precisa atuar em pelo menos uma dessas alavancas. O que não atua sai."
          },
          {
            "type": "p",
            "text": "8.3 Sonho do Cliente em 4 drivers"
          },
          {
            "type": "p",
            "text": "O Sonho do Cliente da Dra. Camila vale R$ 13.470 por mês. A conta:"
          },
          {
            "type": "table",
            "rows": [
              [
                "Driver",
                "Valor/mês",
                "Cálculo"
              ],
              [
                "1. Tempo economizado",
                "R$ 8.750",
                "50% de economia sobre 35h/mês em documentação e análise = 17,5h x R$ 500/h"
              ],
              [
                "2. Marketplace (renda nova)",
                "R$ 2.720",
                "8 encaminhamentos/mês x R$ 400 x 85% para o profissional"
              ],
              [
                "3. Retenção de pacientes",
                "R$ 1.000",
                "Qualidade maior = 2 a 3 consultas retidas/mês x R$ 400"
              ],
              [
                "4. Autoridade e casos",
                "R$ 1.000",
                "Comunidade + ADS + casos geram indicação espontânea"
              ],
              [
                "TOTAL do Sonho do Cliente",
                "R$ 13.470",
                "Soma dos 4 ganhos brutos"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Cada driver parte de premissa concreta (dados do MVP, média do público, projeção do marketplace)."
          },
          {
            "type": "p",
            "text": "8.4 Confiança Percebida (85%)"
          },
          {
            "type": "p",
            "text": "A Confiança Percebida mede o quanto o cliente acredita que vai receber o Sonho ao pagar. Cada prova aumenta esse percentual. A Auton chega a 85% pela soma de 4 provas:"
          },
          {
            "type": "p",
            "text": "Endosso direto de Barakat e Bonanza: +25%"
          },
          {
            "type": "p",
            "text": "60 testadores com redução de 80% do tempo: +20%"
          },
          {
            "type": "p",
            "text": "Demonstração ao vivo em caso real: +25%"
          },
          {
            "type": "p",
            "text": "Garantia de 7 dias com reembolso: +15%"
          },
          {
            "type": "p",
            "text": "Total: 85%. Os 15% restantes ficam como margem de incerteza natural."
          },
          {
            "type": "p",
            "text": "8.5 Tempo até o Resultado e Esforço"
          },
          {
            "type": "p",
            "text": "Os dois denominadores da equação foram levados ao mínimo:"
          },
          {
            "type": "p",
            "text": "Tempo até o Resultado: 1 consulta. Já na primeira consulta após o onboarding, o cliente entrega anamnese automática e recebe protocolo personalizado."
          },
          {
            "type": "p",
            "text": "Esforço: 1 hora. Onboarding de 60 minutos, sem migração obrigatória, sem reestruturar o consultório."
          },
          {
            "type": "p",
            "text": "Denominadores no mínimo significa que o numerador (Sonho × Confiança) é quase integralmente capturado."
          },
          {
            "type": "p",
            "text": "8.6 Valor Percebido Final"
          },
          {
            "type": "p",
            "text": "Sonho × Confiança = R$ 13.470 × 0,85 = R$ 11.450/mês."
          },
          {
            "type": "p",
            "text": "Esse é o valor que o cliente acredita que vai receber ao pagar a Auton. É o número que sustenta o §9 (Preço), o §10 (Argumento) e o §11 (Arsenal)."
          },
          {
            "type": "p",
            "text": "8.7 Evidência Científica como prova de Confiança"
          },
          {
            "type": "p",
            "text": "A Confiança de 85% é sustentada por literatura que valida o uso de IA em contextos clínicos. Esses estudos viram arsenal quando o cliente questiona a confiabilidade:"
          },
          {
            "type": "p",
            "text": "IA superando médicos:"
          },
          {
            "type": "p",
            "text": "Retinopatia diabética: algoritmo com sensibilidade e especificidade comparáveis a oftalmologistas (Gulshan et al., JAMA 2016)"
          },
          {
            "type": "p",
            "text": "Radiologia torácica: CheXNeXt com desempenho similar ou superior a radiologistas (Rajpurkar et al., PLoS Med)"
          },
          {
            "type": "p",
            "text": "Revisão do estado da arte em IA clínica (Rajpurkar/Topol et al., Nature Medicine 2022)"
          },
          {
            "type": "p",
            "text": "Burnout e desvalorização profissional:"
          },
          {
            "type": "p",
            "text": "Estratégias de gestão de estresse e burnout em profissionais de saúde no Brasil (revisão PMC)"
          },
          {
            "type": "p",
            "text": "Burnout entre médicos no Brasil (estudo Frontiers)"
          },
          {
            "type": "p",
            "text": "Hospitais do Nordeste durante COVID: quase metade dos profissionais com exaustão alta (São Paulo Med J)"
          },
          {
            "type": "p",
            "text": "8.8 Retorno por plano"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Preço mensal",
                "Valor percebido",
                "Retorno"
              ],
              [
                "Starter mensal",
                "R$ 997",
                "R$ 5.500 (sem marketplace)",
                "5,5x"
              ],
              [
                "Starter anual",
                "R$ 797",
                "R$ 5.500",
                "6,9x"
              ],
              [
                "Pro mensal (oferta principal)",
                "R$ 1.497",
                "R$ 11.450",
                "7,65x"
              ],
              [
                "Pro anual (melhor relação)",
                "R$ 1.197",
                "R$ 11.450",
                "9,56x"
              ],
              [
                "Enterprise",
                "A partir R$ 4.997",
                "R$ 33.000+ (multi-usuários)",
                "6,6x"
              ]
            ]
          },
          {
            "type": "p",
            "text": "8.9 Conclusão"
          },
          {
            "type": "p",
            "text": "O Sonho do Cliente vale R$ 13.470 por mês. Com 85% de Confiança e denominadores no mínimo, o Valor Percebido Final é R$ 11.450 por mês. No plano Pro (R$ 1.497/mês), o retorno é 7,65x. No anual, 9,56x. Cada real vem de premissa concreta, então a conta é fácil de defender."
          }
        ]
      },
      {
        "id": "canvas-9",
        "num": "9",
        "title": "Preço",
        "full_title": "§9 · Preço",
        "elements": [
          {
            "type": "p",
            "text": "9.1 O que este bloco decide"
          },
          {
            "type": "p",
            "text": "Este bloco decide quanto cobrar por cada plano. Cobrar abaixo do valor percebido deixa dinheiro na mesa e sinaliza fragilidade. Cobrar acima quebra a equação e elimina a conversão. O preço certo entrega retorno de 5x ou mais sobre o pagamento, com desconto maior no anual."
          },
          {
            "type": "p",
            "text": "9.2 Sete princípios de preço aplicados"
          },
          {
            "type": "p",
            "text": "Cobre pelo valor, não pelo custo. A base é R$ 11.450 de valor, não R$ 30 de servidor."
          },
          {
            "type": "p",
            "text": "Tier do meio é o herói. O Pro (R$ 1.497) é 1,5x o Starter (R$ 997), então o upgrade fica natural."
          },
          {
            "type": "p",
            "text": "Enterprise ancora por cima. O Enterprise (R$ 4.997) custa 3,34x o Pro, dentro da regra de 3 a 5x entre tiers."
          },
          {
            "type": "p",
            "text": "Starter existe para ancorar. Não é o plano mais vendido; é o ponto de entrada que faz o Pro parecer óbvio."
          },
          {
            "type": "p",
            "text": "Desconto anual de 20%. Dentro da faixa saudável de 16 a 25%, reduz cancelamento e melhora caixa."
          },
          {
            "type": "p",
            "text": "Marketplace como motor de upgrade. Aparece só no Pro e no Enterprise, o que empurra adoção para cima."
          },
          {
            "type": "p",
            "text": "Preço alto eleva valor percebido. Ticket premium cria ciclo virtuoso: cliente paga caro, engaja mais, obtém mais resultado, gera caso de sucesso, permite cobrar ainda mais na próxima safra."
          },
          {
            "type": "p",
            "text": "9.3 Fase 1: Turma Fundadora (200 vagas, 6 meses)"
          },
          {
            "type": "p",
            "text": "Turma Fundadora: R$ 497 mensal ou R$ 397/mês no anual (R$ 4.764/ano). Acesso completo + 3 pilares (Comunidade, Chat IA, Marketplace)."
          },
          {
            "type": "p",
            "text": "Propósito: validar o preço pleno, juntar casos de sucesso e criar massa crítica de embaixadores."
          },
          {
            "type": "p",
            "text": "9.4 Fase 2: Preço de escala (mês 7 em diante)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Mensal",
                "Anual (20% off)",
                "Marketplace"
              ],
              [
                "Starter",
                "R$ 997",
                "R$ 797/mês (R$ 9.564/ano)",
                "Funcionalidades básicas da Plataforma ADS. Sem chat IA, sem comunidade, sem marketplace (motores de upgrade)"
              ],
              [
                "Pro (principal)",
                "R$ 1.497",
                "R$ 1.197/mês (R$ 14.364/ano)",
                "Starter + chat IA estilo ChatGPT (treinado em ADS) + comunidade fechada + marketplace ativo (Auton 15% / profissional 85%)"
              ],
              [
                "Enterprise",
                "A partir R$ 4.997",
                "A partir R$ 3.997/mês",
                "Pro + múltiplos usuários + onboarding dedicado + SLA e condições customizadas"
              ]
            ]
          },
          {
            "type": "p",
            "text": "9.5 Múltiplos entre tiers"
          },
          {
            "type": "p",
            "text": "Starter para Pro (mensal): 1,5x (+50%). Aceitável. O marketplace fecha a decisão."
          },
          {
            "type": "p",
            "text": "Pro para Enterprise (mensal): 3,34x. Ideal (dentro da regra 3 a 5x)."
          },
          {
            "type": "p",
            "text": "Desconto anual uniforme: 20%. Ideal (dentro da faixa 16 a 25%)."
          },
          {
            "type": "p",
            "text": "9.6 Simulação de receita (mix 20/70/10 com 1.000 clientes)"
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Clientes",
                "Ticket mensal",
                "Receita mensal (MRR)",
                "Receita anual (ARR)"
              ],
              [
                "Starter",
                "200",
                "R$ 997",
                "R$ 199.400",
                "R$ 2.392.800"
              ],
              [
                "Pro",
                "700",
                "R$ 1.497",
                "R$ 1.257.900",
                "R$ 15.094.800"
              ],
              [
                "Enterprise",
                "100",
                "R$ 4.997",
                "R$ 499.700",
                "R$ 5.996.400"
              ],
              [
                "TOTAL",
                "1.000",
                "ARPU R$ 1.957",
                "R$ 1.957.000",
                "R$ 23.484.000"
              ]
            ]
          },
          {
            "type": "p",
            "text": "9.7 Regras de comunicação por plano"
          },
          {
            "type": "p",
            "text": "Starter"
          },
          {
            "type": "p",
            "text": "Posicionar como \"entrada\" e \"teste da plataforma\""
          },
          {
            "type": "p",
            "text": "Enfatizar: \"funções básicas da Plataforma ADS\""
          },
          {
            "type": "p",
            "text": "Não mencionar chat IA, comunidade ou marketplace no material. Cliente que perguntar é direcionado para o Pro"
          },
          {
            "type": "p",
            "text": "Pro (foco de 70% das vendas)"
          },
          {
            "type": "p",
            "text": "70% do pitch, landing e lives giram em torno do Pro"
          },
          {
            "type": "p",
            "text": "Três diferenciais exclusivos: chat IA estilo ChatGPT treinado no Método ADS, comunidade fechada de casos clínicos, marketplace multidisciplinar"
          },
          {
            "type": "p",
            "text": "Argumento principal: o marketplace gera renda, a comunidade resolve o isolamento e o chat multiplica a capacidade clínica. Juntos, pagam a assinatura várias vezes"
          },
          {
            "type": "p",
            "text": "Mostrar a matemática: R$ 1.497 de assinatura, 3 a 10 encaminhamentos/mês já geram mais do que paga; chat e comunidade são ganho adicional"
          },
          {
            "type": "p",
            "text": "Enterprise"
          },
          {
            "type": "p",
            "text": "Comunicar como \"fale com nosso time\""
          },
          {
            "type": "p",
            "text": "Piso publicado: \"a partir de R$ 4.997/mês\""
          },
          {
            "type": "p",
            "text": "Onboarding dedicado e SLA são os diferenciais palpáveis"
          },
          {
            "type": "p",
            "text": "9.8 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton opera com 4 planos (Turma Fundadora + Starter + Pro + Enterprise) construídos pelo valor percebido, não pelo custo. Os múltiplos entre tiers seguem a proporção 1,5x e 3,34x. O Pro é o herói comercial, responsável por 70% das vendas projetadas, com retorno de 7,65x no mensal e 9,56x no anual. A simulação mostra ARR de R$ 23,5 milhões com 1.000 clientes no mix realista."
          }
        ]
      },
      {
        "id": "canvas-10",
        "num": "10",
        "title": "Argumento de Venda",
        "full_title": "§10 · Argumento de Venda",
        "elements": [
          {
            "type": "p",
            "text": "10.1 O que este bloco trava"
          },
          {
            "type": "p",
            "text": "Este bloco trava a frase que o vendedor usa para fazer o cliente ver o preço como óbvio. Sem argumento travado, cada venda é improvisada; com argumento travado, qualquer vendedor do time entrega a mesma conversão."
          },
          {
            "type": "p",
            "text": "10.2 O argumento matemático principal"
          },
          {
            "type": "p",
            "text": "Você paga R$ 1.497 por mês pelo Pro. Recebe R$ 11.450 por mês em valor. Retorno de 7,6x todos os meses. No anual, 9,5x."
          },
          {
            "type": "p",
            "text": "Três frases. Sem adjetivo. Sem promessa vaga. Só matemática."
          },
          {
            "type": "p",
            "text": "10.3 A quebra que convence quem duvida"
          },
          {
            "type": "p",
            "text": "Quando o cliente questiona o número de R$ 11.450, a resposta é:"
          },
          {
            "type": "p",
            "text": "\"Vou te mostrar de onde vêm os R$ 11.450:\""
          },
          {
            "type": "p",
            "text": "R$ 8.750/mês de 50% do seu tempo recuperado em documentação e análise (17,5 horas × R$ 500/h)"
          },
          {
            "type": "p",
            "text": "R$ 2.720/mês de 8 encaminhamentos/mês na rede × 85% de R$ 400"
          },
          {
            "type": "p",
            "text": "R$ 1.000/mês de qualidade clínica maior retendo pacientes"
          },
          {
            "type": "p",
            "text": "R$ 1.000/mês de autoridade e casos gerando indicação espontânea"
          },
          {
            "type": "p",
            "text": "Soma R$ 13.470 × 85% de confiança = R$ 11.450. Você paga R$ 1.497. Retorno 7,6x."
          },
          {
            "type": "p",
            "text": "10.4 Argumentos principais"
          },
          {
            "type": "p",
            "text": "Autonomia clínica: trate com método e prescrição quando necessário, sem depender de terceiros."
          },
          {
            "type": "p",
            "text": "Economia de tempo: reduza 17 horas por mês em documentação e análise."
          },
          {
            "type": "p",
            "text": "Diagnóstico de causa raiz: o Método ADS une anamnese, exames e IA para priorizar causas, não sintomas."
          },
          {
            "type": "p",
            "text": "Respaldo clínico: acesso a médicos e nutricionistas integrativos dentro da plataforma."
          },
          {
            "type": "p",
            "text": "10.5 Argumentos de reforço"
          },
          {
            "type": "p",
            "text": "Aumento de receita por paciente (planos de acompanhamento, programas integrativos)"
          },
          {
            "type": "p",
            "text": "Menor cancelamento de pacientes e mais conversão em planos personalizados"
          },
          {
            "type": "p",
            "text": "Menor risco legal com supervisão e documentação automatizadas"
          },
          {
            "type": "p",
            "text": "Comunidade multidisciplinar que elimina o isolamento profissional"
          },
          {
            "type": "p",
            "text": "10.6 Por que o argumento é difícil de derrubar"
          },
          {
            "type": "p",
            "text": "Não é opinião, é matemática. Cada real tem origem rastreável."
          },
          {
            "type": "p",
            "text": "Os números são conservadores. 50% de economia de tempo é o piso do MVP (testadores reportam 80%). 8 encaminhamentos/mês é projeção, não sonho."
          },
          {
            "type": "p",
            "text": "O retorno é por mês, não por ano. 7,6x no primeiro mês elimina a objeção do tempo de retorno."
          },
          {
            "type": "p",
            "text": "10.7 Frases operacionais para 3 momentos da venda"
          },
          {
            "type": "p",
            "text": "Abertura (cliente pede \"me conta sobre a Auton\"): \"A Auton é a primeira IA de causa raiz, agora em rede. Você paga R$ 1.497/mês, recebe R$ 11.450/mês em valor. Quer ver como a conta fecha?\""
          },
          {
            "type": "p",
            "text": "Fechamento (cliente hesita no preço): \"No mensal é 7,6x de retorno. No anual, 9,5x. O marketplace sozinho já paga quase a assinatura. Faz sentido começar pelo anual?\""
          },
          {
            "type": "p",
            "text": "Resposta a \"está caro\": \"Se está caro é porque o valor está invisível. Deixa eu te mostrar os R$ 11.450 linha por linha.\""
          },
          {
            "type": "p",
            "text": "10.8 Conclusão"
          },
          {
            "type": "p",
            "text": "O argumento de venda da Auton é uma equação, não uma promessa. R$ 1.497 vira R$ 11.450, retorno 7,6x. Qualquer vendedor pode reproduzir. Qualquer cliente pode conferir. Isso elimina a improvisação e torna a conversão previsível."
          }
        ]
      },
      {
        "id": "canvas-11",
        "num": "11",
        "title": "Arsenal de Vendas",
        "full_title": "§11 · Arsenal de Vendas",
        "elements": [
          {
            "type": "p",
            "text": "11.1 O que este bloco organiza"
          },
          {
            "type": "p",
            "text": "Este bloco organiza as munições específicas para cada objeção dominante. Objeção sem munição trava a venda; munição sem objeção pesa o pitch. O arsenal aparece sob demanda, não na landing."
          },
          {
            "type": "p",
            "text": "11.2 Como o arsenal funciona na prática"
          },
          {
            "type": "p",
            "text": "Não aparece na landing. Cada munição é entregue sob demanda (WhatsApp ou pitch) quando a objeção aparece. Na landing, dilui a mensagem."
          },
          {
            "type": "p",
            "text": "Uma munição, uma objeção. Cada peça responde exatamente uma objeção. Cobrir várias perde precisão."
          },
          {
            "type": "p",
            "text": "Formato pronto para envio imediato. PDFs prontos, vídeos hospedados, parecer assinado. Nada que dependa de produção no momento."
          },
          {
            "type": "p",
            "text": "11.3 As 4 munições"
          },
          {
            "type": "p",
            "text": "Munição 1: Garantia de 7 dias com reembolso"
          },
          {
            "type": "p",
            "text": "Objeção: \"E se eu pagar e não for o prometido?\""
          },
          {
            "type": "p",
            "text": "Formato: PDF de 1 página + botão de reembolso na plataforma"
          },
          {
            "type": "p",
            "text": "Quando usar: cliente relata frustração com ferramenta anterior"
          },
          {
            "type": "p",
            "text": "Status: pronto"
          },
          {
            "type": "p",
            "text": "Munição 2: 3 depoimentos em vídeo + Diagnóstico 0"
          },
          {
            "type": "p",
            "text": "Objeção: \"Já tentei tudo e nada funcionou\""
          },
          {
            "type": "p",
            "text": "Formato: 3 vídeos de 60 a 90 segundos + avaliação clínica grátis de 30 minutos"
          },
          {
            "type": "p",
            "text": "Quando usar: cliente duvida do resultado real"
          },
          {
            "type": "p",
            "text": "Status: produzir em 1 a 2 semanas"
          },
          {
            "type": "p",
            "text": "Munição 3: PDF com cálculo de retorno"
          },
          {
            "type": "p",
            "text": "Objeção: \"Marido/parceiro questiona o investimento\""
          },
          {
            "type": "p",
            "text": "Formato: documento de 1 página com a conta R$ 1.497 = R$ 11.450"
          },
          {
            "type": "p",
            "text": "Quando usar: cliente diz que precisa conversar com alguém antes de decidir"
          },
          {
            "type": "p",
            "text": "Status: produzir em 3 a 5 dias"
          },
          {
            "type": "p",
            "text": "Munição 4: Parecer jurídico + biblioteca de conformidade"
          },
          {
            "type": "p",
            "text": "Objeção: \"Meu conselho vai questionar o uso de IA\""
          },
          {
            "type": "p",
            "text": "Formato: parecer assinado por advogado especialista + biblioteca de cases conformes (CFM, CFN, CFP, CFBM, COFFITO)"
          },
          {
            "type": "p",
            "text": "Quando usar: cliente menciona receio com fiscalização"
          },
          {
            "type": "p",
            "text": "Status: produzir em 3 a 6 semanas"
          },
          {
            "type": "p",
            "text": "11.4 Cronograma de produção"
          },
          {
            "type": "table",
            "rows": [
              [
                "Semana",
                "Munição a entregar",
                "Responsável"
              ],
              [
                "1",
                "Garantia 7 dias (só formalizar em PDF)",
                "Marketing"
              ],
              [
                "1",
                "PDF com cálculo de retorno (3 a 5 dias)",
                "Marketing"
              ],
              [
                "2",
                "3 depoimentos em vídeo + processo Diagnóstico 0",
                "Conteúdo + time clínico"
              ],
              [
                "3 a 4",
                "Plano Fundador com calendário e professor",
                "Operações"
              ],
              [
                "3 a 6",
                "Parecer jurídico e biblioteca de conformidade",
                "Jurídico externo"
              ]
            ]
          },
          {
            "type": "p",
            "text": "Arsenal completo em 6 semanas."
          },
          {
            "type": "p",
            "text": "11.5 Munições que ficam de fora"
          },
          {
            "type": "p",
            "text": "Estudo de caso em texto longo. Redundante com os vídeos."
          },
          {
            "type": "p",
            "text": "Calculadora interativa de retorno. Desenvolvimento não se justifica; PDF resolve."
          },
          {
            "type": "p",
            "text": "Comparativo com concorrentes. Evitar comparação direta reforça o posicionamento de categoria única (§6 e §7)."
          },
          {
            "type": "p",
            "text": "11.6 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton vai ao mercado com 4 munições específicas, cada uma respondendo a uma objeção do §3.5. O arsenal é entregue sob demanda, não na landing. Três munições prontas em até 2 semanas; a quarta em 6 semanas por dependência jurídica externa. Com o arsenal pronto, o vendedor tem resposta imediata para todas as objeções secundárias do funil."
          }
        ]
      },
      {
        "id": "canvas-12",
        "num": "12",
        "title": "Motores de Aquisição",
        "full_title": "§12 · Motores de Aquisição",
        "elements": [
          {
            "type": "p",
            "text": "12.1 O que este bloco define"
          },
          {
            "type": "p",
            "text": "Este bloco define como o avatar chega até a oferta. A Auton organiza a aquisição em motores e engrenagens. Cada motor é uma fonte de atenção. Cada engrenagem é um canal específico que gira dentro do motor. Um motor sem engrenagens é só nome; engrenagens soltas sem motor são esforço desorganizado. A potência vem da combinação."
          },
          {
            "type": "p",
            "text": "12.2 Os seis motores da Auton"
          },
          {
            "type": "p",
            "text": "A aquisição opera em seis motores principais, cada um com suas engrenagens. Um sétimo elemento (mídia paga) funciona como amplificador transversal das engrenagens de conteúdo e entra na Fase 2."
          },
          {
            "type": "table",
            "rows": [
              [
                "Motor",
                "Engrenagens",
                "Quando ativar"
              ],
              [
                "1. Base de Alunos USI",
                "Grupo WhatsApp, Grupo Telegram, Aulas e Estudos de Caso ao Vivo",
                "Mês 1"
              ],
              [
                "2. Redes Sociais Auton",
                "Instagram, YouTube, LinkedIn, TikTok",
                "Mês 1"
              ],
              [
                "3. Redes Sociais Dr. Barakat",
                "Instagram, YouTube, LinkedIn, TikTok",
                "Mês 1"
              ],
              [
                "4. Redes Sociais Dr. Bonanza",
                "Instagram, YouTube, LinkedIn, TikTok",
                "Mês 2"
              ],
              [
                "5. Embaixadores",
                "Programa Embaixadores Auton (engrenagem única com benefícios exclusivos em troca de presença ativa)",
                "Mês 4"
              ],
              [
                "6. Indicações entre Pares",
                "Cada usuário ativo é uma engrenagem, com incentivo sobre a venda indicada",
                "Mês 2"
              ],
              [
                "Amplificador · Mídia Paga",
                "Camada transversal sobre engrenagens de conteúdo (Instagram, YouTube, LinkedIn, TikTok)",
                "Mês 7"
              ]
            ]
          },
          {
            "type": "p",
            "text": "12.3 Motor 1: Base de Alunos USI"
          },
          {
            "type": "p",
            "text": "O que é: canal quente institucional. 5.000 alunos ativos + 3.000 formados que já conhecem o Método ADS. Prioridade crítica na Fase 1."
          },
          {
            "type": "p",
            "text": "Engrenagens:"
          },
          {
            "type": "p",
            "text": "Grupo do WhatsApp. Comunicação direta com alunos ativos, lançamento de ofertas fundadoras e links para lives."
          },
          {
            "type": "p",
            "text": "Grupo do Telegram. Canal secundário para comunicação escalável e conteúdo assíncrono."
          },
          {
            "type": "p",
            "text": "Aulas e Estudos de Caso ao Vivo. Formato campeão da conversão. Demonstração do produto em contexto clínico real. No MVP, 58% de conversão."
          },
          {
            "type": "p",
            "text": "Meta: converter 20% dos 5.000 alunos ativos em 12 meses."
          },
          {
            "type": "p",
            "text": "12.4 Motor 2: Redes Sociais Auton"
          },
          {
            "type": "p",
            "text": "O que é: canal de conteúdo próprio da marca Auton. Fala com o público frio e morno, educa sobre o Método ADS e gera demanda inbound."
          },
          {
            "type": "p",
            "text": "Engrenagens:"
          },
          {
            "type": "p",
            "text": "Instagram Auton. Canal principal visual. Cases, provas dos testadores, bastidores do produto."
          },
          {
            "type": "p",
            "text": "YouTube Auton. Conteúdo educativo profundo. Demonstrações, entrevistas com testadores, Método ADS aplicado."
          },
          {
            "type": "p",
            "text": "LinkedIn Auton. Autoridade profissional e institucional. Foco em médicos e gestores de clínica."
          },
          {
            "type": "p",
            "text": "TikTok Auton. Alcance orgânico em vídeo curto. Corta de lives e depoimentos em formato vertical."
          },
          {
            "type": "p",
            "text": "12.5 Motor 3: Redes Sociais Dr. Barakat"
          },
          {
            "type": "p",
            "text": "O que é: canal de autoridade do fundador Dr. Barakat. 89% do público tem afinidade direta com ele, o que faz deste motor o de maior conversão potencial fora da USI."
          },
          {
            "type": "p",
            "text": "Engrenagens:"
          },
          {
            "type": "p",
            "text": "Instagram Barakat. Canal principal. Presença diária com conteúdo clínico, pessoal e institucional."
          },
          {
            "type": "p",
            "text": "YouTube Barakat. Aulas abertas, entrevistas, autoridade de longo formato."
          },
          {
            "type": "p",
            "text": "LinkedIn Barakat. Autoridade médica e empresarial para públicos decisores."
          },
          {
            "type": "p",
            "text": "TikTok Barakat. Cortes virais para atingir público mais jovem dentro das profissões de saúde."
          },
          {
            "type": "p",
            "text": "12.6 Motor 4: Redes Sociais Dr. Bonanza"
          },
          {
            "type": "p",
            "text": "O que é: canal de autoridade do fundador Dr. Bonanza, diretor acadêmico da USI. Fortaleza entre os alunos da USI e no circuito de formação."
          },
          {
            "type": "p",
            "text": "Engrenagens:"
          },
          {
            "type": "p",
            "text": "Instagram Bonanza. Canal principal. Conteúdo clínico e institucional."
          },
          {
            "type": "p",
            "text": "YouTube Bonanza. Aulas e casos clínicos em formato longo."
          },
          {
            "type": "p",
            "text": "LinkedIn Bonanza. Posicionamento acadêmico e profissional."
          },
          {
            "type": "p",
            "text": "TikTok Bonanza. Cortes educativos em formato curto."
          },
          {
            "type": "p",
            "text": "12.7 Motor 5: Embaixadores"
          },
          {
            "type": "p",
            "text": "O que é: programa estruturado de amplificação humana. Profissionais que usam a Auton e representam ativamente a marca em seus ecossistemas."
          },
          {
            "type": "p",
            "text": "Engrenagem:"
          },
          {
            "type": "p",
            "text": "Programa Embaixadores Auton. Benefícios exclusivos (acesso antecipado a funcionalidades, desconto, reconhecimento público, participação em eventos) em troca de presença ativa nas comunidades profissionais, indicações e geração de conteúdo orgânico real. Os 60 testadores atuais são candidatos naturais para a primeira turma."
          },
          {
            "type": "p",
            "text": "12.8 Motor 6: Indicações entre Pares"
          },
          {
            "type": "p",
            "text": "O que é: motor viral. Cada cliente ativo é potencialmente uma engrenagem, porque indica colegas dentro das mesmas redes de confiança. O público-alvo decide por prova social de quem respeita, o que torna este motor o de maior taxa de conversão após a USI."
          },
          {
            "type": "p",
            "text": "Engrenagens:"
          },
          {
            "type": "p",
            "text": "Cada usuário ativo. Todo cliente pagante é uma engrenagem potencial. Programa estruturado com incentivo sobre a conversão (comissão ou crédito em assinatura)."
          },
          {
            "type": "p",
            "text": "Meta: 30% das vendas vindas de indicação até o mês 12."
          },
          {
            "type": "p",
            "text": "12.9 Amplificador transversal: Mídia Paga (Fase 2)"
          },
          {
            "type": "p",
            "text": "A mídia paga não é um motor separado. É uma camada de amplificação que entra dentro das engrenagens de conteúdo (Instagram, YouTube, LinkedIn, TikTok) a partir do mês 7. Turbina o alcance orgânico em vez de criar um canal novo."
          },
          {
            "type": "p",
            "text": "Meta Ads (Instagram + Facebook). Amplifica posts orgânicos que performam acima da média e captura leads frios dentro do público integrativo."
          },
          {
            "type": "p",
            "text": "Google Ads e YouTube Ads. Busca e vídeo pago para termos como \"medicina funcional\", \"prontuário integrativo\" e \"IA clínica\"."
          },
          {
            "type": "p",
            "text": "Orçamento inicial: piloto de R$ 50k/mês a partir do mês 7. Escala conforme CAC real confirma abaixo de R$ 900."
          },
          {
            "type": "p",
            "text": "12.10 Sequência de ativação"
          },
          {
            "type": "p",
            "text": "Mês 1 a 3: Motor 1 (USI) + Motor 2 (Redes Auton) + Motor 3 (Redes Barakat) + Motor 6 (Indicações iniciais). Meta: 300 clientes."
          },
          {
            "type": "p",
            "text": "Mês 4 a 6: USI continua + Motor 4 (Redes Bonanza) intensifica + Motor 5 (Embaixadores) lança com os 60 testadores. +400 clientes."
          },
          {
            "type": "p",
            "text": "Mês 7 a 9: Mídia paga amplifica engrenagens que performaram no orgânico. +300 clientes."
          },
          {
            "type": "p",
            "text": "Mês 10 a 12: Mídia paga escala e Indicações viram motor dominante com base crescente. +200 clientes."
          },
          {
            "type": "p",
            "text": "Total: 1.200 clientes em 12 meses."
          },
          {
            "type": "p",
            "text": "12.11 Conclusão"
          },
          {
            "type": "p",
            "text": "A Auton opera 6 motores de aquisição com engrenagens específicas em cada um. Na Fase 1, os motores Base USI, Redes Auton, Redes Barakat, Redes Bonanza e Indicações cobrem os primeiros 6 meses com alta eficiência e custo baixo. A Fase 2 adiciona mídia paga como amplificador transversal e intensifica o motor de Embaixadores. A sequência permite chegar a 1.200 clientes em 12 meses com CAC blended de R$ 500 e retorno sobre aquisição acima de 5x."
          }
        ]
      },
      {
        "id": "canvas-13",
        "num": "13",
        "title": "Economia do Negócio",
        "full_title": "§13 · Economia do Negócio",
        "elements": [
          {
            "type": "p",
            "text": "13.1 O que este bloco analisa"
          },
          {
            "type": "p",
            "text": "Prova que a Auton é negócio escalável, não só lucrativo. Um negócio pode ser lucrativo por unidade e ainda não escalar, se o custo de adquirir o próximo cliente for maior do que o retorno do cliente atual em prazo curto."
          },
          {
            "type": "p",
            "text": "As duas fases do negócio"
          },
          {
            "type": "p",
            "text": "A economia da Auton roda em duas fases, que se distinguem pelos canais ativos e pelo custo de aquisição. A diferença entre elas aparece em quase todas as tabelas deste bloco."
          },
          {
            "type": "p",
            "text": "Fase 1, Validação (meses 1 a 6)"
          },
          {
            "type": "p",
            "text": "Porta de entrada: Turma Fundadora (R$ 397 a 497/mês, 200 vagas limitadas)"
          },
          {
            "type": "p",
            "text": "Canais ativos: apenas orgânicos (USI, Redes Auton, Redes Barakat, Redes Bonanza). Sem indicações. Sem embaixadores. Sem mídia paga."
          },
          {
            "type": "p",
            "text": "CAC blended: R$ 0 por cliente"
          },
          {
            "type": "p",
            "text": "Volume esperado: 60 clientes por mês"
          },
          {
            "type": "p",
            "text": "Propósito: validar product-market fit no pricing pleno com zero custo de aquisição"
          },
          {
            "type": "p",
            "text": "Fase 2, Escala (meses 7 a 12)"
          },
          {
            "type": "p",
            "text": "Planos ativos: Starter (R$ 797 a 997), Pro (R$ 1.197 a 1.497) e Enterprise (R$ 3.997 a 4.997)"
          },
          {
            "type": "p",
            "text": "Canais ativos: todos os da Fase 1 + indicações entre pares + embaixadores (60 testadores viram ativos) + mídia paga Meta/Google segmentada por tier"
          },
          {
            "type": "p",
            "text": "CAC blended: R$ 394 por cliente"
          },
          {
            "type": "p",
            "text": "Volume esperado: 137 clientes por mês"
          },
          {
            "type": "p",
            "text": "Propósito: escalar além da base USI e validar mídia paga com CAC controlado"
          },
          {
            "type": "p",
            "text": "A Fase 1 testa se o modelo funciona com custo zero de aquisição. A Fase 2 testa se o modelo escala quando se adiciona investimento em mídia."
          },
          {
            "type": "p",
            "text": "As cinco camadas da análise"
          },
          {
            "type": "p",
            "text": "A economia escalável exige cinco camadas que fecham juntas:"
          },
          {
            "type": "p",
            "text": "Money Model · estrutura de ofertas que gera dinheiro em sequência"
          },
          {
            "type": "p",
            "text": "CAC por canal · custo previsível de adquirir cada cliente"
          },
          {
            "type": "p",
            "text": "LTV por tier · valor real que cada cliente gera ao longo do tempo"
          },
          {
            "type": "p",
            "text": "Payback / CFA · tempo até recuperar o investimento"
          },
          {
            "type": "p",
            "text": "Unit Economics por profissão · prova de que os números se sustentam em cada segmento"
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "A análise econômica da Auton se organiza em duas fases (validação e escala) e cinco camadas encadeadas. Se qualquer uma das camadas falha, o negócio queima caixa. Se as cinco fecham em ambas as fases, o negócio imprime dinheiro previsível."
          },
          {
            "type": "p",
            "text": "13.2 Money Model da Auton"
          },
          {
            "type": "p",
            "text": "A Auton não opera um único Money Model. Opera 4 estratégias encadeadas, uma para cada plano. O cliente típico percorre múltiplos planos ao longo do ciclo."
          },
          {
            "type": "p",
            "text": "Leitura por tipo de oferta:"
          },
          {
            "type": "p",
            "text": "Attraction: cada plano tem sua própria porta de entrada. Fundadora é promocional e limitada. Starter é entrada com duas opções (mensal sem compromisso ou anual com 12 meses). Pro é o herói comercial. Enterprise é consultivo."
          },
          {
            "type": "p",
            "text": "Upsell: existe em todos os planos. A migração da Turma Fundadora acontece no mês 6 por avaliação personalizada: cada aluno é levado para Starter, Pro ou Enterprise conforme seu perfil."
          },
          {
            "type": "p",
            "text": "Downsell: só existe para planos que têm para onde descer. Pro desce para Starter. Enterprise desce para Pro. Fundadora e Starter não têm plano menor, então o downsell vira pausa de 30 dias."
          },
          {
            "type": "p",
            "text": "Continuity: todos têm anual com 20% off. Só o Pro tem componente extra (marketplace com receita recorrente para o cliente)."
          },
          {
            "type": "p",
            "text": "Jornada típica do cliente:"
          },
          {
            "type": "p",
            "text": "Mês 1 a 6: Turma Fundadora (R$ 397 a 497) → upsell por avaliação"
          },
          {
            "type": "p",
            "text": "Mês 7 a 24: Pro anual (R$ 1.197) + Marketplace ativo → se crescer"
          },
          {
            "type": "p",
            "text": "Mês 25 em diante: Enterprise (R$ 3.997+) ou continua no Pro"
          },
          {
            "type": "p",
            "text": "Tempo médio no funil: 18 meses. Receita acumulada por cliente: R$ 24.000 a R$ 30.000."
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "A Auton roda 4 Money Models em paralelo, não um único. Cada plano tem sua estratégia de atração, upgrade, recuperação e recorrência adequadas ao seu ticket e cliente. A migração da Turma Fundadora é personalizada por avaliação, não uniforme, o que maximiza o LTV da safra fundadora capturando perfis Enterprise que seriam perdidos num upsell genérico. Planos sem plano menor (Fundadora e Starter) usam pausa de 30 dias como downsell em vez de downgrade."
          },
          {
            "type": "table",
            "rows": [
              [
                "Plano",
                "Attraction (entrada)",
                "Upsell (sobe)",
                "Downsell (resgata)",
                "Continuity (fica)"
              ],
              [
                "Turma Fundadora",
                "200 vagas limitadas a R$ 397 a 497/mês (60% off) + Diagnóstico 0 grátis + garantia 7 dias",
                "Migração por avaliação no mês 6: aluno vai para Starter, Pro ou Enterprise conforme elegibilidade",
                "Pausa de 30 dias sem cobrança",
                "Anual à vista (R$ 4.764)"
              ],
              [
                "Starter",
                "Mensal R$ 997 (cancele quando quiser) ou anual R$ 797/mês (R$ 9.564/ano, compromisso de 12 meses)",
                "Upgrade para Pro: marketplace + chat IA + comunidade pagam a diferença de R$ 200/mês",
                "Pausa de 30 dias (não tem plano menor)",
                "Anual com 20% off trava 12 meses"
              ],
              [
                "Pro (herói)",
                "70% do pitch e da landing. Argumento: paga R$ 1.497, recebe R$ 11.450 em valor",
                "Enterprise (múltiplos usuários, SLA, onboarding dedicado)",
                "Descer para Starter (mantém base, perde marketplace)",
                "Anual + marketplace gera receita incremental de R$ 480/mês"
              ],
              [
                "Enterprise",
                "Fale com nosso time. Piso publicado R$ 4.997/mês",
                "Add-ons: mais usuários, integrações customizadas, SLA premium",
                "Descer para Pro individual",
                "Contrato anual com SLA"
              ]
            ]
          },
          {
            "type": "p",
            "text": "13.3 CAC por canal"
          },
          {
            "type": "p",
            "text": "O CAC obedece à regra de teto: CAC menor ou igual a 75% da mensalidade do plano vendido. Isso garante payback em até 30 dias."
          },
          {
            "type": "p",
            "text": "Tetos por tier:"
          },
          {
            "type": "p",
            "text": "Fundadora (R$ 497): CAC teto R$ 373"
          },
          {
            "type": "p",
            "text": "Starter (R$ 997): CAC teto R$ 748"
          },
          {
            "type": "p",
            "text": "Pro (R$ 1.497): CAC teto R$ 1.123"
          },
          {
            "type": "p",
            "text": "Enterprise (R$ 4.997): CAC teto R$ 3.748"
          },
          {
            "type": "p",
            "text": "Na Fase 1, todos os canais ativos são orgânicos (USI, Redes Auton, Redes Barakat, Redes Bonanza), com CAC real zero. Na Fase 2, entram Indicações, Embaixadores e Mídia Paga, esta última com campanhas segmentadas por tier. Campanha de mídia paga que bate o teto por 14 dias é pausada e reotimizada."
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "A Auton opera com CAC blended de R$ 0 na Fase 1 (100% orgânico) e R$ 394 na Fase 2 (orgânico, indicações, embaixadores e mídia paga). Os canais orgânicos da Auton, Barakat, Bonanza e grupos USI custam zero por cliente. A mídia paga é o único motor onde o teto de CAC por tier se aplica com rigor."
          },
          {
            "type": "table",
            "rows": [
              [
                "Motor",
                "Custo/mês",
                "Clientes/mês",
                "CAC real"
              ],
              [
                "Base USI (WhatsApp, Telegram, Lives)",
                "R$ 0",
                "30",
                "R$ 0"
              ],
              [
                "Redes Auton (Instagram, YouTube, LinkedIn, TikTok)",
                "R$ 0",
                "15",
                "R$ 0"
              ],
              [
                "Redes Barakat",
                "R$ 0",
                "10",
                "R$ 0"
              ],
              [
                "Redes Bonanza",
                "R$ 0",
                "5",
                "R$ 0"
              ],
              [
                "BLENDED FASE 1",
                "R$ 0",
                "60",
                "R$ 0"
              ]
            ]
          },
          {
            "type": "table",
            "rows": [
              [
                "Campanha",
                "Budget/mês",
                "CAC teto",
                "CAC real",
                "Clientes/mês"
              ],
              [
                "Canais Fase 1 (100% orgânico)",
                "R$ 0",
                "-",
                "R$ 0",
                "60"
              ],
              [
                "Indicações entre pares",
                "R$ 2.000",
                "R$ 1.123",
                "R$ 200",
                "10"
              ],
              [
                "Embaixadores (benefícios em produto)",
                "R$ 2.000",
                "R$ 1.123",
                "R$ 200",
                "10"
              ],
              [
                "Mídia Pro",
                "R$ 30.000",
                "R$ 1.123",
                "R$ 1.000",
                "30"
              ],
              [
                "Mídia Starter",
                "R$ 15.000",
                "R$ 748",
                "R$ 600",
                "25"
              ],
              [
                "Mídia Enterprise",
                "R$ 5.000",
                "R$ 3.748",
                "R$ 2.500",
                "2"
              ],
              [
                "BLENDED FASE 2",
                "R$ 54.000",
                "-",
                "R$ 394",
                "137"
              ]
            ]
          },
          {
            "type": "p",
            "text": "13.4 LTV por tier"
          },
          {
            "type": "p",
            "text": "Premissas:"
          },
          {
            "type": "p",
            "text": "Retenção assumida: 24 meses (SaaS B2B vertical com PMF forte)"
          },
          {
            "type": "p",
            "text": "Margem bruta SaaS: 75%"
          },
          {
            "type": "p",
            "text": "Risco de cancelamento concentrado: primeiros 90 dias + migração Fundadora para plano pleno"
          },
          {
            "type": "p",
            "text": "Bônus do Pro: marketplace"
          },
          {
            "type": "p",
            "text": "15% de cada encaminhamento"
          },
          {
            "type": "p",
            "text": "8 encaminhamentos/mês × R$ 400 × 15% = R$ 480/mês incremental"
          },
          {
            "type": "p",
            "text": "Sobre 24 meses: R$ 11.520 de LTV bruto adicional"
          },
          {
            "type": "p",
            "text": "Pro anual LTV total: R$ 40.248 bruto / R$ 30.186 líquido"
          },
          {
            "type": "p",
            "text": "LTV ponderado (mix 20/70/10):"
          },
          {
            "type": "p",
            "text": "Starter: 20% × R$ 14.346 = R$ 2.869"
          },
          {
            "type": "p",
            "text": "Pro com marketplace: 70% × R$ 30.186 = R$ 21.130"
          },
          {
            "type": "p",
            "text": "Enterprise: 10% × R$ 107.919 = R$ 10.792"
          },
          {
            "type": "p",
            "text": "LTV médio ponderado: R$ 34.791 por cliente"
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "Cada cliente da Auton vale R$ 34.791 em média ao longo de 24 meses. O marketplace adiciona R$ 11.520 por cliente Pro, elevando o LTV do plano mais vendido de R$ 28.728 para R$ 40.248 bruto."
          },
          {
            "type": "table",
            "rows": [
              [
                "Tier",
                "Ticket anual",
                "Retenção",
                "LTV bruto",
                "LTV líquido (75%)"
              ],
              [
                "Turma Fundadora",
                "R$ 4.764",
                "12 meses",
                "R$ 4.764",
                "R$ 3.573"
              ],
              [
                "Starter anual",
                "R$ 9.564",
                "24 meses",
                "R$ 19.128",
                "R$ 14.346"
              ],
              [
                "Pro anual (sem marketplace)",
                "R$ 14.364",
                "24 meses",
                "R$ 28.728",
                "R$ 21.546"
              ],
              [
                "Pro anual (com marketplace)",
                "R$ 14.364",
                "24 meses",
                "R$ 40.248",
                "R$ 30.186"
              ],
              [
                "Enterprise anual",
                "R$ 47.964",
                "36 meses",
                "R$ 143.892",
                "R$ 107.919"
              ]
            ]
          },
          {
            "type": "p",
            "text": "13.5 Payback / CFA (Client Financed Acquisition)"
          },
          {
            "type": "p",
            "text": "CFA é a regra que define se o negócio se financia ou queima caixa: o lucro de 1 cliente em 30 dias deve cobrir o CAC desse cliente mais o custo de servir."
          },
          {
            "type": "p",
            "text": "Se a regra passa, cada venda gera caixa para a próxima. Se não passa, o negócio depende de capital externo para crescer."
          },
          {
            "type": "p",
            "text": "Na Fase 1, o CAC é zero (canais 100% orgânicos), então o payback é instantâneo. Qualquer receita é lucro líquido desde o primeiro dia. Na Fase 2, com mídia paga ativada, o payback sobe para 20 a 27 dias, ainda dentro do teto de 30 dias."
          },
          {
            "type": "p",
            "text": "Benchmark saudável SaaS: 3:1."
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "A Auton passa no teste CFA em qualquer cenário. Na Fase 1 o payback é instantâneo (CAC zero). Na Fase 2, mesmo com mídia paga, fica em 20 a 27 dias. Mesmo no pior cenário possível (100% dos clientes no teto de CAC), o ratio LTV:CAC fica em 26×, 8× acima do benchmark saudável."
          },
          {
            "type": "table",
            "rows": [
              [
                "Tier",
                "Lucro mês 1 (margem 75%)",
                "CAC real",
                "Payback"
              ],
              [
                "Starter R$ 997",
                "R$ 748",
                "R$ 600",
                "24 dias"
              ],
              [
                "Pro R$ 1.497",
                "R$ 1.123",
                "R$ 1.000",
                "27 dias"
              ],
              [
                "Enterprise R$ 4.997",
                "R$ 3.748",
                "R$ 2.500",
                "20 dias"
              ]
            ]
          },
          {
            "type": "table",
            "rows": [
              [
                "Cenário",
                "LTV",
                "CAC",
                "Ratio"
              ],
              [
                "Fase 1 (100% orgânico)",
                "R$ 34.791",
                "R$ 0",
                "Infinito"
              ],
              [
                "Fase 2 blended (com mídia paga)",
                "R$ 34.791",
                "R$ 394",
                "88x"
              ],
              [
                "Fase 2 no teto (pior caso)",
                "R$ 34.791",
                "R$ 1.310",
                "26x"
              ]
            ]
          },
          {
            "type": "p",
            "text": "13.6 Unit Economics por profissão"
          },
          {
            "type": "p",
            "text": "Aplica os números nas 5 variações do avatar (§2.5). Prova que a economia fecha em cada segmento, não só no agregado."
          },
          {
            "type": "p",
            "text": "Conclusão do bloco"
          },
          {
            "type": "p",
            "text": "Todos os 5 segmentos do avatar cabem dentro da regra CFA, em canal orgânico e pago. A Médica tem a melhor economia (Pro e marketplace, ratio 40× no pago). Os 3 segmentos Starter (Fisio, Nutri, Psico, que somam 63% do ICP) têm economia sólida: ratio 32× e payback 24 dias. Nenhum segmento queima caixa."
          },
          {
            "type": "table",
            "rows": [
              [
                "Profissão",
                "Plano",
                "CAC teto",
                "CAC real (orgânico)",
                "CAC real (pago)",
                "LTV bruto",
                "LTV:CAC (pago)",
                "Payback (pago)"
              ],
              [
                "Médica",
                "Pro",
                "R$ 1.123",
                "R$ 0",
                "R$ 1.000",
                "R$ 40.248",
                "40x",
                "27 dias"
              ],
              [
                "Fisioterapeuta",
                "Starter",
                "R$ 748",
                "R$ 0",
                "R$ 600",
                "R$ 19.128",
                "32x",
                "24 dias"
              ],
              [
                "Nutricionista",
                "Starter",
                "R$ 748",
                "R$ 0",
                "R$ 600",
                "R$ 19.128",
                "32x",
                "24 dias"
              ],
              [
                "Psicóloga",
                "Starter",
                "R$ 748",
                "R$ 0",
                "R$ 600",
                "R$ 19.128",
                "32x",
                "24 dias"
              ],
              [
                "Farmacêutica",
                "Starter/Pro",
                "R$ 748 a 1.123",
                "R$ 0",
                "R$ 700",
                "R$ 19.128 a 40.248",
                "27 a 57x",
                "25 dias"
              ]
            ]
          },
          {
            "type": "p",
            "text": "13.7 Conclusão geral do §13"
          },
          {
            "type": "p",
            "text": "A Auton tem economia que escala com caixa próprio. O Money Model encadeia 4 estratégias diferentes (uma por plano) que puxam receita recorrente e upgrade. CAC blended de R$ 0 (Fase 1) a R$ 394 (Fase 2) produz LTV ponderado de R$ 34.791, resultando em ratio infinito na Fase 1, 88× no blended da Fase 2 e 26× no pior caso, contra benchmark saudável de 3×. Payback instantâneo na Fase 1 e abaixo de 30 dias na Fase 2."
          },
          {
            "type": "p",
            "text": "A vantagem injusta (§5) explica o CAC zero: base USI, marca dos fundadores e redes próprias geram 60 clientes por mês 100% orgânicos nos primeiros 6 meses. Concorrentes sem essa distribuição precisam pagar mídia desde o dia 1."
          },
          {
            "type": "p",
            "text": "O risco que resta não é matemática. É retenção real pós-MVP: os números assumem 24 meses. Se o churn trimestral ultrapassar 15%, o LTV cai pela metade e o ratio no pior caso vai para 13×, ainda saudável. O resultado do primeiro ciclo de 90 dias pós-lançamento determina qual cenário a Auton vive."
          }
        ]
      }
    ]
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

const SUBSEC_RE = /^(\d+\.\d+)\.?\s+(.+)$/;

function isQuote(text: string): boolean {
  return text.startsWith("\u201c") || text.startsWith('"') || text.includes("Hormozi");
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

function renderParagraph(text: string, key: number) {
  // citação?
  if (isQuote(text)) {
    const m = text.match(/—\s*(.+?)$/);
    if (m && (m[1].includes("Hormozi") || m[1].includes("Alex"))) {
      return <PullQuote key={key} author={m[1].trim()}>{text.slice(0, m.index!).trim().replace(/,$/, "")}</PullQuote>;
    }
    return <PullQuote key={key}>{text}</PullQuote>;
  }
  // subseção
  const sm = text.match(SUBSEC_RE);
  if (sm) {
    return (
      <h3 key={key} className="text-xl font-bold mt-8 mb-4 flex items-baseline gap-3" style={{ color: C.text }}>
        <span className="text-sm font-mono" style={{ color: C.primary, opacity: 0.6 }}>{sm[1]}</span>
        <span>{sm[2]}</span>
      </h3>
    );
  }
  // marcadores estruturais
  if (/^(Decisão|Caminho|Status|Pendência|Pendências|Item|Bloco|Fase|Backlog|Motor|Pilar|Tipo \d|Drivers? \d|Cenário|Tier|Pontuação|Hipótese)/.test(text)) {
    return <p key={key} className="text-base font-semibold mt-6 mb-2" style={{ color: C.text }}>{text}</p>;
  }
  // listas que começam com "- " ou "• "
  if (/^[-•]\s+/.test(text)) {
    return <p key={key} className="text-base leading-relaxed mb-2 pl-6 relative" style={{ color: C.text2 }}><span className="absolute left-0" style={{ color: C.primary }}>•</span>{text.replace(/^[-•]\s+/, "")}</p>;
  }
  return <p key={key} className="text-base leading-relaxed mb-3" style={{ color: C.text2 }}>{text}</p>;
}

function renderTable(rows: string[][], key: number) {
  const header = rows[0];
  const body = rows.slice(1);
  return (
    <div key={key} className="overflow-x-auto mb-6">
      <table className="w-full text-sm" style={{ background: C.card, borderRadius: 14, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
        <thead>
          <tr style={{ background: C.primary, color: "#FFFFFF" }}>
            {header.map((h, i) => <th key={i} className="text-left px-4 py-3 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => {
            if (row.every(c => c === "")) return null;
            const isAuton = row.some(c => c.includes("AUTON") || c.includes("Auton"));
            return (
              <tr key={ri} style={{ borderTop: `1px solid ${C.border}`, background: isAuton ? "rgba(30,58,95,0.05)" : "transparent" }}>
                {row.map((c, ci) => (
                  <td key={ci} className="px-4 py-3 align-top" style={{
                    color: ci === 0 ? C.text : C.text2,
                    fontWeight: ci === 0 ? 600 : 400,
                    whiteSpace: "pre-wrap",
                  }}>{c}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function PainelPage() {
  const [activeTab, setActiveTab] = useState(DATASET[0].id);
  const [activeSection, setActiveSection] = useState(DATASET[0].sections[0]?.id || "");
  const [navOpen, setNavOpen] = useState(false);

  const currentTab = useMemo(() => DATASET.find(t => t.id === activeTab)!, [activeTab]);

  // Reseta seção ativa ao trocar de tab
  useEffect(() => {
    if (currentTab.sections[0]) {
      setActiveSection(currentTab.sections[0].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  // Scroll-spy
  useEffect(() => {
    function onScroll() {
      const offset = 140;
      let current = currentTab.sections[0]?.id;
      for (const s of currentTab.sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= offset) current = s.id;
      }
      if (current) setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentTab]);

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setNavOpen(false);
  }

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh" }}>
      {/* HEADER FIXO */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md border-b" style={{ background: "rgba(255,255,255,0.95)", borderColor: C.border }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg" onClick={() => setNavOpen(v => !v)} style={{ color: C.text }}>
              {navOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
            <span className="font-bold text-lg" style={{ color: C.primary }}>Auton</span>
            <span className="hidden sm:inline text-xs font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.text3 }}>· Painel Interno</span>
          </div>
          <span className="text-xs" style={{ color: C.text3 }}>{DATASET.reduce((acc, t) => acc + t.sections.length, 0)} seções · {DATASET.length} documentos</span>
        </div>

        {/* TABS */}
        <div className="border-t" style={{ borderColor: C.border }}>
          <div className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto">
            {DATASET.map(tab => {
              const Icon = (ICONS as any)[tab.icon];
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all relative"
                  style={{ color: isActive ? C.primary : C.text2 }}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{tab.label}</span>
                  <span className="text-[10px] font-normal hidden md:inline" style={{ color: C.text3 }}>· {tab.sections.length}</span>
                  {isActive && <span className="absolute bottom-0 inset-x-0 h-0.5" style={{ background: C.primary }} />}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-[260px_1fr] gap-10">
        <aside className={`${navOpen ? "block" : "hidden"} md:block`}>
          <nav className="md:sticky md:top-32">
            <p className="text-xs font-bold uppercase mb-2" style={{ letterSpacing: "0.2em", color: C.primary }}>{currentTab.label}</p>
            <p className="text-xs mb-4" style={{ color: C.text3 }}>{currentTab.tagline}</p>
            <ul className="space-y-1">
              {currentTab.sections.map(s => {
                const isActive = activeSection === s.id;
                return (
                  <li key={s.id}>
                    <button onClick={() => goTo(s.id)} className="w-full text-left flex items-start gap-2 px-3 py-2 rounded-lg transition-all" style={{
                      background: isActive ? "rgba(30,58,95,0.08)" : "transparent",
                    }}>
                      <span className="text-xs font-mono mt-0.5 shrink-0" style={{ color: isActive ? C.primary : C.text3, minWidth: 24 }}>{currentTab.id === "canvas" ? `§${s.num}` : `${s.num}.`}</span>
                      <p className="text-sm font-medium leading-tight flex-1" style={{ color: isActive ? C.primary : C.text }}>{s.title}</p>
                      {isActive && <ChevronRight className="w-4 h-4 mt-0.5" style={{ color: C.primary }} />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <main className="space-y-16 min-w-0">
          <section className="-mt-2">
            <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.25em", color: C.primary }}>{currentTab.tagline}</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.05] mb-3" style={{ color: C.text }}>{currentTab.label}</h1>
            <p className="text-base" style={{ color: C.text2 }}>
              {currentTab.sections.length} seções · conteúdo replicado integralmente do documento original
            </p>
          </section>

          {currentTab.sections.map(section => (
            <section key={section.id} id={section.id}>
              <div className="mb-8 pb-6 border-b" style={{ borderColor: C.border }}>
                <p className="text-xs font-bold uppercase mb-3" style={{ letterSpacing: "0.2em", color: C.primary }}>
                  {currentTab.id === "canvas" ? `§${section.num}` : `Seção ${section.num}`}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: C.text }}>{section.title}</h2>
              </div>
              {section.elements.map((e, i) =>
                e.type === "p" ? renderParagraph(e.text, i) : renderTable(e.rows, i)
              )}
            </section>
          ))}
        </main>
      </div>

      <footer className="border-t py-8 px-6" style={{ background: C.card, borderColor: C.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs" style={{ color: C.text3 }}>
          <p>Auton Health · Painel Interno · Uso restrito</p>
          <p>4 documentos integrados · {DATASET.reduce((acc, t) => acc + t.sections.length, 0)} seções</p>
        </div>
      </footer>
    </div>
  );
}
