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

    // let w = img2.width
    // canvas.onmousemove = function (evt) {
    //     let rect = canvas.getBoundingClientRect();
    //     let x = event.clientX - rect.left;
    //     let y = event.clientY - rect.top;
    //     document.querySelector("#cord").innerHTML = `x: ${x} y: ${y}`
    // }
    // usaremos a imagem após ela ser carregada
    img2.addEventListener('load', function () {
        // após baixar a imagem, podemos desenha-la no canvas
        let h = this.height
        let w = this.width
        function fundo() {
            fundoImg.src = "fundo.png";
            ctx.drawImage(fundoImg, 0, 0);
        }
        // w = 322,5 h= 430
        // 100 - 40 = 60
        // 100 * 0.6
        if (h > w) {
            let qtp = 42700 / h
            let resto = h - (h * (qtp / 100))
            let restoPorc = resto * 100
            let diferenca = restoPorc / h
            let nh = h - (h * (diferenca / 100))
            let nw = w - (w * (diferenca / 100))
            let xi = 75 + ((430 - nw) / 2)
            // let Hp = h / (porcento)
            // let difernca = Hp * h
            // let NovaH = h - difernca
            // console.log('por', porcento)
            console.log('novaH', nh)
            console.log('novaw', nw)
            // let p = h / w
            // let nh = h / p
            // console.log(nh);
            ctx.drawImage(this, xi, 290, nw, nh);
        } else if (w > h) {
            let qtp = 42700 / w
            let resto = w - (w * (qtp / 100))
            let restoPorc = resto * 100
            let diferenca = restoPorc / w
            let nh = h - (h * (diferenca / 100))
            let nw = w - (w * (diferenca / 100))
            let yi = 290 + ((430 - nh) / 2)
            // let Hp = h / (porcento)
            // let difernca = Hp * h
            // let NovaH = h - difernca
            // console.log('por', porcento)
            console.log('novaH', nh)
            console.log('novaw', nw)
            // let p = h / w
            // let nh = h / p
            // console.log(nh);
            ctx.drawImage(this, 80, yi, nw, nh);

        } else {
            ctx.drawImage(this, 70, 290, 430, 430);

        }

        // onde this representa a imagem recém carregada
    });
    img.addEventListener('load', function () {
        // após baixar a imagem, podemos desenha-la no canvas
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        // onde this representa a imagem recém carregada
    });
    img.src = './assets/images/cardfotos/card-racing.png';

    img2.src = './assets/images/novos-desafios.png';
    // }
    // / instancia uma nova imagem

    // então especificamos a url a iniciar o carregamento


    // console.log('canvasHandler', canvasHandler)
    var grd = ctx.createLinearGradient(0, 0, 0, 1000);
    grd.addColorStop(0, "#2e1c2b");
    grd.addColorStop(0.5, "#de5d12");
    grd.addColorStop(1, "#842029");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 1000, 800);
}
document.querySelector("#btnDownload").addEventListener('click', () => {
    download()
})
document.addEventListener('load', canvas, true)