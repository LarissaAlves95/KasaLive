/// <reference types="cypress" />


import login from '../../../support/pages/Login/login';

describe('Login', () => {
    
    it('realizar login com usuario incorreto', () => {
        login.loginErrouser();
    });

     it('realizar login com senha incorreta', () => {
        login.loginErroPassW();
     });

       it('realizar login com usuario e senha em branco', () => {
        login.loginull();
    });
    
    it('realizar login com sucesso', () => {
        login.loginComSucesso();
        login.sair();
    });


});