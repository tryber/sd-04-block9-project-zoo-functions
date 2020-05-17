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
  // o filter retorna um array com os elementos que satisfaz a condição
  // se os elementos não satifaz ele retorna um array vazio.
}
  // console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')); // não acessa
  // os valores da chave residents:
  // console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce')[0].residents);

function animalsOlderThan(animal, age) {
  return data.animals.find(element => animal.includes(element.name))
  // o find() me retorna o o primeiro elemento o que quer que ele seja.
  // nesse caso retorna o objeto que o nome está inserido
                      .residents.every(element => element.age >= age);
}

  // console.log(animalsOlderThan('penguins', 10));

function employeeByName(employeeName) {
  // seu código aqui
  return data.employees.find(
    employee => employee.firstName === employeeName ||
    employee.lastName === employeeName) || {};
}
// console.log(employeeByName('Emery'));

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}
  // console.log(createEmployee(personalInfo, associatedWith));

function isManager(id) {
  // seu código aqui
  return data.employees.some(elements => elements.managers.find(elemId => elemId === id));
}

// console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

  // console.log(addEmployee('39800c14-4b76-454a-858d-2f8d168146a7', 'John', 'Doe'));

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const speciesCount = data.animals.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      // console.log(acc);
      return acc;
    }, {});
    return speciesCount;
  }
  return data.animals.find(specie => specie.name === species).residents.length;
}


function entryCalculator(entrants) {
  // seu código aqui
  // const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
  if (entrants && Object.keys(entrants).length > 0) {
    return Object.keys(entrants).reduce(
        (acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0);
  }
  return 0;
}

function animalMap(options) {
  // seu código aqui
}

function checkSchedule(dia) {
  if (data.hours[dia].open === 0 && data.hours[dia].close === 0) {
    return 'CLOSED';
  }
  return `Open from ${data.hours[dia].open}am until ${data.hours[dia].close - 12}pm`;
}

function schedule(dayName) {
  // seu código aqui
  const retorno = {};
  if (!dayName) {
    Object.keys(data.hours).forEach((key) => {
      retorno[key] = checkSchedule(key);
    });
    return retorno;
  }
  return { [dayName]: checkSchedule(dayName) };
}
console.log(schedule('Tuesday'));


function oldestFromFirstSpecies(id) {
  // seu código aqui
  const findNoemployee = data.employees.find(idFunc => idFunc.id === id).responsibleFor[0];
  // encontrado o id do animal gerenciado pelo funcionário deve-se
  // encontrar esse id no objeto 'animals'.
  const findNOanimals = data.animals.find(elementos => elementos.id === findNoemployee);
  return Object.values(findNOanimals.residents.sort((a, b) => b.age - a.age)[0]);
}

// console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(data.prices).forEach((valores) => {
    (data.prices[valores] =
      Math.round(data.prices[valores] * (1 + (percentage / 100)) * 100) / 100);
  });
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
