import { Cadastrar } from './cadastro/index.js';
import { login } from './login/index.js';
import { dataHoje, dataLimiteLote, dataLote, divLote, formLogin, loginDocumento, loginPais, loginPassword, nomeLote, precoLoteBr, precoLoteUy } from './ui.js';

//--- Cadastro -----------------------------------------------------------------
// if (dataHoje >= dataLimiteLote) {
divLote.innerHTML = `<b>${nomeLote} </b> (${dataLote}) ${precoLoteBr} BR ou ${precoLoteUy} UY`
// } else {
// divLote.innerHTML = `<b>Lote Sprint </b> (de 07.10 à 21.10) R$135,00 BR ou $1350,00 UY`
// }
Cadastrar();
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    login(loginDocumento, loginPassword, loginPais);
})

