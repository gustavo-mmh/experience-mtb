import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { BtnComIcone, btnCopiar, btnEditar, btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, copiarTexto, divEditarInsc, formComprovante, loading, txtComprovante, txtFormadePagamento } from '../../../assets/js/ui.js';
import { BotoesPorNacionalidade, VerificaFormaPagamento, VerificaFormaPagamento2 } from "../../../assets/js/validaForm.js";
import { createComprovante, updateComprovante } from "./participante-upd.js";
if (sessionStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'
}
btnLogout.addEventListener('click', () => {
    sessionStorage.clear()
    window.location.href = '../index.html'
})
loading.hidden = false
setTimeout(function () {
    loading.hidden = true
}, 2000);
let documento = JSON.parse(sessionStorage.getItem('documentoLogado'))
let pais = JSON.parse(sessionStorage.getItem('paislogado'))
const storage = getStorage(app);
let dataInscricao
let dataFimEditar
let img
let doc
let itemPais
let docs = await getCollection(documento, pais)
docs.forEach(item => {
    doc = item.documento
    itemPais = item.pais
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
    } else {
        cardCategoria.innerHTML = item.modalidadeChallenge
    }
    cardNomeEquipe.innerHTML = item.nomeEquipe
    cardTamanhoCamiseta.innerHTML = item.tamanhoCamiseta
    img = item.fotoCard
    dataInscricao = item.dataInscricao
    dataFimEditar = item.dataFimEdit
    document.querySelector("#txtDataLimite").innerHTML = `Você tem até ${dataFimEditar} <br/> para editar as informações`
    if (item.status == 'Confirmado') {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
        document.querySelector("#txtMsgComprovante").style.display = "none";
        txtComprovante.classList.add('disabled')
    }
    else if (item.status == 'Em Analise') {
        cardStatus.classList.add('text-warning');
        cardStatus.innerHTML = item.status
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            document.querySelector("#txtDesconto").innerHTML = `<b>2° Lote </b> (de 07.10 à 31.10) R$135,00`
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            // let btnUy = document.querySelector("#btnPagamentoUy")
            btnLinkPagamento.hidden = true
            // btnUy.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnPix, p)
            })
        } else if (itemPais == 'Uruguai') {
            document.querySelector("#txtDesconto").innerHTML = `<b>2° Lote </b> (de 07.10 à 21.10) $1350,00`
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            // let btnBr = document.querySelector("#btnPagamentoBr")
            btnLinkPagamento.hidden = true
            // btnBr.hidden = true
            let btnMidinero = document.querySelector("#BtnMidinero")
            btnMidinero.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnMidinero.addEventListener('click', () => {
                $("#modalMidinero").modal("show");
            });
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnMidinero, p)
            })

        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            // let btnBr = document.querySelector("#btnPagamentoBr")
            // let btnUy = document.querySelector("#btnPagamentoUy")
            // btnBr.hidden = true
            // btnUy.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLinkPagamento)
            })
        }
        let ID = itemPais + doc
        let img2 = item.comprovantePagamento;
        updateComprovante(ID, img2)
    }
    else {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status;
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            document.querySelector("#txtDesconto").innerHTML = `<b>2° Lote </b> (de 07.10 à 21.10) R$135,00`
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnPix, p)
            })
        } else if (itemPais == 'Uruguai') {
            document.querySelector("#txtDesconto").innerHTML = `<b>2° Lote </b> (de 07.10 à 21.10) $1350,00`
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            let btnMidinero = document.querySelector("#BtnMidinero")
            btnMidinero.hidden = true
            let p = document.querySelector("#pBicicletaria")
            p.hidden = true
            btnMidinero.addEventListener('click', () => {
                $("#modalMidinero").modal("show");
            });
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLinkPagamento, btnMidinero, p)
            })
        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLinkPagamento = document.querySelector("#btnLinkPagamento")
            btnLinkPagamento.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLinkPagamento)
            })
        }
        let ID = itemPais + doc
        createComprovante(ID)
    }
})
var partesData = dataFimEditar.split("/");
var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
var dataLimite = new Date(("2022, 11, 21"));
if (data < new Date() || new Date() > dataLimite) {
    divEditarInsc.style = 'display:none !important'
    btnEditar.classList.add('disabled')
}
if (img != "") {
    getUrlImage(storage, img, cardFoto)
} else {
    cardFoto.src = './assets/images/fotocard.png'
}
