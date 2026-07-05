# Análise do Projeto — Climatize Soluções em Ar Condicionado

> Documento de referência técnica do site institucional. Objetivo: servir de base para decisões futuras de performance, SEO e priorização de melhorias, cruzando estas informações com os dados que forem coletados no Google Analytics, Google Tag e Microsoft Clarity.

Última atualização: 2026-07-05.

---

## 1. Stack e infraestrutura

| Item | Valor |
|---|---|
| Framework | Next.js 14.2.35 (App Router) |
| Linguagem | TypeScript 5.7 |
| Estilização | Tailwind CSS 3.4 |
| Animações | Framer Motion 11 |
| Ícones | lucide-react |
| Fontes | `next/font/google` — Sora (`--font-heading`) e Inter (`--font-body`) |
| Hospedagem alvo | não configurada no repositório (sem `vercel.json`/adapter específico) |
| Domínio de produção assumido no código | `https://www.climatize.com.br` (usado em `metadataBase`, sitemap e robots) |

Scripts disponíveis: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

Sem dependências de banco de dados, API própria ou CMS — todo o conteúdo do site é estático, definido em arquivos TypeScript dentro de `src/data/`.

---

## 2. Mapa de páginas (rotas)

| Rota | Arquivo | Palavra-chave principal (SEO) |
|---|---|---|
| `/` | `src/app/page.tsx` | Climatize Soluções em Ar Condicionado em Teófilo Otoni |
| `/sobre` | `src/app/sobre/page.tsx` | institucional / sobre a empresa |
| `/servicos` | `src/app/servicos/page.tsx` | Serviços de ar-condicionado em Teófilo Otoni |
| `/servicos/manutencao-preventiva` | `src/app/servicos/[slug]/page.tsx` | Manutenção Preventiva de Ar-Condicionado em Teófilo Otoni |
| `/servicos/manutencao-corretiva` | idem | Manutenção Corretiva de Ar-Condicionado em Teófilo Otoni |
| `/servicos/instalacao` | idem | Instalação de Ar-Condicionado em Teófilo Otoni |
| `/servicos/higienizacao` | idem | Higienização de Ar-Condicionado em Teófilo Otoni |
| `/servicos/pmoc` | idem | PMOC em Teófilo Otoni |
| `/servicos/relatorios-tecnicos` | idem | Relatórios Técnicos de Climatização em Teófilo Otoni |
| `/contato` | `src/app/contato/page.tsx` | Orçamento de ar-condicionado em Teófilo Otoni |

Todas as páginas de serviço são geradas estaticamente via `generateStaticParams` (SSG) a partir de `src/data/services.ts`. `sitemap.ts` e `robots.ts` já cobrem todas as rotas acima automaticamente (a lista de serviços é lida diretamente do array `services`, então uma nova entrada em `services.ts` já aparece no sitemap sem trabalho extra).

**Áreas de atendimento declaradas:** Teófilo Otoni - MG, Vale do Jequitinhonha, Vale do Mucuri (`src/data/company.ts`, campo `regions`, usado também no JSON-LD).

---

## 3. Dados centrais (`src/data/`)

- **`company.ts`** — nome, endereço, telefone, e-mail, WhatsApp (`553399290788`), Instagram, embed do Google Maps, CNPJ, áreas de atendimento e itens de navegação (`navItems`). É a fonte única da verdade para esses dados — qualquer alteração de telefone/endereço/WhatsApp deve ser feita só aqui.
- **`services.ts`** — 6 serviços (manutenção preventiva, manutenção corretiva, instalação, higienização, PMOC, relatórios técnicos), cada um com título, descrição, benefícios, público indicado, etapas, FAQ e metadados de SEO (`seoTitle`/`seoDescription`) próprios.
- **`clients.ts`** — 5 clientes reais exibidos na seção "Empresas que confiam no nosso trabalho" (Brinks, Cemig, Sicoob, Front Comfort, Hospital Santa Rosália), com logos em `public/clients/`.
- **`differentials.ts`, `objectives.ts`, `values.ts`, `faq.ts`** — conteúdo institucional (diferenciais, objetivos, valores, perguntas frequentes gerais).

---

## 4. Componentes de destaque

### 4.1 `ClimatizeTools` (`src/components/tools/`)
Seção de ferramentas interativas, presente em `/` e `/servicos`, com 3 abas:

1. **Calculadora de BTUs** (`BtuCalculator.tsx` + `src/lib/btu.ts`) — estima a capacidade de BTUs a partir de área, pessoas, eletrônicos e exposição solar, sugere a capacidade comercial mais próxima (9k–60k BTUs) e monta uma mensagem de WhatsApp com o resultado.
2. **Quiz "Qual serviço você precisa?"** (`ServiceQuiz.tsx`) — 5 perguntas de triagem que recomendam um serviço principal (instalação, corretiva, higienização/preventiva ou preventiva) e, opcionalmente, um complementar (PMOC/plano empresarial).
3. **Gerador de mensagem para WhatsApp** (`WhatsAppMessageGenerator.tsx`) — formulário livre que gera uma mensagem estruturada para orçamento.

Todas as três terminam em um botão verde que abre `wa.me/<numero>` com a mensagem pré-preenchida (`src/lib/whatsapp.ts`). Esse é o principal ponto de conversão do site — vale acompanhar no Analytics/Clarity quantos usuários chegam a clicar em "Enviar pelo WhatsApp" em cada aba.

### 4.2 Consentimento de cookies (`src/components/cookies/`)
- `CookieConsentBanner.tsx` — banner inferior (Aceitar / Recusar / Gerenciar preferências) e link para a Política de Privacidade.
- `CookiePreferencesModal.tsx` — modal com categorias necessários (fixo) / análise / marketing.
- `PrivacyPolicyModal.tsx` — texto completo da política.
- `AnalyticsLoader.tsx` — só injeta os scripts de análise se `preferences.analytics === true` no `localStorage` (`climatize:cookie-consent`).
- `CookiePreferencesLink.tsx` — link "Preferências de cookies" no rodapé, reabre o modal a qualquer momento.

### 4.3 SEO técnico
- `StructuredData.tsx` — JSON-LD `@type: HVACBusiness` com endereço, áreas de atendimento, telefone e e-mail.
- Cada página exporta seu próprio `metadata`/`generateMetadata` (title, description, canonical, Open Graph) — não há título/descrição duplicados entre páginas.
- `sitemap.ts` e `robots.ts` gerados dinamicamente pelo Next.js (`/sitemap.xml`, rota interna `/robots.txt`).

---

## 5. Analytics e rastreamento (estado em 2026-07-05)

Todos os scripts de rastreamento são carregados por **um único componente**, `AnalyticsLoader.tsx`, montado no `layout.tsx` raiz — portanto rodam em todas as páginas do site. Nenhum script de análise/marketing carrega antes do usuário interagir com o banner de cookies.

| Ferramenta | Identificador | Categoria de consentimento | Status |
|---|---|---|---|
| Google Analytics 4 | `G-HDP8XRGJVN` | Análise | Ativo |
| Google Tag | `GT-TXB8J9LD` | Análise | Ativo |
| Microsoft Clarity | `xhrv8dpzoc` | Análise | Ativo |
| Meta Pixel | — | Marketing | **Pendente** — adiado a pedido do usuário (2026-07-05) |
| Google Tag Manager (clássico, `GTM-XXXXXXX`) | — | — | Não usado (o projeto usa o "Google tag" simplificado, não o container GTM clássico) |

**Regra de negócio do consentimento:**
- Sem decisão salva → banner visível, nenhum script de análise carrega.
- "Aceitar cookies" → `analytics: true` e `marketing: true` salvos, GA/Google Tag/Clarity carregam imediatamente (sem precisar de reload).
- "Recusar" → `analytics: false` e `marketing: false`, nenhum script carrega.
- "Gerenciar preferências" → controle individual por categoria; mudar de "análise: ligado" para "desligado" impede o carregamento em **novos** carregamentos de página, mas não descarrega scripts já executados na aba atual (limitação técnica normal de qualquer script já rodando em memória).

**Para adicionar o Meta Pixel no futuro:** replicar o padrão de `AnalyticsLoader.tsx` — um `<Script>` condicionado a `preferences.marketing === true`, escutando `COOKIE_CONSENT_UPDATED_EVENT` de `src/lib/cookie-consent.ts`.

**O que monitorar assim que houver dados suficientes:**
- Taxa de cliques em "Enviar pelo WhatsApp" por aba do `ClimatizeTools` (BTU x Quiz x Gerador) — indica qual ferramenta gera mais leads.
- Taxa de aceite do banner de cookies (aceitar vs. recusar vs. gerenciar) — se a recusa for muito alta, os dados do Analytics ficarão sub-representados.
- Páginas de serviço mais visitadas (`/servicos/[slug]`) — ajuda a decidir quais serviços merecem mais destaque na home.
- Gravações de sessão do Clarity nos formulários (BTU, quiz, gerador, contato) para identificar pontos de abandono.
- Origem de tráfego por região (Teófilo Otoni x Vale do Jequitinhonha x Vale do Mucuri) para validar se o SEO regional está funcionando.

---

## 6. Performance — pontos observados

Build de produção mais recente (`npm run build`):

```
Route (app)                              Size     First Load JS
┌ ○ /                                    5.4 kB          157 kB
├ ○ /contato                             2.48 kB         133 kB
├ ○ /servicos                            2.9 kB          149 kB
├ ● /servicos/[slug]                     3.27 kB         142 kB
└ ○ /sobre                               185 B           101 kB
+ First Load JS shared by all            87.3 kB
```

Todas as páginas são estáticas (`○`/`●`), o que é ótimo para performance e SEO — não há SSR dinâmico no caminho crítico.

**Oportunidades identificadas:**
1. **Imagens grandes não otimizadas na origem** — `public/images/differentials-manutencao.jpg` (≈495 KB), `hero-tecnico-manutencao.jpg` (≈270 KB) e `servicos-tecnico-detalhe.jpg` (≈341 KB) são arquivos JPG pesados para imagens de banco de imagens/stock. O `next/image` já otimiza o *tamanho servido* por breakpoint, mas o arquivo de origem pesado ainda consome mais tempo de build e cache; vale comprimir esses três arquivos (ex. via `squoosh`/`sharp`) antes de subir para produção.
2. **Arquivo órfão em `public/`** — `public/Imagem1.png` não é referenciado em nenhum componente (`grep` não encontrou uso). Candidato a remoção para reduzir o tamanho do deploy.
3. **Logo em `.jpeg`** (`public/logo.jpeg`) — formato com perda para um logo; um PNG ou SVG manteria bordas nítidas e teria transparência real, especialmente notável no favicon e no rodapé com fundo escuro.
4. **Sem `sizes` fixo testado em produção real** — os componentes usam `next/image` com `sizes` definidos manualmente; vale confirmar com o Lighthouse/PageSpeed real (não apenas build) qual o LCP em conexão móvel 4G, já que o Hero carrega uma foto grande acima da dobra.
5. **Sem monitoramento de Core Web Vitals ainda** — como GA4/Clarity acabaram de ser ativados, ainda não há dados reais de campo (CrUX/Web Vitals). Depois de ~28 dias de tráfego, vale revisar LCP/INP/CLS no relatório "Core Web Vitals" do Google Search Console.

---

## 7. Backlog conhecido / pendências explícitas do usuário

- **Meta Pixel**: adiado deliberadamente em 2026-07-05, entra na categoria "marketing" do banner de cookies quando o ID for fornecido.
- **Fotos próprias da empresa**: as imagens atuais em `public/images/` são de banco de imagens (stock), usadas como solução temporária até a empresa fornecer fotos reais dos técnicos/instalações.
- **Hospedagem/domínio de produção**: `https://www.climatize.com.br` está hardcoded em `metadataBase`, `sitemap.ts` e nos textos de Open Graph — confirmar que esse é de fato o domínio final antes do lançamento, ou atualizar em todos os três lugares.

---

## 8. Onde editar cada coisa (referência rápida)

| Quero mudar... | Arquivo |
|---|---|
| Telefone, WhatsApp, e-mail, endereço, CNPJ | `src/data/company.ts` |
| Textos/benefícios/FAQ de um serviço | `src/data/services.ts` |
| Logos de clientes exibidos na home | `src/data/clients.ts` + `public/clients/` |
| Fórmula da Calculadora de BTUs | `src/lib/btu.ts` |
| Regras de recomendação do Quiz | `src/components/tools/ServiceQuiz.tsx` (`resolveRecommendation`) |
| Texto das mensagens de WhatsApp geradas | `BtuCalculator.tsx`, `ServiceQuiz.tsx`, `WhatsAppMessageGenerator.tsx` (template literal do `whatsappHref`) |
| IDs de Analytics/Clarity/Google Tag | `src/components/cookies/AnalyticsLoader.tsx` |
| Texto do banner/modal de cookies | `src/components/cookies/CookieConsentBanner.tsx` e `PrivacyPolicyModal.tsx` |
| Título/descrição (SEO) de uma página | `metadata`/`generateMetadata` no respectivo `page.tsx`, ou `seoTitle`/`seoDescription` em `services.ts` |
