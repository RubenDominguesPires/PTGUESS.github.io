<?php
$jsonTema = __DIR__ . '/palavras_e_temas.json'; // Caminho absoluto para o arquivo JSON

// Verifica se o arquivo existe
if (file_exists($jsonTema)) {
  // Lê o conteúdo do arquivo
  $jsonData = file_get_contents($jsonTema);

  // Decodifica o JSON
  $decodedData = json_decode($jsonData, true);

  // Verifica se o JSON foi decodificado com sucesso
  if ($decodedData === null) {
    echo "Erro ao decodificar o JSON.";
  } else {
    // Escolhe um tema aleatório
    $temas = array_keys($decodedData);
    $temaAleatorio = $temas[array_rand($temas)];

    // Exibe o tema aleatório
    echo "<p>Tema Aleatório: $temaAleatorio</p>";

    // Exibe uma palavra aleatória do tema escolhido aleatoriamente
    $palavrasTema = $decodedData[$temaAleatorio];
    $palavraAleatoria = $palavrasTema[array_rand($palavrasTema)];

    // Verifica se a palavra é um array
    if (is_array($palavraAleatoria)) {
      // Se for um array, exibe seu conteúdo
      echo "<p>Palavra Aleatória:</p>";
      echo "<pre>" . print_r($palavraAleatoria, true) . "</pre>";
    } else {
      // Se for uma string, exibe a palavra normalmente
      echo "<p>Palavra Aleatória: $palavraAleatoria</p>";
    }
  }
} else {
  echo "O arquivo JSON não foi encontrado.";
}
