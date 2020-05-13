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
// iniciando

const data = require("./data");

function animalsByIds(...ids) {
  const animals = data.animals.filter((elem) =>
    ids.find((id) => id === elem.id)
  );
  return animals;
}

function animalsOlderThan(animal, age) {
  const animais = data.animals.filter((elem) => elem.name === animal);
  return animais[0].residents.every((animalAge) => animalAge.age >= age);
}

function employeeByName(employeeName) {
  if (typeof employeeName === "undefined") return {};
  const result = data.employees.find((elem) => {
    if (elem.firstName === employeeName || elem.lastName === employeeName) {
      return elem;
    }
  });
  return result;
}

function createEmployee(personalInfo, associatedWith) {}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
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
