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

//  ================================================================REQUISITO 1==================================================================================================================

//  Caso receba nenhum parâmetro, necessário retornar um array vazio
//  Ao receber como parâmetro um único id, retorna os animais com este id
//  Ao receber mais de um id, retorna os animais que têm um desses ids

const animalsByIds = (...ids) => {
  return data.animals.filter((animal) => ids.find((id) => id === animal.id))
} 

//  ================================================================REQUISITO 1==================================================================================================================


//  ================================================================REQUISITO 2==================================================================================================================

//  Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  // seu código aqui
}

//  ================================================================REQUISITO 2==================================================================================================================


//  ================================================================REQUISITO 3==================================================================================================================

//  Sem parâmetros, retorna um objeto vazio
//  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
//  Quando provido o último nome do funcionário, retorna o objeto do funcionário

function employeeByName(employeeName) {
  // seu código aqui
}

//  ================================================================REQUISITO 3==================================================================================================================

//  Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

//  Testa se o id passado é de um gerente

function isManager(id) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

//  Adiciona um funcionário no fim da lista

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

//  Sem parâmetros, returna animais e suas quantidades
//  Com o nome de uma espécie de animal, retorna somente a quantidade

function animalCount(species) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function entryCalculator(entrants) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function animalMap(options) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function schedule(dayName) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function increasePrices(percentage) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

function employeeCoverage(idOrName) {
  // seu código aqui
}

//  ==================================================================================================================================================================================

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
