export const required = document.createAttribute("required");
export const formComprovante = document.querySelector('#formComprovante');
export const formCadastro = document.querySelector('#formCadastro');
export const formUpdate = document.querySelector('#formUpdate');
export const formLogin = document.querySelector('#formLogin');
export const txtFormadePagamento = document.querySelector('#txtFormadePagamento');
export const txtNome = document.querySelector('#txtNome');
export const txtComprovante = document.querySelector('#txtComprovante');
export const txtDocumento = document.querySelector('#txtDocumento');
export const txtEmail = document.querySelector('#txtEmail');
export const txtWhatsApp = document.querySelector('#txtWhatsApp');
export const txtDataNascimento = document.querySelector('#txtDataNascimento');
export const txtPais = document.querySelector('#txtPais');
export const txtCategoria = document.querySelector('#txtCategoria');
export const txtCidade = document.querySelector('#txtCidade');
export const txtModalidade = document.querySelector('#txtModalidade');
export const txtModalidadeRacing = document.querySelector('#txtModalidadeRacing');
export const txtModalidadeChallenge = document.querySelector('#txtModalidadeChallenge');
export const txtNomeEquipe = document.querySelector('#txtNomeEquipe');
export const txtTamanhoCamiseta = document.querySelector('#txtTamanhoCamiseta');
export const txtSenha = document.querySelector('#txtSenha');
export const txtFotoCard = document.querySelector('#txtFotoCard');
export const txtRefFotoCard = document.querySelector('#txtRefFotoCard');
export const txtConfirmaSenha = document.querySelector('#txtConfirmaSenha');
export const imgThumbnail = document.querySelector('#imgThumbnail');
export const loginDocumento = document.querySelector('#loginDocumento');
export const loginPais = document.querySelector('#loginPais');
export const loginPassword = document.querySelector('#loginPassword');
export const cardNome = document.querySelector('#cardNome');
export const cardDocumento = document.querySelector('#cardDocumento');
export const cardEmail = document.querySelector('#cardEmail');
export const cardWhatsApp = document.querySelector('#cardWhatsApp');
export const cardDataNascimento = document.querySelector('#cardDataNascimento');
export const cardPais = document.querySelector('#cardPais');
export const cardCidade = document.querySelector('#cardCidade');
export const cardModalidade = document.querySelector('#cardModalidade');
export const cardCategoria = document.querySelector('#cardCategoria');
export const cardNomeEquipe = document.querySelector('#cardNomeEquipe');
export const cardTamanhoCamiseta = document.querySelector('#cardTamanhoCamiseta');
export const cardFoto = document.querySelector('#cardFoto');
export const cardStatus = document.querySelector('#cardStatus');
export const loading = document.querySelector("#load");


export const checkboxSenha = document.querySelector('#checkboxSenha');
export const checkboxTermos = document.querySelector('#checkboxTermos');
export const checkboxFoto = document.querySelector('#checkboxFoto');

export const btnEditar = document.querySelector('#btnEditInsc');
export const btnCopiar = document.querySelector('#copiarQR');
export const btnCadastro = document.querySelector('#btnCadastrar');
export const btnLogin = document.querySelector('#btnLogin')
export const btnLogout = document.querySelector('#btnLogout')

export const divEditarInsc = document.querySelector('#editarInsc');
export const divComprovante = document.querySelector('#comprovante');
export const divFoto = document.querySelector('#divFoto');
export const divSenha = document.querySelector('#Senha');
export const divRacing = document.querySelector('#racing');
export const divChallenge = document.querySelector('#challenge');
export const divAuthState = document.querySelector('#divAuthState')
export const statusLogin = document.querySelector('#statusLogin')

export const divPagamento = document.querySelector('#pagamento')
export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export let BtnComIcone = (tipo, classeBtn, idBtn, faIcon, classeIcon, txtBtn, idDiv) => {
    let btn = document.createElement('button')
    let iconCheck = document.createElement('i');
    btn.type = tipo
    btn.classList.add('btn')
    btn.classList.add(classeBtn)
    btn.id = idBtn
    iconCheck.classList.add(faIcon)
    iconCheck.classList.add(classeIcon)
    iconCheck.classList.add('fa-fw')
    let txt = document.createTextNode(txtBtn);
    btn.appendChild(iconCheck);
    btn.appendChild(txt);
    document.querySelector(idDiv).appendChild(btn)
}
export let Paragrafo = (idP, txtP, divP) => {
    let p = document.createElement('p')
    p.id = idP;
    p.innerHTML = txtP
    divP.appendChild(p)
}

export let LinkComIcone = (idLink, faIcon, classeIcon, btnClassLink, txtLink, titleLink, targetLink, hrefLink, divLink) => {
    let a = document.createElement('a');
    let icon = document.createElement('i');
    icon.classList.add(faIcon)
    icon.classList.add(classeIcon)
    icon.classList.add('fa-fw')
    let link = document.createTextNode(txtLink);
    a.appendChild(icon);
    a.appendChild(link);
    a.id = idLink;
    a.title = titleLink;
    a.target = targetLink
    a.href = hrefLink
    a.classList.add('btn')
    a.classList.add(btnClassLink)
    divLink.appendChild(a);
}
export function limparDados() {
    txtPais.selectedIndex = 0
    txtCategoria.selectedIndex = 0
    txtModalidade.selectedIndex = 0
    txtModalidadeRacing.selectedIndex = 0
    txtModalidadeChallenge.selectedIndex = 0
    txtNome.value = ''
    txtDocumento.value = ''
    txtDataNascimento.value = ''
    txtEmail.value = ''
    txtCidade.value = ''
    txtWhatsApp.value = ''
    txtNomeEquipe.value = ''
    txtSenha.value = ''
    txtConfirmaSenha.value = ''
    txtFotoCard.value = ''
    checkboxTermos.checked = false
    formCadastro.classList.remove('was-validated')
}
export function copiarTexto() {
    let textoCopiado = document.getElementById("codigoQR");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Texto Copiado");
}

export function addDaysToDate(date, days) {
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}
export function formatDate(date, format) {
    const map = {
        dd: date.getDate().toString().padStart(2, '0'),
        mm: (date.getMonth() + 1).toString().padStart(2, '0'),
        aaaa: date.getFullYear(),
    }

    return format.replace(/mm|dd|aaaa/gi, matched => map[matched])
}
export function dataAtualFormatada(variavel) {
    let data = variavel,
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear(),
        h = data.getHours(),
        m = data.getMinutes(),
        s = data.getSeconds().toString().padStart(2, '0');
    return `${dia}/${mes}/${ano} - ${h}:${m}:${s}`;
}