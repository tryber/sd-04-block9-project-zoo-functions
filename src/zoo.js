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
  return data.animals.filter((dados) => ids.find((id) => id === dados.id));
}

function animalsOlderThan(animal, age) {
  return data.animals
    .find((animalName) => animalName.name === animal)
    .residents.every((ageAnimals) => ageAnimals.age >= age);
}

function employeeByName(employeeName) {
  if (typeof employeeName === 'string') {
    return data.employees.find(
      (employed) => employed.firstName === employeeName
      || employed.lastName === employeeName,
    );
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(ID) {
  const lengthOfManager = data.employees.filter((dados) => ID === dados.id)[0]
    .responsibleFor.length;
  if (lengthOfManager > 2) {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (typeof managers === 'undefined') {
    managers = [];
  }
  if (typeof responsibleFor === 'undefined') {
    responsibleFor = [];
  }
  return data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function animalCount(species) {
  const obj = {};
  if (!species) {
    data.animals.forEach((animal) => {
      obj[animal.name] = animal.residents.length;
    });
    return obj;
  }
  return data.animals.find((animal) => animal.name === species).residents
    .length;
}
const adult = 49.99;
const child = 20.99;
const senior = 24.99;

function entryCalculator(entrants) {
  if (typeof entrants !== 'object' || Object.entries(entrants).length === 0) {
    return 0;
  }
  const QuantityOfPeople = Object.values(entrants);
  return (
    QuantityOfPeople[0] * adult +
    QuantityOfPeople[1] * child +
    QuantityOfPeople[2] * senior
  );
}

function animalMap(options) {}

function schedule(dayName) {
  // criando objeto
  let list = Object.assign({}, data.hours);
  Object.keys(list).forEach((key) => {
    const open = list[key].open;
    const close = list[key].close;
    list[key] = `Open from ${open}am until ${close - 12}pm`;
    if (open === close) list[key] = 'CLOSED';
  });
  if (!dayName) return list;
  list = { [dayName]: list[dayName] };
  return list;
}

function oldestFromFirstSpecies(id) {
  const firstResponibleSpecie = data.employees.find(
    (employee) => employee.id === id,
  ).responsibleFor[0];
  const animalsFromSpecie = data.animals.find(
    (animal) => animal.id === firstResponibleSpecie,
  ).residents;
  const elderFromSpecie = animalsFromSpecie.reduce(
    (acc, curr) => (acc.age > curr.age ? acc : curr),
    [],
  );
  return Object.values(elderFromSpecie);
}

function increasePrices(percentage) {
  const results = data.prices;
  results.Adult = (results.Adult * (1.0001 + percentage / 100)).toPrecision(4);
  results.Child = (results.Child * (1.0001 + percentage / 100)).toPrecision(4);
  results.Senior = (results.Senior * (1.0001 + percentage / 100)).toPrecision(4);
  return results;
}

function employeeCoverage(idOrName) {}

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
