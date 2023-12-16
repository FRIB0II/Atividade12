// Selecionando o elemento header
const header = document.querySelector("header");

// Adicionando um filho no elemento header 
header.insertAdjacentHTML("afterbegin", "<h1>H1</h1>");

// Selecionando o elemento main
const main = document.querySelector("main");

// Adicionando dois filhos no main com um filho dentro de cada um
main.insertAdjacentHTML("afterbegin", "<div id='primeiraDiv'> <h2>H2</h2> <p>P</p> </div>");

main.insertAdjacentHTML("beforeend", "<div id='segundaDiv'> <h2>H2</h2> <p>P</p> </div>");

// Selecionando o body
const body = document.querySelector("body");

// Mudando a cor do body
body.style.backgroundColor = "pink";
