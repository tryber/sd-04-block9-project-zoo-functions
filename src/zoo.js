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

const animals = data.animals;// Constante animals recebe a primeira entrada do array em data
function animalsByIds(...ids) {
  let animaisFiltradosPorId = [];
  ids.forEach((id) => {
    animaisFiltradosPorId = [...animaisFiltradosPorId, ...animals.filter((animal) => {
      if (animal.id === id) return true;
      return false;
    })];
  });
  return animaisFiltradosPorId;
}

function animalsOlderThan(animal, age) {
  const animalFiltradoPorEspecie = animals.filter((elementoAnimal) => {
    if (elementoAnimal.name === animal) return true;
    return false;
  });
  return animalFiltradoPorEspecie[0].residents.every((animalElemento) => {
    if (animalElemento.age >= age) return true;
    return false;
  });
}

/*function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  const funcionarios
  const funcionarioFiltrado = funcionarios.filter((funcionario) => {
    if (funcionario.firstName === employeeName || funcionario.lastName === employeeName) {
      return true;
    }
    return false;
  });
  return funcionarioFiltrado[0];
}*/

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

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
