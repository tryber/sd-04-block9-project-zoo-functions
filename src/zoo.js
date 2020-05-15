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

const namesAni = (nome, sort, sexo) => {
  const response = {};
  response[nome] = data.animals.find(animal => animal.name === nome).residents;
  if (sexo) response[nome] = response[nome].filter(animal => animal.sex === sexo);
  response[nome] = response[nome].map(({ name }) => name);
  if (sort) response[nome].sort();
  return response;
};

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

// const mapAni = {
//   NE: ['lions', 'giraffes'],
//   NW: ['tigers', 'bears', 'elephants'],
//   SE: ['penguins', 'otters'],
//   SW: ['frogs', 'snakes'],
// };

// const response = {
//   NE: [],
//   NW: [],
//   SE: [],
//   SW: [],
// };

// const addToMap = (chaves) => {
//   chaves.forEach(k =>{
//     mapAni[k].forEach(name => {
//       const result = data.animals.find(got => got.name === name).residents
//       .reduce((res, a) => {
//         res.push(a.name);
//         return res;
//       },[]);
//       response[k].push({ [name]: result });
//     });
//   });
//   return response;
// };

// // const sort = () => {};

// const animalMap = (...options) => {
//   const keys = Object.keys(mapAni);
//   if (!options.length) return mapAni;
//   // addToMap(keys);
//   // if (options[0].sorted) return true;
//   // console.log(options);
//   return addToMap(keys);
// };

const animalMap = (options = {}) => {
  const { includeNames = false, sorted = false, sex = false } = options;
  return data.animals.reduce((a, { name, location }) => {
    if (!a[location]) a[location] = [];
    a[location].push((!includeNames) ? name : namesAni(name, sorted, sex));
    return a;
  }, {});
};

const obj = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

const schedule = (dayName) => {
  if (!dayName) return obj;
  return { [dayName]: obj[dayName] };
};

const oldestFromFirstSpecies = (id) => {
  const num = data.employees.find(e => id === e.id).responsibleFor[0];
  const animal = data.animals.find(a => a.id === num);
  return animal.residents.reduce((m, n) => {
    if (m[2] < n.age) return [n.name, n.sex, n.age];
    return m;
  }, [0, 0, 0]);
};

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((chave) => {
    data.prices[chave] = parseFloat((data.prices[chave] +
    (data.prices[chave] * ((percentage + 0.01) / 100)))
    .toFixed(2));
  });
};

const objEmp = {
  'Nigel Nelson': ['lions', 'tigers'],
  'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
  'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
  'Wilburn Wishart': ['snakes', 'elephants'],
  'Stephanie Strauss': ['giraffes', 'otters'],
  'Sharonda Spry': ['otters', 'frogs'],
  'Ardith Azevado': ['tigers', 'bears'],
  'Emery Elser': ['elephants', 'bears', 'lions'],
};

const employeeCoverage = (idOrName) => {
  if (!idOrName) return objEmp;
  const funcionario = data.employees.reduce((res, e) => {
    res = (e.id === idOrName || e.firstName === idOrName || e.lastName === idOrName) ?
    `${e.firstName} ${e.lastName}` : res;
    return res;
  }, '');
  return { [funcionario]: objEmp[funcionario] };
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
