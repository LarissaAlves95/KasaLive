/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;
import testeFiltros from '../Buscarpartidas/testeFiltros';

class favoritosTP {  

PartidasFavoritas(){
  cy.get(el.btnLista).click()
  cy.get(el.btnFavPart)
  .first()
  .click()
  cy.get(el.btnFavoritos).click()

  cy.get('div.css-7mca6u', { timeout: 20000 }).should('contain.text', 'Palmeiras');
  cy.get('div.css-7mca6u').then(($cards) => {
  const numeroDeCards = $cards.length;

  for (let i = 0; i < numeroDeCards; i++) {  
    cy.get('div.css-7mca6u').eq(i).should('contain.text', 'Palmeiras');
    cy.get('div.css-7mca6u').eq(i).should('contain.text', 'Palmeiras');}

  
});

}

timesFavoritos(){
  cy.get(el.btnFavoritos).click()
  cy.wait(1000)
  cy.get(el.btnLista).click()
  cy.get(el.btnFavPart).click()
  cy.contains('Sem resultados de busca para partidas ao vivo')
  .should('be.visible')
  cy.get(el.btnFavorTime).click()
  cy.get(el.campoPesqFavTime).type("Cuiabá")
  cy.contains('button', 'Add')
  .first()
  .click()
  cy.get(el.btnConcluir).click()

  cy.get('div.css-eelx7y').then(($cards) => {
  const numeroDeCards = $cards.length;

  for (let i = 0; i < numeroDeCards; i++) {  
    cy.get('div.css-eelx7y').eq(i).should('contain.text', 'Cuiabá');}

  cy.get(el.btnEditar, { timeout: 10000 })
  .should('be.visible')
  .click()
  cy.contains('p', 'Cuiabá') 
  .parent()                     
  .find('button.chakra-button') 
  .click();
 cy.get(el.btnSalvar).click()
cy.contains('Sem resultados de busca para partidas ao vivo')
  .should('be.visible')



})

}}

export default new favoritosTP()