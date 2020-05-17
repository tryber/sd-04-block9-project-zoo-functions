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
  if (!ids) return [];
  const resp = data.animals.filter(elemento => ids.includes(elemento.id));
  return resp;
}

function animalsOlderThan(animal, age) {
  let resp = [];
  data.animals.forEach((element) => {
    if (element.name === animal) resp = element.residents.every(elemento => elemento.age >= age);
  });
  return resp;
}

function employeeByName(employeeName) {
  if (!employeeByName) return {};
  let resp = {};
  data.employees.forEach((element) => {
    if (element.firstName === employeeName) resp = element;
    else if (element.lastName === employeeName) resp = element;
  });
  return resp;
}

function createEmployee(personalInfo, associatedWith) {
  let resp = {};
  resp = Object.assign({}, personalInfo, associatedWith);
  return resp;
}

function isManager(id) {
  let resp = false;
  resp = data.employees.some(elemento => elemento.managers.includes(id));
  return resp;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = {};
  personalInfo.id = id;
  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;

  const associatedWith = {};
  associatedWith.managers = managers;
  associatedWith.responsibleFor = responsibleFor;

  if (!managers) associatedWith.managers = [];
  if (!responsibleFor) associatedWith.responsibleFor = [];

  const resp = createEmployee(personalInfo, associatedWith);
  data.employees.push(resp);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length;
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
