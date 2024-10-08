// Criando 15 listas com dados aleatórios (exemplo)
const listas = [];
for (let i = 0; i < 15; i++) {
  const lista = [];
  for (let j = 0; j < 10; j++) {
    lista.push({ nome: `Nome ${j+1}`, dado: Math.random() });
  }
  listas.push(lista);
}

// Função para exibir os dados de uma lista usando diferentes laços
function exibirDados(lista) {
  console.log("Usando for:");
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }

  console.log("Usando while:");
  let i = 0;
  while (i < lista.length) {
    console.log(lista[i]);
    i++;
  }

  console.log("Usando map:");
  lista.map(item => console.log(item));

  console.log("Usando forEach:");
  lista.forEach(item => console.log(item));
}

// Exibindo os dados de cada lista e aplicando os métodos
listas.forEach(lista => {
  exibirDados(lista);

  // Exemplo de uso dos métodos (adapte conforme necessário)
  console.log("Slice:", lista.slice(2, 5));
  console.log("Splice:", lista.splice(1, 2));
  console.log("Push:", lista.push({ nome: "Novo item", dado: 0.5 }));
  console.log("Pop:", lista.pop());
  console.log("Map:", lista.map(item => item.nome));
  console.log("Filter:", lista.filter(item => item.dado > 0.5));
});
