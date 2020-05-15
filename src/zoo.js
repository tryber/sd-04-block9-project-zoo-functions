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
  data.animals
    .find(element => animal === element.name)
    .residents.every(obj => obj.age >= age);

const employeeByName = function (name) {
  return name ?
    data.employees.find(element => element.firstName === name || element.lastName === name)
    : {};
};

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });


const isManager = id => data.employees.some(element => element.managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
  data.employees.push(
    { id, firstName, lastName, managers, responsibleFor });

const animalCount = (species) => {
  const bichos = {};
  const filterAnimal = element => (bichos[element.name] = element.residents.length);
  data.animals.filter(filterAnimal);
  return (species) ? bichos[species] : bichos;
};

const entryCalculator = function (entrants) {
  return !entrants || Object.keys(entrants).length === 0 ?
    0
    :
    (data.prices.Adult * entrants.Adult) +
    (data.prices.Child * entrants.Child) +
    (data.prices.Senior * entrants.Senior);
};

const createNewObj = (animal, options) => {
  const newObj = {};
  if (options.sex === 'female' || options.sex === 'male') {
    const array = [];
    animal.residents.forEach((element) => {
      if (element.sex === options.sex) {
        array.push(element.name);
      }
    });
    newObj[animal.name] = array;
  } else {
    newObj[animal.name] = animal.residents.map(element => element.name);
  }
  if (options.sorted) {
    newObj[animal.name].sort();
  }
  return newObj;
};

const animalMap = function (options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };

  if (!options || !options.includeNames) {
    data.animals.map(animal => obj[animal.location].push(animal.name));
  } else {
    data.animals.map(animal => obj[animal.location].push(createNewObj(animal, options)));
  }

  return obj;
};

const schedule = function (dayName) {
  const keys = Object.keys(data.hours);
  const obj = {};
  keys.forEach(function (cur) {
    if (data.hours[cur].open === 0) {
      obj[cur] = 'CLOSED';
    } else {
      obj[cur] = `Open from ${data.hours[cur].open}am until ${data.hours[cur].close - 12}pm`;
    }
  });
  const objFiltered = {};
  objFiltered[dayName] = obj[dayName];

  return (dayName) ? objFiltered : obj;
};

const oldestFromFirstSpecies = (id) => {
  const idAnimal = data.employees.filter(employee => employee.id === id)[0].responsibleFor[0];
  const Animal = data.animals.filter(animal => animal.id === idAnimal);
  const olderAnimal = Object.values(Animal[0].residents.sort((a, b) => b.age - a.age)[0]);
  return olderAnimal;
};

const increasePrices = (percentage) => {
  const adult = data.prices.Adult;
  const senior = data.prices.Senior;
  const child = data.prices.Child;

  data.prices.Adult = Math.round(adult * ((percentage / 100) + 1) * 100) / 100;
  data.prices.Senior = Math.round(senior * ((percentage / 100) + 1) * 100) / 100;
  data.prices.Child = Math.round(child * ((percentage / 100) + 1) * 100) / 100;
};

const employeeCoverage = () => {
};

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
