import { download } from "./assets/js/ui.js";

export let canvas = () => {
    var canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    var card = new Image();
    card.src = './assets/images/cardfotos/card-racing.png';
    card.addEventListener('load', function () {
        canvas.width = 1000;
        canvas.height = 838;
        render()
    });
    function render() {
        setInitialImage();
        setText(nome, causa);
        setImage();
    }
    function setInitialImage() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.drawImage(card, 0, 0, canvas.width, canvas.height);
    }

    var fotoUser = new Image();
    // let w = fotoUser.width
    // canvas.onmousemove = function (evt) {
    //     let rect = canvas.getBoundingClientRect();
    //     let x = event.clientX - rect.left;
    //     let y = event.clientY - rect.top;
    //     document.querySelector("#cord").innerHTML = `x: ${x} y: ${y}`
    // }
    // usaremos a imagem após ela ser carregada
    fotoUser.addEventListener('load', function () {
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
            ctx.imageSmoothingEnabled = true;
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
            ctx.imageSmoothingEnabled = true;

        } else {
            ctx.drawImage(this, 70, 290, 430, 430);
            ctx.imageSmoothingEnabled = true;

        }

        // onde this representa a imagem recém carregada
    });

    // / instancia uma nova imagem

    // então especificamos a url a iniciar o carregamento
    fotoUser.src = './assets/images/novos-desafios.png';
    // console.log('canvasHandler', canvasHandler)
    var grd = ctx.createLinearGradient(0, 0, 0, 1000);
    grd.addColorStop(0, "#2e1c2b");
    grd.addColorStop(0.5, "#de5d12");
    grd.addColorStop(1, "#842029");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillText("Eduardo Severo JR", 90, 50);
    ctx.fillRect(10, 10, 1000, 800);

}
document.querySelector("#btnDownload").addEventListener('click', () => {
    download()
})
document.addEventListener('load', canvas, true)