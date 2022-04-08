//! --------------------- CARRINHO ----------------------------------
const contCarrinho = document.querySelector('.containerCarrinho ul');
const precoTotal = document.getElementById("precoTotal");
const somaPreco = [];
let soma = [];


function addCarrinho(listaProdutosCar) {
    contCarrinho.innerHTML = '';

    listaProdutosCar.forEach((produto) => {

    const li = document.createElement('li');
    const imgCar = document.createElement('img');
    const nomeCar = document.createElement('span');
    const precoCar = document.createElement('p');
    const secaoCar = document.createElement('p');

        imgCar.src = produto.img;
        img.alt = produto.nome;
        nomeCar.innerText = produto.nome;
        precoCar.innerText = produto.preco;
        secaoCar.innerText = produto.secao;


        li.append(imgCar, nomeCar, precoCar, secaoCar);
        contCarrinho.append(li);
        ul.appendChild(li)

    })
}


btnCarrinho.addEventListener('click', addCarrinho)


function somandoPreco(array) {
    soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

