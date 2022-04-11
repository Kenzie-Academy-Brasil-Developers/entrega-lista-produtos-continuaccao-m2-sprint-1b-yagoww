const ul = document.querySelector('.containerListaProdutos ul');
const listaCarrinho = document.querySelector('#listaCarrinho')

function montarListaProdutos(listaProdutos) {
    const precoTotal = document.getElementById("precoTotal");
    let precoItens = 0;

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

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        const btnCarrinho = document.createElement('button');
        btnCarrinho.classList.add = 'btnCarrinho';
        btnCarrinho.innerText = 'Adicionar ao Carrinho';
        btnCarrinho.id = produto.id;
        
        btnCarrinho.addEventListener("click", () => {
            const li = document.createElement("li");
            const img = document.createElement('img');
            const nome = document.createElement("span");
            const preco = document.createElement("span");
            const secao = document.createElement("span");
            
            img.src = produto.img;
            img.alt = produto.nome;
            nome.innerText = produto.nome;
            preco.innerText = produto.preco;
            secao.innerText = produto.secao;

            li.appendChild(img)
            li.appendChild(nome)
            li.appendChild(preco)
            li.appendChild(secao)
            listaCarrinho.appendChild(li);

            precoItens += Number.parseFloat(produto.preco);
            precoTotal.innerHTML = precoItens.toFixed(2).replace(".", ",");
        })

        li.append(img, h3, p, span, ol, btnCarrinho);
        ul.appendChild(li);
    });

}
montarListaProdutos(produtos);