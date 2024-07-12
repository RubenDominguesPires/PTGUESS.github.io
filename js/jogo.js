document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o formulário
  var form = document.querySelector('.Formulario form');
  // Seleciona o campo de entrada
  var input = document.getElementById('Formulario');
  // Variáveis para armazenar a palavra, imagem e tema vindos do PHP
  var palavraPHP;
  var imagemPHP;
  var temaPHP;
  // Ativa o campo de entrada ao carregar a página
  ativarCampoDeEntrada();

  // Função para desativar o campo de entrada
  function desativarCampoDeEntrada() {
    input.disabled = true;
  }

  // Função para ativar o campo de entrada
  function ativarCampoDeEntrada() {
    input.disabled = false;
  }

  // Função para buscar a palavra e a imagem do PHP
  function buscarDadosPHP() {
    fetch('./dados/dados.php')
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error(data.error);
        } else {
          palavraPHP = data.palavra;
          imagemPHP = data.imagem;
          temaPHP = data.tema;

          console.log("Palavra do PHP:", palavraPHP); // Exibe a palavra do PHP no console
          console.log("Imagem do PHP:", imagemPHP); // Exibe a imagem do PHP no console

          // Define o texto do tema
          var temaElement = document.getElementById('tema');
          temaElement.textContent = "Tema: " + temaPHP;

          // Define a fonte da imagem
          var imgElement = document.getElementById('imagem');
          imgElement.src = imagemPHP;
        }
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }

  // Chama a função para buscar os dados ao carregar a página
  buscarDadosPHP();

  // Adiciona um ouvinte de evento de submissão ao formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém a palavra inserida em minúsculas
    var palavraUsuario = input.value.trim().toLowerCase();
    console.log("Palavra inserida:", palavraUsuario); // Exibe a palavra no console

    // Verifica se a palavra do usuário é igual à palavra do PHP
    if (palavraUsuario === palavraPHP) {
      imagem.style.filter = 'blur(0px)';
      console.log("As palavras são iguais");
      botao.innerText = "GANHASTE!";
      desativarCampoDeEntrada();
      clearInterval(timer);

      var confetti = document.getElementById('confetti');
      confetti.style.display = 'block';

    } else {
      console.log("As palavras são diferentes");
    }
    // Limpa o campo de entrada
    input.value = '';
  });

  // Seleciona todos os botões de dificuldade e adiciona ouvintes de evento de clique
  const buttons = document.querySelectorAll('.difficulty-button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões e adiciona ao botão clicado
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Define os valores de tempo e o filtro da imagem com base na dificuldade selecionada
      if (facil.classList.contains('active')) {
        dificuldade = "Fácil";
        minuto = 2;
        segundo = 30;
        milisegundo = 99;
        imagem.style.filter = 'blur(3px)';
        buscarDadosPHP();
      } else if (medio.classList.contains('active')) {
        dificuldade = "Médio";
        minuto = 1;
        segundo = 20;
        milisegundo = 99;
        imagem.style.filter = 'blur(15px)';
        buscarDadosPHP();
      } else if (dificil.classList.contains('active')) {
        dificuldade = "Difícil";
        minuto = 0;
        segundo = 45;
        milisegundo = 99;
        imagem.style.filter = 'blur(35px)';
        buscarDadosPHP();
      }

      console.log(dificuldade);
    });
  });

  // Adiciona um ouvinte de evento de clique ao botão de iniciar/reiniciar
  botao.addEventListener("click", function () {
    var confetti = document.getElementById('confetti');
    confetti.style.display = 'none';
    if (botao.innerText === "REINICIAR" || botao.innerText === "RECOMEÇAR" || botao.innerText === "GANHASTE!") {
      ativarCampoDeEntrada();
      buscarDadosPHP();
      clearInterval(timer);

      // Redefine os valores de tempo e o filtro da imagem com base na dificuldade atual
      if (dificuldade === "Fácil") {
        minuto = 2;
        segundo = 30;
        milisegundo = 99;
        imagem.style.filter = 'blur(3px)';
      } else if (dificuldade === "Médio") {
        minuto = 1;
        segundo = 20;
        milisegundo = 99;
        imagem.style.filter = 'blur(15px)';
      } else if (dificuldade === "Difícil") {
        minuto = 0;
        segundo = 45;
        milisegundo = 99;
        imagem.style.filter = 'blur(35px)';
      }

      return;
    }
  });
});
