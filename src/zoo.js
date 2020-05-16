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
  return ids.map(param => data.animals.find(element => element.id === param));
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find(element => element.name === animal);
  return animals.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(element => element.firstName === employeeName ||
      element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = Object.assign(personalInfo, associatedWith);
  return newObj;
}

function isManager(id) {
  return data.employees.some(array => array.managers.find(element => element === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (managers === undefined) managers = [];
  if (responsibleFor === undefined) responsibleFor = [];
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
  if (species === undefined) {
    const obj = {};
    data.animals.forEach(element => (obj[element.name] = element.residents.length));
    return obj;
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return ((data.prices.Adult * entrants.Adult) +
    (data.prices.Child * entrants.Child) +
    (data.prices.Senior * entrants.Senior));
}

function animalMap(options) {
  // if (options === undefined) {
  //   const animalNE = data.animals.filter(element => element.location === 'NE').map(animal => animal.name);
  //   const animalNW = data.animals.filter(element => element.location === 'NW').map(animal => animal.name);
  //   const animalSE = data.animals.filter(element => element.location === 'SE').map(animal => animal.name);
  //   const animalSW = data.animals.filter(element => element.location === 'SW').map(animal => animal.name);
  //   const groups = [ animalNE, animalNW, animalSE, animalSW]
  //   const obj = {};
  //   data.animals.forEach(element => (obj[element.location] = 
  //     data.animals.filter(place => element.location).map(animal => animal.name)));
  //   console.log(obj);
  // }
}

function schedule(dayName) {
  // if (dayName === undefined) {
  //   const agenda = {}
  //   data.hours.forEach(element => element.values )
  // }
}

function oldestFromFirstSpecies(id) {
  const responsible = data.employees.find(element => element.id === id).responsibleFor[0];
  const creation = data.animals.find(specie => specie.id === responsible);
  const oldest = Math.max.apply(null, creation.residents.map(animal => animal.age)) ;
  
  return Object.values(creation.residents.find(animal => animal.age == oldest));
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
