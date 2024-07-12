<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PTGUESS</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="shortcut icon" href="Imagens/favicon.png" type="image/x-icon" />
  <!-- Option 1: Include in HTML -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>

<body>
  <div class="caixa">
    <img id="confetti" src="./Imagens/648695_03eca.gif" alt="Confetti">
    <div class="title-row">
      <div class="Title-column">
        <div class="Titulo">
          <h1>PTGUESS</h1>
        </div>
      </div>
      <div class="Hamburguer-column">
        <div class=" off-screen-menu">
          <div class="side-menu-row">
            <ul>
              <div class="row">
                <details>
                  <summary style="cursor:pointer">Dificuldade</summary>
                  <div class="difficulty-row">
                    <div class="difficulty-column">
                      <button class="difficulty-button active" id="botao-facil">Fácil</button>
                    </div>
                    <div class="difficulty-column">
                      <button class="difficulty-button" id="botao-medio">Medio</button>
                    </div>
                    <div class="difficulty-column">
                      <button class="difficulty-button" id="botao-dificil">Dificil</button>
                    </div>
                  </div>
                </details>
              </div>
              <div class="row">
                <a>Tema: <i class="bi-moon" id="toggleLight"></i></a><br />
              </div>
              <div class="row">
                <a>Sobre Nós</a><br />
              </div>
              <div class="row">
                <a>Sugestôes</a>
              </div>
            </ul>
          </div>
        </div>
        <nav>
          <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="SubTitulo">
        <p class="subtituloText">Encontra a palavra antes que o tempo termine!</p>
        <p class="subtituloText">Quanto mais rápido adivinhares mais pontos ganhas!</p>
      </div>
    </div>
    <div class="row">
      <div class="PlayButton">
        <form action="" method="post">
          <button type="button" id="PlayButton">JOGAR</button>
        </form>
      </div>
    </div>
    <div class="row" style="text-align:center">
      <div class="Formulario">
        <form action="" autocomplete="on">
          <input type="text" autocomplete="off" name="palavra" id="Formulario" placeholder="Insira a palavra" disabled />
        </form>
      </div>
    </div>
    <div class="Image-row">
      <div class="ImageBox">
        <h2 id="tema" class="TemaBox"></h2>
        <img id="imagem" draggable="false" src="" alt="Imagem da palavra secreta">
      </div>
    </div>
    <div class="row">
      <div class="TimeDisplay">
        <div class="row">
          <div class="Time-column" style="align-content:flex-end">
            <div class="Time-Box">
              <h5 id="minuto-text">MINUTOS</h5>
              <h1 id="minuto">02</h1>
            </div>
          </div>
          <div class="Time-column">
            <div class="Time-Box">
              <h5 id="segundo-text">SEGUNDOS</h5>
              <h1 id="segundo">30</h1>
            </div>
          </div>
          <div class="Time-column" style="align-content:flex-start">
            <div class=" Time-Box">
              <h5 id="milisegundo-text">MILISEGUNDOS</h5>
              <h1 id="milisegundo">99</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/script.js"></script>
  <script src="js/jogo.js"></script>
</body>

</html>