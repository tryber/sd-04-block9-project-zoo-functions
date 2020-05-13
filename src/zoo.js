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
  return data.animals.filter(info => ids.some(id => info.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(info => info.name === animal)
    .residents.every(resid => resid.age > age);
}

function employeeByName(employeeName) {
  // seu código aqui
  return employeeName === undefined ? {} :
    data.employees.find(emp => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return Object.assign({}, personalInfo, associatedWith);
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(emp => emp.managers.some(manag => manag === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  return species !== undefined ?
    data.animals.find(info => info.name === species).residents.length :
    data.animals.reduce((acc, info) => {
      acc[info.name] = info.residents.length;
      return acc;
    }, {});
}

function entryCalculator(entrants) {
  // seu código aqui
  return entrants == null ? 0 :
    Object.keys(entrants).reduce((acc, curr) => acc + (entrants[curr] * data.prices[curr]), 0);
}

function toPushMap(info, options) {
  let result = info.name;
  if (options != null && options.includeNames) {
    const names = info.residents.filter(resi => !options.sex || resi.sex === options.sex)
      .map(resi => resi.name);
    result = { [info.name]: names };
    if (options.sorted) result[info.name].sort();
  }
  return result;
}

function animalMap(options) { // preciso refatorar não gostei do resultado por mais que funcione
  // seu código aqui
  return data.animals.reduce((acc, curr) => {
    if (!acc[curr.location]) acc[curr.location] = [];
    acc[curr.location].push(toPushMap(curr, options));
    return acc;
  }, {});
}

function getScheduleString({ open, close }) {
  return open === 0 && close === 0 ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`
}

function schedule(dayName) {
  // seu código aqui
  return dayName !== undefined ?
    { [dayName]: getScheduleString(data.hours[dayName]) } :
    Object.keys(data.hours).reduce((acc, curr) => {
      acc[curr] = getScheduleString(data.hours[curr]);
      return acc;
    }, {});
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const animalID = data.employees.find(emp => emp.id === id).responsibleFor[0];
  return data.animals.find(info => info.id === animalID)
    .residents.reduce((acc, curr) => acc[2] < curr.age ? [curr.name, curr.sex, curr.age] : acc, [, , 0]);
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(data.prices)
    .forEach(key => data.prices[key] = 
      Math.round(100 * ((data.prices[key] * (percentage / 100)) + data.prices[key])) / 100);
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
