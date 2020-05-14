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
  data.animals.filter(elemento => ids.some(id => id === elemento.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(elemento => elemento.name === animal)
    .residents.every(elemento => elemento.age > age);

const employeeByName = employeeName => data.employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id => data.employees.some(elemento =>
  elemento.managers.some(elemento2 => elemento2 === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });

// O codeClimate nao permitiu que eu usasse ArrowFunction com 2 returns
function animalCount(species) {
  return (species) ? data.animals.find(({ name }) => name === species).residents.length :
    data.animals.reduce((acc, elemento) => {
      acc[elemento.name] = elemento.residents.length;
      return acc;
    }, {});
}

function entryCalculator(entrants) {
  return (entrants) ? Object.keys(entrants).reduce((acc, elemento) =>
    acc + (entrants[elemento] * data.prices[elemento]), 0) : 0;
}

function animalMap(options) {
  // seu código aqui
}

const objHorarios = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

const schedule = (dayName) => {
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(elemento => elemento.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((anim1, anim2) => anim2.age - anim1.age)[0]);

const increasePrices = percentage =>
  Object.keys(data.prices).map(elemento => (data.prices[elemento] =
    Math.round(100 * ((data.prices[elemento] * (percentage / 100))
      + data.prices[elemento])) / 100));

const Gamb = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions'],
};

const employeeCoverage = (idOrName) => {
  if (!idOrName) return Gamb;
  const funcionario = data.employees.reduce((acc, elemento) => {
    acc = (elemento.id === idOrName ||
      elemento.firstName === idOrName || elemento.lastName === idOrName) ?
    `${elemento.firstName} ${elemento.lastName}` : acc;
    return acc;
  }, '');
  return { [funcionario]: Gamb[funcionario] };
};

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
