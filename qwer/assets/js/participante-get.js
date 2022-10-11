import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from "../../../assets/js/firebase/experience-mtb.js";
import { checkboxFoto, checkboxSenha, divChallenge, divFoto, divRacing, divSenha, formUpdate, imgThumbnail, txtCategoria, txtCidade, txtConfirmaSenha, txtDataNascimento, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../../../assets/js/ui.js';
import { bloqueio, bloqueioSenha, calculaIdade, filtraCategoria, filtraCategoriaSexo, validatePassword, VerificaModalidade } from "../../../assets/js/validaForm.js";
export let img
export async function getParticipante() {
    txtModalidade.addEventListener('change', (e) => {
        let txt = e.target.value
        VerificaModalidade(txt)
    })
    checkboxFoto.addEventListener('click', () => {
        bloqueio(divFoto, txtFotoCard)
    })
    checkboxSenha.addEventListener('click', () => {
        bloqueioSenha(divSenha, txtSenha, txtConfirmaSenha)
    })
    txtSenha.addEventListener('keyup', () => {
        validatePassword(formUpdate, txtConfirmaSenha, txtSenha)
    })
    txtConfirmaSenha.addEventListener('keyup', () => {
        validatePassword(formUpdate, txtConfirmaSenha, txtSenha)
    })
    let documento = JSON.parse(sessionStorage.getItem('documentoLogado'))
    let pais = JSON.parse(sessionStorage.getItem('paislogado'))
    const storage = getStorage(app);

    let docs = await getCollection(documento, pais)
    docs.forEach(item => {
        txtPais.value = item.pais
        txtNome.value = item.nome
        txtDocumento.value = item.documento
        txtDataNascimento.value = item.dataNascimento
        txtEmail.value = item.email
        txtCidade.value = item.cidade
        txtWhatsApp.value = item.whatsapp
        txtCategoria.value = item.categoria
        // REMOVER ESTE COMENTARIO
        if (txtDataNascimento != null) {
            let idade = calculaIdade(txtDataNascimento.value)
            filtraCategoria(idade)
            let cat = txtCategoria.value
            filtraCategoriaSexo(cat)
        }
        txtModalidade.value = item.modalidade
        if (item.modalidade == "Racing") {
            divRacing.hidden = false
            txtModalidadeRacing.value = item.modalidadeRacing
            divChallenge.hidden = true
        } else {
            divChallenge.hidden = false
            txtModalidadeChallenge.value = item.modalidadeChallenge
            divRacing.hidden = true
        }
        txtNomeEquipe.value = item.nomeEquipe
        txtTamanhoCamiseta.value = item.tamanhoCamiseta
        img = item.fotoCard
    })
    if (img != "") {
        getUrlImage(storage, img, imgThumbnail)
    } else {
        imgThumbnail.src = './assets/images/fotocard.png'
    }
}