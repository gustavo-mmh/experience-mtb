import { getExperienceMtbdocsID, subscribeToExperienceMtb, uploadImagemCad } from "../firebase/experience-mtb.js";
import { loginCad } from "../login/index.js";
import { addDaysToDate, checkboxTermos, dataAtualFormatada, formatDate, formCadastro, limparDados, loading, txtCategoria, txtCidade, txtConfirmaSenha, txtDataNascimento, txtdddWhatsApp, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../ui.js';
import { bloqueioCadastro, calculaIdade, filtraCategoria, filtraCategoriaSexo, validatePassword, VerificaModalidade } from "../validaForm.js";
import { file, getImgRef, imgRef, metadata } from "./storage/getImg.js";
// import { file, getimg, metadata, newName, storageRef } from "./storage/index.js";
let fotoCard1 = ''
let tmpDate = new Date()
let hoje = formatDate(tmpDate, 'dd/mm/aaaa')
let dia10 = addDaysToDate(tmpDate, 10)
let dataFim = formatDate(dia10, 'dd/mm/aaaa')
let datainsc = dataAtualFormatada(tmpDate)
export async function Cadastrar() {

    txtdddWhatsApp.addEventListener('change', (e) => {
        let txt = e.target.value
        txtWhatsApp.value = ''
        if (txt == '+55') {
            txtWhatsApp.placeholder = 'DD XXXXX XXXX'
            txtWhatsApp.maxlength = 13
            return
        } else if (txt == '+598') {
            txtWhatsApp.placeholder = 'XX XXX XXX'
            txtWhatsApp.maxlength = 10
            return
        } else if (txt == '+549') {
            txtWhatsApp.placeholder = 'XX XXXX XXXX'
            txtWhatsApp.maxlength = 12
            // paisWpp(mascaraAR)
            return
        } else {
            txtWhatsApp.placeholder = 'Digite Seu WhatsApp'
            return
        }
    })
    txtModalidade.addEventListener('change', (e) => {
        let txt = e.target.value
        VerificaModalidade(txt)
    })
    txtSenha.addEventListener('keyup', () => {
        validatePassword(formCadastro, txtConfirmaSenha, txtSenha)
    })
    txtConfirmaSenha.addEventListener('keyup', () => {
        validatePassword(formCadastro, txtConfirmaSenha, txtSenha)
    })
    checkboxTermos.addEventListener('click', () => {
        bloqueioCadastro()
    })
    txtDataNascimento.addEventListener('change', () => {
        let idade = calculaIdade(txtDataNascimento.value)
        filtraCategoria(idade)
        txtModalidadeRacing.selectedIndex = 0
    })
    txtCategoria.addEventListener('change', () => {
        let cat = txtCategoria.value
        filtraCategoriaSexo(cat)
    })
    getImgRef(txtFotoCard)
    formCadastro.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (!formCadastro.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            formCadastro.classList.add('was-validated')
        }
        else {
            const ID = txtPais.value + txtDocumento.value
            // Previne a submissão do formulário:
            const docsID = await getExperienceMtbdocsID()
            if (docsID.includes(ID) == true) {
                alert("Esse Documento já existe")
                txtDocumento.focus();
            }
            else {
                if (txtModalidade.value == "Racing") {
                    if (imgRef != null) {
                        fotoCard1 = imgRef
                    }
                    let msgWpp = `https://api.whatsapp.com/send?phone=${txtdddWhatsApp.value}${txtWhatsApp.value}&text=Ol%C3%A1%20${txtNome.value}%2C%20obrigado%20pela%20inscri%C3%A7%C3%A3o`
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtdddWhatsApp.value + txtWhatsApp.value,
                        categoria: txtCategoria.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeRacing: txtModalidadeRacing.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: fotoCard1,
                        comprovantePagamento: '',
                        status: 'Pendente',
                        dataInscricao: hoje,
                        dataFimEdit: dataFim,
                        momentoInscricao: datainsc,
                        LinkMsgWpp: msgWPP
                    }
                    subscribeToExperienceMtb(subscription, ID);
                    loading.hidden = false
                    if (imgRef != null) {
                        let ref = `images/${imgRef}`
                        let pais = txtPais.value
                        let doc = txtDocumento.value
                        let psw = txtSenha.value
                        uploadImagemCad(file, ref, metadata, doc, psw, pais)
                        limparDados()
                    } else {
                        let pais = txtPais.value
                        let doc = txtDocumento.value
                        let psw = txtSenha.value
                        loginCad(doc, psw, pais)
                        limparDados()
                    }
                    // alert("Cadastro Feito com Sucesso!!!")

                } else if (txtModalidade.value == "Challenge") {
                    if (imgRef != null) {
                        fotoCard1 = imgRef
                    }
                    const subscription = {
                        pais: txtPais.value,
                        nome: txtNome.value,
                        documento: txtDocumento.value,
                        dataNascimento: txtDataNascimento.value,
                        email: txtEmail.value,
                        cidade: txtCidade.value,
                        whatsapp: txtWhatsApp.value,
                        categoria: txtCategoria.value,
                        tamanhoCamiseta: txtTamanhoCamiseta.value,
                        modalidade: txtModalidade.value,
                        modalidadeChallenge: txtModalidadeChallenge.value,
                        nomeEquipe: txtNomeEquipe.value,
                        senha: txtSenha.value,
                        fotoCard: fotoCard1,
                        comprovantePagamento: '',
                        status: 'Pendente',
                        dataInscricao: 'Pendente',
                        dataInscricao: hoje,
                        dataFimEdit: dataFim,
                        momentoInscricao: datainsc,
                    }
                    subscribeToExperienceMtb(subscription, ID);
                    loading.hidden = false
                    if (imgRef != null) {
                        let ref = `images/${imgRef}`
                        let pais = txtPais.value
                        let doc = txtDocumento.value
                        let psw = txtSenha.value
                        uploadImagemCad(file, ref, metadata, doc, psw, pais)
                        limparDados()
                    } else {
                        let pais = txtPais.value
                        let doc = txtDocumento.value
                        let psw = txtSenha.value
                        loginCad(doc, psw, pais)
                        limparDados()
                    }
                    // alert("Cadastro Feito com Sucesso!!!")
                }
                else {
                    alert("Preencha o Formulário corretamente")

                }
            }

        }
    }, false)
}