# Climatize Soluções em Ar Condicionado

Site institucional multipágina em Next.js, React, TypeScript, Tailwind CSS e Framer Motion.

## Rotas

- `/`
- `/sobre`
- `/servicos`
- `/servicos/manutencao-preventiva`
- `/servicos/manutencao-corretiva`
- `/servicos/instalacao`
- `/servicos/higienizacao`
- `/servicos/pmoc`
- `/contato`

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Logo

Coloque a logo oficial em `public/logo.jpeg`. O site usa `/logo.jpeg` no header, footer, SEO e Schema Markup.

## Dados editáveis

- Empresa, WhatsApp, telefone, e-mail, endereço e mapa: `src/data/company.ts`
- Serviços, benefícios e páginas internas: `src/data/services.ts`
- Logos de clientes: `src/data/clients.ts`
- Comentários/depoimentos: `src/data/testimonials.ts`
- FAQ geral: `src/data/faq.ts`
- Valores e objetivos: `src/data/values.ts` e `src/data/objectives.ts`

## Logos de clientes

Coloque as logos em `public/clientes` usando os nomes definidos em `src/data/clients.ts`.

## Mapa

Configure o iframe do Google Maps em `company.mapsEmbedUrl`. Enquanto estiver vazio, a página `/contato` mostra o placeholder "Mapa em breve".

## SEO

As configurações principais ficam em `src/app/layout.tsx`, nas páginas dentro de `src/app`, em `src/app/sitemap.ts`, `src/app/robots.ts` e `src/components/StructuredData.tsx`.

## Cores

As cores oficiais estão em `tailwind.config.ts`.

## Publicação na Vercel

Crie um repositório, envie o projeto e importe na Vercel. O framework será detectado automaticamente como Next.js. Antes de publicar, atualize `metadataBase` em `src/app/layout.tsx` com o domínio oficial.
