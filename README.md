[README.md](https://github.com/user-attachments/files/26664841/README.md)
# 🤖 Automação Kasalive — Cypress E2E

Projeto de testes automatizados end-to-end para a plataforma [Kasa.live](https://www.kasa.live), desenvolvido com **Cypress** utilizando o padrão **Page Object Model (POM)**.

---

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/) v15.13.1
- [Node.js](https://nodejs.org/) v24+
- JavaScript (ES6+)
- Padrão Page Object Model

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   └── Teste Homolog/
│       ├── buscarPartidas/
│       │   └── testeFiltros.cy.js
│       ├── calendario/
│       │   └── testecalendario.cy.js
│       ├── favoritos/
│       │   └── testeFavoritos.cy.js
│       ├── login/
│       │   └── testeLogin.cy.js
│       └── melhoresMomentos/
│           └── testeMelhoresmomentos.cy.js
└── support/
    └── pages/
        ├── Buscarpartidas/
        │   ├── testeFiltros.js
        │   └── elements.js
        ├── Calendario/
        │   ├── testeCalendario.js
        │   └── elements.js
        ├── Favoritos/
        │   ├── testeFavoritos.js
        │   └── elements.js
        ├── Login/
        │   └── login.js
        └── MelhoresMomentos/
```

---

## 🧪 Casos de Teste

| Arquivo | Descrição | Status |
|---|---|---|
| `testeLogin.cy.js` | Login com usuário incorreto, senha incorreta, campos em branco e login com sucesso | ✅ |
| `testeFiltros.cy.js` | Validação de múltiplos filtros na busca de partidas (time + campeonato + data) | ✅ |
| `testeFavoritos.cy.js` | Favoritar partidas e times | ✅ |
| `testeMelhoresmomentos.cy.js` | Filtro de time na seção Melhores Momentos | ✅ |
| `testecalendario.cy.js` | Navegação no calendário e seleção de data específica | ✅ |

---

## ⚙️ Instalação

### Pré-requisitos

- Node.js v18+
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/LarissaAlves95/automacao_kasalive.git

# Acesse a pasta do projeto
cd automacao_kasalive

# Instale as dependências
npm install
```

---

## ▶️ Executando os Testes

### Abrir o Cypress em modo interativo

```bash
npx cypress open
```

### Executar todos os testes em modo headless

```bash
npx cypress run
```

### Executar um arquivo específico

```bash
npx cypress run --spec "cypress/e2e/Teste Homolog/login/testeLogin.cy.js"
```

---

## 🤖 Execução via IA (MCP)

Este projeto está integrado com um servidor MCP, permitindo que testes sejam listados e executados diretamente por uma IA (como o Claude).

### Ferramentas disponíveis

| Ferramenta | Descrição |
|---|---|
| `list_test_files` | Lista todos os arquivos de teste `.cy.js` disponíveis no projeto |
| `run_test_case` | Executa um fluxo de teste passando o nome da pasta como parâmetro |

### Exemplos de uso via IA

> "Liste meus arquivos de teste"
> → A IA chama `list_test_files` e retorna todos os `.cy.js` disponíveis

> "Rode o teste de login"
> → A IA chama `run_test_case` com `flow: "login"`

> "Execute o testeFavoritos.cy.js"
> → A IA chama `run_test_case` com `flow: "favoritos"`

### Parâmetro `flow` — referência rápida

| Teste | Valor do `flow` |
|---|---|
| Login | `login` |
| Buscar Partidas / Filtros | `buscarPartidas` |
| Favoritos | `favoritos` |
| Melhores Momentos | `melhoresMomentos` |
| Calendário | `calendario` |

### Configuração do servidor MCP

O servidor MCP está localizado em `tools/` na raiz do projeto. Para habilitá-lo, configure o arquivo de integração da sua IA apontando para o servidor local do projeto.

---

## 🔐 Variáveis de Ambiente

As credenciais e configurações sensíveis são gerenciadas via `cypress.env.json` (não versionado). Crie o arquivo na raiz do projeto:

```json
{
  "email": "seu-email@exemplo.com",
  "senha": "sua-senha"
}
```

> ⚠️ **Nunca suba o `cypress.env.json` para o repositório.** Certifique-se de que está no `.gitignore`.

---

## 📌 Boas Práticas Adotadas

- **Page Object Model**: lógica de interação separada dos arquivos de teste
- **Seletores semânticos**: uso de `aria-label`, `data-cy` e IDs estáveis evitando classes CSS geradas dinamicamente
- **Sem encadeamento problemático**: comandos como `.click()` e `.type()` são separados para evitar falhas por re-renderização do DOM
- **Asserções síncronas no `.each()`**: uso de `expect()` do Chai dentro de iterações para evitar problemas com elementos desanexados do DOM

---

## 📄 Licença

Este projeto é de uso interno. Todos os direitos reservados.
