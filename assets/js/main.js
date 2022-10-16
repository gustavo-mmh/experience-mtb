import { Cadastrar } from './cadastro/index.js';
import { login } from './login/index.js';
import { formLogin, loginDocumento, loginPais, loginPassword } from './ui.js';

//--- Cadastro -----------------------------------------------------------------
Cadastrar();
formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    login(loginDocumento, loginPassword, loginPais);
})

