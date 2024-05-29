document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.Formulario form'); // Seleciona o formulário
  var input = document.getElementById('Formulario'); // Seleciona o campo de entrada

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var palavra = input.value.trim(); // Obtém a palavra inserida
    console.log("Palavra inserida:", palavra); // Exibe a palavra no console

    // Limpa o campo de entrada
    input.value = '';
  });

  // Função para desativar o campo de entrada quando o tempo acabar
  function desativarCampoDeEntrada() {
    input.disabled = true; // Desativa o campo de entrada
  }

  // Verifica se o tempo acabou
  function verificarTempo() {
    var botao = document.getElementById("PlayButton");
    if (botao.innerText === "RECOMEÇAR") {
      desativarCampoDeEntrada();
    }
  }

  // Chama a função de verificação de tempo inicialmente
  verificarTempo();

  // Verifica o tempo a cada segundo
  setInterval(verificarTempo, 1000);
});
