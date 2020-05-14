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
  data.animals.filter(animal => ids.find(id => id === animal.id));

const animalsOlderThan = (animal, age) =>
  data.animals.find(anim => anim.name === animal)
    .residents.every(anim => anim.age > age);

const employeeByName = employeeName =>
  data.employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName) || {};

const createEmployee = (personalInfo, associatedWith) => ({
  ...personalInfo,
  ...associatedWith,
});

const isManager = id =>
  data.employees.some(({ managers }) =>
    managers.find(index => index === id));


class Employee {
  constructor(id, firstName, lastName, managers = [], responsibleFor = []) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.managers = managers;
    this.responsibleFor = responsibleFor;
  }
}
const addEmployee = (...parameters) => data.employees.push(new Employee(...parameters));

  // CC NÃO DEIXA ASSIM
  // const animalCount = species =>
  //   species ? data.animals.find(({ name }) =>
  //     name === species).residents.length : data.animals.reduce((acc, animal) => {
  //       acc[animal.name] = animal.residents.length;
  //       return acc;
  //     }, {});

const animalCount = (species) => {
  if (species) {
    return data.animals.find(({ name }) => name === species).residents.length;
  }
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
};

const entryCalculator = entrants =>
  (entrants && Object.keys(entrants).length > 0 ? Object.keys(entrants)
  .reduce((total, quantity) => (total + (data.prices[quantity] * entrants[quantity])), 0)
  : 0
);

const residentsName = (specie, sorted, sex) => {
  const obj = {};
  obj[specie] = data.animals
    .find(element => element.name === specie).residents;
  if (sex) obj[specie] = obj[specie].filter(resident => resident.sex === sex);
  obj[specie] = obj[specie].map(({ name }) => name);
  if (sorted) obj[specie].sort();
  return obj;
};

const animalMap = (options = {}) => {
  const { includeNames, sex, sorted } = options;
  return data.animals.reduce((animal, { name, location }) => {
    if (!animal[location]) animal[location] = [];
    if (!includeNames) {
      animal[location].push(name);
    } else {
      animal[location].push(residentsName(name, sorted, sex));
    }
    return animal;
  }, {});
};

const legibleSchedule = dayWeek => ((dayWeek === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[dayWeek].open}am until ${data.hours[dayWeek].close - 12}pm`);

const schedule = dayName => {
  const scheduleH = {};
  if (dayName) {
    scheduleH[dayName] = legibleSchedule(dayName);
    return scheduleH;
  }
  Object.keys(data.hours).forEach((day) => { scheduleH[day] = legibleSchedule(day); });
  return scheduleH;
};

const oldestFromFirstSpecies = id => Object.values(data.animals
  .find(e => e.id === data.employees
    .find(animal => animal.id === id).responsibleFor[0]).residents
  .sort((anim1, anim2) => anim2.age - anim1.age)[0]);

const increasePrices = percentage =>
  Object.keys(data.prices).forEach((price) => {
    (data.prices[price] = Math.round(data.prices[price] *
    ((percentage / 100) + 1) * 100) / 100);
  });

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
