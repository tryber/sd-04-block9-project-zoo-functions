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
    .find(specie => specie.name === animal)
    .residents.every(bicho => bicho.age > age);

const employeeByName = (employeeName = '') => {
  if (!employeeName) return {};
  return data.employees.find(
    e => e.firstName === employeeName || e.lastName === employeeName);
};

const createEmployee = (personalInfo, associatedWith) =>
  Object.assign({}, personalInfo, associatedWith);

const isManager = id =>
  data.employees.some(e => e.id === id && e.managers.length <= 1);

const addEmployee = (
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) => data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const animalCount = (species = '') => {
  if (species) {
    return data.animals.find(a => a.name === species).residents.length;
  }
  return data.animals.reduce((r, a) => {
    r[a.name] = a.residents.length;
    return r;
  }, {});
};

const entryCalculator = (entrants = '') => {
  if (!Object.entries(entrants).length) return 0;
  const coust = Object.values(data.prices);
  return Object.entries(entrants)
    .reduce((r, v, i) => r + (v[1] * coust[i]), 0) - 8;
};

// const adjFunc = loc =>
// console.log(data.animals.filter(a => a.location === loc));

const animalMap = (options) => {
  // const vet = data.animals.map(a => [a.location, a.name]).sort();
  // const v = { NE: [], NW: [], SE: [], SW: [] };
  // const keys = Object.keys(v);
  // let k = data.animals.find(ani => ani.location === 'NW').name;
  // let res = data.animals.reduce((r, a) => { ---
  // if (!r[a.location]) r[a.location] = []; ---
  // data.animals.find(ani => ani.location === r[a.location])
  // r[a.location].push( adjFunc(a.location) );
  // adjFunc(a.location); ---
  // return r; ---
  // }, {}); ---
  // return res;
};
// console.log(animalMap());

const schedule = (dayName) => {};

const oldestFromFirstSpecies = (id) => {
  const num = data.employees.find(e => id === e.id).responsibleFor[0];
  const animal = data.animals.find(a => a.id === num);
  return animal.residents.reduce((m, n) => {
    if (m[2] < n.age) return [n.name, n.sex, n.age];
    return m;
  }, [0, 0, 0]);
};

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach(chave =>  {
    data.prices[chave] = parseFloat((data.prices[chave] + 
      data.prices[chave] * ((percentage + 0.01) / 100) )
    .toFixed(2))
  });
};

const employeeCoverage = (idOrName) => {};

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
