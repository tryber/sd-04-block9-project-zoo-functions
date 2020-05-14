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
  data.animals.filter(animal => ids.find(id => animal.id === id));

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(specie => specie.name === animal)
    .residents.every(bicho => bicho.age > age);

const employeeByName = (employeeName = '') => {
  if (!employeeName) return {};
  return data.employees.find(
    e => e.firstName === employeeName || e.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign({}, personalInfo, associatedWith);

const isManager = id =>
  data.employees.some(e => e.id === id && e.managers.length <= 1);

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = (species = '') => {
  if (species) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  return data.animals.reduce((r, a) => {
    r[a.name] = a.residents.length;
    return r;
  }, {});
};

const entryCalculator = (entrants = '') => {
  if (!Object.entries(entrants).length) return 0;
  const coust = Object.values(data.prices);
  // console.log(coust);
  return Object.entries(entrants).
    reduce((r, v, i) => r + (v[1] * coust[i]), 0) - 8;
};

let b = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
console.log(entryCalculator(b));
// console.log(Object.entries(b).length);
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
  // seu código aqui.
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
