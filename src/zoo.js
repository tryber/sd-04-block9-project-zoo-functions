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

// TODO => 1 - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// TODO => 2 - Ao receber como parâmetro um único id, retorna os animais com este id;
// TODO => 3 - Ao receber mais de um id, retorna os animais que têm um desses ids;
const animalsByIds = (...ids) => {
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

// TODO => Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
const animalsOlderThan = (animal, age) => {
  return data.animals.find(especie => especie.name === animal)
    .residents.every(residente => residente.age >= age);
}

// TODO => 1 - Sem parâmetros, retorna um objeto vazio
// TODO => 2 - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// TODO => 3 - Quando provido o último nome do funcionário, retorna o objeto do funcionário
const employeeByName = (employeeName) => {
  if (!employeeName) return {}
  return data.employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

// TODO => Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados
const createEmployee = (personalInfo, associatedWith) => {
  return { ...personalInfo, ...associatedWith }
}

//TODO => Testa se o id passado é de um gerente
const isManager = id => {
  return data.employees.some(gerenteID => gerenteID.managers.find(ids => ids === id));
}

//TODO => Adiciona um funcionário no fim da lista
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}

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
