/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/
// starting!

const data = require('./data');

const animalsByIds = (...ids) => {
  if (!ids) return [];
  return data.animals.filter(animal => ids.includes(animal.id));
};

const animalsOlderThan = (speciesName, age) =>
  data.animals
    .find(species => species.name === speciesName)
    .residents.every(animal => animal.age >= age);

const employeeByName = employeeName =>
  data.employees
    .filter(obj => obj.firstName === employeeName || obj.lastName === employeeName)
    .reduce((acc, employeeObj) => (acc = employeeObj), {});

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(manager => manager.managers.some(eachManager => eachManager === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) =>
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });

const animalCount = species => {
  if (!species) {return data.animals.reduce((acc, animal) => {
      acc[animal.name] = animal.residents.length;
      return acc;
    }, {});}
  return data.animals.find(animal => animal.name === species).residents.length;
};

const entryCalculator = (entrants) => {};

const animalMap = (options) => {};

const schedule = (dayName) => {};

const oldestFromFirstSpecies = (id) => {};

const increasePrices = (percentage) => {};

const employeeCoverage = (idOrName) => {};

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
