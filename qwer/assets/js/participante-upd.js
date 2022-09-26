import { file, getImgRef, imgRef, metadata } from "../../../assets/js/cadastro/storage/getImg.js";
import { deleteImage, updateCollection, uploadImagem } from "../../../assets/js/firebase/experience-mtb.js";
import { checkboxFoto, checkboxSenha, formComprovante, formUpdate, loading, txtComprovante, txtFormadePagamento, txtFotoCard, txtModalidade, txtModalidadeRacing, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta } from "../../../assets/js/ui.js";
import { img } from "./participante-get.js";
export function updateParticipante() {
    let doc = sessionStorage.getItem('documentoLogado').replace(/\"|\"|\-/g, '');
    let pais = sessionStorage.getItem('paislogado').replace(/\"|\"|\-/g, '');
    const ID = pais + doc;
    getImgRef(txtFotoCard)
    let fotoCard1 = ''
    formUpdate.addEventListener('submit', async (event) => {

        event.preventDefault();
        if (txtModalidade.value == "Racing") {
            if (checkboxFoto.checked && checkboxSenha.checked) {
                if (imgRef != null) {
                    fotoCard1 = imgRef
                }
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: fotoCard1,
                }
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
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
            } else if (checkboxFoto.checked == false && checkboxSenha.checked) {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            } else if (checkboxSenha.checked == false && checkboxFoto.checked) {
                if (imgRef != null) {
                    fotoCard1 = imgRef
                }
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: fotoCard1,
                }
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                if (imgRef != null) {
                    let ref = `images/${imgRef}`
                    uploadImagem(file, ref, metadata, 'redirect')
                } else {
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 2000);
                }
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            }
        }
        // -----------------------CHLANGER--------------------------------
        else {
            if (checkboxFoto.checked && checkboxSenha.checked) {
                if (imgRef != null) {
                    fotoCard1 = imgRef
                }
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: fotoCard1,
                }
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                if (imgRef != null) {
                    let ref = `images/${imgRef}`
                    uploadImagem(file, ref, metadata, 'redirect')
                } else {
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 2000);
                }
            } else if (checkboxFoto.checked == false && checkboxSenha.checked) {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            } else if (checkboxSenha.checked == false && checkboxFoto.checked) {
                if (imgRef != null) {
                    fotoCard1 = imgRef
                }
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                if (imgRef != null) {
                    let ref = `images/${imgRef}`
                    uploadImagem(file, ref, metadata, 'redirect')
                }
                else {
                    setTimeout(function () {
                        window.location.href = "index.html";
                    }, 2000);
                }
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                loading.hidden = false
                setTimeout(function () {
                    window.location.href = "index.html";
                }, 2000);
            }
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
        alert('Comprovante Enviado com sucesso')
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
        alert('Comprovante Enviado com sucesso')
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
