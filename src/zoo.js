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
  if (!ids.length) {
    return [];
  }
  return data.animals.filter(animal => ids.find(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals
  .find(specie => specie.name === animal).residents
  .every(resident => resident.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(employee => employee.managers
  .find(idEmployee => idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    return data.animals
    .reduce((count, animal) => {
      count[animal.name] = animal.residents.length;
      return count;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants) === 0) return 0;
  const prices = data.prices;
  return Object.keys(entrants)
  .reduce((total, key) => total + (entrants[key] * prices[key]), 0);
}

function animalAndResidents(name, sorted, sex) {
  const obj = {};
  obj[name] = data.animals.find(item => item.name === name).residents;
  obj[name] = obj[name].map(resident => resident);
  if (sex) obj[name] = obj[name].filter(item => item.sex === sex);
  if (sorted) obj[name].sort();
  return obj;
}

function regions() {
  return data.animals.reduce((prev, item) => {
    const local = item.location;
    if (prev[local]) {
      prev[local].push(item.name);
    } else {
      prev[local] = [item.name];
    }
    return prev;
  }, {});
}

function animalMap(options = {}) {
  // seu código aqui
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    return data.animals.reduce((prev, animal) => {
      const local = animal.location;
      if (!prev[local]) prev[local] = [];
      prev[local].push(animalAndResidents(animal.name, sorted, sex));
      return prev;
    }, {});
  }
  return regions();
}

function printSchedule({ open, close }) {
  return (open === 0 && close === 0) ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm`;
}

function schedule(dayName) {
  // seu código aqui
  if (!dayName) {
    return Object.keys(data.hours).reduce((prev, actual) => {
      prev[actual] = printSchedule(data.hours[actual]);
      return prev;
    }, {});
  }
  return { [dayName]: printSchedule(data.hours[dayName]) };
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  let older = null;
  const idSpecie = data.employees.find(employee => employee.id === id).responsibleFor[0];
  data.animals.find(specie => specie.id === idSpecie).residents
  .reduce((old, animal) => {
    if (animal.age > old) {
      old = animal.age;
      older = animal;
    }
    return old;
  }, 0);
  return Object.values(older);
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(data.prices).forEach((key) => {
    (data.prices[key] = Math.round(data.prices[key] *
  ((percentage / 100) + 1) * 100) / 100);
  });
}

function responsible(employee) {
  const objEmployee = {};
  objEmployee[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor
  .map(id => data.animals.find(animal => animal.id === id).name);
  return objEmployee;
}

function employeeCoverage(idOrName) {
  // seu código aqui
  const employees = {};
  if (!idOrName) {
    data.employees.forEach((employee) => {
      Object.assign(employees, responsible(employee));
    });
    return employees;
  }
  let key = null;
  if (data.employees.find(employee => employee.id === idOrName)) key = 'id';
  if (data.employees.find(employee => employee.firstName === idOrName)) key = 'firstName';
  if (data.employees.find(employee => employee.lastName === idOrName)) key = 'lastName';
  const obj = data.employees.find(employee => employee[key] === idOrName);
  return responsible(obj);
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
