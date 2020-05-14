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
  if (!ids.length) {
    return [];
  }
  return data.animals.filter(animal => ids.find(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
  .find(specie => specie.name === animal).residents
  .every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employee => employee.managers
  .find(idEmployee => idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.animals
    .reduce((count, animal) => {
      count[animal.name] = animal.residents.length;
      return count;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants) === 0) return 0;
  const prices = data.prices;
  return Object.keys(entrants)
  .reduce((total, key) => total + (entrants[key] * prices[key]), 0);
}

function animalMap(options) {
  // seu código aqui
  return data.animals.reduce((prev, item) => {
    const local = item.location;
    if (prev[local]) {
      prev[local].push(item.name);
    } else {
      prev[local] = [item.name];
    }
    return prev;
  }, {});
}

const printSchedule = ({ open, close }) => {
  return (open === 0 && close === 0) ? 'CLOSED' : `Open from ${open}am until ${close-12}pm`;
}

function schedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return Object.keys(data.hours).reduce((prev, actual) => {
      prev[actual] = printSchedule(data.hours[actual]);
      return prev;
    }, {});
  }
  else {
    return { [dayName]: printSchedule(data.hours[dayName]) };
  }
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
