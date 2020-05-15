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
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
  return resultado;
}

// function animalsOlderThan(animal, age) {
// seu código aqui
const animalsOlderThan = (animal, age) => {
  const pet = data.animals.find(elementoName => elementoName.name === animal)
    .residents.every(elementoIdade => elementoIdade.age >= age);
  return pet;
};

// function employeeByName(employeeName) {
// seu código aqui
const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  const worker = data.employees.find(functionary =>
    functionary.firstName === employeeName || functionary.lastName === employeeName);
  return worker;
};

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const newInfoWorker = Object.assign(personalInfo, associatedWith); return newInfoWorker;
  // const newInfoWorker = ({...personalInfo, ...associatedWith});
  // return  newInfoWorker; //com spread rest
}

function isManager(id) {
  // seu código aqui
  // const isManager = (id) => {
  //   const gerent = data.employees.find(employee => employee.managers.includes(id));
  //   return gerent;
  // };
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  const addNewEmployee = {
    id,
    firstName,
    lastName,
    managers: managers || [],
    responsibleFor: responsibleFor || [],
  };
  return data.employees.push(addNewEmployee)
}

// function animalCount(species) {
// seu código aqui
const animalCount = (species) => {
  if (species) {
    return data.animals.find(pet => pet.name === species).residents.length;
  }
  const animal = {};
  data.animals.forEach((pet) => { animal[pet.name] = pet.residents.length; });
  return animal;
};

function entryCalculator(entrants) {
  // seu código aqui
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
