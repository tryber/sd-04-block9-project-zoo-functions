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

const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => animal.id === id));

const animalsOlderThan = (animal, age) =>
data.animals
  .find(animalFind => animalFind.name === animal)
  .residents.every(especie => especie.age > age);

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
  .find(e => e.firstName === employeeName || e.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(({ managers }) => managers.some(gerente => gerente === id));

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const countAnimal = () =>
  data.animals.reduce((obj, animal) => {
    obj[animal.name] = animal.residents.length;
    return obj;
  }, {});

const animalCount = (species) => {
  if (species === undefined) return countAnimal();
  return data.animals.find(({ name }) => name === species).residents.length;
};

const entryCalculator = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce(
    (price, person) => price + (entrants[person] * data.prices[person]),
    0,
  );
};

const scheduleObj = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

const schedule = (dayName) => {
  if (dayName) return { [dayName]: scheduleObj[dayName] };
  return scheduleObj;
};

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
