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
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, ages) {
  const animalSelected = data.animals.find(({ name }) => name === animal);
  return (animalSelected.residents.every(({ age }) => age >= ages));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) => (
    firstName === employeeName ||
    lastName === employeeName),
  );
}

function createEmployee(personalInfo, associatedWith) {
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const animalsArray = data.animals.map(obj => ({ [obj.name]: obj.residents.length }));
    const animals = {};
    animalsArray.forEach(animal => Object.assign(animals, animal));
    return animals;
  }
  return data.animals.find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants = {}) {
  if (entrants.length === 0) return 0;
  return Object.keys(entrants).reduce(
    (acc, cur) => (acc += entrants[cur] * data.prices[cur]), 0);
}


// AnimalMap
const filterNames = local => data.animals.filter(({ location }) =>
location === local).map(({ name }) => name);

const getNames = local => data.animals.filter(({ location }) =>
location === local).map(({ name, residents }) => ({ [name]: residents.map(item => item.name) }));

const getNamesSorted = local => data.animals.filter(({ location }) =>
location === local).map(({ name, residents }) =>
({ [name]: residents.map(item => item.name).sort() }));

const getGender = (local, animalGender) =>
data.animals.filter(({ location }) =>
location === local).map(({ name, residents }) =>
({ [name]: residents.filter(({ sex }) =>
sex === animalGender).map(item => item.name) }));

const getLocations = [...new Set(data.animals.map((item => item.location)))];

const checkOptions = (opts) => {
  if (opts.includeNames === true && opts.sorted === true) {
    return getLocations.reduce((acc, cur) => ({ ...acc, [cur]: getNamesSorted(cur) }), {});
  }

  if (opts.includeNames === true && opts.sex) {
    return getLocations.reduce((acc, cur) => ({ ...acc, [cur]: getGender(cur, opts.sex) }), {});
  }

  if (opts.includeNames === true) {
    return getLocations.reduce((acc, cur) => ({ ...acc, [cur]: getNames(cur) }), {});
  }

  return getLocations.reduce((acc, cur) =>
  ({ ...acc, [cur]: filterNames(cur) }), {});
};

function animalMap(options) {
  // seu código aqui
  return !options ? getLocations.reduce((acc, cur) =>
    ({ ...acc, [cur]: filterNames(cur) }), {}) : checkOptions(options);
}


function schedule(dayName) {
  const dayTime = {};
  Object.entries(data.hours).forEach((obj, index) => {
    const close = (obj[1].close) - 12;
    return ((index < 6) ? (dayTime[obj[0]] = (`Open from ${obj[1].open}am until ${close}pm`)) : (dayTime[obj[0]] = ('CLOSED')));
  });
  if (!dayName) { return dayTime; }
  return { [dayName]: dayTime[dayName] };
}

function oldestFromFirstSpecies(ids) {
  const animalId = data.employees.find(({ id }) => id === ids).responsibleFor[0];
  const animals = animalsByIds(animalId)[0].residents;
  const maxAge = animals.reduce((acc, cur) => Math.max(acc, cur.age), 0);
  return Object.values(animals.find(({ age }) => age === maxAge));
}

function increasePrices(percentage) {
  const perc = (100 + percentage) / 100;
  const prices = Object.keys(data.prices).reduce((acc, cur) => {
    acc[cur] = Math.round((data.prices[cur] * perc) * 100) / 100;
    return acc;
  }, {});
  data.prices = prices;
  return prices;
}

function employeeCoverage(idOrName) {
  // if(!idOrName){
  //   const employeeInfo = {};
  //   return Object.values(data.employees).map(({firstName, lastName, responsibleFor}) => {return ({employeeInfo = [(`${firstName} ${lastName}`)] : (animalsByIds(...responsibleFor)).forEach(obj => Object.values(obj))      } )})
  // }
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
