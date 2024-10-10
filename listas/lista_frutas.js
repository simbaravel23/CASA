// Criando 15 listas com dados aleatórios (exemplo)
const frutas = ['maçã', 'banana', 'laranja'];
for (let i = 0; i < 15; i++) {
  const fruta = [];
  for (let j = 0; j < 10; j++) {
    lista.push({ nome: `Nome ${j+1}`, dado: Math.random() });
  }
  listas.push(fruta);
}

// Função para exibir os dados de uma lista usando diferentes laços
function exibirDados(fruta) {
  console.log("Usando for:");
  for (let i = 0; i < fruta.length; i++) {
    console.log(fruta[i]);
  }

  console.log("Usando while:");
  let i = 0;
  while (i < fruta.length) {
    console.log(fruta[i]);
    i++;
  }

  console.log("Usando map:");
  fruta.map(item => console.log(item));

  console.log("Usando forEach:");
  fruta.forEach(item => console.log(item));
}

// Exibindo os dados de cada lista e aplicando os métodos
listas.forEach(fruta => {
  exibirDados(fruta);

  // Exemplo de uso dos métodos (adapte conforme necessário)
  console.log("Slice:", fruta.slice(2, 5));
  console.log("Splice:", fruta.splice(1, 2));
  console.log("Push:", fruta.push({ nome: "Novo item", dado: 0.5 }));
  console.log("Pop:", fruta.pop());
  console.log("Map:", fruta.map(item => item.nome));
  console.log("Filter:", fruta.filter(item => item.dado > 0.5));
});
