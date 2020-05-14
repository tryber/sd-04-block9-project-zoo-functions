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

const animalMap = function (options) {
  const obj = { NE: [], NW: [], SE: [], SW: [] };

  const createNewObj = (animal) => {
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

  if (!options || !options.includeNames) {
    data.animals.map(animal => obj[animal.location].push(animal.name));
  } else if (options.includeNames === true) {
    data.animals.map(animal => obj[animal.location].push(createNewObj(animal)));
  }

  return obj;
};

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
