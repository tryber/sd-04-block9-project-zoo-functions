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
// Starting
const data = require('./data');


function animalsByIds(...ids) {
  if (!ids) return [];
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const species = data.animals.find(({ name }) => name === animal);
  const { residents } = species;
  return residents.every(e => e.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) => firstName === employeeName || lastName === employeeName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  const man = data.employees.map(({ managers }) => managers).flat();
  return man.some(e => e === id);
}

function addEmployee(id = '', firstName = '', lastName = '', managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({
    id, firstName, lastName, managers, responsibleFor,
  });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const allAnimals = data.animals.map(({ name, residents }) => [name, residents.length]);
    return Object.fromEntries(allAnimals);
  }
  const oneAnimal = data.animals.find(({ name }) => name === species);
  return oneAnimal.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const moneyArray = [data.prices].map(
    (
      { Adult, Senior, Child },
    ) => [Adult * entrants.Adult, Child * entrants.Child, Senior * entrants.Senior],
  ).flat();
  return moneyArray.reduce((acc, cur) => acc + cur);
}

console.log(entryCalculator({ Adult: 2, Child: 3, Senior: 1 }));


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
