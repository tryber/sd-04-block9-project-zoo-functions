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
  return data.animals.filter(element => ids.includes(element.id));
}
  // console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(element => animal.includes(element.name))
  // o find() me retorna o array do animal passado como parametro
  // o loop ocorre só dentro desse array.
                      .residents.every(element => element.age >= age);
}

// console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  return data.employees.find(
    employee => employee.firstName === employeeName ||
    employee.lastName === employeeName) || {};
}
// console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}
  // console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  // seu código aqui
  return data.employees.some(elements => elements.managers.find(elemId => elemId === id));
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

// console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe', [], []));

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const speciesCount = data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      // console.log(acc);
      return acc;
    }, {});
    return speciesCount;
  }
  return data.animals.find(specie => specie.name === species).residents.length;
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
