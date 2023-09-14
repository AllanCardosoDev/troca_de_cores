const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

/* Este código JavaScript cria uma aplicação web simples que gera cores hexadecimais aleatórias e as exibe na página quando um botão é clicado. Vou explicar cada parte do código:

const hex: É uma matriz (array) que contém os caracteres e números necessários para criar cores hexadecimais. Ela inclui os números de 0 a 9 e as letras de "A" a "F", que são usados ​​para criar valores hexadecimais válidos.

const btn: É uma referência ao elemento HTML com o ID "btn". Presumivelmente, este é um botão na sua página que o usuário pode clicar para gerar uma nova cor.

const color: É uma referência ao elemento HTML com a classe "color". Presumivelmente, este é um elemento de texto ou caixa onde a cor gerada será exibida.

btn.addEventListener("click", function () { ... });: Este trecho de código adiciona um ouvinte de eventos ao botão com o ID "btn". Quando o botão é clicado, a função anônima dentro deste evento é executada.

Dentro da função anônima, o código gera uma cor hexadecimal aleatória. Ele faz isso criando uma string hexColor com "#" como prefixo e, em seguida, adiciona seis caracteres aleatórios da matriz hex para representar a cor.

color.textContent = hexColor;: Define o conteúdo de texto do elemento com a classe "color" para a cor hexadecimal gerada. Isso exibe a cor na página.

document.body.style.backgroundColor = hexColor;: Define a cor de fundo do corpo da página para a cor hexadecimal gerada. Isso muda a cor de fundo de toda a página para a cor gerada.

function getRandomNumber() { ... }: Esta função gera um número aleatório entre 0 e o comprimento da matriz hex. Ela é usada para selecionar caracteres aleatórios da matriz hex para formar a cor hexadecimal.

Em resumo, este código cria uma página web interativa que gera e exibe cores hexadecimais aleatórias toda vez que o botão é clicado. É um exemplo simples de manipulação do DOM (Document Object Model) em JavaScript para criar interatividade em uma página da web. */