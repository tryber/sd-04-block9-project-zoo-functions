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

const animalsByIds = (...ids) => data.animals.filter(animal => ids.includes(animal.id));

const animalsOlderThan = (animal, age) => {
  const findAnimalName = data.animals.find(animalArr => animalArr.name === animal);
  return findAnimalName.residents.every(resident => resident.age >= age);
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees.find(employee =>
    employeeName === employee.firstName || employeeName === employee.lastName);
};

const createEmployee = (personalInfo, associatedWith) => {
  const employeeObject = Object.assign(personalInfo, associatedWith);
  return employeeObject;
};

const isManager = id => data.employees.some(manager => manager.managers.some(ids => ids === id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  return data.employees.push(employee);
};

const animalCount = (species) => {
  if (!species) {
    let objList = {};
    data.animals.map((animal) => {
      objList = {
        ...objList,
        [animal.name]: animal.residents.length,
      };
      return objList;
    });
    return objList;
  }
  return data.animals.find(specie => specie.name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (!entrants || !Object.keys(entrants).length) return 0;
  return Object.keys(entrants).reduce(((acc, cur) =>
    acc + ((data.prices[cur]) * entrants[cur])), 0);
};

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
