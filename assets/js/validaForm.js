import { btnCadastro, checkboxTermos, divChallenge, divRacing, formCadastro, required, txtConfirmaSenha, txtDataNascimento, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtSenha } from "./ui.js";

export function VerificaModalidade() {
    if (txtModalidade.value == "Racing") {
        divRacing.style.display = "block";
        divChallenge.style.display = "none";
        txtModalidadeChallenge.removeAttribute("required");
        txtModalidadeRacing.setAttributeNode(required);
    } else {
        divChallenge.style.display = "block";
        divRacing.style.display = "none";
        txtModalidadeRacing.removeAttribute("required");
        txtModalidadeChallenge.setAttributeNode(required);
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
    if (divElement.style.display == "none") {
        divElement.style.display = "block";
        element.setAttributeNode(required);
    } else {
        divElement.style.display = "none";
        element.value = '';
        element.removeAttribute("required");
    }
}
export function bloqueioSenha(divElement, element, element2) {
    if (divElement.style.display == "none") {
        divElement.style.display = "block";
        element.setAttributeNode(required);
        element2.setAttributeNode(required);
    } else {
        divElement.style.display = "none";
        element.removeAttribute("required");
        element2.removeAttribute("required");
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
export function filtraCategoria(idade) {
    if (idade < 18) {
        txtModalidadeRacing.options[1].disabled = false
        for (let i = 2; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
        }
    } else if (idade >= 18 && idade < 30) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 4; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[3].disabled = false
            txtModalidadeRacing.options[3].hidden = false
        }
    }
    else if (idade >= 30 && idade < 35) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[4].disabled = false
            txtModalidadeRacing.options[4].hidden = false
        }
    }
    else if (idade >= 35 && idade < 40) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[5].disabled = false
            txtModalidadeRacing.options[5].hidden = false
        }
    }
    else if (idade >= 40 && idade < 44) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[6].disabled = false
            txtModalidadeRacing.options[6].hidden = false
        }
    }
    else if (idade >= 45 && idade < 50) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[7].disabled = false
            txtModalidadeRacing.options[7].hidden = false
        }
    }
    else if (idade >= 50 && idade <= 54) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[8].disabled = false
            txtModalidadeRacing.options[8].hidden = false
        }
    }
    else if (idade >= 55 && idade <= 59) {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[9].disabled = false
            txtModalidadeRacing.options[9].hidden = false
        }
    } else {
        txtModalidadeRacing.options[1].disabled = false
        txtModalidadeRacing.options[2].disabled = false
        for (let i = 3; i <= 10; i++) {
            txtModalidadeRacing.options[i].disabled = true
            txtModalidadeRacing.options[i].hidden = true
            txtModalidadeRacing.options[10].disabled = false
        }
    }
}