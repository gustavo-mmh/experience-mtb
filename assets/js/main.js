import { Cadastrar } from './cadastro/index.js';
import { login } from './login/index.js';
import { dataLote, divLote, formLogin, loginDocumento, loginPais, loginPassword, nomeLote, precoLoteBr, precoLoteUy } from './ui.js';

//--- Cadastro -----------------------------------------------------------------
divLote.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteBr} BR ou ${precoLoteUy} UY`
Cadastrar();
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    login(loginDocumento, loginPassword, loginPais);
})

