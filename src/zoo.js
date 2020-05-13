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
// Diego
const data = require('./data');

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => id === animal.id));

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais
// desta espécie possuem a idade mínima especificada

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(element => animal === element.name)
    .residents.every(element => element.age >= age);

// 3- Implemente a função employeeByName:
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

const employeeByName = function (name) {
  return name ?
  data.employees.find(element => element.firstName === name || element.lastName === name)
  : {};
};

// 4- Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais
// gerenciados

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

// Implemente a função isManager:
// Testa se o id passado é de um gerente

const isManager = id => data.employees.some(element => element.managers.includes(id));

// 6- Implemente a função addEmployee:
// Adiciona um funcionário no fim da lista

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });


function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
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
