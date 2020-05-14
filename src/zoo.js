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

const animalsByIds = (...ids) =>
data.animals.filter(elemento => ids.some(id => id === elemento.id));

const animalsOlderThan = (animal, age) =>
data.animals.find(elemento => elemento.name === animal)
.residents.every(elemento => elemento.age > age);

const employeeByName = employeeName => data.employees.find(({ firstName, lastName }) =>
firstName === employeeName || lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => data.employees.some(elemento =>
  elemento.managers.some(elemento2 => elemento2 === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = species => {
  return (species) ?  data.animals.find(({ name }) => name === species).residents.length :
  data.animals.reduce((acc, elemento) => {acc[elemento.name] = elemento.residents.length;
  return acc}, {});
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
