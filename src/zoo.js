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
  // seu código aqui
  if (!ids) return [];
  const results = data.animals.filter(animal => ids.includes(animal.id));
  return results;
}
// passados o nome de uma espécie e uma idade, testa se todos os animais desta
// espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  // seu código aqui
  const results = data.animals.find(animals => animals.name === animal).residents
  .every(residents => residents.age >= age);
  return results;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const results = data.employees
  .find(employees => employees.firstName === employeeName || employees.lastName === employeeName);
  return results;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const results = Object.assign({}, personalInfo, associatedWith);
  return results;
}

function isManager(id) {
  // seu código aqui
  const results = data.employees
  .some(employee => employee.managers.some(manager => manager === id));
  return results;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}
function animalCount(species) {
  // seu código aqui
  if (!species) {
    const results = {};
    data.animals.forEach(animal => (results[animal.name] = animal.residents.length));
    return results;
  } return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
  const results = {};
  if (!options) {
    data.animals.forEach(animal => (results[animal.location] = animal.name));
    console.log(results);
  }
  return (results);
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  const results = data.prices;
  const gambiarra = 0.0001;// GAMBIARRA TO ROUND EH NOIS. #GambiarraWins
  results.Adult = ((results.Adult * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  results.Child = ((results.Child * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  results.Senior = ((results.Senior * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  return results;
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  addEmployee,
  animalCount,
  animalMap,
  animalsByIds,
  animalsOlderThan,
  createEmployee,
  employeeByName,
  employeeCoverage,
  entryCalculator,
  increasePrices,
  isManager,
  oldestFromFirstSpecies,
  schedule,
};
