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

const animalsByIds = (...ids) => {
  if (!ids) return [];
  return data.animals.filter(element => ids.includes(element.id));
};

function animalsOlderThan(animal, age) {
  const result = data.animals
    .find(element => element.name === animal)
    .residents.every(element => element.age >= age);
  return result;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find(element => element.firstName === employeeName || element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const worker = Object.assign({}, personalInfo, associatedWith);
  return worker;
}

function isManager(id) {
  return data.employees.some(element => element.managers.some(man => man === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    });
}

function animalCount(species) {
  let animalQuantity;
  if (species !== undefined) {
    data.animals.find((nameAnimal) => {
      if (nameAnimal.name === species) {
        animalQuantity = nameAnimal.residents.length;
      }
      return animalQuantity;
    });
  } else {
    animalQuantity = {};
    data.animals.forEach((nameAnimal) => {
      if (nameAnimal.name) {
        animalQuantity[nameAnimal.name] = nameAnimal.residents.length;
      }
    });
  }
  return animalQuantity;
}

function entryCalculator(entrants) {
  let total;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    total = 0;
  } else {
    total = entrants.Adult * data.prices.Adult;
    total += entrants.Child * data.prices.Child;
    total += entrants.Senior * data.prices.Senior;
  }
  return total;
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
