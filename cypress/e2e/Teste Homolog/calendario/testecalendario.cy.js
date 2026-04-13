/// <reference types="cypress" />

import login from '../../../support/pages/Login/login';
import testeFiltro from '../../../support/pages/Buscarpartidas/testeFiltros'
import testeCalendario from '../../../support/pages/Calendario/testeCalendario';



describe('Validar favoritar times e partidas', () => {
    beforeEach('realizar login com sucesso', () => {
        login.loginComSucesso();
    });

    it('Validar filtro time em melhores momentos', () =>{
        testeFiltro.multiFiltros();
        testeCalendario.addPartidaCalendario();
        
        //login.sair();
    
    })
})