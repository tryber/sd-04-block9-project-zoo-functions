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
  if (typeof ids === 'undefined') {
    return [];
  }
  return data.animals.filter(xablau => ids.find(identification => xablau.id === identification));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(a => a.name === animal).residents.every(b => b.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find(a => a.firstName === employeeName || a.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(xablau => xablau.managers[0] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(employee);
}

function animalCount(species) {
  if (species === undefined) {
    if (!species) {
      return data.animals
      .reduce((xablau, toot) => {
        xablau[toot.name] = toot.residents.length;
        return xablau;
      }, {});
    }
  }
  return data.animals.find(xablau => xablau.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  const prices = data.prices;
  return Object.keys(entrants)
  .reduce((xablau, toot) => xablau + (entrants[toot] * prices[toot]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const days = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return days;
  }
  const msg = { [dayName]: days[dayName] };
  return msg;
}

function oldestFromFirstSpecies(id) {
  const animalsID = data.employees.find(xablau => xablau.id === id).responsibleFor[0];
  const residents = data.animals.find(xablau => xablau.id === animalsID).residents
  .reduce((acc, curv) => {
    if (acc.age > curv.age) {
      return acc;
    }
    return curv;
  });
  return Object.values(residents);
}

function increasePrices(percentage) {
  return Object.keys(data.prices).forEach(xablau => {
    data.prices[xablau] = Math.round(data.prices[xablau]*((percentage/100)+1)*100)/100;
  });
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
