const ul = document.querySelector('.containerListaProdutos ul');


function montarListaProdutos(listaProdutos) {

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');

        for(let i = 0; i < produto.componentes.length; i++) {
            const itemComponentes = document.createElement('li');
            itemComponentes.innerText = produto.componentes[i]

            ol.appendChild(itemComponentes);
        }

        const btnCarrinho = document.createElement('button');
        btnCarrinho.classList.add = 'btnCarrinho';
        btnCarrinho.innerText = 'Adicionar ao Carrinho';
        btnCarrinho.id = produto.id;

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        li.append(img, h3, p, span, ol, btnCarrinho);
        ul.appendChild(li);


    });
}
montarListaProdutos(produtos);
