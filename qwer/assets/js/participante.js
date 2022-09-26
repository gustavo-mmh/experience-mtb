
import { btnLogout } from "../../../assets/js/ui.js";
import { getParticipante } from "./participante-get.js";
import { updateParticipante } from "./participante-upd.js";

if (sessionStorage.getItem('token') == '') {
    sessionStorage.clear()
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'

}
else {
    let dataFimEditar = sessionStorage.getItem('dataFimEdit')
    var partesData = dataFimEditar.split("/");
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
    var dataLimite = new Date(("2022, 11, 27"));
    if (data < new Date() || new Date() > dataLimite) {
        window.location.href = 'index.html'
    }


    loading.hidden = false
    btnLogout.addEventListener('click', () => {
        sessionStorage.clear()
        window.location.href = '../index.html'
    })
    setTimeout(function () {
        loading.hidden = true
    }, 2000);
    getParticipante()
    updateParticipante()
}


