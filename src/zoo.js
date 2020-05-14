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


// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(...ids) {
  if (!ids) return [];
  // Parametro REST por default ja atribui a variavel um array vazio caso não receba nada
  //ids - > array
  // const resultado = data.animals.filter(elemento => ids.includes(elemento.id))
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id))
  return resultado
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id))

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

function getAnimal(idOrName) {
  return data.animals.find(info =>
    info.name === idOrName || info.id === idOrName);
}

function getEmployee(idOrName) {
  return data.employees.find(emp =>
    emp.firstName === idOrName || emp.lastName === idOrName || emp.id === idOrName);
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalID = getEmployee(id).responsibleFor[0];
  return getAnimal(animalID)
    .residents.reduce((acc, curr) =>
      (acc[2] < curr.age ? [curr.name, curr.sex, curr.age] : acc), [0, 0, 0]
    );
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
