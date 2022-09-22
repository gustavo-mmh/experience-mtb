import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import app from "../../../assets/js/firebase/app.js";
import { bloqueio, bloqueioSenha, validatePassword, VerificaModalidade } from "../../../assets/js/validaForm.js";
import { getCollection } from "../../../assets/js/firebase/experience-mtb.js";
import { checkboxFoto, checkboxSenha, divFoto, divSenha, formUpdate, imgThumbnail, txtCidade, txtConfirmaSenha, txtDataNascimento, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../../../assets/js/ui.js';
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
export let img
export async function getParticipante() {
    txtModalidade.addEventListener('change', () => {
        VerificaModalidade()
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
    let documento = JSON.parse(localStorage.getItem('documentoLogado'))
    const storage = getStorage(app);

    let docs = await getCollection(documento)
    docs.forEach(item => {
        txtPais.value = item.pais
        txtNome.value = item.nome
        txtDocumento.value = item.documento
        txtDataNascimento.value = item.dataNascimento
        txtEmail.value = item.email
        txtCidade.value = item.cidade
        txtWhatsApp.value = item.whatsapp
        txtModalidade.value = item.modalidade
        if (item.modalidade == "Racing") {
            txtModalidadeRacing.value = item.modalidadeRacing
        } else {
            txtModalidadeChallenge.value = item.modalidadeChallenge
        }
        txtNomeEquipe.value = item.nomeEquipe
        txtTamanhoCamiseta.value = item.tamanhoCamiseta
        img = item.fotoCard
    })
    getUrlImage(storage, img, imgThumbnail)
}