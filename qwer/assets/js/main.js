import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { BtnComIcone, btnCopiar, btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, copiarTexto, formComprovante, txtComprovante, txtFormadePagamento } from '../../../assets/js/ui.js';
import { BotoesPorNacionalidade, VerificaFormaPagamento, VerificaFormaPagamento2 } from "../../../assets/js/validaForm.js";
import { createComprovante, updateComprovante } from "./participante-upd.js";
if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../../index.html'
}
let documento = JSON.parse(localStorage.getItem('documentoLogado'))
let pais = JSON.parse(localStorage.getItem('paislogado'))
const storage = getStorage(app);
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
    cardDataNascimento.innerHTML = item.dataNascimento
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

    if (item.status == 'Pago') {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
        txtComprovante.classList.add('disabled')
    }
    else if (item.status == 'Em Analise') {
        cardStatus.classList.add('text-warning');
        cardStatus.innerHTML = item.status
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLimkPagamento, btnPix)
            })
        } else if (itemPais == 'Uruguai') {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLimkPagamento)
            })

        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLimkPagamento)
            })
        }
        let ID = itemPais + doc
        let img2 = item.comprovantePagamento;
        setTimeout(function () {
            updateComprovante(ID, img2)
        }, 5000);
    }
    else {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status;
        BtnComIcone("submit", 'btn-outline-secondary', "btnCadastrar", 'fa', 'fa-check', "Enviar", '#envio')
        if (itemPais == 'Brasil') {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            let btnPix = document.querySelector("#BtnPix")
            btnPix.hidden = true
            btnPix.addEventListener('click', () => {
                $("#modalPix").modal("show");
            });
            btnCopiar.addEventListener('click', () => {
                copiarTexto()
            })
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento2(btnLimkPagamento, btnPix)
            })
        } else if (itemPais == 'Uruguai') {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLimkPagamento)
            })

        } else {
            BotoesPorNacionalidade(itemPais)
            let btnLimkPagamento = document.querySelector("#btnLimkPagamento")
            btnLimkPagamento.hidden = true
            txtFormadePagamento.value
            txtFormadePagamento.addEventListener('change', () => {
                VerificaFormaPagamento(btnLimkPagamento)
            })
        }
        let ID = itemPais + doc
        createComprovante(ID)
    }
})
if (img != "") {
    getUrlImage(storage, img, cardFoto)
} else {
    cardFoto.src = './assets/images/fotocard.png'
}
btnLogout.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = '../index.html'
})
