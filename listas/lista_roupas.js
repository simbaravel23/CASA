const roupas = ['camisa', 'vestido', 'casaco', 'saia', 'regata'];

// Função para exibir os elementos de um array usando diferentes métodos
function exibirDados(array) {
  console.log("Usando for:");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // Acessa cada elemento do array pelo índice
  }

  console.log("Usando while:");
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++; // Incrementa o índice para passar para o próximo elemento
  }

  console.log("Usando forEach:");
  array.forEach(roupa => console.log(roupa)); // Itera sobre cada elemento e executa uma função
}

// Chamando a função para exibir as roupas
exibirDados(roupas);

// Exemplos de uso de outros métodos
console.log("Slice:", roupas.slice(2, 4)); // Cria um novo array com os elementos de índice 2 e 3 (não incluindo o 4)
console.log("Splice:", roupas.splice(1, 2)); // Remove 2 elementos a partir do índice 1 e retorna os elementos removidos
console.log("Push:", roupas.push('gravata')); // Adiciona um novo elemento ao final do array
console.log("Pop:", roupas.pop()); // Remove e retorna o último elemento do array
console.log("Map:", roupas.map(roupa => roupa.toUpperCase())); // Cria um novo array com todas as roupas em maiúsculas
console.log("Filter:", roupas.filter(roupa => roupa.startsWith('c'))); // Filtra as roupas que começam com a letra 'c'