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

const animalsByIds = (...ids) => {
  if (!ids) return [];
  return data.animals.filter(element => ids.includes(element.id));
};

function animalsOlderThan(animal, age) {
  const result = data.animals
    .find(element => element.name === animal)
    .residents.every(element => element.age >= age);
  return result;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees
    .find(element => element.firstName === employeeName || element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const worker = Object.assign({}, personalInfo, associatedWith);
  return worker;
}

function isManager(id) {
  return data.employees.some(element => element.managers.some(man => man === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push(
    {
      id,
      firstName,
      lastName,
      managers,
      responsibleFor,
    });
}

function animalCount(species) {
  let animalQuantity;
  if (species !== undefined) {
    data.animals.find((nameAnimal) => {
      if (nameAnimal.name === species) {
        animalQuantity = nameAnimal.residents.length;
      }
      return animalQuantity;
    });
  } else {
    animalQuantity = {};
    data.animals.forEach((nameAnimal) => {
      if (nameAnimal.name) {
        animalQuantity[nameAnimal.name] = nameAnimal.residents.length;
      }
    });
  }
  return animalQuantity;
}

function entryCalculator(entrants) {
  let total;
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    total = 0;
  } else {
    total = entrants.Adult * data.prices.Adult;
    total += entrants.Child * data.prices.Child;
    total += entrants.Senior * data.prices.Senior;
  }
  return total;
}

function animalMap(options) {
  // seu código aqui
  // Sem parâmetros, retorna animais categorizados por localização - OK
  // Com opções especificadas, retorna nomes de animais
  // Com opções especificadas, retorna nomes de animais ordenados
  // Com opções especificadas, retorna somente nomes de animais macho/fêmea
  // Só retorna informações específicas de gênero se includeNames for setado
  const animalLocation = {};
  data.animals.forEach((element) => {
    if (element.location) {
      animalLocation[element.location] = [];
    }
  });
  data.animals.forEach((element) => {
    if (element.location) {
      animalLocation[element.location].push(element.name);
    }
  });

  // console.log(animalLocation);
  return animalLocation;
}

function schedule(dayName) {
  const obj = {};
  Object.entries(data.hours).forEach((day) => {
    obj[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    if (day[0] === 'Monday') {
      obj[day[0]] = 'CLOSED';
    }
  });
  if (dayName) {
    return { [dayName]: obj[dayName] };
  }
  return obj;
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees
    .find(element => element.id === id)
    .responsibleFor.find(element => element);

  const oldest = data.animals
    .find((element => element.id === idAnimal))
    .residents
      .sort((a, b) => b.age - a.age)
      .find(element => element);

  return Object.values(oldest);
}

function increasePrices(percentage) {
  let num;
  Object.entries(data.prices)
    .map((element) => {
      num = (element[1] + (element[1] * (percentage / 100))).toFixed(3);
      num = Math.round(num * 100) / 100;
      data.prices[element[0]] = num;
      return data.prices;
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
