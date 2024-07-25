import getPalavra from "./palavras.js";

const contentBtnsLetras =  document.querySelector(".btn-letras");
const contentAdivinheLetras = document.querySelector(".adivinhe-letras");
const img = document.querySelector("img");
const contentDicaLetras = document.querySelector(".dica-letras");
const btnNovoJogo = document.querySelector(".btn-novo-jogo");
btnNovoJogo.onclick = () => init();
let indexImg;

init();

function init() {
    indexImg = 1;
    img.src="./assets/img1.png";

    generateAdivinheLetras();
    generateButtons();
}

function generateAdivinheLetras() {
    contentAdivinheLetras.textContent = ""

    const {palavra, dica} = getPalavra();
    const palavraSemAcento = palavra
        .normalize("NFD")
        .replace(/[\u0300-\u836f]/g, "");

    Array.from(palavraSemAcento).forEach((letra) => {
        const span = document.createElement("span");

        span.textContent = "_";
        span.setAttribute("palavra", letra.toUpperCase());
        contentAdivinheLetras.appendChild(span);
    });

    contentDicaLetras.textContent = `Dica: ${dica}`;

}

function respostaErrada() {
    indexImg++;
    img.src = `./assets/img${indexImg}.png`;

    if (indexImg === 7) {
        setTimeout(() => {
            alert("Perdeu! Tente novamente :p");
            init();
        }, 100);
    }
}

function verifyLetra(letra) {
    const arr = document.querySelectorAll(`[palavra="${letra}"]`);

    if(!arr.length) respostaErrada();

    arr.forEach((e) => {
        e.textContent = letra;
    });

    const spans = document.querySelectorAll(`.adivinhe-letras span`);
    const ganhou = !Array.from(spans).find((span) => span.textContent === "_");

    if(ganhou) {
        setTimeout(() => {
            alert("Ganhou! Parabéns :)");
            init();
        }, 100);
    }
}

function generateButtons() {
    contentBtnsLetras.textContent = "";

    for(let i = 97; i <123; i++) {
        const btn = document.createElement("button");
        const letra = String.fromCharCode(i).toUpperCase();
        btn.textContent = letra;

        btn.onclick = () => {
            btn.disabled = true;
            btn.style.backgroundColor = "#8C8C88"
            verifyLetra(letra);
        };

        contentBtnsLetras.appendChild(btn);
    }
}

