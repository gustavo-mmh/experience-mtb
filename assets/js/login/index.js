import { getCollection, getExperienceMtbdocsID } from "../firebase/experience-mtb.js";
import { statusLogin } from "../ui.js";
export async function login(form, loginDocumento, loginPassword, loginPais) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        // Previne a submissão do formulário:
        let documentoValue = loginDocumento.value
        let senhaValue = loginPassword.value
        let pais = loginPais.value
        let id = pais + documentoValue
        let docs = await getExperienceMtbdocsID()

        if (docs.includes(id) == true) {
            let docsID = await getCollection(documentoValue, pais)
            let documentoValid = {
                pais: '',
                documento: '',
                senha: ''
            }
            docsID.forEach(item => {
                if (documentoValue == item.documento && senhaValue == item.senha) {

                    documentoValid = {
                        pais: item.pais,
                        documento: item.documento,
                        senha: item.senha
                    }

                }
            })

            if (documentoValue == documentoValid.documento && senhaValue == documentoValid.senha) {
                window.location.href = './qwer/'
                let mathRandom = Math.random().toString(16).substr(2)
                let token = mathRandom + mathRandom
                localStorage.setItem('token', token,)
                localStorage.setItem('documentoLogado', JSON.stringify(documentoValue))
                localStorage.setItem('paislogado', JSON.stringify(pais))
            } else {
                loginDocumento.setAttribute('style', 'border-color: red')
                loginPassword.setAttribute('style', 'border-color: red')
                statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
                loginDocumento.focus()
            }

        }
        else {
            loginDocumento.setAttribute('style', 'border-color: red')
            loginPassword.setAttribute('style', 'border-color: red')
            statusLogin.innerHTML = 'Documento ou Senha Inválido(a)'
            loginDocumento.focus()
        }

    });
}
export async function loginCad(loginDocumento, loginPassword, loginPais) {
    let documentoValue = loginDocumento.value
    let senhaValue = loginPassword.value
    let pais = loginPais.value
    let id = pais + documentoValue
    let docs = await getExperienceMtbdocsID()

    if (docs.includes(id) == true) {
        let docsID = await getCollection(documentoValue, pais)
        let documentoValid = {
            pais: '',
            documento: '',
            senha: ''
        }
        docsID.forEach(item => {
            if (documentoValue == item.documento && senhaValue == item.senha) {
                documentoValid = {
                    pais: item.pais,
                    documento: item.documento,
                    senha: item.senha
                }
            }
        })

        if (documentoValue == documentoValid.documento && senhaValue == documentoValid.senha) {
            window.location.href = './qwer/'
            let mathRandom = Math.random().toString(16).substr(2)
            let token = mathRandom + mathRandom
            localStorage.setItem('token', token,)
            localStorage.setItem('documentoLogado', JSON.stringify(documentoValue))
            localStorage.setItem('paislogado', JSON.stringify(pais))
        } else {
            console.log('erro')
        }
    }
    else {
        console.log('erro')
    }

}
