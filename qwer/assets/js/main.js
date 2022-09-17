import { getStorage } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js";
import { getUrlImage } from "../../../assets/js/cadastro/storage/urlImg.js";
import app from "../../../assets/js/firebase/app.js";
// import { getUrlImage } from '../../../assets/js/cadastro/storage/index.js';
// import app from "../../../assets/js/firebase/app.js";

import { getCollection } from '../../../assets/js/firebase/experience-mtb.js';
import { btnLogout, cardCategoria, cardCidade, cardDataNascimento, cardDocumento, cardEmail, cardFoto, cardModalidade, cardNome, cardNomeEquipe, cardPais, cardStatus, cardTamanhoCamiseta, cardWhatsApp, divComprovante, divPagamento, formComprovante, txtComprovante } from '../../../assets/js/ui.js';
import { createComprovante, updateComprovante } from "./participante-upd.js";
if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../../index.html'
}
let documento = JSON.parse(localStorage.getItem('documentoLogado'))
const storage = getStorage(app);
let img
let doc
let pais
let docs = await getCollection(documento)
docs.forEach(item => {
    doc = item.documento
    pais = item.pais
    cardNome.innerHTML = item.nome
    cardDocumento.innerHTML = doc
    cardEmail.innerHTML = item.email
    cardWhatsApp.innerHTML = item.whatsapp
    cardDataNascimento.innerHTML = item.dataNascimento
    pais = cardPais.innerHTML = pais
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
    if (item.status == 'Pendente') {
        cardStatus.classList.add('text-danger');
        cardStatus.innerHTML = item.status
        // let inputComprovante = document.createElement('input');
        // inputComprovante.type = "file"
        // inputComprovante.accept = "image/*"
        // inputComprovante.id = "txtComprovante"
        // inputComprovante.classList.add("form-control")
        // divComprovante.appendChild(inputComprovante)
        let btn = document.createElement('button')
        let iconCheck = document.createElement('i');
        btn.type = "submit"
        btn.classList.add('btn')
        btn.classList.add('btn-outline-secondary')
        btn.id = "btnCadastrar"
        iconCheck.classList.add('fa')
        iconCheck.classList.add('fa-check')
        iconCheck.classList.add('fa-fw')
        let txt = document.createTextNode("Enviar");
        btn.appendChild(iconCheck);
        btn.appendChild(txt);
        document.querySelector('#envio').appendChild(btn)

        let a = document.createElement('a');
        let icon = document.createElement('i');
        icon.classList.add('fa')
        icon.classList.add('fa-cart-plus')
        icon.classList.add('fa-fw')
        let link = document.createTextNode("Efetuar Pagamento");
        a.appendChild(icon);
        a.appendChild(link);
        a.title = " Efetuar Pagamento";
        a.target = "_blank"
        a.href = "https://www.mercadopago.com.br/checkout/v1/payment/redirect/?source=link&preference-id=379326377-71379965-32e5-4d24-b651-a4195dfbad30&router-request-id=7fd022fb-d59b-4d8e-8727-f87b600cb28d";
        a.classList.add('btn')
        a.classList.add('btn-outline-success')
        divPagamento.appendChild(a);
        let ID = pais + doc
        createComprovante(ID)
    }
    else if (item.status == 'Em Analise') {
        cardStatus.classList.add('text-warning');
        cardStatus.innerHTML = item.status
        // let inputComprovante = document.createElement('input');
        // inputComprovante.type = "file"
        // inputComprovante.accept = "image/*"
        // inputComprovante.id = "txtComprovante"
        // inputComprovante.classList.add("form-control")
        // divComprovante.appendChild(inputComprovante)
        let btn = document.createElement('button')
        let iconCheck = document.createElement('i');
        btn.type = "submit"
        btn.classList.add('btn')
        btn.classList.add('btn-outline-secondary')
        btn.id = "btnCadastrar"
        iconCheck.classList.add('fa')
        iconCheck.classList.add('fa-check')
        iconCheck.classList.add('fa-fw')
        let txt = document.createTextNode("Enviar");
        btn.appendChild(iconCheck);
        btn.appendChild(txt);
        document.querySelector('#envio').appendChild(btn)
        let a = document.createElement('a');
        let icon = document.createElement('i');
        icon.classList.add('fa')
        icon.classList.add('fa-cart-plus')
        icon.classList.add('fa-fw')
        let link = document.createTextNode("Efetuar Pagamento");
        a.appendChild(icon);
        a.appendChild(link);
        a.title = " Efetuar Pagamento";
        a.target = "_blank"
        a.href = "https://www.mercadopago.com.br/checkout/v1/payment/redirect/?source=link&preference-id=379326377-71379965-32e5-4d24-b651-a4195dfbad30&router-request-id=7fd022fb-d59b-4d8e-8727-f87b600cb28d";
        a.classList.add('btn')
        a.classList.add('btn-outline-success')
        divPagamento.appendChild(a);
        let ID = pais + doc
        let img2 = item.comprovantePagamento;
        setTimeout(function () {
            updateComprovante(ID, img2)
        }, 4000);
    }
    else {
        cardStatus.classList.add('text-success');
        cardStatus.innerHTML = item.status
        formComprovante.style.display = "none";
        txtComprovante.classList.add('disabled')
    }
})
getUrlImage(storage, img, cardFoto)
btnLogout.addEventListener('click', () => {
    localStorage.clear()
    window.location.href = '../index.html'
})
