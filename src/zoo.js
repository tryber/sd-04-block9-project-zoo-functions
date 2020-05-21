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
  if (!species) {
    return data.animals.reduce(function (total, { name, residents }) {
      total[name] = residents.length;
      return total;
    }, {});
  }
  return data.animals.find(({ name }) => name === species).residents.length;
}
// console.log(animalCount('lions'));

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const prices = data.prices;
  return Object.keys(entrants).reduce((total, crr) => total + (entrants[crr] * prices[crr]), 0);
  // const results = {};
  // Object.keys(prices).map(function (valor) {
  //   results[valor] = prices[valor] *= entrants[valor];
  // });
  // return Object.values(results).reduce((total, currentValue) => total + currentValue, 0);
}
// console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));
// ------------------------------------------------------------------------------------------------
const animalResidents = (animal, sorted, sex) => {
 	  const residents = {};
    residents[animal] = data.animals.find((element) => element.name === animal).residents;
    if (sex) residents[animal] = residents[animal].filter((resident) => resident.sex === sex);
    residents[animal] = residents[animal].map(({ name }) => name);


  if (sorted) residents[animal].sort();

  return residents;
};

function animalMap(options = {}) {

  const { includeNames, sex, sorted } = options;
  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    if (!includeNames) {
      acc[location].push(name);
    } else {
      acc[location].push(animalResidents(name, sorted, sex));
    }
    return acc;
  }, {});
}
// ----------------------------------------------------------------------------------------------
function schedule(dayName) {
  const operation = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return operation;
  return { [dayName]: operation[dayName] };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  // pegar o id e verificar qual animal tem o mesmo ID
  // retornar arr [nome, sex, idade] do animal mais velho.
  const animalId = data.employees.filter(employeeId =>
    employeeId.id === id)[0].responsibleFor[0]; // retorna o primeiro Id do responseble for
  const residents = data.animals.find(animal => animal.id === animalId).residents;
  const result = residents.reduce((cont, atual) => {
    if (cont.age > atual.age) return cont;
    return atual;
  });
  return [result.name, result.sex, result.age];
}

function increasePrices(percentage) {
  // seu código aqui
  Object.keys(data.prices).forEach((e) => {
    (data.prices[e] = Math.round(data.prices[e] * ((percentage / 100) + 1) * 100) / 100);
  });
}

function employeeCoverage(idOrName) {
  // seu código aqui
  


}
console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
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
