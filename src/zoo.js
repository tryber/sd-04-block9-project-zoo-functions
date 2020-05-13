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
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(anim => anim.name === animal)
    .residents.every(anim => anim.age > age);

const employeeByName = employeeName =>
  data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(({ managers }) =>
    managers.find(index => index === id));


class Employee {
  constructor(id, firstName, lastName, managers = [], responsibleFor = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.managers = managers;
    this.responsibleFor = responsibleFor;
  }
}
const addEmployee = (...parameters) => data.employees.push(new Employee(...parameters));

  // CC NÃO DEIXA ASSIM
  // const animalCount = species =>
  //   species ? data.animals.find(({ name }) =>
  //     name === species).residents.length : data.animals.reduce((acc, animal) => {
  //       acc[animal.name] = animal.residents.length;
  //       return acc;
  //     }, {});

const animalCount = (species) => {
  if (species) {
    return data.animals.find(({ name }) => name === species).residents.length;
  }
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
};

const entryCalculator = entrants =>
  (entrants && Object.keys(entrants).length > 0 ? Object.keys(entrants)
  .reduce((total, quantity) => (total + (data.prices[quantity] * entrants[quantity])), 0)
  : 0
);
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
