<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PTGUESS</title>
  <link rel="stylesheet" href="css\styles.css" />
  <link rel="shortcut icon" href="Imagens\favicon.png" type="image/x-icon" />
</head>

<body>
  <!--CAIXA-->
  <div class="caixa">
    <!--TITULO-->
    <div class="Titulo">
      <!--LIST BUTTON-->
      <!-- <svg
          id="ListButton"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m
             0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg> -->
      <!--/LIST BUTTON-->
      <!--TITULO (h1) PTGUESS-->
      <h1>PTGUESS</h1>
      <!--/TITULO (h1) PTGUESS-->
    </div>
    <!--/TITULO-->
    <div class="SubTitulo">
      <!-- SUBTITULO-->
      <p>Encontra a palavra antes que o tempo termine!</p>
      <p>Quanto mais rapido adivinhares mais pontos ganhas!</p>
      <!-- /SUBTITULO-->
    </div>
    <div class="PlayButton">
      <!--PLAY BUTTON-->
      <button type="button" id="PlayButton">JOGAR</button>
      <!--/PLAY BUTTON-->
    </div>
    <div class="Formulario">
      <form action="" autocomplete="on" style="width: 100%; height: 100%">
        <input type="text" name="palavra" id="Formulario" placeholder="Insira a palavra" />
      </form>
    </div>
    <div class="TimeDisplay">
      <div class="Time-Box">
        <h5>MINUTOS</h5>
        <h1 id="minuto">02</h1>
      </div>
      <div class="Time-Box">
        <h5>SEGUNDOS</h5>
        <h1 id="segundo">30</h1>
      </div>
      <div class="Time-Box">
        <h5>MILISEGUNDOS</h5>
        <h1 id="milisegundo">99</h1>
      </div>
    </div>
  </div>
  <!--/CAIXA-->
  <script src="js\JavaScript.js"></script>
  <script src="js/jogo.js"></script>
</body>

</html>