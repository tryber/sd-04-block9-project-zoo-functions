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

function animalsByIds(ids) {
  // seu código aqui
  const letsGo = data.animals.filter(animals => ids.find(id => id === animals.id));
  return letsGo;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.animals.find(list => list.name === animal);
  const animalsAge = animals.residents.every(list => list.age >= age);
  return animalsAge;
}

function employeeByName(employeeName) {
  // seu código aqui
}
const employeeByName = employeeName => (employeeName === undefined ? {} : data.employees
  .find(e => e.firstName === employeeName || e.lastName === employeeName));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const gerente = data.employees.some(list => list.managers.find(el => el === id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
    // seu código aqui
}

function animalCount(species) {
  // seu código aqui
  if (species) {
    return data.animals.find(el => el.name === species).residents.length;
  }
  const animalslength = {};
  data.animals.forEach((el) => { animalslength[el.name] = el.residents.length; });
  return animalslength;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  const listEntrants = Object.values(entrants);
  const valueAdult = data.prices.Adult * listEntrants[0];
  const valueChild = data.prices.Child * listEntrants[1];
  const valueSenior = data.prices.Senior * listEntrants[2];
  return (valueAdult + valueChild + valueSenior);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimalId = data.employees.find(
    ({ id: employeeId }) => id === employeeId)
    .responsibleFor[0];
  const specieResidents = data.animals.find(
    ({ id: animalId }) => animalId === firstAnimalId)
    .residents;
  const oldestAnimal = specieResidents.sort(
    ({ age: ageA }, { age: ageB }) => ageB - ageA)[0];

  return Object.values(oldestAnimal);
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((elem) => {
    (data.prices[elem] = Math.round(data.prices[elem] * ((percentage / 100) + 1) * 100) / 100);
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
