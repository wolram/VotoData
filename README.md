# VotoData

Plataforma web da VotoData para inteligência eleitoral no Brasil.

O projeto apresenta a proposta de produto da VotoData: APIs eleitorais, datasets processados, modelos preditivos, pesquisa aplicada e fluxos de contato comercial. A experiência atual é uma aplicação Next.js com foco editorial e institucional, orientada a demonstrar capacidade analítica, ativos de pesquisa e casos de uso para campanhas, consultorias, pesquisadores e instituições.

## O que existe hoje

- Home editorial com posicionamento de marca, destaques, feed e rotas para áreas do produto
- Páginas de produto para `APIs`, `Dados`, `Modelos`, `Pesquisa`, `Casos`, `Notícias` e `Glossário`
- Artigos longform sobre mercados de predição e simulação eleitoral
- Formulário de contato com envio por API server-side
- SEO básico com metadata, Open Graph, favicon e imagem social

## Stack

- Next.js 16
- React 19
- TypeScript strict
- Tailwind CSS v4
- `next/font/local` para tipografia local
- Resend para envio do formulário de contato

## Rotas principais

- `/` — landing page principal
- `/apis` — visão de APIs eleitorais
- `/dados` — visão de datasets processados
- `/modelos` — visão de modelos preditivos
- `/pesquisa` — pesquisa acadêmica e working papers
- `/docs` — documentação da API em acesso antecipado
- `/casos` — casos de uso
- `/noticias` — notícias e updates
- `/glossario` — glossário técnico
- `/contato` — formulário comercial / suporte
- `/api/contato` — endpoint POST para envio de mensagens

## Estrutura do projeto

```text
src/
  app/
    api/contato/     # endpoint de envio do formulário
    apis/            # página de APIs
    blog/            # artigos e essays
    casos/           # casos de uso
    contato/         # formulário e metadata
    dados/           # datasets
    docs/            # documentação da API
    glossario/       # glossário técnico
    modelos/         # modelos preditivos
    noticias/        # notícias / feed
    pesquisa/        # research hub + papers
  components/        # blocos reutilizáveis da interface
  data/              # conteúdo estruturado, referências e glossário
public/
  fonts/             # fontes locais
  seo/               # favicon e imagem social
docs/
  research/          # material de pesquisa e inspeção
  design-references/ # capturas e referências visuais
```

## Desenvolvimento local

1. Instale as dependências:

```bash
npm install
```

2. Suba o ambiente local:

```bash
npm run dev
```

3. Acesse:

```text
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run check
```

## Variáveis de ambiente

Para o formulário de contato funcionar de ponta a ponta, defina:

```bash
RESEND_API_KEY=...
```

Sem essa variável, a rota [`src/app/api/contato/route.ts`](/Users/wolram/Documents/GitHub/my-clone/src/app/api/contato/route.ts) não conseguirá enviar emails.

## Direção de produto refletida no código

- Dados eleitorais do TSE com processamento para uso analítico
- Referências a integrações e curadoria sobre `CEPESPData` e `electionsBR`
- Narrativa de produto voltada a predição, pesquisa aplicada e inteligência eleitoral
- Páginas públicas que funcionam como vitrine comercial e editorial, enquanto docs e acesso à API ainda estão em modo de pré-lançamento

## Observações

- Este repositório não é mais o template original de clonagem de sites; o README antigo estava desatualizado em relação ao código atual.
- Há artefatos de pesquisa em `docs/research/` herdados do processo de construção do site. Eles não definem o produto final e podem incluir material intermediário de inspeção.

## Licença

MIT
