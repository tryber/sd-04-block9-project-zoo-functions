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

const animalsByIds = (...ids) => data.animals.filter(element => ids.includes(element.id));

const animalsOlderThan = (animal, age) => data.animals.find(element => element.name === animal)
  .residents.every(element => element.age > age);

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(element => element.firstName === employeeName ||
    element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newCreew = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newCreew;
}

const isManager = id => data.employees.some(aux1 => aux1.managers.some(aux2 => aux2 === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(add);
}

function animalCount(species) {
  if (!species) {
    const obj = {};
    data.animals.forEach(element => (obj[element.name] = element.residents.length));
    return obj;
  }
  return data.animals.find(element => element.name === species).residents.length;
}

//
//  ////////// CONCLUIDOS ////////////
//

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
