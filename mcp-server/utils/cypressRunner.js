const execa = require("execa");
const path = require("path");
const fs = require("fs");

async function runCypressTest(flowName) {
  try {
    // mapeia fluxo -> arquivo
    const flowMap = {
      login: "cypress/e2e/Teste_Homolog/login.cy.js",
      favoritos: "cypress/e2e/Teste_Homolog/favoritos/testeFavorito.cy.js",
      calendario: "cypress/e2e/Teste_Homolog/calendario/testecalendario.cy.js",
      filtros: "cypress/e2e/Teste_Homolog/buscarPartidas/testeFiltros.cy.js",
      melhores: "cypress/e2e/Teste_Homolog/melhoresMomentos/testeMelhoresmomentos.cy.js"
    };

    const spec = flowMap[flowName];

    if (!spec) {
      throw new Error("Fluxo não encontrado");
    }

    const { stdout } = await execa("npx", [
      "cypress",
      "run",
      "--spec",
      spec
    ]);

    return {
      success: true,
      output: stdout
    };

  } catch (error) {
  console.log("ERRO COMPLETO:", error);

  const screenshotsDir = path.resolve("cypress/screenshots");

  let screenshots = [];
  if (fs.existsSync(screenshotsDir)) {
    screenshots = fs.readdirSync(screenshotsDir);
  }

  return {
    success: false,
    error: error.message || error.stderr || error.stdout,
    screenshots
  };
}}

module.exports = { runCypressTest };