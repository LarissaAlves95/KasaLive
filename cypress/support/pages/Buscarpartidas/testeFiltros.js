/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;


class filtros{  

multiFiltros(){
  cy.get(el.filtroCalen).click()
  for (let i = 0; i < 17; i++) {
  cy.get(el.navCalend).should('be.visible').click();}
 cy.wait(1000)
  cy.contains('button', '20º novembro').click()
   cy.wait(1000)
  cy.contains('button', '26º novembro').click()
   cy.wait(1000)
cy.get(el.filtroTime).click()
cy.get(el.filtroTime).type("palmei")
cy.contains("Palmeiras").click()
cy.get(el.filtroCamp).click()
cy.get(el.filtroCamp).type("Brasileirão Sér")
cy.contains("Brasileirão Série A").click()
  cy.wait(1000)

  cy.get('div.css-7mca6u').each(($card) => {
  const texto = $card.text();
  expect(texto).to.include('Palmeiras');
  expect(texto).to.include('Brasileirão Série A');
});


  
// Valida se ao menos um card apareceu para evitar falso positivo
//cy.get('div.css-7mca6u', { timeout: 10000 }).should('be.visible');
//  valida que todos os p.chakra-text dentro dos cards são do Palmeiras
//cy.get('div.css-7mca6u').each(($card) => {
 // cy.wrap($card).should('contain.text', 'Palmeiras');
  //cy.wrap($card).should('contain.text', 'Brasileirão Série A');
  
//});

}
}

export default new filtros()