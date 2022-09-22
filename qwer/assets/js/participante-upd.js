import { file, getImgRef, imgRef, metadata } from "../../../assets/js/cadastro/storage/getImg.js";
import { deleteImage, updateCollection, uploadImagem } from "../../../assets/js/firebase/experience-mtb.js";
import { formComprovante, formUpdate, txtComprovante, txtFotoCard, txtModalidade, txtModalidadeRacing, txtNomeEquipe, txtPais, txtSenha, txtTamanhoCamiseta } from "../../../assets/js/ui.js";
import { img } from "./participante-get.js";
export function updateParticipante() {
    let doc = localStorage.getItem('documentoLogado').replace(/\"|\"|\-/g, '');
    const ID = txtPais.value + doc;
    getImgRef(txtFotoCard)
    formUpdate.addEventListener('submit', async (event) => {

        event.preventDefault();
        if (txtModalidade.value == "Racing") {
            if (txtFotoCard.value != '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: imgRef,
                }
                let ref = `images/${imgRef}`
                uploadImagem(file, ref, metadata)
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                let ref = `images/${imgRef}`
                uploadImagem(file, ref, metadata)
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeRacing: txtModalidadeRacing.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            }
        }
        else {
            if (txtFotoCard.value != '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                    fotoCard: imgRef,
                }
                let ref = `images/${imgRef}`
                uploadImagem(file, ref, metadata)
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            } else if (txtFotoCard.value == '' && txtSenha.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    senha: txtSenha.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                window.location.reload()
            } else if (txtSenha.value == '' && txtFotoCard.value != '') {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                    fotoCard: imgRef,
                }
                let ref = `images/${imgRef}`
                uploadImagem(file, ref, metadata)
                let ref2 = `images/${img}`
                deleteImage(ref2)
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            } else {
                const subscription = {
                    tamanhoCamiseta: txtTamanhoCamiseta.value,
                    modalidade: txtModalidade.value,
                    modalidadeChallenge: txtModalidadeChallenge.value,
                    nomeEquipe: txtNomeEquipe.value,
                }
                updateCollection(ID, subscription)
                alert('Cadastro Atualizado com sucesso!')
                setTimeout(function () {
                    window.location.reload(1);
                }, 4000);
            }
        }

    })
}

export async function createComprovante(id) {
    getImgRef(txtComprovante)
    formComprovante.addEventListener('submit', async (event) => {
        event.preventDefault();
        let ref = `comprovantes/${imgRef}`
        let subscription = {
            comprovantePagamento: imgRef,
            status: "Em Analise"
        }
        uploadImagem(file, ref, metadata)
        updateCollection(id, subscription)
        alert('Comprovante Enviado com sucesso')
        setTimeout(function () {
            window.location.reload(1);
        }, 4000);
    })
}
export async function updateComprovante(id, img) {
    getImgRef(txtComprovante)
    formComprovante.addEventListener('submit', async (event) => {
        event.preventDefault();
        let ref = `comprovantes/${imgRef}`
        let ref2 = `comprovantes/${img}`
        let subscription = {
            comprovantePagamento: imgRef,
            status: "Em Analise"
        }
        uploadImagem(file, ref, metadata)
        deleteImage(ref2)
        updateCollection(id, subscription)
        alert('Comprovante Enviado com sucesso')
        setTimeout(function () {
            window.location.reload(1);
        }, 4000);
    })
}