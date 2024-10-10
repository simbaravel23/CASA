// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
  const nomes = ['Ana', 'João', 'Maria', 'Pedro', 'Carlos', 'Beatriz', 'Lucas', 'Julia', 'Rafael', 'Camila'];
  return nomes[Math.floor(Math.random() * nomes.length)];
}

// Criação das 15 listas
const listasDePessoas = [];

for (let i = 0; i < 15; i++) {
  const lista = [];
  for (let j = 0; j < 5; j++) {
    lista.push({
      nome: gerarNomeAleatorio(),
      idade: Math.floor(Math.random() * 30) + 20 // Idades entre 20 e 49
    });
  }
  listasDePessoas.push(lista);
}

// Função para exibir os dados de uma lista usando diferentes laços e métodos
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

  // Exemplos dos métodos de array
  console.log("Slice (primeiros 3 elementos):", lista.slice(0, 3));
  console.log("Splice (removendo o segundo elemento):", lista.splice(1, 1));
  console.log("Push (adicionando um novo elemento):", lista.push({ nome: 'Novo', idade: 30 }));
  console.log("Pop (removendo o último elemento):", lista.pop());
  console.log("Map (dobrando a idade):", lista.map(item => ({ ...item, idade: item.idade * 2 })));
  console.log("Find (encontrar a primeira pessoa com idade 30):", lista.find(item => item.idade === 30));
  console.log("Filter (filtrar pessoas com mais de 30 anos):", lista.filter(item => item.idade > 30));
}

// Iterando sobre as listas e exibindo os dados
listasDePessoas.forEach(lista => {
  exibirDados(lista);
});
