describe("Get Element Status", () => {
  it("verifica elemento", () => {
    const selector = Cypress.env("selector");

    cy.visit("/");

    cy.get(selector)
      .then(($el) => {
        const visible = $el.is(":visible");
        const text = $el.text();

        cy.log(`VISIBLE: ${visible}`);
        cy.log(`TEXT: ${text}`);
      });
  });
});