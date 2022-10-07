import { btnCadastro, BtnComIcone, checkboxTermos, divChallenge, divPagamento, divRacing, LinkComIcone, Paragrafo, txtFormadePagamento, txtModalidadeChallenge, txtModalidadeRacing } from "./ui.js";
let idLinkPagamento = 'btnLinkPagamento';
let faIconPagamento = 'fa';
let classeIconLinkPagamento = 'fa-credit-card';

// export function mascara(o, f) {
//     setTimeout(function () {
//         var v = f(o.value);
//         if (v != o.value) {
//             o.value = v;
//         }
//     }, 1);
// }
// export function mascaraBR(v) {
//     var r = v.replace(/\D/g, "");
//     r = r.replace(/^0/, "");
//     if (r.length > 10) {
//         r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
//     } else if (r.length > 5) {
//         r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
//     } else if (r.length > 2) {
//         r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
//     } else {
//         r = r.replace(/^(\d*)/, "($1");
//     }
//     return r;
// }
// export function mascaraUY(v) {
//     // +598 92 189 492
//     var r = v.replace(/\D/g, "");
//     r = r.replace(/^0/, "");
//     if (r.length > 10) {
//         r = r.replace(/^(\d\d)(\d{3})(\d{3}).*/, "$1 $2-$3");
//     } else if (r.length > 5) {
//         r = r.replace(/^(\d\d)(\d{3})(\d{0,3}).*/, "$1 $2-$3");
//     } else if (r.length > 2) {
//         r = r.replace(/^(\d\d)(\d{0,5})/, "$1 $2");
//     } else {
//         r = r.replace(/^(\d*)/, "$1");
//     }
//     return r;
// }
// export function mascaraAR(v) {
//     var r = v.replace(/\D/g, "");
//     r = r.replace(/^0/, "");
//     if (r.length > 10) {
//         r = r.replace(/^(\d\d)(\d{4})(\d{4}).*/, "$1 $2-$3");
//     } else if (r.length > 5) {
//         r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "$1 $2-$3");
//     } else if (r.length > 2) {
//         r = r.replace(/^(\d\d)(\d{0,5})/, "$1 $2");
//     } else {
//         r = r.replace(/^(\d*)/, "$1");
//     }
//     return r;
// }
// export function removeHandler() {
//     txtWhatsApp.removeEventListener("keyup", () => { mascara(txtWhatsApp, mascaraUY) });
// }
// export const paisWpp = (m) => {
//     txtWhatsApp.addEventListener('keyup', () => { mascara(txtWhatsApp, m) })
//     txtWhatsApp.addEventListener('blur', () => { mascara(txtWhatsApp, m) })
// }
export function VerificaModalidade(txt) {
    let ehRacing = txt == "Racing"
    if (ehRacing) {
        divRacing.hidden = false;
        divChallenge.hidden = true;
        txtModalidadeChallenge.required = false;
        txtModalidadeRacing.required = true;
    } else {
        divChallenge.hidden = false;
        divRacing.hidden = true;
        txtModalidadeRacing.required = false;
        txtModalidadeChallenge.required = true;
    }
}
export function VerificaFormaPagamento(element) {
    if (txtFormadePagamento.value == "Mercadopago") {
        element.hidden = false;
    } else {
        element.hidden = true;
    }
}
export function VerificaFormaPagamento2(element, element2, element3) {
    if (txtFormadePagamento.value == "Banco") {
        element.hidden = false;
        element2.hidden = true;
        element3.hidden = true;
    } else if (txtFormadePagamento.value == "Mercadopago") {
        element.hidden = false;
        element2.hidden = true;
        element3.hidden = true;
    } else if (txtFormadePagamento.value == "Pix") {
        element2.hidden = false;
        element.hidden = true;
        element3.hidden = true;
    } else if (txtFormadePagamento.value == "Midinero") {
        element2.hidden = false;
        element.hidden = true;
        element3.hidden = true;
    } else {
        element3.hidden = false;
        element.hidden = true;
        element2.hidden = true;

    }
}
export function BotoesPorNacionalidade(pais) {
    if (pais == "Brasil") {
        let btnClassLinkPagamento = 'btn-outline-success';
        let txtLinkPagamento = "Pagamento Via Cartão de Crédito";
        let titleLinkPagamento = "Pagamento Via Cartão de Crédito";
        let targetLinkPagamento = "_blank";
        let hrefLinkPagamento = "https://mpago.la/2pKTMDC";
        LinkComIcone(idLinkPagamento, faIconPagamento, classeIconLinkPagamento, btnClassLinkPagamento, txtLinkPagamento, titleLinkPagamento, targetLinkPagamento, hrefLinkPagamento, divPagamento)
        let tipoBtnPix = "button";
        let ClassBtnPix = 'btn-outline-success';
        let idBtnPix = "BtnPix";
        let faPixIcon = "fa-brands";
        let pixIcon = "fa-pix";
        let txtLinkPix = "Pagar com Pix";
        let idDiv = "#pagamento";
        BtnComIcone(tipoBtnPix, ClassBtnPix, idBtnPix, faPixIcon, pixIcon, txtLinkPix, idDiv)
        let idP = "pBicicletaria";
        let txtP = `Pagamento com dinheiro em uma das Bicicletarias parceiras. <br> Após efetuar o pagamento, enviar o comprovante aqui.`;
        let classP = "text-bg-warning";
        Paragrafo(idP, classP, txtP, divPagamento)
        txtFormadePagamento.options[1].disabled = true
        txtFormadePagamento.options[1].hidden = true
        txtFormadePagamento.options[2].disabled = true
        txtFormadePagamento.options[2].hidden = true

    }
    else if (pais == 'Uruguai') {
        let btnClassLinkPagamento = 'btn-outline-primary';
        let txtLinkPagamento = "Pagamento Via Cartão de Crédito";
        let titleLinkPagamento = "Pagamento Via Cartão de Crédito";
        let targetLinkPagamento = "_blank";
        let hrefLinkPagamento = "https://mpago.la/2uzWQYJ";
        LinkComIcone(idLinkPagamento, faIconPagamento, classeIconLinkPagamento, btnClassLinkPagamento, txtLinkPagamento, titleLinkPagamento, targetLinkPagamento, hrefLinkPagamento, divPagamento)
        let tipoBtnPix = "button";
        let ClassBtnPix = 'btn-outline-primary';
        let idBtnPix = "BtnMidinero";
        let faPixIcon = "fa";
        let pixIcon = "fa-credit-card";
        let txtLinkPix = "Pagamento por Mi dinero";
        let idDiv = "#pagamento";
        BtnComIcone(tipoBtnPix, ClassBtnPix, idBtnPix, faPixIcon, pixIcon, txtLinkPix, idDiv)
        let idP = "pBicicletaria";
        let txtP = `Pagamento com dinheiro em uma das Bicicletarias parceiras. <br> Após efetuar o pagamento, enviar o comprovante aqui.`;
        let classP = "text-bg-warning";
        Paragrafo(idP, classP, txtP, divPagamento)
        txtFormadePagamento.options[3].disabled = true
        txtFormadePagamento.options[3].hidden = true
        txtFormadePagamento.options[4].disabled = true
        txtFormadePagamento.options[4].hidden = true

    } else {
        let btnClassLinkPagamento = 'btn-outline-info';
        let txtLinkPagamento = "Pagamento por Mercadopago";
        let titleLinkPagamento = "Pagamento por Mercadopago";
        let targetLinkPagamento = "_blank";
        let hrefLinkPagamento = "https://api.whatsapp.com/send?phone=5491122730084&text=Ol%C3%A1%2C%20vengo%20a%20trav%C3%A9s%20del%20s%C3%ADtio%20web";
        LinkComIcone(idLinkPagamento, faIconPagamento, classeIconLinkPagamento, btnClassLinkPagamento, txtLinkPagamento, titleLinkPagamento, targetLinkPagamento, hrefLinkPagamento, divPagamento)
        txtFormadePagamento.options[2].disabled = true
        txtFormadePagamento.options[2].hidden = true
        txtFormadePagamento.options[3].disabled = true
        txtFormadePagamento.options[3].hidden = true
        txtFormadePagamento.options[4].disabled = true
        txtFormadePagamento.options[4].hidden = true
        txtFormadePagamento.options[5].disabled = true
        txtFormadePagamento.options[5].hidden = true
    }
}


export function validatePassword(form, element, element2) {
    if (element.value != element2.value) {
        form.classList.add('was-validated')
        element.setCustomValidity("Senhas diferentes!");
    } else {
        element.setCustomValidity('');
    }
}
export function bloqueio(divElement, element) {
    if (divElement.hidden == true) {
        divElement.hidden = false;
        // element.required = true;
    } else {
        divElement.hidden = true;
        element.value = '';
        // element.required = false;
    }
}
export function bloqueioSenha(divElement, element, element2) {
    if (divElement.style.display == "none") {
        divElement.style.display = "block";
        element.required = true;
        element2.required = true;
    } else {
        divElement.style.display = "none";
        element.required = false;
        element2.required = false;
        element.value = '';
        element2.value = '';
    }
}

export function bloqueioCadastro() {
    if (checkboxTermos.checked) {
        btnCadastro.disabled = false;
    } else {
        btnCadastro.disabled = true;
        // btnCadastro.classList.add('disabled');
    }
}
export function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-').reverse();
    var diaNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var anoNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    return idade;
}
export function filtraCategoriaSexo(cat) {
    if (cat == "Masculino") {
        txtModalidadeRacing.options[2].disabled = true
        txtModalidadeRacing.options[2].hidden = true
        txtModalidadeRacing.options[4].disabled = true
        txtModalidadeRacing.options[4].hidden = true
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[1].hidden = false
        txtModalidadeRacing.options[3].disabled = false
        txtModalidadeRacing.options[3].hidden = false
        document.querySelector('#catId').hidden = false
    } else {
        txtModalidadeRacing.options[2].disabled = false
        txtModalidadeRacing.options[2].hidden = false
        txtModalidadeRacing.options[4].disabled = false
        txtModalidadeRacing.options[4].hidden = false
        txtModalidadeRacing.options[1].disabled = true
        txtModalidadeRacing.options[1].hidden = true
        txtModalidadeRacing.options[3].disabled = true
        txtModalidadeRacing.options[3].hidden = true
        document.querySelector('#catId').hidden = true

    }
}
export function filtraCategoria(idade) {
    if (idade < 18) {
        txtModalidadeRacing.options[1].disabled = false
        let i = 3
        while (i <= 12) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            i++
        }
    } else if (idade >= 18 && idade < 30) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[3].disabled = false
            txtModalidadeRacing.options[3].hidden = false
            txtModalidadeRacing.options[5].disabled = false
            txtModalidadeRacing.options[5].hidden = false
        }
    }
    else if (idade >= 30 && idade < 35) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[6].disabled = false
            txtModalidadeRacing.options[6].hidden = false
        }
    }
    else if (idade >= 35 && idade < 40) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[7].disabled = false
            txtModalidadeRacing.options[7].hidden = false
        }
    }
    else if (idade >= 40 && idade < 45) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[8].disabled = false
            txtModalidadeRacing.options[8].hidden = false
        }
    }
    else if (idade >= 45 && idade < 50) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[9].disabled = false
            txtModalidadeRacing.options[9].hidden = false
        }
    }
    else if (idade >= 50 && idade <= 54) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[10].disabled = false
            txtModalidadeRacing.options[10].hidden = false
        }
    }
    else if (idade >= 55 && idade <= 59) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[11].disabled = false
            txtModalidadeRacing.options[11].hidden = false
        }
    } else {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 5; i <= 12; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[12].disabled = false
            txtModalidadeRacing.options[12].hidden = false
        }
    }
}