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
  return data.animals.filter(element => ids.includes(element.id));
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  const oAnimal = data.animals.find(element => animal === element.name);
  return oAnimal.residents.every(element => element.age >= age);
  // seu código aqui
}

function employeeByName(employeeName) {
  // seu código aqui 1 uma busca pelo nome esobrenome
  const Person = data.employees.find(element => element.firstName === employeeName ||
      element.lastName === employeeName);
  return {
    ...Person,
  };
}

function createEmployee(personalInfo, associatedWith) {
  const newP = {};
  return Object.assign(newP, personalInfo, associatedWith);
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
  return data.employees.some(element => element.managers.some(e => e === id));
}

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
  // seu código aqui
};

function animalCount(species) {
  if (!species) {
    const vazio = data.animals.reduce((acc, animalAtual) => {
      acc[animalAtual.name] = animalAtual.residents.length;
      return acc;
    }, {});
    return vazio;
  }
  const animalC = data.animals.find(animal => animal.name === species);
  return animalC.residents.length;
}
animalCount();
function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { Adult, Child, Senior } = data.prices;
  let total = 0;

  if (entrants.Adult > 0) {
    total += entrants.Adult * Adult;
  }

  if (entrants.Senior > 0) {
    total += entrants.Senior * Senior;
  }

  if (entrants.Child > 0) {
    total += entrants.Child * Child;
  }
  return total;
}
function animalMap(options) {
  // seu código aqui
}

const menssage = (open, close) => {
  if (open === 0) {
    return 'CLOSED';
  }
  return `Open from ${open}am until ${close - 12}pm`;
};
function schedule(dayName) {
  // seu código aqui
  if (dayName !== undefined) {
    return { [dayName]: menssage(data.hours[dayName].open, data.hours[dayName].close) };
  }
  let newO = {};
  Object.keys(data.hours).map((element) => {
    newO = {
      ...newO,
      [element]: menssage(data.hours[element].open, data.hours[element].close),
    };
    return newO;
  });
  return newO;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = data.employees.find(element => element.id === id);
  let animalRF = funcionario.responsibleFor[0];
  animalRF = data.animals.find(element => element.id === animalRF);
  let maior = animalRF.residents[0];
  animalRF = animalRF.residents.map((element) => {
    if (element.age > maior.age) {
      maior = element;
    }
    return maior;
  });
  return Object.values(animalRF[animalRF.length - 1]);
}

function increasePrices(percentage) { Object.keys(data.prices).map(element =>
  data.prices[element] = Math.ceil(data.prices[element] * (percentage + 100)) / 100);
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
