import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { BtnComIcone, btnDowload, btnDowloadUpd, btnEditar, btnFechaModal, btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, cutName, divDownloadCard, divEditarInsc, download, fechaModal, formatDate, formComprovante, lineBroken, linkDownload, linkDownloadUpd, loading, txtComprovante } from '../../../assets/js/ui.js';
import { formaDePagamentoPais } from "../../../assets/js/validaForm.js";
import { Canvas } from "./canvas.js";
import { createComprovante, updateComprovante } from "./participante-upd.js";
if (sessionStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'
}
btnLogout.addEventListener('click', () => {
    sessionStorage.clear()
    window.location.href = '../index.html'
})
btnFechaModal.addEventListener('click', () => {
    fechaModal("#modalCard")
});
loading.hidden = false
setTimeout(function () {
    loading.hidden = true
}, 2000);
debugger
let documento = JSON.parse(sessionStorage.getItem('documentoLogado'))
let pais = JSON.parse(sessionStorage.getItem('paislogado'))
const storage = getStorage(app);
let dataFimEditar
let img
let doc
let itemPais
let docs = await getCollection(documento, pais)

docs.forEach(item => {
    doc = item.documento
    itemPais = item.pais
    dataFimEditar = item.dataFimEdit
    console.log('a:', dataFimEditar);
    cardNome.innerHTML = item.nome
    cardDocumento.innerHTML = doc
    cardEmail.innerHTML = item.email
    cardWhatsApp.innerHTML = item.whatsapp
    let data_brasileira = item.dataNascimento.split('-').reverse().join('/');
    cardDataNascimento.innerHTML = data_brasileira
    cardPais.innerHTML = itemPais
    cardCidade.innerHTML = item.cidade
    cardModalidade.innerHTML = item.modalidade
    if (item.modalidade == "Racing") {
        cardCategoria.innerHTML = item.modalidadeRacing
    } else if (item.modalidade == "Challenge") {
        cardCategoria.innerHTML = item.modalidadeChallenge
    }
    cardNomeEquipe.innerHTML = item.nomeEquipe
    cardTamanhoCamiseta.innerHTML = item.tamanhoCamiseta
    img = item.fotoCard


    // ------------------------------------------------
    if (item.status == 'Confirmado') {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
        document.querySelector("#txtMsgComprovante").style.display = "none";
        txtComprovante.classList.add('disabled')
        if (item.fotoCard != null) {
            cardFoto.addEventListener('load', () => {
                let fotoModalidade, x, y
                let nomeCategoria
                let corCategoria
                if (item.modalidade == "Racing") {
                    fotoModalidade = 'assets/images/3.png'
                    if (item.modalidadeRacing == "Dama Promocional") {
                        nomeCategoria = "DAMAS PROMO"
                    } else {
                        nomeCategoria = item.modalidadeRacing.toUpperCase()
                    }
                    corCategoria = "white"
                    x = 365
                    y = 81
                } else if (item.modalidade == "Challenge") {
                    fotoModalidade = 'assets/images/4.png'
                    if (item.modalidadeChallenge == "Soft") corCategoria = "#86d76d"
                    else if (item.modalidadeChallenge == "Light") corCategoria = "#5ab9eb"
                    else if (item.modalidadeChallenge == "Hard") corCategoria = "#f31c19"
                    nomeCategoria = item.modalidadeChallenge.toUpperCase()
                    x = 405
                    y = 82
                }

                let nome = item.nome.toUpperCase()
                if (nome.length > 20) nome = cutName(nome)
                let pais = item.pais.toUpperCase()
                let cidade = item.cidade.toUpperCase()
                let equipe = item.nomeEquipe.toUpperCase()
                let equipe2 = ''
                let nomeEquipe = lineBroken(equipe, equipe2)
                if (equipe.length > 40) equipe = nomeEquipe.text, equipe2 = nomeEquipe.text2
                let foto = cardFoto.getAttribute("src")
                let cardMTB = {
                    fotoParticipante: foto,
                    fotoModalidade: fotoModalidade,
                    Categoria: {
                        nomeCategoria: nomeCategoria,
                        corCategoria: corCategoria,
                        eixoX: x,
                        eixoY: y,
                    },
                    nomeParticipante: nome,
                    pais: pais,
                    cidade: cidade,
                    equipe: equipe,
                    equipe2: equipe2,
                }
                divDownloadCard.hidden = false
                Canvas(cardMTB)
                btnDowload.addEventListener('click', () => {
                    download(linkDownload)
                })
                btnDowloadUpd.addEventListener('click', () => {
                    download(linkDownloadUpd)
                })
            })
        }
    }
    // ---------------------EM ANALISE ----------------------------------
    else if (item.status == 'Em Analise') {
        cardStatus.classList.add('text-warning');
        cardStatus.innerHTML = item.status
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        formaDePagamentoPais(itemPais)
        let ID = itemPais + doc
        let img2 = item.comprovantePagamento;
        updateComprovante(ID, img2)
    }
    else {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status;
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        formaDePagamentoPais(itemPais)
        let ID = itemPais + doc
        createComprovante(ID)
    }

})
console.log(dataFimEditar);
var partesData = dataFimEditar.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
var dataLimite = new Date(("2022, 11, 15"));
let dataMaior
if (data > dataLimite) {
    dataMaior = dataFimEditar
} else {
    dataMaior = formatDate(dataLimite, 'dd/mm/aaaa')
}
document.querySelector("#txtDataLimite").innerHTML = `Você tem até ${dataMaior} <br/> para editar as informações`
if (new Date() > dataMaior) {
    console.log(partesData)
    divEditarInsc.style = 'display:none !important'
    btnEditar.classList.add('disabled')
}
if (img != "") {
    getUrlImage(storage, img, cardFoto)
} else {
    cardFoto.src = './assets/images/fotocard.png'
}
