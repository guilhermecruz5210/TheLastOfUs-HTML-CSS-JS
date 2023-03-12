/*
    OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente

    passo 1 - dar um jeito de pegar elemento HTML dos botoes

    passo 2 - dar um jeito de identificar o clique do usuario no botao

    passo 3 - desmarcar o botao selecionado anterior

    passo 4 - marcar o botao clicado como se estivesse selecionado

    passo 5 - esconder a imagem ativa de fundo anterior

    passo 6 - fazer aparecer a imagem de fundo correspondente ao botao clicado
*/

//  passo 1 - dar um jeito de pegar elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//  passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}