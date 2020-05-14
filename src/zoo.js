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

const data = require('./data');

function animalsByIds(...ids) {
  const animals = data.animals.filter((elem) =>
    ids.find((id) => id === elem.id));
  return animals;
}

function animalsOlderThan(animal, age) {
  const animais = data.animals.find((elem) => elem.name === animal);
  return animais.residents.every((animalAge) => animalAge.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    (elem) => elem.firstName === employeeName || elem.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return data.employees.some((elem) => elem.managers.some((ids) => ids === id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const result = {};
    data.animals.forEach(
      (objeto) => (result[objeto.name] = objeto.residents.length));
    return result;
  }
  return data.animals.find((animal) => animal.name === species).residents
    .length;
}

function entryCalculator(entrants) {
  if (entrants && Object.keys(entrants).length > 0) {
    const chaves = Object.keys(entrants);
    return chaves.reduce(
      (valorTotal, pessoas) => valorTotal + (data.prices[pessoas] * entrants[pessoas]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const obj = {};
  const especifcDay = {};
  const days = Object.keys(data.hours);
  days.map((hour) => {
    const closeHour = data.hours[hour].close - 12;
    return obj[hour] = `Open from ${data.hours[hour].open}am until ${closeHour}pm`;
  });
  obj.Monday = 'CLOSED';
  if (!dayName) return obj;
  especifcDay[dayName] = obj[dayName];
  return especifcDay;
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find(empId => empId.id === id).responsibleFor[0];
  const animal = data.animals.find(animais => animais.id === idAnimal);
  return Object.values(animal.residents.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  const aumento = (percentage / 100) + 1;
  Object.keys(data.prices).forEach((price) => {
    (data.prices[price] = Math.round((data.prices[price] * aumento) * 100) / 100);
  });
  // parseFloat((0.2 + 0.1).toPrecision(2))
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
