var botao = document.getElementById("PlayButton");
var formulario = document.getElementById("Formulario");
var timeDisplay = document.querySelector(".TimeDisplay");

botao.addEventListener("click", function () {
  formulario.style.display = "initial";

  setTimeout(function () {
    timeDisplay.style.display = "flex";
  }, 1100);

});