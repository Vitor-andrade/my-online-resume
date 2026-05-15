# developerFolio — Documentação Detalhada do Repositório

> Documentação técnica do repositório localizado em `/Users/vitorandrade/Documents/developerFolio`.
>
> **developerFolio** é um template open source de portfólio para desenvolvedores construído em **React 16 + SCSS**, altamente configurável a partir de um único arquivo (`src/portfolio.js`), com suporte a tema claro/escuro, animações Lottie, integração com **GitHub GraphQL API** (para exibir repositórios e perfil), integração com **Medium** (para exibir blogs via RSS2JSON) e deploy automatizado para **GitHub Pages**.

---

## Sumário

1. [Visão Geral e Stack](#1-visão-geral-e-stack)
2. [Fluxo da Aplicação](#2-fluxo-da-aplicação)
3. [Arquivos da Raiz](#3-arquivos-da-raiz)
4. [Diretório `.github/`](#4-diretório-github)
5. [Diretório `public/`](#5-diretório-public)
6. [Diretório `src/` — Arquivos de Topo](#6-diretório-src--arquivos-de-topo)
7. [Diretório `src/containers/`](#7-diretório-srccontainers)
8. [Diretório `src/components/`](#8-diretório-srccomponents)
9. [Diretório `src/contexts/`](#9-diretório-srccontexts)
10. [Diretório `src/hooks/`](#10-diretório-srchooks)
11. [Diretório `src/assets/`](#11-diretório-srcassets)
12. [Pontos-chave de Customização](#12-pontos-chave-de-customização)

---

## 1. Visão Geral e Stack

- **Framework:** React 16 (Create React App).
- **Estilização:** SCSS modular por componente + variáveis globais em `_globalColor.scss`.
- **Animações:** `react-lottie` para animações vetoriais; `react-reveal` para transições.
- **Integrações externas:**
  - **GitHub GraphQL API** — busca perfil e repositórios fixados.
  - **Medium (RSS2JSON)** — busca posts do blog.
  - **Twitter Embed** — timeline embutida.
- **Deploy:** GitHub Pages via GitHub Actions; também há `Dockerfile` para containerização.
- **Build pré-step:** O script `fetch.js` roda antes de `react-scripts start/build`, gerando `public/profile.json` e `public/blogs.json` consumidos em runtime pelos componentes.

---

## 2. Fluxo da Aplicação

1. `npm start` executa primeiro **`fetch.js`** (gera `public/profile.json` e `public/blogs.json` se as variáveis de ambiente estiverem configuradas) e em seguida o `react-scripts start`.
2. `src/index.js` monta o componente raiz `App` no elemento `#root` do `public/index.html`.
3. `App.js` renderiza o container `Main`.
4. `Main.js`:
   - Lê preferência de tema do sistema (`prefers-color-scheme`) e persiste no `localStorage` via o hook `useLocalStorage`.
   - Expõe `{ isDark, changeTheme }` por meio do `StyleContext`.
   - Renderiza a `SplashScreen` (se habilitada) por ~2s, e depois encadeia todos os containers de seção.
5. Componentes consomem o conteúdo declarado em **`src/portfolio.js`** e/ou os JSONs gerados (`profile.json`, `blogs.json`).
6. O switch de tema (`ToggleSwitch`) altera o contexto, e cada componente aplica classes `dark-mode` / `light-mode` em tempo real.

---

## 3. Arquivos da Raiz

### `package.json`
Define metadados, dependências e scripts NPM. Versão `0.1.0`, baseado em React 16 e `react-scripts`. Scripts principais:
- `start` → executa `node fetch.js` e em seguida `react-scripts start`.
- `build` → mesmo padrão para produção.
- `deploy` → publica `build/` para GitHub Pages via `gh-pages`.
- `test`, `check-format`, `format` (Prettier).

Dependências relevantes: `react`, `react-dom`, `react-lottie`, `react-reveal`, `react-headroom`, `react-twitter-embed`, `colorthief`, `sass`, `enzyme` para testes.

### `fetch.js`
Script Node.js executado antes do CRA. Funcionalidades:
- Lê variáveis de ambiente (`REACT_APP_GITHUB_TOKEN`, `GITHUB_USERNAME`, `USE_GITHUB_DATA`, `MEDIUM_USERNAME`).
- Se `USE_GITHUB_DATA === "true"`, faz `POST` à API GraphQL do GitHub (`api.github.com/graphql`) buscando o usuário, seus repositórios fixados e os dados de cada repo (nome, descrição, linguagem, forks, stars, tamanho).
- Se `MEDIUM_USERNAME` estiver definido, busca o feed RSS convertido em JSON em `api.rss2json.com`.
- Grava os resultados em `public/profile.json` e `public/blogs.json`. Esses arquivos são `.gitignored` (gerados no build).

### `env.example`
Modelo das variáveis de ambiente necessárias. Documenta:
- `REACT_APP_GITHUB_TOKEN` — token pessoal com escopo `public_repo`.
- `GITHUB_USERNAME` — usuário GitHub alvo.
- `USE_GITHUB_DATA` — `"true"`/`"false"` para habilitar a integração.
- `MEDIUM_USERNAME` — handle do Medium (opcional).

Deve ser copiado para `.env` (não versionado).

### `Dockerfile`
Imagem `node:20-alpine`, copia o projeto para `/app`, roda `npm install`, `npm audit fix`, expõe porta `3000` e executa `npm start`. Útil para subir o ambiente de dev sem instalar Node localmente.

### `.prettierrc`
Regras de formatação:
- `trailingComma: "none"`
- `bracketSpacing: false`
- `arrowParens: "avoid"`
- `singleQuote: false`
- `tabWidth: 2`, `printWidth: 80`

### `.prettierignore`
Ignora `src/serviceWorker.js`, `package-lock.json` e `src/assets/lottie` (animações JSON volumosas).

### `.gitignore`
Ignora `node_modules`, `build`, `coverage`, `.env*` e os JSONs gerados (`public/profile.json`, `public/blogs.json`).

### `.gitattributes`
Normaliza EOL para `LF` em arquivos de código e marca `.ttf`, `.png`, `.webp`, `.woff` como binários.

### `.pre-commit-config.yaml`
Configura um hook `pre-commit` (Python) que executa `prettier@3.0.0-alpha.4` antes de cada commit em arquivos `.json`, `.js`, `.css`.

### `.all-contributorsrc`
Configuração do bot **all-contributors**. Mantém lista de contribuidores com tipos de contribuição (`code`, `doc`, `ideas`, etc.), usada para gerar a seção de contribuidores no `README.md`.

### `README.md`
Documentação extensa do projeto (instalação, customização de `portfolio.js`, deploy, screenshots, créditos). É o ponto de entrada para usuários que querem usar o template.

### `LICENSE`
Licença GPL (texto completo padrão).

### `package-lock.json`
Lockfile gerado pelo `npm install`. Não deve ser editado manualmente.

---

## 4. Diretório `.github/`

### `.github/workflows/deploy.yml`
Workflow do GitHub Actions para deploy em produção.
- **Triggers:** `workflow_dispatch`, `push` em `master`, agendado para toda segunda às 12:00 UTC.
- **Etapas:** checkout, setup Node 18, `npm install`, `npm run build`, deploy via `JamesIves/github-pages-deploy-action`.
- Recebe `GITHUB_USERNAME`, `REACT_APP_GITHUB_TOKEN`, `USE_GITHUB_DATA`, `MEDIUM_USERNAME` como `env`. Usa `CI=false` para que warnings não quebrem o build.

### `.github/workflows/prettier.yml`
Workflow de CI de formatação.
- **Triggers:** `push` e `pull_request` em `master`.
- **Etapas:** checkout, Node 18, `npm install`, `npm run check-format`. Falha o build se houver código fora do padrão Prettier.

### `.github/ISSUE_TEMPLATE/`
- `bug.yml` — template estruturado para reportar bugs.
- `feature_request.yml` — template para sugestões.
- `config.yml` — configuração geral dos templates (links externos, opções).

---

## 5. Diretório `public/`

### `index.html`
HTML base do CRA. Inclui:
- Meta tags de SEO (description, author), **Open Graph** (Facebook) e **Twitter Card**.
- Favicons (16/32px, Apple touch, Android Chrome 192/384, MS tile 150).
- **Font Awesome 5.15.4** via CDN.
- **Google Analytics** com tracking ID `UA-135618960-2`.
- `<link rel="preload">` para `Montserrat-Regular.ttf` e `Agustina.woff`.
- `<div id="root">` onde o React monta.

### `manifest.json`
Manifest PWA: nome do app, lista de ícones com tamanhos e tipos, `theme_color` `#6c63ff`, `display: standalone`.

### Ícones e assets estáticos
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` — ícones do navegador.
- `apple-touch-icon.png` — iOS.
- `android-chrome-192x192.png`, `android-chrome-384x384.png` — Android.
- `mstile-150x150.png` + `browserconfig.xml` — tiles do Windows.
- `safari-pinned-tab.svg` — ícone monocromático para tabs fixadas no Safari.
- `robots.txt` — controle de crawlers.

### `profile.json` *(gerado em runtime)*
Saída do `fetch.js`. Contém o objeto `data.user` da resposta GraphQL do GitHub: nome, bio, avatar, localização, status `isHireable` e a lista de `pinnedItems` com seus metadados.

### `blogs.json` *(gerado em runtime)*
Saída do `fetch.js`. Resposta do RSS2JSON para o feed Medium do usuário: lista de posts com `title`, `link`, `pubDate` e `content` em HTML.

---

## 6. Diretório `src/` — Arquivos de Topo

### `index.js`
Bootstrap do React. Importa `App`, `index.css` e `serviceWorker`. Faz `ReactDOM.render(<App />, document.getElementById("root"))`. Chama `serviceWorker.unregister()` por padrão (PWA offline desativado).

### `App.js`
Componente raiz funcional. Apenas renderiza `<Main />` envolvido em uma `<div className="App">`. Importa `App.scss`.

### `App.scss`
Estilos globais do `App`: classes `.App`, `.App-logo`, `.App-header`, `.App-link`, `.subTitle`. Usa as variáveis de cor importadas de `_globalColor.scss`.

### `index.css`
- Define `@font-face` para **Agustina Regular** (woff) e **Montserrat** (ttf).
- `html { scroll-behavior: smooth; }` para navegação suave por âncoras.
- `body { font: 19px/23px Montserrat, sans-serif; }` como tipografia padrão.

### `_globalColor.scss`
Arquivo central de **design tokens** SCSS. Define dezenas de variáveis de cor agrupadas em:
- **Botões:** `$buttonColor`, `$buttonHover`.
- **Texto:** `$titleColor`, `$textColor`, `$textColorDark`, `$subTitle`, etc.
- **Tema:** backgrounds, shadows, gradientes para modos claro/escuro.
- **Redes sociais:** cores oficiais (Facebook, LinkedIn, GitHub, GitLab, Google, Twitter, Medium, Stack Overflow, Instagram, Kaggle).

Todos os SCSS dos componentes importam este arquivo para garantir consistência visual.

### `portfolio.js` — **Arquivo de configuração mestre**
Centraliza todo o conteúdo do site. Cada seção é exportada como um objeto JS independente, permitindo desativar uma seção setando `display: false`. Seções:

| Export | Função |
|---|---|
| `splashScreen` | Configuração da tela de abertura (Lottie + duração). |
| `greeting` | Nome, título, subtítulo, link para o currículo. |
| `socialMediaLinks` | URLs de todas as redes sociais suportadas. |
| `skillsSection` | Título, subtítulo, ícones de tecnologias e bullets de skills. |
| `educationInfo` | Lista de escolas/cursos (logo, nome, grau, duração, descrição). |
| `techStack` | Barras de progresso de proficiência por área (Frontend, Backend, Programação...). |
| `workExperiences` | Histórico profissional (empresa, cargo, datas, descrição). |
| `openSource` | Flags para mostrar projetos GitHub e perfil GitHub. |
| `bigProjects` | "Big Projects" / startups com logo e CTAs. |
| `achievementSection` | Certificações e prêmios. |
| `blogSection` | Blogs do Medium ou lista hardcoded. |
| `talkSection` | Palestras (slides + evento). |
| `podcastSection` | Embeds de podcasts. |
| `contactInfo` | Telefone e e-mail. |
| `twitterDetails` | Username do Twitter para timeline. |
| `isHireable` | Flag de disponibilidade. |
| `resumeSection` | Identificação da seção de currículo. |

Importa o componente `emoji` (`react-easy-emoji`) e a animação Lottie `splashAnimation`.

### `utils.js`
Pequeno módulo de utilitários. Atualmente expõe `formatFileSizeDisplay(value)`, que converte tamanho de repositório (em KB) para MB com uma casa decimal. Usado em `GithubRepoCard`.

### `serviceWorker.js`
Boilerplate padrão do CRA para registrar/desregistrar Service Worker (PWA offline). Inclui lógica para distinguir localhost vs produção, validar o SW e tratar atualizações em segundo plano. Por padrão fica desregistrado no `index.js`.

### `App.test.js`
Smoke test do `App`. Faz mock de `window.matchMedia` (porque o `Main` o consome) e verifica que o componente renderiza sem lançar exceção. Usa React/ReactDOM diretos, sem Enzyme.

### `setupTests.js`
Configuração global do Jest:
- Instala `jest-canvas-mock` para suportar componentes que dependem de canvas (e.g. Lottie).
- Configura adapter do Enzyme para React 16.

### `logo.svg`
Logo SVG padrão remanescente do CRA. Não é referenciado no código principal.

---

## 7. Diretório `src/containers/`

> **Containers** são componentes "espessos" que orquestram dados (`portfolio.js`, JSONs gerados, `StyleContext`) e compõem componentes de apresentação. Cada container costuma respeitar a flag `display` da sua seção.

### `Main.js` + `Main.scss`
Container raiz que orquestra **todas** as seções da página única. Responsabilidades:
- `useLocalStorage("isDark", ...)` para persistir a preferência de tema.
- Detecta tema do SO via `window.matchMedia("(prefers-color-scheme: dark)")`.
- Função `changeTheme()` que inverte `isDark`.
- Renderiza `<SplashScreen>` por `splashScreen.duration` (se habilitado).
- Envolve toda a árvore em `<StyleProvider value={{isDark, changeTheme}}>`.
- Renderiza, na ordem: `Header`, `Greeting`, `Skills`, `StackProgress`, `Education`, `WorkExperience`, `Projects`, `StartupProject`, `Achievement`, `Blogs`, `Talks`, `Twitter`, `Podcast`, `Profile`, `Footer`, `ScrollToTopButton`.

### `greeting/Greeting.js` + `Greeting.scss`
Hero da página. Mostra `greeting.username`, `title`, `subTitle`, animação Lottie `landingPerson`, `SocialMedia`, e dois `Button`s ("Contact me" e download de CV via `resumeLink`). Animação de entrada com `Fade bottom`.

### `skills/Skills.js` + `Skills.scss`
Seção "What I do". Renderiza animação Lottie `codingPerson`, descrição e grid de ícones via `SoftwareSkill`. Lê `skillsSection`. Bloco direito com a lista de bullets (`subTitle`/`skills[]`).

### `skillProgress/skillProgress.js` + `Progress.scss`
Barras de proficiência. Lê `techStack.experience[]` (rótulo + percentual). Renderiza animação Lottie `build`. Há ainda código (desativado por flag) para exibir badges **CodersRank**.

### `education/Education.js` + `Education.scss`
Wrapper para `educationInfo.schools[]`. Renderiza um `EducationCard` por escola.

### `workExperience/WorkExperience.js` + `WorkExperience.scss`
Wrapper para `workExperiences.experience[]`. Renderiza um `ExperienceCard` por trabalho.

### `projects/Projects.js` + `Project.scss`
Seção "Open Source". Faz `fetch("/profile.json")` em `componentDidMount` (classe React) e renderiza `GithubRepoCard` para cada `pinnedItem`. Usa `React.lazy` + `Suspense` com `Loading` como fallback. Em caso de erro, mostra mensagem. Inclui um `Button` "More Projects" linkando para o GitHub.

### `StartupProjects/StartupProject.js` + `StartupProjects.scss`
Renderiza `bigProjects.projects[]` em grid (logo, nome, descrição, CTAs). Cada CTA abre uma URL externa em nova aba.

### `achievement/Achievement.js` + `Achievement.scss`
Renderiza `achievementSection.achievementsCards[]` via `AchievementCard`.

### `blogs/Blogs.js` + `Blog.scss`
Lógica:
- Se `displayMediumBlogs === "true"`, faz `fetch("/blogs.json")` e renderiza os 4 posts mais recentes do Medium, usando `extractTextContent()` (parser via `DOMParser`) para gerar resumo limpo a partir do HTML.
- Caso contrário (ou em fallback de erro), renderiza `blogSection.blogs[]` hardcoded.
- Cada item vira um `BlogCard`.

### `talks/Talks.js` + `Talks.scss`
Renderiza `talkSection.talks[]` via `TalkCard`.

### `podcast/Podcast.js` + `Podcast.scss`
Renderiza `podcastSection.podcast[]`, cada item é um iframe (`dangerouslySetInnerHTML`) — ideal para embeds tipo Anchor FM.

### `profile/Profile.js`
Busca `/profile.json`. Se obtiver os dados, renderiza `GithubProfileCard` (lazy + Suspense). Se não, faz fallback para `Contact` para mostrar e-mail/telefone.

### `contact/Contact.js` + `Contact.scss`
Versão alternativa ao perfil GitHub. Mostra título, subtítulo, telefone e e-mail (`contactInfo`), `SocialMedia` e Lottie `email`. Possui `id="contact"` para a navegação por âncora do `Header`.

### `splashScreen/SplashScreen.js` + `SplashScreen.css`
Tela de boot. Renderiza Lottie `splashAnimation` + nome de usuário (`greeting.username`). Visível apenas durante `splashScreen.duration` ms (controlado em `Main.js`).

### `loading/Loading.js` + `loading.scss`
Spinner CSS estilo "circle-burst" com 12 pontos animados (`sk-circle1` … `sk-circle12`). Usado como `fallback` dos `Suspense`.

### `topbutton/Top.js` + `Top.scss`
Botão flutuante "Voltar ao topo". Em `componentDidMount`, registra `window.onscroll` para alternar visibilidade quando o scroll passa de 30px. Click → `document.documentElement.scrollTop = 0`. Ícone Font Awesome `hand-point-up`.

### `twitter-embed/twitter.js` + `twitter.scss`
Embute uma `TwitterTimelineEmbed` (`react-twitter-embed`). Calcula largura responsiva via `window.innerWidth` + `resize` listener. Tema do widget reflete `isDark`. Mostra `Loading` por 10s e, se ainda não carregou, exibe uma mensagem sobre bloqueadores de privacidade.

---

## 8. Diretório `src/components/`

> **Components** são puros (apresentacionais). Recebem `props` ou consomem `StyleContext` e não fazem I/O.

### `header/Header.js` + `Header.scss`
Navbar sticky usando `react-headroom`. Links âncora para todas as seções habilitadas (verifica cada flag `display` em `portfolio.js`). Inclui o `ToggleSwitch`. Em telas pequenas vira um menu hamburger via checkbox + label CSS.

### `footer/Footer.js` + `Footer.scss`
Rodapé com "Made with ❤️ by..." e link para o repositório no GitHub. Animação `Fade bottom`.

### `ToggleSwitch/ToggleSwitch.js` + `ToggleSwitch.scss`
Switch CSS-only. Sincroniza estado local com `isDark` do `StyleContext` e chama `changeTheme()` no toggle. Mostra emojis 🌜/☀️ nos extremos.

### `button/Button.js` + `Button.scss`
`<a>` estilizado como botão. Props: `text`, `href`, `newTab` (boolean → `target="_blank"`), `className`. Usado para CV download, "Contact me", "More Projects" etc.

### `displayLottie/DisplayLottie.js`
Wrapper de `react-lottie`. Recebe `animationData` (JSON Lottie) como prop. Renderiza `<Lottie>` com `loop=true` e `autoplay=true`, envolvendo em `Suspense` com `Loading` como fallback.

### `socialMedia/SocialMedia.js` + `SocialMedia.scss`
Renderiza ícones Font Awesome para cada rede social presente em `socialMediaLinks`. Cada `<a>` abre em nova aba (`target="_blank"` + `rel="noopener noreferrer"`). Cores dos hovers vêm de `_globalColor.scss`.

### `softwareSkills/SoftwareSkill.js` + `SoftwareSkill.scss`
Grid de ícones de skills. Cada entrada de `skillsSection.softwareSkills` tem `skillName` (tooltip) e `fontAwesomeClassname` (e.g. `fab fa-react`). Renderiza `<li><i className={...}/></li>` em série.

### `experienceCard/ExperienceCard.js` + `ExperienceCard.scss`
Card vertical por experiência. Recebe `cardInfo` (`company`, `role`, `date`, `desc`, `descBullets`, `companylogo`) + `isDark`. Usa `ColorThief` para extrair a cor dominante da logo e aplicar como cor de fundo dinâmica do header do card. Subcomponente `GetDescBullets` renderiza `descBullets[]`.

### `educationCard/EducationCard.js` + `EducationCard.scss`
Card horizontal por escola. Logo + nome + grau + duração + descrição + bullets. Animação `Fade left` no card e `Slide left` na barra lateral colorida. Subcomponente `GetDescBullets`.

### `githubRepoCard/GithubRepoCard.js` + `GithubRepoCard.scss`
Card para `pinnedItems` do GitHub. Recebe `repo` (objeto GraphQL) e `isDark`. Exibe nome, descrição, ícone SVG de repositório, linguagem (com bolinha colorida via `primaryLanguage.color`), forks, stars e disk usage formatado por `formatFileSizeDisplay`. Click → abre `repo.url` em nova aba.

### `githubProfileCard/GithubProfileCard.js` + `GithubProfileCard.scss`
Card de perfil GitHub. Recebe `prof` (avatar, nome, bio, localização, `isHireable`). Mostra um badge "Open for opportunities" condicional. Inclui `SocialMedia` no rodapé. `id="contact"` para navegação.

### `achievementCard/AchievementCard.js` + `AchievementCard.scss`
Card de certificado. Imagem no topo, título e descrição abaixo, e um array `footer[]` com links que viram botões (Certificação, Carta de prêmio, etc.). `isDark` controla estilo.

### `blogCard/BlogCard.js` + `BlogCard.scss`
Card de blog. Click em qualquer lugar abre `blog.url` em nova aba. Decoração: `go-corner` no canto superior direito com uma `go-arrow` que aparece em hover.

### `talkCard/TalkCard.js` + `TalkCard.scss`
Card de palestra. Mostra título, subtítulo e dois botões: "See Slides" e "See Event". Background com padrão diagonal (`talksCardBack.svg`).

---

## 9. Diretório `src/contexts/`

### `StyleContext.js`
Cria um `React.createContext({ isDark: false, changeTheme: () => {} })`. Re-exporta `Provider` como `StyleProvider`, `Consumer` como `StyleConsumer`, e o próprio context como **default export**, permitindo consumo via `useContext(StyleContext)`. Centraliza o estado de tema usado em quase todos os componentes.

---

## 10. Diretório `src/hooks/`

### `useLocalStorage.js`
Hook custom modelado como `useState`, mas persistente em `localStorage`. Comportamento:
- No mount, tenta `JSON.parse(localStorage.getItem(key))`; se falhar, usa `initialValue`.
- `setValue(v)` aceita um valor ou uma função (igual ao `useState`); aplica o `setState` e escreve no `localStorage` num `try/catch` para tolerar ambientes sem storage (ex.: SSR ou modo privado).
- Usado em `Main.js` para a chave `"isDark"`, garantindo que o tema escolhido pelo usuário persista entre visitas.

---

## 11. Diretório `src/assets/`

### `src/assets/fonts/`
- **`Agustina.woff`** — fonte decorativa script, usada para a assinatura/cabeçalhos especiais.
- **`Montserrat-Regular.ttf`** — fonte principal do `body` declarada em `index.css`.

### `src/assets/images/`
Imagens estáticas (PNG / WebP / SVG):
- **Logos de empresas/escolas:** `airbnbLogo.png`, `facebookLogo.png`, `quoraLogo.png`, `codeInLogo.webp`, `googleAssistantLogo.webp`, `harvardLogo.png`, `stanfordLogo.png`, `saayaHealthLogo.webp`, `nextuLogo.webp`, `pwaLogo.webp`.
- **Ilustrações/ícones:** `contactMail.webp`, `contactMailDark.svg`, `developerActivity.svg`, `googleAssistant.svg`, `jsFramework.svg`, `manOnTable.svg`, `programmer.svg`, `pwa.webp`, `skill.svg`, `talksCardBack.svg`.

### `src/assets/lottie/`
Animações Lottie em JSON (ignoradas pelo Prettier por serem volumosas):
- `splashAnimation.json` — usada na `SplashScreen`.
- `landingPerson.json` — usada em `Greeting`.
- `codingPerson.json` — usada em `Skills`.
- `email.json` — usada em `Contact`.
- `build.json` — usada em `skillProgress`.

---

## 12. Pontos-chave de Customização

Para adaptar o template a um novo portfólio, edite em ordem de prioridade:

1. **`src/portfolio.js`** — TODO o conteúdo do site (textos, listas, flags `display`, etc.).
2. **`.env`** (a partir de `env.example`) — credenciais GitHub/Medium.
3. **`src/_globalColor.scss`** — paleta de cores global.
4. **`public/index.html`** — meta tags, título da aba, Google Analytics, Open Graph.
5. **`src/assets/`** — substituir logos, ilustrações e animações Lottie.
6. **`fetch.js`** — caso queira ajustar a query GraphQL (limite de repos, campos extras).
7. **`Dockerfile`** — apenas se você for containerizar.
8. **`.github/workflows/deploy.yml`** — branch alvo, periodicidade do agendamento.

### Seções "ativáveis"
Quase toda seção possui uma flag `display` em `portfolio.js`. Setá-la para `false` faz o respectivo container retornar `null`, removendo a seção sem precisar mexer no JSX.

### Integrações opcionais
- **GitHub:** controlado por `USE_GITHUB_DATA` + `openSource.display` / `openSource.showGithubProfile`.
- **Medium:** controlado por `MEDIUM_USERNAME` + `blogSection.displayMediumBlogs`. Se desativado, usa `blogSection.blogs[]` hardcoded.
- **Twitter:** controlado por `twitterDetails.display` e `userName`.
- **PWA offline:** trocar `serviceWorker.unregister()` por `register()` em `src/index.js`.

---

*Documentação gerada em 2026-05-13 a partir de um scan completo do código-fonte do repositório `developerFolio`.*
