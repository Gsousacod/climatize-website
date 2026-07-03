# Climatize Soluções em Ar Condicionado

Site institucional em Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Logo

Coloque a logo oficial em `public/logo.jpeg`. O site usa o caminho `/logo.jpeg` no header, footer, SEO e Schema Markup.

## Dados editáveis

Altere telefone, WhatsApp, e-mail, endereço, Instagram e textos em:

- `src/data/company.ts`
- `src/data/services.ts`
- `src/data/faq.ts`
- `src/data/objectives.ts`
- `src/data/differentials.ts`
- `src/data/values.ts`

## SEO

As configurações principais ficam em `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts` e `src/components/StructuredData.tsx`.

## Cores

As cores oficiais estão em `tailwind.config.ts`.

## Publicação na Vercel

Crie um repositório, envie o projeto e importe na Vercel. O framework será detectado automaticamente como Next.js. Antes de publicar, atualize `metadataBase` em `src/app/layout.tsx` com o domínio oficial.
