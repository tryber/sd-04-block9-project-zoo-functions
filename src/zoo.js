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
  if (!ids) return [];
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
  return resultado;
}

function animalsOlderThan(animal, age) {
  const bixo = data.animals.find(elemento => elemento.name === animal);
  const sera = bixo.residents.every(elemento => elemento.age > age);
  return sera;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const emp = data.employees.find(n => n.firstName === employeeName || n.lastName === employeeName);
  return emp;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const resultado = data.employees.some(elemento => elemento.managers.includes(id));
  return resultado;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(novoEmp);
}
// console.log(data.animals.map(animal => animal.name).sort())
// console.log(data.animals.map(animal => animal.residents.length))
// console.log(data.animals.filter(animal => animal.name === 'lions')[0].residents.length)

function animalCount(species) {
  if (!species) {
    const vazio = data.animals.reduce((acc, animalAtual) => {
      acc[animalAtual.name] = animalAtual.residents.length;
      return acc;
    }, {});
    return vazio;
  }
  const tata = data.animals.filter(animal => animal.name === species);
  return tata[0].residents.length;
}
// console.log(Object.keys(data.prices))
// console.log(Object.values(data.prices))
// console.log(Object.values(data.prices)[1])

function entryCalculator(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const precoAdulto = Object.values(data.prices)[0];
  const precoSenior = Object.values(data.prices)[1];
  const precoChild = Object.values(data.prices)[2];
  const total = (((Object.values(entrants)[0] * precoAdulto)
  + (Object.values(entrants)[1] * precoChild)
  + (Object.values(entrants)[2] + precoSenior)) - 1);
  return total;
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
