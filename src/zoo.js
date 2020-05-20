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

function animalsByIds(...ids) {
  return data.animals.filter(element => ids.includes(element.id));
}

function animalsOlderThan(animal, age) {
  const a = data.animals.find(element => animal.includes(element.name));
  return a.residents.every(animalAge => animalAge.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(element => element.firstName === employeeName ||
  element.lastName === employeeName ||
  element.id === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  console.log(personalInfo, associatedWith);
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  const verifyManager = data.employees.some(employee =>
  employee.managers.find(mananger => mananger === id));
  return verifyManager;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({id, firstName, lastName, managers, responsibleFor});
}

function animalCount(species) {
  const animais = (species) => {
    if (!species) {
      return data.animals.reduce((object, element) => {
        object[element.name] = element.residents.length;
        return object;
      }, {});
    }
    return data.animals.find(element => element.name === species).residents.length;
  };
}

function entryCalculator(entrants) {
  if (entrants === undefined || !Object.keys(entrants).length) {
  return 0;
  } //se os entrantes forem undefined ou se um objeto vazio for passado, o retorno é zero
  return Object.keys(entrants)
  .reduce((acc, chave) => acc + (entrants[chave] * data.prices[chave]), 0);
}; //usando o reduce para acumular os valores "preço total a ser cobrado dado o número de adultos, crianças e idosos"

function animalMap(options) {
  // muita dificuldade de fazer
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
