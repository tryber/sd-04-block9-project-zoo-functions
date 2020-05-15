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
  // const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce(
        (acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui

}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findNoemployee = data.employees.find(idFunc => idFunc.id === id).responsibleFor[0];
  // encontrado o id do animal gerenciado pelo funcionário deve-se
  // encontrar esse id no objeto 'animals'.
  const findNOanimals = data.animals.find(elementos => elementos.id === findNoemployee);
  return Object.values(findNOanimals.residents.sort((a, b) => b.age - a.age)[0]);
}

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// const data = require('./data');
function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(data.prices).forEach((valores) => {
    (data.prices[valores] =
      Math.round(data.prices[valores] * (1 + (percentage / 100)) * 100) / 100);
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
