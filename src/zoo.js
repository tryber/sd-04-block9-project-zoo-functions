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
  if (!ids) return [];
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  const findAnimals = data.animals.find(a => a.name === animal);
  const residents = findAnimals.residents;

  for (let i = 0; i < residents.length; i += 1) {
    if (residents[i].age <= age) return false;
  }
  return true;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const findEmployees = data.employees.find(employee =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  return findEmployees;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  const employees = data.employees;

  return employees.some(({ managers }) => managers.includes(id));

  // for (let i = 0; i < employees.length; i += 1) {
  //   if (employees[i].managers.includes(id)) return true;
  // }
  // return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimals = data.animals.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }
  , {});
  if (!species) return allAnimals;

  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;

  let amountToPay = 0;

  const adult = data.prices.Adult * entrants.Adult;
  const child = data.prices.Child * entrants.Child;
  const senior = data.prices.Senior * entrants.Senior;

  amountToPay = adult + child + senior;

  return amountToPay;
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
