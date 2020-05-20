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
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((object, element) => {
      object[element.name] = element.residents.length;
      return object;
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || !Object.keys(entrants).length) {
    return 0;
  }
  return Object.keys(entrants)
  .reduce((acc, chave) => acc + (entrants[chave] * data.prices[chave]), 0);
}

function animalMap(options) {
  // muita dificuldade de fazer
}

function schedule(day) {
  if (data.hours[day].open === 0 && data.hours[day].close === 0) {
    return 'CLOSED';
  }
  return `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
}

function oldestFromFirstSpecies(id) {
  const findNoemployee = data.employees.find(idFunc => idFunc.id === id).responsibleFor[0];
  const findNOanimals = data.animals.find(elementos => elementos.id === findNoemployee);
  return Object.values(findNOanimals.residents.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  return Object.keys(data.prices).forEach((valores) => {
    (data.prices[valores] = Math.round(data.prices[valores] * (1 + (percentage / 100)) * 100) / 100);
  });
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
