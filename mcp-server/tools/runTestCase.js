const { runCypressTest } = require("../utils/cypressRunner");

async function runTestCase(flowName) {
  try {
    const result = await runCypressTest(flowName);

    return {
      success: result.success,
      output: result.output,
      error: result.error || null,
      screenshots: result.screenshots || []
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    };
  }
}

module.exports = { runTestCase };