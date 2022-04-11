function mostrarTodos() {
    montarListaProdutos(produtos);
}
const mostrarTodos_btn = document.querySelector('.estiloGeralBotoes--mostrarTodos');
mostrarTodos_btn.addEventListener('click', mostrarTodos);

function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);

}
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


function filtroBuscarNome() {
    const input = document.querySelector('.campoBuscaPorNome');

    const listaProduto = produtos.filter((produto) => {
        const nomeProduto = produto.nome.toLowerCase();
        const categoriaProduto = produto.categoria.toLowerCase();
        const secaoProduto = produto.secao.toLowerCase();
        
        if(nomeProduto === input.value.toLowerCase()){
            return nomeProduto
        }if(categoriaProduto === input.value.toLowerCase()) {
            return categoriaProduto;
        }if(secaoProduto === input.value.toLowerCase()) {
            return secaoProduto;
        }
    });
    montarListaProdutos(listaProduto);

}
const buscaPorNomes_btn = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
buscaPorNomes_btn.addEventListener('click', filtroBuscarNome);

