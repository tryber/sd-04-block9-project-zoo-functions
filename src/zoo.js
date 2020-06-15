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
  const letsGo = [];
  if (ids.length === 0) {return letsGo};
  if (ids.length >= 1) {
    for (let i = 0; i < ids.length; i += 1) {
     letsGo.push(data.animals.find((item) => item.id === `${ids[i]}`));
     letsGo.push(data.animals.find(item => item.id === `${ids[i]}`));
    }
  return letsGo;
    return letsGo;
  }
  return [];
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animals = data.animals.find(list => list.name === animal);
  const animalsAge = animals.residents.every(list => list.age >= age);
  return animalsAge;
}

function employeeByName(employeeName) {
  // seu código aqui

  if (listEmp === undefined) return {};
  return listEmp;

}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

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
