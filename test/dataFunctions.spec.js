import {filterBy} from "../src/dataFunctions";
import {data as d} from "./data.js"


describe ('testes de filtro', () => {
  test.only('por categoria de artesanato', () => {
    const filteredData = filterBy(d,'categoriaHobby','artesanato')
    expect(filteredData.length).toBe(1);
  });
});



// const sortBy = require('./sortBy');

// test('ordena em ordem decrescente pelo custo para iniciar', () => {
//   expect(fakeData.sort).toBe("custoParaInicia" ???? 🙃🤯🤪);
// });












// import { example, anotherExample } from '../src/dataFunctions.js';
// import { data as fakeData } from './data.js';

// console.log(fakeData);

// describe('example', () => {

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
