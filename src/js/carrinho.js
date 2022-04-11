const contCarrinho = document.querySelector('.containerCarrinho ul');
let addCarrinho = [];

const precoTotal = document.getElementById("precoTotal");
const somaPreco = [];
let soma = [];
//! ------------ Carrinho ------------
function montarCarrinho () {
    contCarrinho.innerHTML = '';

    addCarrinho.forEach((produto) => {
        const li = document.createElement('li');
        const imgCar = document.createElement('img');
        const nomeCar = document.createElement('span');
        const precoCar = document.createElement('p');
        const secaoCar = document.createElement('p');

        imgCar.src = produto.img;
        nomeCar.innerText = produto.nome;
        precoCar.innerText = produto.preco;
        secaoCar.innerText = produto.secao;

        
        li.append(imgCar, nomeCar, precoCar, secaoCar);
        contCarrinho.append(li);
        
    somaPreco.push(Number(preco));
    precoTotal.innerText = somandoPreco(somaPreco);
}); 
    btnCarrinho.addEventListener('click', addCarrinho);
}

//! ------------ Preço ------------
function somandoPreco(array) {
    soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}