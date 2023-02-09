import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { BtnComIcone, btnDowload, btnDowloadUpd, btnEditar, btnFechaModal, btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, cutName, dataLote, divDownloadCard, divEditarInsc, download, fechaModal, formatDate, formComprovante, lineBroken, linkDownload, linkDownloadUpd, loading, nomeLote, precoLoteBr, txtComprovante, txtDesconto } from '../../../assets/js/ui.js';
import { formaDePagamentoPais } from "../../../assets/js/validaForm.js";
import { Canvas } from "./canvas.js";
import { createComprovante, updateComprovante } from "./participante-upd.js";

function enableLoading() {
    loading.hidden = false;
}
function checkLogin(token) {

    let tokenEmpty = token === null
    if (tokenEmpty) {
        alert('Você precisa estar logado para acessar essa página')
        window.location.href = '../index.html'
    }
}
function disableLoading() {
    loading.hidden = true
}
function logout() {

    btnLogout.addEventListener('click', () => {
        sessionStorage.clear()
        window.location.href = '../index.html'
    })
}
function closeModal() {
    btnFechaModal.addEventListener('click', () => {
        fechaModal("#modalCard")
    });
}
function ChangeColorStatusPayment(classStatus) {
    cardStatus.classList.add(`text-${classStatus}`);
}
async function createListCollection(docs) {
    docs.forEach(inscrito => {
        let modalidadeRacing = inscrito.modalidade === "Racing"
        let modalidadeChallenge = inscrito.modalidade === "Challenge"
        cardNome.innerHTML = inscrito.nome
        cardDocumento.innerHTML = inscrito.documento
        cardEmail.innerHTML = inscrito.email
        cardWhatsApp.innerHTML = inscrito.whatsapp
        let data_brasileira = inscrito.dataNascimento.split('-').reverse().join('/');
        cardDataNascimento.innerHTML = data_brasileira
        cardPais.innerHTML = inscrito.pais
        cardCidade.innerHTML = inscrito.cidade
        cardModalidade.innerHTML = inscrito.modalidade
        if (modalidadeRacing) cardCategoria.innerHTML = inscrito.modalidadeRacing
        else if (modalidadeChallenge) cardCategoria.innerHTML = inscrito.modalidadeChallenge
        cardNomeEquipe.innerHTML = inscrito.nomeEquipe
        cardTamanhoCamiseta.innerHTML = inscrito.tamanhoCamiseta
        cardStatus.innerHTML = inscrito.status
    });
}
async function createCardImage(fotoCard) {
    const storage = getStorage(app);
    let fotoCardNotNull = fotoCard != ""
    if (fotoCardNotNull) getUrlImage(storage, fotoCard, cardFoto)
    else cardFoto.src = './assets/images/fotocard.png'
    let photoSrc = cardFoto.getAttribute("src")
    return photoSrc
}
async function loadSrcCardImage() {
    cardFoto.addEventListener('load', () => {
        console.log('a')
    })
}
function enableDivDownloadCard() {
    divDownloadCard.hidden = false
}

async function checkDeadlinetoEdit(dataFimEditar) {
    let partesData = dataFimEditar.split("/");
    let data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    let dataLimite = new Date(("2023, 11, 21"));
    let dataMaior
    if (data > dataLimite) dataMaior = dataFimEditar.split('/').reverse().join('/')
    else dataMaior = formatDate(dataLimite, 'aaaa/mm/dd')
    document.querySelector("#txtDataLimite").innerHTML = `Você tem até ${dataMaior.split('/').reverse().join('/')} <br/> para editar as informações`
    return dataMaior
}
async function disableBtnEdit(dataLimite) {
    let hoje = formatDate(new Date(), 'aaaa/mm/dd')
    if (hoje > dataLimite) {
        divEditarInsc.style = 'display:none !important'
        btnEditar.classList.add('disabled')
    }
}

async function checkStatus(status) {
    switch (status) {
        case 'Confirmado':
            await statusConfirmado()
            break;
        case 'Em Análise':
            await statusEmAnalise()
            break;
        default:
            await statusPendente()
    }
}
function removeDivFormComprovante() {
    let node = formComprovante
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}
async function statusConfirmado() {
    ChangeColorStatusPayment('success')
    disableMsgComprovante()
    removeDivFormComprovante()
}
function displayMsgComprovante() {
    txtDesconto.innerHTML = `<b>${nomeLote}</b> (${dataLote}) ${precoLoteBr}`
}
async function disableMsgComprovante() {
    document.querySelector("#txtMsgComprovante").style.display = "none";
    txtComprovante.classList.add('disabled')
}
async function statusEmAnalise() {
    ChangeColorStatusPayment('warning')
}
async function statusPendente() {
    ChangeColorStatusPayment('danger')
}
function createFormOfPayment() {
    const memeSelector = document.querySelector("#memes-list")
    let newOption = document.createElement("option")
}
function checkPais(pais) {
    switch (pais) {
        case 'Brasil':
            createFormOfPayment()
            break;
        case 'Uruguai':
            break;
        case 'Argentina':
            break;
        default:
            alert('Erro ao selecionar o seu País')
            break;
    }

}

async function main() {
    let token = sessionStorage.getItem('token')
    let documento = JSON.parse(sessionStorage.getItem('documentoLogado'))
    let pais = JSON.parse(sessionStorage.getItem('paislogado'))
    enableLoading()
    checkLogin(token)
    logout()
    closeModal()
    const inscrito = await getCollection(documento, pais)
    let statusInscrito = inscrito[0].status
    let photoInscrito = inscrito[0].fotoCard
    let dataLimite = inscrito[0].dataFimEdit
    let paisInscrito = inscrito[0].pais
    await createListCollection(inscrito)
    await checkStatus(statusInscrito)
    await createCardImage(photoInscrito)
    await loadSrcCardImage()
    // console.log(loadSrcCardImage());
    const dataMaior = await checkDeadlinetoEdit(dataLimite)
    await disableBtnEdit(dataMaior)
    displayMsgComprovante()
    disableLoading()
}
main()
