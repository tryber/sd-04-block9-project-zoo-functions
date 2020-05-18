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
  const resp = data.animals.filter(elemento => ids.includes(elemento.id));
  return resp;
}

function animalsOlderThan(animal, age) {
  let resp = [];
  data.animals.forEach((element) => {
    if (element.name === animal) resp = element.residents.every(elemento => elemento.age >= age);
  });
  return resp;
}

function employeeByName(employeeName) {
  if (!employeeByName) return {};
  let resp = {};
  data.employees.forEach((element) => {
    if (element.firstName === employeeName) resp = element;
    else if (element.lastName === employeeName) resp = element;
  });
  return resp;
}

function createEmployee(personalInfo, associatedWith) {
  let resp = {};
  resp = Object.assign({}, personalInfo, associatedWith);
  return resp;
}

function isManager(id) {
  let resp = false;
  resp = data.employees.some(elemento => elemento.managers.includes(id));
  return resp;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = {};
  personalInfo.id = id;
  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;

  const associatedWith = {};
  associatedWith.managers = managers;
  associatedWith.responsibleFor = responsibleFor;

  if (!managers) associatedWith.managers = [];
  if (!responsibleFor) associatedWith.responsibleFor = [];

  const resp = createEmployee(personalInfo, associatedWith);
  data.employees.push(resp);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  let resp = 0;
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  resp = Object.keys(entrants).reduce((acc, i) => (acc + (data.prices[i] * entrants[i])), 0);
  return resp;
}

function animalMap(options) {
  // seu código aqui
}

const montaHorario = (dayname) => {
  if (dayname === 'Monday') return 'CLOSED';
  return `Open from ${data.hours[dayname].open}am until ${data.hours[dayname].close - 12}pm`;
};

function schedule(dayName) {
  const resp = {};
  if (!dayName) Object.keys(data.hours).forEach(element => (resp[element] = montaHorario(element)));
  else {
    const aux = Object.keys(data.hours).find(element => element === dayName);
    resp[dayName] = montaHorario(aux);
  }
  return resp;
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
