// import { filterBy, sortBy, computeStats} from './dataFunctions.js';
// import { renderItems } from './view.js';
// import data from './data/dataset.js';


// let cardsExibidos = data;
// const listaHobby = document.querySelector("#root");

// document.addEventListener("DOMContentLoaded", () => {
//   listaHobby.appendChild(renderItems(data))
//   const stats = computeStats(data) 
//   const mediaCusto = document.querySelector("span");
//   const mediaNivelDificuldade = document.querySelector("span");
//   mediaCusto.textContent = `Média de Custo: ${stats.mediaCusto}`;
//   mediaNivelDificuldade.textContent = `Média de Nível de Dificuldade: ${stats.mediaNivelDificuldade}`;
//   const statsContainer = document.getElementById("calcularNivelMedioDeDificuldade");
//   statsContainer.appendChild(mediaCusto);
//   statsContainer.appendChild(mediaNivelDificuldade);
//   const statsContainer2  = document.getElementById("custoParaIniciar");
//   statsContainer2.appendChild;
//   console.log(mediaNivelDificuldade);
  
// });
// // listaHobby.appendChild(renderItems(data));
// // filtro de dados 
// const selCategoria = document.querySelector('[name="filtroCategoria"]');

// selCategoria.addEventListener('change', (event) => {

//   const mostrarCategoria = event.target.value;
//   cardsExibidos = filterBy(data, 'categoriaHobby', mostrarCategoria)
  
//   listaHobby.innerHTML = ""
//   listaHobby.appendChild(renderItems(cardsExibidos))

// })
// // ordenação
// // console.log(ordenarHobbies(data, 'custoParaIniciar', "desc"))

// const selOrdem = document.querySelector('[name="ordem"]');

// selOrdem.addEventListener('change', (event) => {

//   const mostrarOrdem = event.target.value;

//   cardsExibidos = sortBy(cardsExibidos, 'custoParaIniciar', mostrarOrdem)
//   listaHobby.innerHTML = ""
//   listaHobby.appendChild(renderItems(cardsExibidos))
// })

// botao de limpar

import { filterBy, sortBy, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';  // Certifique-se de ter um arquivo view.js com a função renderItems implementada.
import data from './data/dataset.js';

let cardsExibidos = data;
const listaHobby = document.querySelector("#root");

document.addEventListener("DOMContentLoaded", () => {
  listaHobby.appendChild(renderItems(data));

  const statsContainer = document.getElementById("calcularNivelMedioDeDificuldade");
  const statsContainer2 = document.getElementById("custoParaIniciar");

  const selCategoria = document.querySelector('[name="filtroCategoria"]');
  const selOrdem = document.querySelector('[data-testid="select-sort"]');

  selCategoria.addEventListener('change', (event) => {
    const mostrarCategoria = event.target.value;
    cardsExibidos = filterBy(data, 'categoriaHobby', mostrarCategoria);
    listaHobby.innerHTML = "";
    listaHobby.appendChild(renderItems(cardsExibidos));

    // Limpa as estatísticas antes de calcular e exibir
    statsContainer.innerHTML = "";
    statsContainer2.innerHTML = "";

    // Calcula e exibe as estatísticas
    const stats = computeStats(cardsExibidos);
    const mediaCustoParaIniciar = document.createElement("span");
    const mediaNivelDificuldade = document.createElement("span");

    mediaCustoParaIniciar.textContent = `Média de Custo para Iniciar: R$${stats.mediaCusto}`;
    mediaNivelDificuldade.textContent = `Média de Nível de Dificuldade: ${stats.mediaNivelDificuldade}`;

    statsContainer.appendChild(mediaNivelDificuldade);
    statsContainer2.appendChild(mediaCustoParaIniciar);
  });



  selOrdem.addEventListener('change', (event) => {
    const mostrarOrdem = event.target.value;
    cardsExibidos = sortBy(cardsExibidos, 'custoParaIniciar', mostrarOrdem);
    listaHobby.innerHTML = "";
    listaHobby.appendChild(renderItems(cardsExibidos));
  });

});


const mostrarTodos = document.querySelector('[data-testid="button-clear"]');
const statsContainer = document.querySelector('#calcularNivelMedioDeDificuldade'); 
const statsContainer2 = document.querySelector('#custoParaIniciar'); 
const selOrdem = document.querySelector('#ordenacao');
const selCategoria = document.querySelector('#filtro');

mostrarTodos.addEventListener("click", () => {
  // zera a lista de cards
  listaHobby.innerHTML = "";

  // zera o sort
  selOrdem.value = "buscar";

  // zera o filter
  selCategoria.value = "Todos"; 

  //zera a média de dificuldade
  statsContainer.innerHTML = "Média Nível de Dificuldade: 0";
    
  //zera a média de custo
  statsContainer2.innerHTML = "Média Custo: R$0,00";

  // renderiza novamente
  listaHobby.appendChild(renderItems(data)); 

});


// função computestats OK
// colocar um span no html com id e o texto resultados
// usar template string  ex. ${cards} resultados
// usar reduce