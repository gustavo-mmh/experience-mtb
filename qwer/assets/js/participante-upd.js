import { file, getImgRef, imgRef, metadata } from "../../../assets/js/cadastro/storage/getImg.js";
import { deleteImage, updateCollection, uploadImagem } from "../../../assets/js/firebase/experience-mtb.js";
import { checkboxFoto, checkboxSenha, formComprovante, formUpdate, loading, txtComprovante, txtFormadePagamento, txtFotoCard, txtModalidade, txtModalidadeRacing, txtNome, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta } from "../../../assets/js/ui.js";
import { img } from "./participante-get.js";
export function updateParticipante() {
    let doc = sessionStorage.getItem('documentoLogado').replace(/\"|\"|\-/g, '');
    let pais = sessionStorage.getItem('paislogado').replace(/\"|\"|\-/g, '');
    const ID = pais + doc;
    let subscription = {};
    getImgRef(txtFotoCard)
    let fotoCard1 = ''
    formUpdate.addEventListener('submit', async (event) => {
        debugger
        event.preventDefault();
        let categoriaModalidade
        let resultCategoriaModalidade
        let subscriptionSenha = ''
        let campoSenha
        let resultSenha
        if (txtModalidade.value == "Racing") {
            categoriaModalidade = 'modalidadeRacing'
            resultCategoriaModalidade = txtModalidadeRacing.value
        }
        else if (txtModalidade.value == "Challenge") {
            categoriaModalidade = 'modalidadeChallenge'
            resultCategoriaModalidade = txtModalidadeChallenge.value
        } else {
            alert('Escolha uma Categoria')
        }
        if (checkboxSenha.checked) {
            campoSenha = 'senha'
            resultSenha = txtSenha.value
        }
        if (checkboxFoto.checked) {
            if (imgRef != null) {
                fotoCard1 = imgRef
            }
            subscription = {
                nome: txtNome.value,
                tamanhoCamiseta: txtTamanhoCamiseta.value,
                modalidade: txtModalidade.value,
                // modalidadeRacing: txtModalidadeRacing.value,
                nomeEquipe: txtNomeEquipe.value,
                // senha: txtSenha.value,
                fotoCard: fotoCard1,
            }
            subscription[categoriaModalidade] = resultCategoriaModalidade
            if (campoSenha != null) subscription[campoSenha] = resultSenha
            let ref2 = `images/${img}`
            deleteImage(ref2)
            updateCollection(ID, subscription)
            // alert('Cadastro Atualizado com sucesso!')
            loading.hidden = false
            if (imgRef != null) {
                let ref = `images/${imgRef}`
                uploadImagem(file, ref, metadata, 'redirect')
            }
            else {
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            };
        } else if (checkboxFoto.checked == false) {
            subscription = {
                nome: txtNome.value,
                tamanhoCamiseta: txtTamanhoCamiseta.value,
                modalidade: txtModalidade.value,
                // modalidadeRacing: txtModalidadeRacing.value,
                nomeEquipe: txtNomeEquipe.value,
                // senha: txtSenha.value,
            }
            subscription[categoriaModalidade] = resultCategoriaModalidade
            if (campoSenha != null) subscription[campoSenha] = resultSenha
            updateCollection(ID, subscription)
            // alert('Cadastro Atualizado com sucesso!')
            loading.hidden = false
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000);
        }
    })
}

export async function createComprovante(id) {
    let fotoCard2 = ''
    getImgRef(txtComprovante)
    formComprovante.addEventListener('submit', async (event) => {
        event.preventDefault();
        let pagamento = txtFormadePagamento.value
        if (imgRef != null) {
            fotoCard2 = imgRef
        }
        let subscription = {
            comprovantePagamento: fotoCard2,
            formaDePagamento: pagamento,
            status: "Em Analise",
        }
        updateCollection(id, subscription)
        loading.hidden = false
        if (imgRef != null) {
            let ref = `comprovantes/${imgRef}`
            uploadImagem(file, ref, metadata, 'reload')
        }
        else {
            setTimeout(function () {
                window.location.reload(1);
            }, 2000);
        }
        alert("Comprovante Enviado com sucesso! \n" + "Em até 3 dias uteis seu pagamento será confirmado.")
    })
}
export async function updateComprovante(id, img) {
    let fotoCard2 = ''
    getImgRef(txtComprovante)
    formComprovante.addEventListener('submit', async (event) => {
        event.preventDefault();
        if (imgRef != null) {
            fotoCard2 = imgRef
        }
        let ref2 = `comprovantes/${img}`
        let subscription = {
            comprovantePagamento: fotoCard2,
            status: "Em Analise"
        }
        deleteImage(ref2)
        updateCollection(id, subscription)
        alert("Comprovante Enviado com sucesso! \n" + "Em até 3 dias uteis seu pagamento será confirmado.")
        loading.hidden = false
        if (imgRef != null) {
            let ref = `comprovantes/${imgRef}`
            uploadImagem(file, ref, metadata, 'reload')
        }
        else {
            setTimeout(function () {
                window.location.reload(1);
            }, 2000);
        }
    })
}
