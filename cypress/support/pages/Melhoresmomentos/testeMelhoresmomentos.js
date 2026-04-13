/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;
import testeFiltros from '../Buscarpartidas/testeFiltros';

class melhoresMomentos {  

  melhoresMomentosFiltroTimes(){
  cy.get(el.btnMelhoresMomen).click()
  cy.contains('button', 'Times').click({ force: true })
  cy.get(el.filtroTimes).first().type('Palmeiras')
  cy.wait(1000)
  cy.get(el.checkbox).first().check({ force: true })
  cy.contains('Sem resultados para os melhores momentos das partidas finalizadas com os filtros atuais aplicados.')
  .should('be.visible')
  cy.get(el.filtroTimes).first()
    .clear({ force: true })
    .type("São Paulo")
    cy.contains('São Paulo', { timeout: 10000 }).should('be.visible');
  cy.get(el.checkbox).first().check({ force: true })
  cy.contains('Brasileirão Série A') // Acha a liga
  .parent()                        // Sobe para o card
  .should('contain', 'São Paulo'); // Valida que o São Paulo está lá dentro

}}

export default new melhoresMomentos()