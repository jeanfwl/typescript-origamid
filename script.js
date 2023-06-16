// veja essa estrutura inicial, onde na annotation
// nós dizemos que é um objeto {}, e em seguida a
// expressão normal para iniciar um objeto = { }...
//const carro: {} = {};
// porém, para cada propriedade desse objeto, nós
// devemos adicionar na annotation o seu nome e tipo de valor
var carro = {
    marca: 'Audi',
    portas: 4
};
var barato = 200 < 400 ? true : 'Produto caro';
function somar(a, b) {
    return a + b;
}
somar(4, 5);
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
var livro = {
    nome: 'Livro',
    preco: '23'
};
var novoLivro = transformarPreco(livro);
console.log(novoLivro);
