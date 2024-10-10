const cores = ['azul', 'vermelho', 'amarelo', 'verde', 'rosa'];

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
  array.forEach(cor => console.log(cor)); // Usar 'cor' ao invés de 'item' para maior clareza
}

// Chamando a função para exibir as cores
exibirDados(cores);

// Exemplos de uso de outros métodos
console.log("Slice:", cores.slice(2, 4)); // Obtém os elementos de índice 2 e 3
console.log("Splice:", cores.splice(1, 2)); // Remove os elementos de índice 1 e 2
console.log("Push:", cores.push('roxo')); // Adiciona uma nova cor
console.log("Pop:", cores.pop()); // Remove a última cor
console.log("Map:", cores.map(cor => cor.toUpperCase())); // Converte todas as cores para maiúsculas
console.log("Filter:", cores.filter(cor => cor.startsWith('a'))); // Filtra cores que começam com 'a'