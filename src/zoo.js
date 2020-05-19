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
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAges = data.animals.find(({ name }) => name === animal)
  .residents.map(item => item.age);
  if (animalsAges.find(item => item < age)) return false;
  return true;
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(({ firstName, lastName }) =>
  firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  if (data.employees.find(item => item.managers.includes(id))) return true;
  return false;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  const animalsArray = data.animals.map(({ name, residents }) => ({ [name]: residents.length }));
  const animalsList = {};
  animalsArray.forEach(item => Object.assign(animalsList, item));
  return species === undefined ? animalsList : data.animals
  .find(({ name }) => name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;
  return Object.keys(entrants).reduce((acc, cur) => acc + (entrants[cur] * data.prices[cur]), 0);
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

// Schedule
const convertHoursTo12Format = (hours) => {
  const amOrPm = hours >= 12 ? 'pm' : 'am';
  const convertedHours = (hours % 12) || 12;
  return `${convertedHours}${amOrPm}`;
};

function schedule(dayName) {
  // seu código aqui
  const daysOfTheWeek = Object.keys(data.hours);

  const createdSchedule = daysOfTheWeek.reduce((a, b) =>
  ({ ...a, [b]: `Open from ${convertHoursTo12Format(data.hours[b].open)} until ${convertHoursTo12Format(data.hours[b].close)}` }), {});

  createdSchedule.Monday = 'CLOSED';

  if (!dayName) return createdSchedule;

  return (createdSchedule[dayName] !== undefined) ? ({ [dayName]: createdSchedule[dayName] }) : 'Invalid day';
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find(item => item.id === id);

  const firstSpecie = data.animals.find(item => item.id === employee.responsibleFor[0]);

  const animalsAges = firstSpecie.residents.map(({ age }) => age).sort((a, b) => a - b);

  const oldestInfo = firstSpecie.residents
  .filter(item => item.age === animalsAges[animalsAges.length - 1]);

  const oldestInfoArray = Object.values(oldestInfo[0]);

  return oldestInfoArray;
}

console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

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
