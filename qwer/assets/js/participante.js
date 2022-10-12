
import { btnLogout, loading } from "../../../assets/js/ui.js";
import { getParticipante } from "./participante-get.js";
import { updateParticipante } from "./participante-upd.js";

if (sessionStorage.getItem('token') == '') {
    sessionStorage.clear()
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'
}
else {
    btnLogout.addEventListener('click', () => {
        sessionStorage.clear()
        window.location.href = '../index.html'
    })
    let dataFimEditar = sessionStorage.getItem('dataFimEdit')
    var partesData = dataFimEditar.split("/");
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    var dataLimite = new Date(("2022, 11, 21"));
    if (data < new Date() || new Date() > dataLimite) {
        // REMOVER ESTE COMENTARIO ABAIXO
        // window.location.href = 'index.html'
    }
    loading.hidden = false
    setTimeout(function () {
        loading.hidden = true
    }, 2000);
    getParticipante()
    updateParticipante()
}


