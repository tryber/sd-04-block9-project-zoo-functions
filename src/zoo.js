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

}

function schedule(dayName) {
  const openingHours = Object.assign({}, data.hours);
  Object.keys(openingHours).forEach((key) => {
    const open = openingHours[key].open;
    const close = openingHours[key].close;

    if (open === 0 || close === 0) openingHours[key] = 'CLOSED';
    else openingHours[key] = `Open from ${open}am until ${close - 12}pm`;
  });
  if (!dayName) return openingHours;

  return {
    [dayName]: openingHours[dayName],
  };
}

function oldestFromFirstSpecies(id) {
  const firstSpecies = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const animals = data.animals.find(animal => animal.id === firstSpecies).residents;
  const older = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);

  return Object.values(older);
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
