// Cadastro de produtos

let produto1 = {

    nome: "Notebook",
    preco: 5000,
    quantidadeEstoque: 80 
};

let produto2 = {

    nome: "Celular",
    preco: 3000,
    quantidadeEstoque: 50
};

let produto3 = {

    nome: "Fone Bluetooth",
    preco: 100,
    quantidadeEstoque: 20
};

let produtos = [produto1, produto2, produto3];

let maisCaro = produto1;

if (produto2.preco > maisCaro.preco) {

    maisCaro = produto2;
}

if (produto3.preco > maisCaro.preco) {

    maisCaro = produto3;
}


let menorEstoque = produto1;

if (produto2.quantidadeEstoque < menorEstoque.quantidadeEstoque) {

    menorEstoque = produto2;
}

if (produto3.quantidadeEstoque < menorEstoque.quantidadeEstoque) {

    menorEstoque = produto3;
}

console.log("Produto mais caro:", maisCaro.nome);
console.log("Produto com menor estoque:", menorEstoque.nome);