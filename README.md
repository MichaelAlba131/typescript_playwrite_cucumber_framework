<h1 align="center">🔐 Testes E2E com Playwright + CucumberJS</h1>

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" width="50"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg" width="50"/>
</p>

<p align="center">
  <b>Framework robusto de automação E2E para aplicações web utilizando TypeScript</b><br/>
  <i>TypeScript • Playwright • CucumberJS | Gherkin</i>
</p>


<hr/>

<h2>✨ Visão Geral</h2>
<p>
  Este framework estrutura testes end-to-end (E2E) baseados em BDD, priorizando clareza e escalabilidade. Utiliza Playwright para automação de browsers, CucumberJS para definição BDD em Gherkin, e TypeScript para máxima tipagem e organização.
</p>


<h2>🗂️ Estrutura do Projeto</h2>
<pre>
tests/
├── features/        # Cenários BDD (Gherkin)
│   └── login/
│       └── Login.feature
├── interactions/    # Interações (ações compostas e regras de negócio)
│   └── login/
│       └── LoginInteractions.ts
├── pages/           # Page Objects (elementos e locators)
│   └── login/
│       └── LoginPage.ts
├── steps/           # Definitions dos Steps (vinculam Gherkin ao código)
│   └── login/
│       └── Login.steps.ts
└── support/         # Hooks e World personalizados
    └── Hooks.ts
</pre>



## 🚀 Como Executar

Instale as dependências:
   ```bash
     npm install
   ```

Execute todos os testes:
   ```bash
     npm test
   ```

Testes paralelos:
   ```bash
     npm run test:parallel2
     npm run test:parallel3
     npm run test:parallel4
   ```

Filtre por tags:
   ```bash
     npm run test:tag
   ```


<h2>⚙️ Tecnologias</h2>
<ul>
  <li>🌐 <b>Playwright</b> – Automação multi-browser (Chromium, Firefox, WebKit)</li>
  <li>🥒 <b>CucumberJS</b> – Sintaxe Gherkin para BDD</li>
  <li>🔷 <b>TypeScript</b> – Tipagem moderna e robusta</li>
  <li>📸 <b>Captura automática de screenshots</b> por cenário</li>
</ul>


<h2>📄 Exemplo de Cenário</h2>
<pre>
@FeatureLogin
Funcionalidade: Login

  @Login
  Esquema do Cenário: Fazer login - "&lt;usuario&gt;"
    Dado Eu abro a url
    Quando Eu preencho o usuario "&lt;usuario&gt;" e a senha "&lt;senha&gt;"
    Exemplos:
      | usuario            | senha    |
      | email1@exemplo.com | teste123 |
      | email2@exemplo.com | teste123 |
</pre>

<h2>📝 Padrão de Implementação</h2>
<ul>
  <li>
    <b>Hook global</b> (<code>Hooks.ts</code>): responsável por criar/fechar browser e page para cada cenário, além de capturar screenshots aos finais dos testes.
  </li>
  <li>
    <b>Step Definitions</b> (<code>Login.steps.ts</code>): conectam frases do Gherkin ao código, utilizando classes de interação e page objects.
  </li>
  <li>
    <b>Page Objects</b> (<code>LoginPage.ts</code>): concentram os elementos e locators das páginas.
  </li>
  <li>
    <b>Interactions</b> (<code>LoginInteractions.ts</code>): encapsulam fluxos de negócio (preencher usuário, senha, login etc).
  </li>
</ul>


<h2>🔎 Relatórios & Evidências</h2>
<ul>
  <li>Screenshots automáticos por cenário em <code>reports/screenshots/</code></li>
  <li>Fácil integração com outras ferramentas de relatório HTML</li>
</ul>

<h2>🛠️ Personalização</h2>
<ul>
  <li>Compatível com execução <b>headless</b> e visível</li>
  <li>Paralelismo configurável via scripts npm</li>
  <li>Configurações avançadas no <code>playwright.config.ts</code> (opcional)</li>
</ul>


<hr/>


<h2>🪪 Licença</h2>
<p>
Distribuído sob a licença MIT. Veja o arquivo <code>LICENSE</code> para mais informações.
</p>

<br>
<p align="center">🚀 Framework TypeScript E2E pronto para evoluir com seu time!<br>