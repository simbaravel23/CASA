const numeros = [10, 20, 30, 40, 50];

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

// Chamando a função para exibir os números
exibirDados(numeros);

// Exemplos de uso de outros métodos
console.log("Slice:", numeros.slice(2, 4)); // Obtém os elementos de índice 2 e 3
console.log("Splice:", numeros.splice(1, 2)); // Remove os elementos de índice 1 e 2
console.log("Push:", numeros.push(60)); // Adiciona um elemento ao final
console.log("Pop:", numeros.pop()); // Remove o último elemento
console.log("Map:", numeros.map(numero => numero * 2)); // Multiplica cada número por 2
console.log("Filter:", numeros.filter(numero => numero > 30)); // Filtra números maiores que 30