/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;

class calendario {  

  addPartidaCalendario(){
    cy.get(el.btnLista).click();
    cy.get(el.btnAddCaled).first().click({ force: true });
    cy.get(el.btnCalendario).click({ force: true });
    cy.wait(1000);
    cy.get(el.abrirCalend).click({ force: true });
    cy.wait(1500); // aguarda o calendário abrir

    // Clica 17 vezes para voltar de ABR/2026 até NOV/2024
    for (let i = 0; i < 17; i++) {
      cy.get('button[aria-label="Mês anterior"]').click();
      cy.wait(500);
    }

    // Verifica se chegou em NOV 2024
    cy.get('.css-2djvxz').then(($div) => {
      const mes = $div.find('p').first().text().toLowerCase();
      const ano = $div.find('p').last().text().toLowerCase();
      cy.log('Mês: ' + mes + ' | Ano: ' + ano);
    });

    // Clica no dia 26
    cy.get('button.rdp-day span[aria-hidden="true"]')
      .filter((i, el) => Cypress.$(el).text().trim() === '26')
      .closest('button.rdp-day')
      .not('.rdp-day_outside')
      .not('[disabled]')
      .first()
      .scrollIntoView()
      .click({ force: true });

    cy.log('Clique no dia 26 realizado!');
  }
}

export default new calendario()