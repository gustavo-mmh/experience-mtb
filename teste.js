import { download } from "./assets/js/ui.js";

export let canvas = (cardMTB) => {

    var canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    var fotoUser = new Image();
    fotoUser.src = cardMTB.fotoParticipante;
    var card = new Image();
    card.src = cardMTB.fotoModalidade;
    canvas.width = 1000;
    canvas.height = 838;
    render()
    function render() {
        setImageUser();
        setText();
        setCardImage()
        ctx.globalCompositeOperation = "destination-over";
    }
    function estilizaCategoria() {
        ctx.font = "bold 34px Anton, sans-serif";
        ctx.textAlign = "left";
        ctx.fillStyle = cardMTB.corCategoria;
    }
    function estilizaNome() {
        ctx.font = "bold 25px Anton, sans-serif";
        ctx.textAlign = "left";
        ctx.fillStyle = "white";
    }
    function estilizaDados() {
        ctx.font = "14px Source Sans Pro, sans-serif";
        ctx.textTransform = "upercase";
        ctx.textAlign = "left";
        ctx.fillStyle = "white";
    }
    function setBg() {
        let grd = ctx.createLinearGradient(0, 0, 0, 1000);
        grd.addColorStop(0, "#2e1c2b");
        grd.addColorStop(0.5, "#de5d12");
        grd.addColorStop(1, "#842029");
        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(75, 290, 429, 427);
    }
    function setCardImage() {
        card.addEventListener('load', function () {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(card, 0, 0, canvas.width, canvas.height);
        })
    }
    function setText() {
        estilizaCategoria()
        ctx.fillText(cardMTB.nomeCategoria, 425, 83);
        estilizaNome()
        ctx.fillText(cardMTB.nomeParticipante, 125, 140);
        estilizaDados()
        ctx.fillText(`PAIS: ${cardMTB.pais}`, 125, 200);
        ctx.fillText(`CIDADE: ${cardMTB.cidade}`, 125, 220);
        ctx.fillText(`EQUIPE/GRUPO: ${cardMTB.eqipe}`, 125, 240);
    }
    function setImageUser() {
        fotoUser.addEventListener('load', function () {
            render2(this)
        });
    }
    function render2(img) {
        let h = img.height
        let w = img.width
        if (h > w) {
            heightMaior(img, h, w)
        } else if (w > h) {
            widthMaior(img, h, w)
        } else {
            imgQuadrada()
        }

    }
    // após baixar a imagem, podemos desenha-la no canvas
    // w = 322,5 h= 430
    // 100 - 40 = 60
    // 100 * 0.6
    function heightMaior(img, h, w) {
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
        ctx.drawImage(img, xi, 290, nw, nh);
        setBg();
    }
    function widthMaior(h, w) {
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
        setBg();

    }
    function imgQuadrada() {
        ctx.drawImage(this, 75, 290, 430, 430);

    }


    // let w = fotoUser.width
    canvas.onmousemove = function (evt) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        document.querySelector("#cord").innerHTML = `x: ${x} y: ${y}`
    }
    // usaremos a imagem após ela ser carregada
    // fotoUser.addEventListener('load', function () {
    //     // após baixar a imagem, podemos desenha-la no canvas
    //     let h = this.height
    //     let w = this.width
    //     function fundo() {
    //         fundoImg.src = "fundo.png";
    //         ctx.drawImage(fundoImg, 0, 0);
    //     }
    //     // w = 322,5 h= 430
    //     // 100 - 40 = 60
    //     // 100 * 0.6
    //     if (h > w) {
    //         let qtp = 42700 / h
    //         let resto = h - (h * (qtp / 100))
    //         let restoPorc = resto * 100
    //         let diferenca = restoPorc / h
    //         let nh = h - (h * (diferenca / 100))
    //         let nw = w - (w * (diferenca / 100))
    //         let xi = 75 + ((430 - nw) / 2)
    //         // let Hp = h / (porcento)
    //         // let difernca = Hp * h
    //         // let NovaH = h - difernca
    //         // console.log('por', porcento)
    //         console.log('novaH', nh)
    //         console.log('novaw', nw)
    //         // let p = h / w
    //         // let nh = h / p
    //         // console.log(nh);
    //         ctx.drawImage(this, xi, 290, nw, nh);
    //     } else if (w > h) {
    //         let qtp = 42700 / w
    //         let resto = w - (w * (qtp / 100))
    //         let restoPorc = resto * 100
    //         let diferenca = restoPorc / w
    //         let nh = h - (h * (diferenca / 100))
    //         let nw = w - (w * (diferenca / 100))
    //         let yi = 290 + ((430 - nh) / 2)
    //         // let Hp = h / (porcento)
    //         // let difernca = Hp * h
    //         // let NovaH = h - difernca
    //         // console.log('por', porcento)
    //         console.log('novaH', nh)
    //         console.log('novaw', nw)
    //         // let p = h / w
    //         // let nh = h / p
    //         // console.log(nh);
    //         ctx.drawImage(this, 80, yi, nw, nh);

    //     } else {
    //         ctx.drawImage(this, 70, 290, 430, 430);

    //     }

    //     // onde this representa a imagem recém carregada
    // });

    // / instancia uma nova imagem

    // então especificamos a url a iniciar o carregamento
    // console.log('canvasHandler', canvasHandler)




}
document.querySelector("#btnDownload").addEventListener('click', () => {
    download()
})
document.addEventListener('load', canvas, true)