/// <reference types="cypress" />

import login from '../../../support/pages/Login/login';
import testeFavoritos from '../../../support/pages/Favoritos/testeFavoritos';
import testeFiltros from '../../../support/pages/Buscarpartidas/testeFiltros';

describe('Validar favoritar times e partidas', () => {
    beforeEach('realizar login com sucesso', () => {
        login.loginComSucesso();
    });

    it('Validar favoritar partidas', () =>{
        testeFiltros.multiFiltros();
        testeFavoritos.PartidasFavoritas();
        login.sair();
    });

    it('Validar favoritar times', () =>{
        testeFavoritos.timesFavoritos();
        login.sair();

    })
})