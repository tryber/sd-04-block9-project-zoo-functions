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

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(...ids) {
  if (!ids) return [];
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
  return resultado;
}

// Ao passar o nome de uma espécie e uma idade,
// testa se todos os animais desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return data.animals.find(element =>
    element.name === animal).residents.every(element => element.age >= age);
}

// Implemente a função employeeByName:
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(element =>
    element.firstName === employeeName || element.lastName === employeeByName);
  // Não entendi ao certo porque/como está sendo retornado o respectivo elemento
}

// Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// Implemente a função isManager:
// Testa se o id passado é de um gerente
function isManager(id) {
  return data.employees.some(element => element.managers.includes(id));
  // element.managers[0] === id || element.managers[1] === id);
}

// Adiciona um funcionário no fim da lista
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // const newEmployee = (...employeeData) => {
  //   let [id, firstName, lastName, managers, responsibleFor] = employeeData;
  //   return {id, firstName, lastName, managers, responsibleFor};
  // }
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  // console.log(`*** ${newEmployee} ***`);
  data.employees = [...data.employees, newEmployee];
  return newEmployee;
}

// Implemente a função animalCount:
// Sem parâmetros, returna animais e suas quantidades
// Com o nome de uma espécie de animal, retorna somente a quantidade
function animalCount(species) {
  if (!species) {
    const output = {}; // https://bit.ly/2Tb42YV
    data.animals.forEach(function (el) {
      if (!output[el.name]) output[el.name] = el.residents.length;
    });
    return output;
  }
  const countSpecie = data.animals.find(animal => animal.name === species);
  return countSpecie.residents.length;
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
