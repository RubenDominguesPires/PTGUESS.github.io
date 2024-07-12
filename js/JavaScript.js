var botao = document.getElementById("PlayButton");
var formulario = document.getElementById("Formulario");
var timeDisplay = document.querySelector(".TimeDisplay");
var imageDisplay = document.querySelector(".Image-row");

//------------------------------------------------------------------

var minuto_text = document.getElementById("minuto-text");
var segundo_text = document.getElementById("segundo-text");
var milisegundo_text = document.getElementById("milisegundo-text");

//------------------------------------------------------------------

var imagem = document.getElementById("imagem");

//------------------------------------------------------------------
//------------------------DIFICULDADE-------------------------------

var facil = document.getElementById("botao-facil");
var medio = document.getElementById("botao-medio");
var dificil = document.getElementById("botao-dificil");
var dificuldade = "Fácil";

var minuto = 2;
var segundo = 30;
var milisegundo = 99;
//------------------------------------------------------------------

function ativarCampoDeEntrada() {
  formulario.disabled = false;
}

function desativarCampoDeEntrada() {
  formulario.disabled = true;
}

function mudarTextoComEcra() {

  var ecra = window.innerWidth;

  if (ecra <= 910) {
    minuto_text.innerText = 'Min';
    segundo_text.innerText = 'Seg';
    milisegundo_text.innerText = 'MS';

    if (ecra <= 430) {
      minuto_text.innerText = 'M';
      segundo_text.innerText = 'S';
      milisegundo_text.innerText = 'MS';
    }
  } else {
    minuto_text.innerText = 'Minutos';
    segundo_text.innerText = 'Segundos';
    milisegundo_text.innerText = 'Milissegundos';
  }
}
mudarTextoComEcra();
window.addEventListener('resize', mudarTextoComEcra);

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// THEME CODE
const $html = document.querySelector("html");
const toggle = document.getElementById("toggleLight");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-sun");
  $html.classList.toggle("dark-mode");
})

let timer;

function Tempo() {
  botao.addEventListener("click", function () {
    imagem.style.filter = 'blur(3px)';
    formulario.style.display = "initial";
    setTimeout(function () {
      timeDisplay.style.display = "flex";
    }, 1100);
    setTimeout(function () {
      imageDisplay.style.display = "flex";
    }, 1800);

    setTimeout(() => {
      botao.innerText = "REINICIAR";
      if (timer) {
        clearInterval(timer);
      }

      timer = setInterval(() => {
        milisegundo--;

        if (milisegundo < 0) {
          milisegundo = 99;
          segundo--;
          if (segundo < 0) {
            segundo = 59;
            minuto--;
            if (minuto < 0) {
              clearInterval(timer); // Termina o timer
              botao.innerText = "RECOMEÇAR";

              if (botao.innerText === "RECOMEÇAR") {
                desativarCampoDeEntrada();
                imagem.style.filter = 'blur(0px)';
              }

              minuto = 0;
              segundo = 0;
              milisegundo = 0;

              document.getElementById("minuto").innerText = "00";
              document.getElementById("segundo").innerText = "00";
              document.getElementById("milisegundo").innerText = "00";
            }
          }
        }

        const minutoFormatado = minuto < 10 ? '0' + minuto : minuto;
        const segundoFormatado = segundo < 10 ? '0' + segundo : segundo;
        const milisegundoFormatado = milisegundo < 10 ? '0' + milisegundo : milisegundo;

        document.getElementById("minuto").innerText = minutoFormatado;
        document.getElementById("segundo").innerText = segundoFormatado;
        document.getElementById("milisegundo").innerText = milisegundoFormatado;

      }, 10); // Atualiza a cada 10 milissegundos

    }, 2000);
  });
}
Tempo();
