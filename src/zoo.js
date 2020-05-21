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
  if (!ids) {
    return [];
  }
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  const select = data.animals.find(animals => animals.name === animal);
  return select.residents.every(elem => elem.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  const select = data.employees.find(
    elem => elem.firstName === employeeName || elem.lastName === employeeName);
  return select;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(e => e.managers.some(m => m === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const employee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(employee);
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    let obj = {};
    data.animals.forEach(({ name, residents }) => {
      obj = {
        ...obj,
        [name]: residents.length,
      };
    });
    return obj;
  }
  const animal = data.animals.find(({ name }) => name === species);
  return animal.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  const { Adult, Child, Senior } = entrants;
  return (Adult * data.prices.Adult) + (Child * data.prices.Child) + (Senior * data.prices.Senior);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
  const cronograma = {};
  const dias = Object.keys(data.hours);
  dias.forEach((dia) => {
    const abertura = data.hours[dia].open;
    const fechamento = data.hours[dia].close - 12;
    cronograma[dia] = `Open from ${abertura}am until ${fechamento}pm`;
  });
  cronograma.Monday = 'CLOSED';
  if (!dayName) {
    return cronograma;
  }
  return { [dayName]: cronograma[dayName] };
}


const findAnimalId = id => data.employees.find(employee => employee.id === id).responsibleFor[0];

const findAnimalArr = id => data.animals.find(animal => animal.id === findAnimalId(id));

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const oldest = Object.values(findAnimalArr(id).residents.reduce((older, resident) => {
    older = older.age > resident.age ? older : resident;
    return older;
  }));
  return oldest;
}

function increasePrices(percentage) {
  // seu código aqui
  const newPrices = Object.values(data.prices).map(
    e => Math.round(e * (((1 + percentage) / 100) * 100) / 100)
  );
  Object.keys(data.prices).forEach(
    (key, ind) => (data.prices[key] = newPrices[ind]));
  return data.prices;
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
