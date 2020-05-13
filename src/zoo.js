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

const animalsByIds = (...ids) => {
  if (!ids) return [];
  return data.animals.filter(animal => ids.includes(animal.id));
};
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsName = data.animals.find(eachAnimal => eachAnimal.name === animal);
  const result = animalsName.residents.every(resident => resident.age > age);
  return result;
}
// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  const func = data.employees.find(elemento =>
    employeeName === elemento.firstName || employeeName === elemento.lastName);
  return func;
}
// console.log(employeeByName(''));


function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employeeObject = Object.assign(personalInfo, associatedWith);
  return employeeObject;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(manager => manager.managers.some(e => e === id));
}
// console.log(isManager());

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  // seu código aqui
  // if(!species) return data.animals.map(e => `${e.name}: ${e.popularity}`);
  // return data.animals.filter(e => {if (e.name === species){ return e.popularity}})[0].popularity;
  if(!species) return data.animals.reduce(function(total, {name, residents}) {
    total[name] = residents.length;
    return total;
  },{});
   return data.animals.find(({name}) => name === species).residents.length;
}
 // console.log(animalCount('lions'));

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
