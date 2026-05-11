# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o Projeto

E-commerce de ebooks sobre vendas, totalmente em português brasileiro. Gateway de pagamento: **AbacatePay** (PIX). Construído com Next.js 16 App Router + Tailwind CSS 4 + TypeScript.

**REGRA FUNDAMENTAL: Toda interface visível ao usuário deve estar em português brasileiro. Nenhum texto em inglês deve aparecer na UI.**

## Comandos

- `npm run dev` — servidor de desenvolvimento (Turbopack)
- `npm run build` — build de produção
- `npm run start` — servir build de produção
- `npm run lint` — ESLint

## Arquitetura

- **`app/data/products.ts`** — catálogo de ebooks (dados estáticos). Contém tipos `Product`, lista `products[]`, e helpers `getProductBySlug`, `getProductById`, `formatPrice`.
- **`app/context/CartContext.tsx`** — estado global do carrinho via React Context (`"use client"`). Expõe `useCart()` com items, add/remove/update/clear e controle do sidebar.
- **`app/lib/abacatepay.ts`** — integração server-side com a API do AbacatePay. Usa `ABACATEPAY_API_KEY` (env var). Endpoint: `POST /v1/billing/create` com frequency `ONE_TIME` e método `PIX`.
- **`app/api/checkout/route.ts`** — API route que valida o carrinho, resolve produtos por ID, e cria cobrança no AbacatePay. Retorna `paymentUrl` para redirect.
- **`app/components/`** — Header (com badge do carrinho), Footer, ProductCard, CartSidebar (overlay lateral).
- **Páginas**: `/` (listagem), `/produto/[slug]` (detalhe com SSG via `generateStaticParams`), `/carrinho`, `/checkout` (formulário + resumo), `/sucesso`.

## Variáveis de Ambiente

Copiar `.env.example` para `.env.local` e configurar `ABACATEPAY_API_KEY`.

## Convenções

- Path alias `@/*` aponta para a raiz do projeto.
- Componentes que usam hooks do browser são `"use client"`. Server Components são o padrão.
- Preços armazenados em **centavos** (inteiro). Formatação via `formatPrice()`.
- Rotas dinâmicas usam `params` como `Promise` (Next.js 16): `const { slug } = await params`.
- Palette: emerald como cor de destaque, zinc para neutros. Suporta dark mode via `prefers-color-scheme`.

## Ebooks HTML

- Ebooks ficam em `ebooks/` e `ebooks/claude/`.
- Para criar ou editar ebooks HTML grandes, use SEMPRE a ferramenta Write diretamente. Nunca use comandos PowerShell (Add-Content, Out-File, Set-Content) para escrever conteúdo HTML.
- Arquivos grandes devem ser escritos em múltiplas chamadas Write sequenciais, acumulando o conteúdo completo a cada chamada (não append, mas reescrita completa da seção atual até o ponto atual).
