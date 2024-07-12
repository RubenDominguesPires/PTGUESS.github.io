<?php
$jsonTema = __DIR__ . '/palavras_e_temas.json'; // Caminho absoluto para o arquivo JSON

header('Content-Type: application/json'); // Define o tipo de conteúdo como JSON

// Verifica se o arquivo existe
if (file_exists($jsonTema)) {
  // Lê o conteúdo do arquivo
  $jsonData = file_get_contents($jsonTema);

  // Decodifica o JSON
  $decodedData = json_decode($jsonData, true);

  // Verifica se o JSON foi decodificado com sucesso
  if ($decodedData === null) {
    echo json_encode(['error' => 'Erro ao decodificar o JSON.']);
  } else {
    // Escolhe um tema aleatório
    $temas = array_keys($decodedData);
    $temaAleatorio = $temas[array_rand($temas)];

    // Escolhe uma palavra aleatória do tema escolhido aleatoriamente
    $palavrasTema = $decodedData[$temaAleatorio];
    $palavraAleatoria = $palavrasTema[array_rand($palavrasTema)];

    // Converte a palavra para minúsculas
    $palavraLowerCase = strtolower($palavraAleatoria['nome']);

    // Retorna a palavra aleatória em minúsculas e a imagem como resposta JSON
    echo json_encode(['tema' => $temaAleatorio, 'palavra' => $palavraLowerCase, 'imagem' => $palavraAleatoria['imagem']]);
  }
} else {
  echo json_encode(['error' => 'O arquivo JSON não foi encontrado.']);
}
