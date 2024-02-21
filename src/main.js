import { filterBy, sortBy} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; 


let cardsExibidos = data;
const listaHobby = document.querySelector("#root");
document.addEventListener("DOMContentLoaded", () => {
  listaHobby.appendChild(renderItems(data))
})
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

  cardsExibidos = sortBy(data, 'custoParaIniciar', mostrarOrdem)
  listaHobby.innerHTML = ""
  listaHobby.appendChild(renderItems(cardsExibidos))
})

// botao de limpar


const button = document.getElementById('[data-testid="botao-limpar"]');

button.addEventListener('click', () => {
  listaHobby.innerHTML = ""; 
  listaHobby.appendChild(renderItems(originalCards)); 
})  

// função computestats
// colocar um span no html com id e o texto resultados
// usar template string  ex. ${cards} resultados
// usar reduce