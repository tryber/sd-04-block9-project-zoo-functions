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

function animalsByIds(...theIds) {
  return data.animals.filter(animal => theIds.includes(animal.id));
}

// console.log(animalsByIds()); --> TESTE 1
// console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); --> TESTE 2
// console.log(animalsByIds(
// '0938aa23-f153-4937-9f88-4858b24d6bce',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46')) --> TESTE 3

function animalsOlderThan(animal, age) {
  const nomeAnimal = data.animals.find(elemento => elemento.name === animal);
  const idade = nomeAnimal.residents.every(elemento => elemento.age >= age);
  return idade;
}

// console.log(animalsOlderThan('otters', 7)); --> TESTE 1
// console.log(animalsOlderThan('penguins', 10)); -- TESTE 2

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(elemento =>
    (elemento.firstName === employeeName || elemento.lastName === employeeName));
}

// console.log(employeeByName()); //-> TESTE 1
// console.log(employeeByName('Emery')); //--> TESTE 2
// console.log(employeeByName('Wishart')); //--> TESTE 3

// const personalInfo = {
//   id: '7ed1c9bb-8570-44f6-b718-0666b869573a',
//   firstName: 'John',
//   lastName: 'Doe',
// };

// const associatedWith = {
//   managers: [
//     'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
//     '9e7d4524-363c-416a-8759-8aa7e50c0992',
//   ],
//   responsibleFor: [
//     '0938aa23-f153-4937-9f88-4858b24d6bce',
//     '89be95b3-47e4-4c5b-b687-1fabf2afa274',
//     'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
//   ],
// };

function createEmployee(personalInfo, associatedWith) {
  return Object.assign({}, personalInfo, associatedWith);
}

// console.log(createEmployee(personalInfo, associatedWith)); --> TESTE 1

function isManager(id) {
  const contemId = data.employees.some(elemento => elemento.managers.includes(id));
  return contemId;
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1')); --> TESTE 1
// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83')); --> TESTE 2

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

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
