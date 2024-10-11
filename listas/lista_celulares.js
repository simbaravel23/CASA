const instrumentos = [
    { nome: "casio", preço: 2500, marca: "casio", tipo: "esportivo" },
    { nome: "rolex", preço: 80000, marca: "Yama///)//)///", tipo: "Clássico" },
    { nome: "Bateria Acústica", preço: 3500, marca: "Pearl", tipo: "Acústica" },
    { nome: "Teclado", preço: 1200, marca: "Casio", tipo: "Teclado" }
];

// Função para calcular o valor total do carrinho
function calcularTotal(carrinho) {
    return carrinho.reduce((total, instrumento) => total + instrumento.preço * instrumento.quantidade, 0);
}

// Função para adicionar um instrumento ao carrinho
function adicionarInstrumento(carrinho, instrumento) {
    // Verifica se o instrumento já existe no carrinho
    const instrumentoExistente = carrinho.find(item => item.nome === instrumento.nome);

    if (instrumentoExistente) {
        instrumentoExistente.quantidade++;
    } else {
        carrinho.push({ ...instrumento, quantidade: 1 });
    }
}

// Função para remover um instrumento do carrinho
function removerInstrumento(carrinho, nomeInstrumento) {
    const indice = carrinho.findIndex(instrumento => instrumento.nome === nomeInstrumento);
    if (indice !== -1) {
        carrinho.splice(indice, 1);
    } else {
        console.log('Instrumento não encontrado no carrinho.');
    }
}

// Função para listar os instrumentos do carrinho de forma detalhada
function listarInstrumentos(carrinho) {
    console.log('Instrumentos no carrinho:');
    // Usando forEach para iterar sobre os instrumentos
    carrinho.forEach((instrumento, index) => {
        console.log(`${index + 1}. ${instrumento.nome} (${instrumento.marca}) - ${instrumento.quantidade} unidades - R$ ${instrumento.preço * instrumento.quantidade}`);
    });
}

// Exemplo de uso, demonstrando vários métodos
const meuCarrinho = [];
adicionarInstrumento(meuCarrinho, { nome: "Guitarra Elétrica", quantidade: 2 });
adicionarInstrumento(meuCarrinho, { nome: "Violão Clássico", quantidade: 1 });

// Listar os instrumentos no carrinho
listarInstrumentos(meuCarrinho);

// Calcular o total
const total = calcularTotal(meuCarrinho);
console.log('Total da compra:', total);

// Usando while para listar os instrumentos (apenas para demonstração)
console.log('Listando com while:');
let i = 0;
while (i < meuCarrinho.length) {
    console.log(meuCarrinho[i].nome);
    i++;
}

// Filtrar instrumentos por tipo
const instrumentosEletricos = meuCarrinho.filter(instrumento => instrumento.tipo === 'Elétrica');
console.log('Instrumentos elétricos:', instrumentosEletricos);

// Aumentar o preço de todos os instrumentos em 10%
const carrinhoComAumento = meuCarrinho.map(instrumento => ({
    ...instrumento,
    preço: instrumento.preço * 1.1
}));
console.log('Carrinho com aumento de 10%:', carrinhoComAumento);

// Remover o último instrumento do carrinho
const ultimoInstrumento = meuCarrinho.pop();
console.log('Último instrumento removido:', ultimoInstrumento);

// Adicionar um novo instrumento no início do array (unshift)
meuCarrinho.unshift({ nome: "Violino", preço: 1500, marca: "Stradivari", tipo: "Cordas" });
console.log('Carrinho após adicionar violino:', meuCarrinho);