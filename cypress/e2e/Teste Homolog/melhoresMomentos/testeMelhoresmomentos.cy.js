/// <reference types="cypress" />

import login from '../../../support/pages/Login/login';
import testeFavoritos from '../../../support/pages/Favoritos/testeFavoritos';
import testeFiltros from '../../../support/pages/Melhoresmomentos/testeMelhoresmomentos';
import testeMelhoresmomentos from '../../../support/pages/Melhoresmomentos/testeMelhoresmomentos';

describe('Validar favoritar times e partidas', () => {
    beforeEach('realizar login com sucesso', () => {
        login.loginComSucesso();
    });

    it('Validar filtro time em melhores momentos', () =>{
        testeMelhoresmomentos.melhoresMomentosFiltroTimes();
        
        login.sair();
    
    })
})