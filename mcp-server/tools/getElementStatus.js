const execa = require("execa");

async function getElementStatus(selector) {
  try {
    const { stdout } = await execa("npx", [
      "cypress",
      "run",
      "--env",
      `selector=${selector}`,
      "--spec",
      "cypress/e2e/utils/getElement.cy.js"
    ]);

    return {
      success: true,
      output: stdout
    };

  } catch (err) {
    return {
      success: false,
      error: err.stderr
    };
  }
}

module.exports = { getElementStatus };