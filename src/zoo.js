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
const { sortArray, getAnimals } = require('./sort');

const animalsByIds = (...ids) => ids.map(id => data.animals.find(animal => animal.id === id));

const animalsOlderThan = (animal, age) => data.animals.find(item => item.name === animal)
  .residents.every(item => item.age >= age);

const employeeByName = employeeName => data.employees
  .find(item => item.firstName === employeeName || item.lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  id: personalInfo.id,
  firstName: personalInfo.firstName,
  lastName: personalInfo.lastName,
  managers: associatedWith.managers,
  responsibleFor: associatedWith.responsibleFor,
});

const isManager = id => data.employees.some(item =>
  item.managers.some(value => value === id));

const addEmployee = (id, firstName, lastName, managers, responsibleFor) => {
  data.employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
};

function animalCount(species) {
  if (species) {
    return data.animals.find(item => item.name === species).residents.length;
  }

  const animals = {};

  data.animals.map((item) => {
    animals[item.name] = item.residents.length;
    return animals;
  });

  return animals;
}

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

function oldestFromFirstSpecies(id) {
  const firstSpecie = data.employees.find(item => item.id === id).responsibleFor[0];

  const animals = data.animals.find(item => item.id === firstSpecie);
  const oldestAnimal = sortArray(animals.residents);

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

// function increasePrices(percentage) {
//   // seu código aqui
// }

function employeeCoverage(idOrName) {
  const employees = {};

  if (!idOrName) {
    data.employees.forEach(employee =>
      (employees[`${employee.firstName} ${employee.lastName}`] = getAnimals(employee.responsibleFor)));
  } else {
    const employee = data.employees.find(item =>
      item.id === idOrName || item.firstName === idOrName || item.lastName === idOrName);
    employees[`${employee.firstName} ${employee.lastName}`] = getAnimals(employee.responsibleFor);
  }

  return employees;
}


module.exports = {
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
