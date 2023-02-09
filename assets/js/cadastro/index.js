import { getExperienceMtbdocsID, subscribeToExperienceMtb, uploadImagemCad } from "../firebase/experience-mtb.js";
import { loginCad } from "../login/index.js";
import { addDaysToDate, checkboxTermos, dataAtualFormatada, formatDate, formCadastro, limparDados, loading, txtCategoria, txtCidade, txtConfirmaSenha, txtDataNascimento, txtdddWhatsApp, txtDocumento, txtEmail, txtFotoCard, txtModalidade, txtModalidadeChallenge, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta, txtWhatsApp } from '../ui.js';
import { bloqueioCadastro, calculaIdade, filtraCategoria, filtraCategoriaSexo, validatePassword, VerificaModalidade } from "../validaForm.js";
import { file, getImgRef, imgRef, metadata } from "./storage/getImg.js";
// import { file, getimg, metadata, newName, storageRef } from "./storage/index.js";

let fotoCard = ''
let tmpDate = new Date()
let hoje = formatDate(tmpDate, 'dd/mm/aaaa')
let dia10 = addDaysToDate(tmpDate, 10)
let dataFim = formatDate(dia10, 'dd/mm/aaaa')
let datainsc = dataAtualFormatada(tmpDate)
export async function Cadastrar() {
    txtdddWhatsApp.addEventListener('change', (e) => {
        let txt = e.target.value
        txtWhatsApp.value = ''
        switch (txt) {
            case '+55':
                txtWhatsApp.placeholder = 'DD XXXXX XXXX'
                txtWhatsApp.maxLength = 13
                break;
            case '+598':
                txtWhatsApp.placeholder = 'XX XXX XXX'
                txtWhatsApp.maxLength = 10
                break;
            case '+54':
                txtWhatsApp.placeholder = 'XX XXXX XXXX'
                txtWhatsApp.maxLength = 12
                break;
            default:
                txtWhatsApp.placeholder = 'Digite Seu WhatsApp'
                break;
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
        let idade = calculaIdade(txtDataNascimento.value)
        let cat = txtCategoria.value
        filtraCategoriaSexo(cat, idade)
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
            if (docsID.includes(ID) === true) {
                alert("Esse Documento já existe")
                txtDocumento.focus();
            }
            else {
                let msgWpp = `https://api.whatsapp.com/send?phone=${txtdddWhatsApp.value}${txtWhatsApp.value}&text=Ol%C3%A1%20${txtNome.value}%2C%20obrigado%20pela%20inscri%C3%A7%C3%A3o`
                let categoriaModalidade
                let resultCategoriaModalidade
                if (txtModalidade.value === "Racing") {
                    categoriaModalidade = 'modalidadeRacing'
                    resultCategoriaModalidade = txtModalidadeRacing.value
                }
                else if (txtModalidade.value === "Challenge") {
                    categoriaModalidade = 'modalidadeChallenge'
                    resultCategoriaModalidade = txtModalidadeChallenge.value
                }

                if (imgRef != null) {
                    fotoCard = imgRef
                }
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
                    [categoriaModalidade]: resultCategoriaModalidade,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard,
                    comprovantePagamento: '',
                    status: 'Pendente',
                    dataInscricao: hoje,
                    dataFimEdit: dataFim,
                    momentoInscricao: datainsc,
                    LinkMsgWpp: msgWpp,
                }
                subscribeToExperienceMtb(subscription, ID);
                loading.hidden = false
                if (imgRef != null) {
                    let ref = `images/${imgRef}`
                    let pais = txtPais.value
                    let doc = txtDocumento.value
                    let psw = txtSenha.value
                    uploadImagemCad(file, ref, metadata, doc, psw, pais)
                    // limparDados()
                } else {
                    let pais = txtPais.value
                    let doc = txtDocumento.value
                    let psw = txtSenha.value
                    loginCad(doc, psw, pais)
                    // limparDados()
                }
            }

        }
    }, false)
}