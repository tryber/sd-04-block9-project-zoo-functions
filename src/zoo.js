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
  /*if ( !species ){
    //result = data.animals.map( element =>`${element.name} : ${element.residents.length}`, {});
  }
  else {
    const animalC = data.animals.find( element => element.name === species );
    return animalC.residents.length;
  } */
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

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const {Adult , Child , Senior} = data.prices;
  let total= 0;

  if ( entrants.Adult > 0 ) {
    total += entrants.Adult * Adult;
  }

  if ( entrants.Senior > 0 ) {
    total += entrants.Senior * Senior;
  }

  if ( entrants.Child > 0 ) {
    total += entrants.Child * Child;
  }
  return total;
};
console.log(entryCalculator({ 'Adult': 2, 'Child': 3, 'Senior': 1 }));
function animalMap(options) {
  // seu código aqui
}

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
