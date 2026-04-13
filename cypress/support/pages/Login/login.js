/// <reference types="cypress" />

const el = require('./elements').ELEMENTS;


class LoginPage{  

loginErrouser(username = Cypress.env('USER_LOGINERROUSER'),password = Cypress.env('USER_PASSWORDERROUSER')){
  
  cy.visit('https://www.kasa.live/');

// Erro de usuario no Login
cy.get(el.btnEntrar).click()
 cy.get(el.emailLogin)
    .type(username, { log:false})

  cy.get(el.senhaLogin)
    .type(password,{log:false})

    cy.get(el.btnLogar).click()

    cy.contains('Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.')
  .should('be.visible')


}


loginErroPassW(username = Cypress.env('USER_LOGINERROPASSW'),password = Cypress.env('USER_PASSWORDERROPASSW')){
  
  cy.visit('https://www.kasa.live/')

// Erro de senha no Login
cy.get(el.btnEntrar).click()
 cy.get(el.emailLogin)
    .type(username, { log:false})

  cy.get(el.senhaLogin)
    .type(password,{log:false})

    cy.get(el.btnLogar).click()

    cy.contains('Não foi possivel fazer o login! Verifique se o email e a senha estão corretos.')
  .should('be.visible')


}


loginull(username = Cypress.env('USER_LOGINULL'),password = Cypress.env('USER_PASSWORDNULL')){
  
  cy.visit('https://www.kasa.live/')

// Erro de senha no Login
cy.get(el.btnEntrar).click()
 cy.get(el.emailLogin)
    .type(username, { log:false})

  cy.get(el.senhaLogin)
    .type(password,{log:false})

    cy.get(el.btnLogar).click()

    cy.contains('Digite seu e-mail para continuar.').should('be.visible')  

  cy.contains('Digite sua senha para continuar.').should('be.visible')


}


  loginComSucesso (username = Cypress.env('USER_LOGIN'),password = Cypress.env('USER_PASSWORD')){

    // realiza a visita ao site para login
cy.visit('https://www.kasa.live/');

// realiza login com sucesso
cy.get(el.btnEntrar).click()
 cy.get(el.emailLogin)
    .type(username, { log:false})

  cy.get(el.senhaLogin)
    .type(password,{log:false})

    cy.get(el.btnLogar).click()

    cy.contains('teste01')
  .should('be.visible')

 }

    sair(){
         cy.contains('teste01').click()
         cy.get(el.btnSair).click()

 }

}



export default new LoginPage()