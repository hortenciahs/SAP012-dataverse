import { filterBy, sortBy, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; 


let cardsExibidos = data;
const listaHobby = document.querySelector("#root");

document.addEventListener("DOMContentLoaded", () => {
  listaHobby.appendChild(renderItems(data))
  computeStats(data)
  const spanMediaCusto = document.createElement("span");
  const spanMediaNivelDificuldade = document.createElement("span");
  spanMediaCusto.textContent = `Média de Custo: ${spanMediaCusto}`;
  spanMediaNivelDificuldade.textContent = `Média de Nível de Dificuldade: ${spanMediaNivelDificuldade}`;
  const statsContainer = document.getElementById("calcularNivelMedioDeDificuldade");
  statsContainer.appendChild(spanMediaCusto);
  statsContainer.appendChild(spanMediaNivelDificuldade);
  const statsContainer2  = document.getElementById("custoParaIniciar");
  statsContainer2.appendChild(spanMediaCusto);
  statsContainer2.appendChild(spanMediaNivelDificuldade);
});
// listaHobby.appendChild(renderItems(data));
// filtro de dados 
const selCategoria = document.querySelector('[name="filtroCategoria"]');

selCategoria.addEventListener('change', (event) => {

  const mostrarCategoria = event.target.value;
  cardsExibidos = filterBy(data, 'categoriaHobby', mostrarCategoria)
  listaHobby.innerHTML = ""
  listaHobby.appendChild(renderItems(cardsExibidos))

})
// ordenação
// console.log(ordenarHobbies(data, 'custoParaIniciar', "desc"))

const selOrdem = document.querySelector('[name="ordem"]');

selOrdem.addEventListener('change', (event) => {

  const mostrarOrdem = event.target.value;

  cardsExibidos = sortBy(cardsExibidos, 'custoParaIniciar', mostrarOrdem)
  listaHobby.innerHTML = ""
  listaHobby.appendChild(renderItems(cardsExibidos))
})

// botao de limpar


const mostrarTodos = document.querySelector('[data-testid="button-clear"]');

mostrarTodos.addEventListener("click", () => {
  // zera a lista de cards
  listaHobby.innerHTML = "";

  // zera o sort
  selOrdem.value = "buscar";

  // zera o filter
  selCategoria.value = "Todos"; 

  // renderia novamente
  listaHobby.appendChild(renderItems(data)); 
}) 



// função computestats OK
// colocar um span no html com id e o texto resultados
// usar template string  ex. ${cards} resultados
// usar reduce