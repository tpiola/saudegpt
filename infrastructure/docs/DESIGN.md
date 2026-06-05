---
version: alpha
name: Atendentes Premium Farmácia
description: Design system para EAD farmacêutico — cuidado humanizado, floresta + verde saúde + laranja aconchego.
colors:
  primary: "#0D3A32"
  secondary: "#4CA15D"
  tertiary: "#D66E0F"
  neutral: "#FFFFFF"
  background: "#FFFFFF"
  text: "#212121"
typography:
  h1:
    fontFamily: DM Sans
    fontSize: clamp(2.8rem, 7vw, 5.5rem)
    fontWeight: 800
    lineHeight: 1.0
    letterSpacing: "-0.04em"
  h2:
    fontFamily: DM Sans
    fontSize: clamp(1.8rem, 4vw, 2.8rem)
    fontWeight: 700
    letterSpacing: "-0.02em"
  h3:
    fontFamily: DM Sans
    fontSize: clamp(1.2rem, 2.5vw, 1.6rem)
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: Inter
    fontSize: 1rem
    lineHeight: 1.6
    fontWeight: 400
rounded:
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
shadows:
  sm: "0 2px 8px rgba(10, 47, 42, 0.07)"
  md: "0 4px 16px rgba(10, 47, 42, 0.09)"
  lg: "0 8px 32px rgba(10, 47, 42, 0.11)"
  glow: "0 0 40px rgba(214, 110, 15, 0.10)"
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: 16px 32px
    fontWeight: 600
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    border: "2px solid rgba(255, 255, 255, 0.2)"
    rounded: "{rounded.xl}"
    padding: 16px 32px
    fontWeight: 600
  card-glass:
    backgroundColor: "rgba(255, 255, 255, 0.05)"
    backdropFilter: "blur(20px)"
    border: "1px solid rgba(255, 255, 255, 0.12)"
    rounded: "{rounded.xl}"
  badge-green:
    backgroundColor: "{colors.secondary}-10"
    textColor: "{colors.secondary}"
    rounded: "{rounded.full}"
    padding: 4px 12px
    fontSize: 0.75rem
---

## Overview

Design system para plataforma EAD de formação de atendentes de farmácia.
Inspirado no RD Saúde. Posicionamento: saúde-first (cuidado sobre venda).

## Colors

- **Primary (#0D3A32):** Forest Green — hero, footer, dark sections. Conforto e profissionalismo.
- **Secondary (#4CA15D):** Vibrant Green — badges, highlights, progress. Saúde e vitalidade.
- **Tertiary (#D66E0F):** Orange — CTAs, hover states, callouts. Ação sem perder o acolhimento.
- **Background (#FFFFFF):** Pure white — superfícies limpas, foco no conteúdo.
- **Text (#212121):** Dark gray — leitura confortável, sem cansar.

## Typography

DM Sans para headings (display bold, tracking negativo), Inter para body (leitura limpa).
Sem serifa — moderno, acessível, farmacêutico.

## Components

### Glass Card
Cards com backdrop-blur, borda sutil, hover com translateY(-2px) + glow shadow.
Usado em: seções de destaque, formulários, cards de trilha.

### Pill Badge
Badges arredondados com cor de fundo 10% + texto na cor cheia.
Usado em: badges de seção, tags de nível, badges de 4Ps.

### Button Primary (Orange CTA)
Botão arredondado laranja com glow shadow. Único CTA de alto destaque por seção.

## Do's and Don'ts

- ✅ Saúde-first: cuidado sobre venda, paciente sobre cliente
- ✅ Cores calmas: forest + green não cansam
- ✅ Glassmorphism sem exagero: 1 camada de profundidade
- ❌ Nunca usar roxo/azul elétrico — quebra a paleta orgânica
- ❌ Nunca depoimentos falsos — preferir "Em breve"
- ❌ Nunca saturated rainbows — máximo 3 cores + neutro
