// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterBy = (data, filterBy, value) =>{
  const filteredData = data.filter(item => {
    return item.facts[filterBy] ===value;
  });
  return filteredData;
};

// export const ordenarHobbies = (data, sortBy, value) => { 
//   if (value === "asc"){
//     return data.sort((a, b ) => {a.facts[sortBy] - b.facts[sortBy]
//     })
//   } else {
//     return data.sort((a, b ) => {b.facts[sortBy] - a.facts[sortBy]
//   })
  
// }
// };

export const sortBy = (data, sortBy, value) => { 
  // mais caro
  if (value === "asc"){
    return data.sort((a, b ) => {return a.facts[sortBy] - b.facts[sortBy]})
  } else {
    // mais barato
    return data.sort((a, b ) => {return b.facts[sortBy] - a.facts[sortBy]})
  }
}

const calcularCustoMedio = (data)=>{
// resultado é o acumulador
//o 0 é o mesmo que 'const valorInicial = 0;'

const somaTotal = data.reduce(
  (resultado, data) => {
    resultado = resultado + data.facts.custoParaIniciar;
    console.log(resultado)
    return resultado
  },
  0
);

console.log("resultado final: " + somaTotal);
console.log("media final: " + somaTotal / data.length);
}
const calcularNivelMedioDeDificuldade = (data)=> {
  const somaTotal = data.reduce(
    (resultado, data) => {
      resultado = resultado + data.facts.nivelDeDificuldade;
      console.log(resultado)
      return resultado
    },
    0
  );
  
  console.log("resultado final: " + somaTotal);
  console.log("media final: " + somaTotal / data.length);

}
export const computeStats = (data)=>{
const mediaCusto = calcularCustoMedio (data)
const mediaNivelDificuldade = calcularNivelMedioDeDificuldade (data)
return {
  mediaCusto, mediaNivelDificuldade
}
}