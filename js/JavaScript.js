var botao = document.getElementById("PlayButton");
var formulario = document.getElementById("Formulario");
var timeDisplay = document.querySelector(".TimeDisplay");

//------------------------------------------------------------------

var minuto = document.getElementById("minuto");
var segundo = document.getElementById("segundo");
var milisegundo = document.getElementById("milisegundo");

//------------------------------------------------------------------

botao.addEventListener("click", function () {
  formulario.style.display = "initial";
  setTimeout(function () {
    timeDisplay.style.display = "flex";
  }, 1100);

  setTimeout(() => {
    botao.innerText = "REINICIAR";
    let minuto = 2;
    let segundo = 30;
    let milisegundo = 99;

    const timer = setInterval(() => {

      milisegundo--;

      if (milisegundo < 0) {
        milisegundo = 99;
        segundo--;
        if (segundo < 0) {
          segundo = 59;
          minuto--;
          if (minuto < 0) {
            clearInterval(timer); //TERMINAR O TIMER
            botao.innerText = "RECOMEÇAR";

            minuto = 0;
            segundo = 0;
            milisegundo = 0;

            document.getElementById("minuto").innerText = "00";
            document.getElementById("segundo").innerText = "00";
            document.getElementById("milisegundo").innerText = "00";
          }
        }
      }

      const minutoFormatado = minuto < 10 ? '0' + minuto : minuto; //adicionado um zero à esquerda, caso contrário,
      const segundoFormatado = segundo < 10 ? '0' + segundo : segundo;// o valor do minuto é mantido. Isso garante que o
      const milisegundoFormatado = milisegundo < 10 ? '0' + milisegundo : milisegundo;//minuto seja exibido sempre com dois dígitos.

      document.getElementById("minuto").innerText = minutoFormatado;
      document.getElementById("segundo").innerText = segundoFormatado;
      document.getElementById("milisegundo").innerText = milisegundoFormatado;

    }, 10); //REFRESH A CADA 10 SEGUNDOS


    botao.addEventListener("click", function () {
      if (botao.innerText === "REINICIAR" || botao.innerText === "RECOMEÇAR") {
        location.reload(); // Refresh da pagina
      }
    });

  }, 2000);


});