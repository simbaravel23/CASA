// Criando 15 listas com dados variados
const listas = [];
for (let i = 0; i < 15; i++) {
    const lista = [];
    for (let j = 0; j < 10; j++) {
        lista.push({
            nome: `Item ${j+1}`, // Nome mais genérico
            dado: Math.random(),
            tipo: [ 'objeto'][Math.floor(Math.random() * 3)] // Adiciona um tipo aleatório
        });
    }
    listas.push(lista);
}

// Função para exibir os dados de uma lista de forma mais concisa
function exibirLista(lista) {
    console.log('Lista:', lista);
    console.log('Usando forEach:', lista.forEach(item => console.log(item)));
    console.log('Usando map:', lista.map(item => item.nome));
}

// Exibindo os dados de cada lista e aplicando os métodos
listas.forEach(lista => {
    exibirLista(lista);

    // Exemplos de uso de métodos, variando os dados de acordo com o tipo
    console.log('Filtrando itens do tipo "objeto":', lista.filter(item => item.tipo === 'objeto'));
    // ... outros exemplos de acordo com os tipos de dados
});

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
