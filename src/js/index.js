// objetivo 1 - quando clicar no botão de troca tema adicionar a classe modo-escuro no body pra que os estilos de modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no  Js o elemento Html correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");


// passo 2 - dar um jeito de pegar no Js o elemento Html correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - remover a classe do modo-escuro do body
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if
    (modoEscuroEstaAtivo){


        // passo 8 - trocar a imagem do botão alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/sun.png");
    }else{

    // passo 5 - trocar a imagem do botão de alterar tema pra lua
    imagemBotaoTrocaDeTema.setAttribute("src","./src/imagens/moon.png")
    }




});

