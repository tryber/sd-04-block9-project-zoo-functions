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
  const result = data.animals.filter(e => ids.includes(e.id));
  return result;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalFiltro = data.animals.find(e => e.name === animal).residents.every(e => e.age >= age);
  return animalFiltro;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (employeeName == null) return {};
  const nomeSobrenome = data.employees.find(e =>
    e.firstName === employeeName || e.lastName === employeeName);
  return {
    ...nomeSobrenome,
  };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const unificado = Object.assign(personalInfo, associatedWith);
  return unificado;
}

function isManager(id) {
  // seu código aqui
  const gerente = data.employees.some(e => e.managers.includes(id));
  return gerente;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = data.employees;
  return employee.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const precos = data.prices;
  const {
    Adult,
    Senior,
    Child,
  } = precos;
  const total = ((Adult * 2) + (Senior * 1) + (Child * 3));
  return total;
}

function animalMap(options) {
  // seu código aqui
}

const semanaObj = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

const schedule = (dayName) => {
  if (!dayName) return semanaObj;
  return { [dayName]: semanaObj[dayName] };
};

function oldestFromFirstSpecies(id) {
  // // seu código aqui
  const numeros = [];
  const animalFiltro = data.employees.find(e => e.id === id).responsibleFor[0];
  const animal = data.animals.find(a => a.id === animalFiltro);
  const idade = animal.residents.reduce((acc, e, ind) => {
    numeros.push(e.age);
    const indice = numeros.indexOf(Math.max(...numeros));
    return indice;
  }, 0);
  return Object.values(animal.residents[idade]);
}
// seu código aqui
const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((e) => {
    data.prices[e] =
    Number(data.prices[e] * (1 + ((percentage + 0.01) / 100))).toFixed(2);
  });
};

function employeeCoverage(idOrName) {
  // seu código aqui
  const empregado = data.employees.reduce((employeeLista, e) => {
    employeeLista[`${e.firstName} ${e.lastName}`] = e.responsibleFor.map(
    ids => data.animals.find(({ id }) => (id === ids)).name);
    return employeeLista;
  }, {});
  const array = data.employees.find(
    ({ id, firstName, lastName }) =>
      id === idOrName || firstName === idOrName || lastName === idOrName,
  );
  if (!idOrName) return empregado;
  return { [`${array.firstName} ${array.lastName}`]: empregado[`${array.firstName} ${array.lastName}`] };
}

console.log(employeeCoverage());

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
