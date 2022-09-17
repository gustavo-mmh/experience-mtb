
import { btnLogout } from "../../../assets/js/ui.js";
import { getParticipante } from "./participante-get.js";
import { updateParticipante } from "./participante-upd.js";

if (localStorage.getItem('token') == '') {
    alert('Você precisa estar logado para acessar essa página')
    window.location.href = '../index.html'
} else {
    getParticipante()
    updateParticipante()
    btnLogout.addEventListener('click', () => {
        localStorage.clear()
        window.location.href = '../index.html'
    })
}


