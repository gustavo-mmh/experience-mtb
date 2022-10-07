import { download } from "./assets/js/ui.js";

export let canvas = () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = null;
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);
    canvas.width = 1000;
    canvas.height = 838;
    var img = new Image();
    var img2 = new Image();
    let w = img2.width
    canvas.onmousemove = function (evt) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        document.querySelector("#cord").innerHTML = `x: ${x} y: ${y}`
    }
    // usaremos a imagem após ela ser carregada
    img2.addEventListener('load', function () {
        // após baixar a imagem, podemos desenha-la no canvas
        let h = this.height
        let w = this.width
        let p = h / w
        let nh = h / p
        console.log(nh);

        ctx.drawImage(this, 70, 290, w, nh);
        // onde this representa a imagem recém carregada
    });
    img.addEventListener('load', function () {
        // após baixar a imagem, podemos desenha-la no canvas
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        // onde this representa a imagem recém carregada
    });
    img.src = './assets/images/cardfotos/card-racing.png';
    img2.src = './assets/images/1.jpg';
    // }
    // / instancia uma nova imagem

    // então especificamos a url a iniciar o carregamento


    // console.log('canvasHandler', canvasHandler)
}
document.querySelector("#btnDownload").addEventListener('click', () => {
    download()
})
document.addEventListener('load', canvas, true)