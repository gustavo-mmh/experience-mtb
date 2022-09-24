import { Cadastrar } from './cadastro/index.js';
import { login } from './login/index.js';
import { formLogin, loginDocumento, loginPais, loginPassword } from './ui.js';

//--- Cadastro -----------------------------------------------------------------
Cadastrar();
login(formLogin, loginDocumento, loginPassword, loginPais);

