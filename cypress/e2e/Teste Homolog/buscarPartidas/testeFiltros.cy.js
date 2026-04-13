/// <reference types="cypress" />

import login from '../../../support/pages/Login/login';
import testeFiltros from '../../../support/pages/Buscarpartidas/testeFiltros';

describe('Validar filtros - Buscar Partidas', () => {
    before('realizar login com sucesso', () => {
        login.loginComSucesso();
    });


it('Validar Multi filtros', () =>{
testeFiltros.multiFiltros();


})

})