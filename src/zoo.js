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

const newAnimals = data.animals;
const newEmployee = data.employees;
const newPrices = data.prices;


const animalsByIds = (...ids) => {
  const idAnimals = newAnimals.filter(element => ids.includes(element.id));
  console.log(idAnimals);
  return idAnimals;
};

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalAge = newAnimals
    .find(element => element.name === animal)
    .residents.every(element => element.age > age);
  console.log(animalAge);
  return animalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  const employeeFirstAndLastName = newEmployee.find(
    element => element.firstName === employeeName || element.lastName === employeeName,
  );
  return employeeFirstAndLastName || {};
}

function createEmployee(personalInfo, associatedWith) {
  const EncludenewEmployee = Object.assign(personalInfo, associatedWith);
  return EncludenewEmployee;
}

const isManager = id => newEmployee.some(y => y.managers.some(x => x === id));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  newEmployee.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    return newAnimals.find(element => element.name === species).residents.length;
  }
  return newAnimals.reduce((acc, atual) => {
    acc[atual.name] = atual.residents.length;
    return acc;
  }, {});
}

function entryCalculator(entrants = 0) {
  // seu código aqui
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const valores = Object.keys(entrants).reduce(
    (acc, valorAtual) => acc + (entrants[valorAtual] * newPrices[valorAtual]), 0);
  console.log(valores);
  console.log('valores das entradas', valores);
  return valores;
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
  Object.keys(newPrices).forEach((element) => {
    (newPrices[element] = Math.round(newPrices[element] *
  ((percentage / 100) + 1) * 100) / 100);
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
