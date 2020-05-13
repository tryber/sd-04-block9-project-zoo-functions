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
  const resultMap = ids.map((id) => {
    console.log(id);
    const resultFind = data.animals.find(animal => animal.id === id);
    console.log(resultFind);
    return resultFind;
  }); // includes
  console.log(resultMap);
  return resultMap;
}
// animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
// 'e8481c1d-42ea-4610-8e11-1752cfc05a46');

function animalsOlderThan(animal, age) {
  const nomeEspecie = data.animals.find(especie => especie.name === animal);
  console.log(nomeEspecie);
  const isIdadeMinima = nomeEspecie.residents.every(resident => resident.age > age);
  console.log(isIdadeMinima);
  return isIdadeMinima;
}

// nimalsOlderThan('penguins', 10);

function employeeByName(employeeName) {
  // console.log(employeeName);
  const ReduceEmployee = data.employees.reduce((accumulator, employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName
      ? employee : accumulator), {});
  console.log(ReduceEmployee);
  return ReduceEmployee;
}

//  employeeByName();

function createEmployee(personalInfo, associatedWith) {
  console.log(personalInfo, associatedWith);
  const newEmployee = Object.assign(personalInfo, associatedWith);
  return newEmployee;
}

//console.log(createEmployee({nome: 'teste'}, {idade: 'teste2'}));

function isManager(id) {
  // seu código aqui
}

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
