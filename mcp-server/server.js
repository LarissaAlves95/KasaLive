const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const { CallToolRequestSchema, ListToolsRequestSchema } = require("@modelcontextprotocol/sdk/types.js");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const server = new Server({
  name: "automacao-kasalive",
  version: "1.0.0",
}, {
  capabilities: { tools: {} }
});

const PROJECT_PATH = "C:/Users/Larissa/Desktop/automacao_Kasalive";
const TESTS_PATH = path.join(PROJECT_PATH, "cypress/e2e/Teste Homolog");

// 1. LISTA AS FERRAMENTAS
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "list_test_files",
      description: "Lista todos os arquivos de teste (.cy.js) disponíveis no projeto.",
      inputSchema: { type: "object", properties: {} }
    },
    {
      name: "run_test_case",
      description: "Executa um fluxo de teste específico.",
      inputSchema: {
        type: "object",
        properties: { flow: { type: "string", description: "O nome da pasta ou arquivo do teste" } },
        required: ["flow"]
      }
    }
  ]
}));

// 2. EXECUTA AS FERRAMENTAS
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "list_test_files") {
    try {
      const files = fs.readdirSync(TESTS_PATH, { recursive: true })
        .filter(file => file.endsWith(".cy.js"));
      return { content: [{ type: "text", text: "Arquivos encontrados:\n" + files.join("\n") }] };
    } catch (error) {
      return { isError: true, content: [{ type: "text", text: "Erro ao ler diretório: " + error.message }] };
    }
  }

  if (name === "run_test_case") {
    try {
      const result = execSync(`npx cypress run --spec "cypress/e2e/Teste Homolog/${args.flow}/**/*"`, { cwd: PROJECT_PATH }).toString();
      return { content: [{ type: "text", text: result }] };
    } catch (error) {
      return { isError: true, content: [{ type: "text", text: error.stdout?.toString() || error.message }] };
    }
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);