/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

function animalsByIds(ids) {
  // seu código aqui
  // Caso receba nenhum parâmetro, necessário retornar um array vazio
  // Ao receber como parâmetro um único id, retorna os animais com este id
  // Ao receber mais de um id, retorna os animais que têm um desses ids
  function animalsByIds(...ids) {
    if (!ids) return [];
    const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
    return resultado;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  //Ao passar o nome de uma espécie e uma idade, 
  //testa se todos os animais desta espécie possuem a idade mínima especificada
  const animalAge = animaisObj
  .find(element => element.name === animal)
  .residents.every(element => element.age > age);
return animalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  //Sem parâmetros, retorna um objeto vazio
  //Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  //Quando provido o último nome do funcionário, retorna o objeto do funcionário
  return { ...personalInfo, ...associatedWith };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
  //Sem parâmetros, retorna animais categorizados por localização
  //Com opções especificadas, retorna nomes de animais
  //Com opções especificadas, retorna nomes de animais ordenados
  //Com opções especificadas, retorna somente nomes de animais macho/fêmea
  //Só retorna informações específicas de gênero se includeNames for setado
  function zooMap(direction) {
    const jungle = [];
    data.animals.filter(el => el.location === direction)
      .forEach(el => jungle.push(el.name)); 
    return jungle;
}

function schedule(dayName) {
  // seu código aqui
  //Sem parâmetros, retorna um cronograma legível para humanos
  //Se um único dia for passado, retorna somente este dia em um formato legível para humanos
  const hourKeys = Object.keys(data.hours);
  if (!dayName) {
    const result = hourKeys.reduce((acumulador, key) => {
      acumulador[key] = oneDay(key);
      return acumulador;
    }, {});
    return result;
  }
  const obj = {};
  obj[dayName] = oneDay(dayName);
  return obj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
