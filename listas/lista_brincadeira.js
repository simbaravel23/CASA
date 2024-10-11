const brincadeira = ['queimada','pega-pega',',pic-esconde','pic-bandeira','pula corda'];

// Função para exibir os dados de um array de forma flexível
function exibirDados(array) {
  console.log("Usando for:");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log("Usando while:");
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }

  console.log("Usando forEach:");
  array.forEach(item => console.log(item));
}

// Chamando a função para exibir as brincadeiras 
exibirDados(brincadeira);

// Exemplos de uso de outros métodos
console.log("Slice:", brincadeira.slice(2, 4)); // Obtém os elementos de índice 2 e 3
console.log("Splice:", brincadeira.splice(1, 2)); // Remove os elementos de índice 1 e 2
console.log("Push:", brincadeira.push(60)); // Adiciona um elemento ao final
console.log("Pop:", brincadeira.pop()); // Remove o último elemento
console.log("Map:", brincadeira.map(numero => numero * 2)); // Multiplica cada número por 2
console.log("Filter:", brincadeira.filter(item => item)); 