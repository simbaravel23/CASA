const carros = ['Gol', 'Corolla', 'Civic'];
for (let i = 0; i < 15; i++) {
  const carro = [];
  for (let j = 0; j < 10; j++) {
    carro.push({ nome: `Nome ${j+1}`, dado: Math.random() });
  }
  listas.push(carro);
}

// Função para exibir os dados de uma lista usando diferentes laços
function exibirDados(carro) {
  console.log("Usando for:");
  for (let i = 0; i < lista.length; i++) {
    console.log(carro[i]);
  }

  console.log("Usando while:");
  let i = 0;
  while (i < lista.length) {
    console.log(carro[i]);
    i++;
  }

  console.log("Usando map:");
  carro.map(item => console.log(item));

  console.log("Usando forEach:");
  carro.forEach(item => console.log(item));
}

// Exibindo os dados de cada lista e aplicando os métodos
listas.forEach(carro => {
  exibirDados(carro);

  // Exemplo de uso dos métodos (adapte conforme necessário)
  console.log("Slice:", carro.slice(2, 5));
  console.log("Splice:", carro.splice(1, 2));
  console.log("Push:", carro.push({ nome: "Novo item", dado: 0.5 }));
  console.log("Pop:", carro.pop());
  console.log("Map:", carro.map(item => item.nome));
  console.log("Filter:", carro.filter(item => item.dado > 0.5));
});
