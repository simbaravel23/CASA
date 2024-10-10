const produtos = [
    { nome: 'Camisa', preço: 50, quantidade: 2 },
    { nome: 'Calça', preço: 80, quantidade: 1 },
    { nome: 'Tênis', preço: 120, quantidade: 1 }
];

// Função para calcular o valor total do carrinho
function calcularTotal(carrinho) {
    return carrinho.reduce((total, produto) => total + produto.preço * produto.quantidade, 0);
}

// Função para adicionar um produto ao carrinho
function adicionarProduto(carrinho, produto) {
    // Verifica se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.nome === produto.nome);

    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        carrinho.push(produto);
    }
}

// Função para remover um produto do carrinho
function removerProduto(carrinho, nomeProduto) {
    const indice = carrinho.findIndex(produto => produto.nome === nomeProduto);
    if (indice !== -1) {
        carrinho.splice(indice, 1);
    } else {
        console.log('Produto não encontrado no carrinho.');
    }
}

// Função para listar os produtos do carrinho de forma detalhada
function listarProdutos(carrinho) {
    console.log('Produtos no carrinho:');
    carrinho.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - ${produto.quantidade} unidades - R$ ${produto.preço * produto.quantidade}`);
    });
}

// Exemplo de uso, demonstrando vários métodos
const carrinho = [];
adicionarProduto(carrinho, { nome: 'Camiseta', preço: 30, quantidade: 1 });
adicionarProduto(carrinho, { nome: 'Calça', preço: 80, quantidade: 1 });

// Listar todos os produtos usando forEach
listarProdutos(carrinho);

// Filtrar produtos com preço acima de 50
const produtosCaros = carrinho.filter(produto => produto.preço > 50);
console.log('Produtos caros:', produtosCaros);

// Aumentar a quantidade de todos os produtos em 10% (usando map)
const carrinhoComDesconto = carrinho.map(produto => ({
    ...produto,
    preço: produto.preço * 1.1
}));
console.log('Carrinho com desconto:', carrinhoComDesconto);

// Ordenar os produtos por preço (usando sort)
carrinho.sort((a, b) => a.preço - b.preço);
console.log('Carrinho ordenado por preço:', carrinho);

// Remover o último produto do carrinho (usando pop)
const ultimoProduto = carrinho.pop();
console.log('Último produto removido:', ultimoProduto);