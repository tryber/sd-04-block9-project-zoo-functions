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
  return ids.map(param => data.animals.find(element => element.id === param));
}

function animalsOlderThan(animal, age) {
  const animals = data.animals.find(element => element.name === animal);
  return animals.residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find(element => element.firstName === employeeName ||
    element.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newObj = Object.assign(personalInfo, associatedWith);
  return newObj;
}

function isManager(id) {
  return data.employees.some(array => array.managers.find(element => element === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  if (managers === undefined) managers = [];
  if (responsibleFor === undefined) responsibleFor = [];
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  if (species === undefined) {
    const obj = {};
    data.animals.forEach(element => (obj[element.name] = element.residents.length));
    return obj;
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  return ((data.prices.Adult * entrants.Adult) +
    (data.prices.Child * entrants.Child) +
    (data.prices.Senior * entrants.Senior));
}

function animalMap(options) {
  // need to think
}

function schedule(dayName) {
  const arrayHours = Object.values(data.hours);
  const message = arrayHours.map(time => {
    if(time.open === 0 && time.close === 0 ) {
      return 'CLOSED';
    } else {
      return `Open from ${ time.open }am until ${ time.close - 12 }pm`
    }
  });
  const arrayDays = Object.keys(data.hours);
  const objDays = {}
  arrayDays.map((element, index) => objDays[element] = (message[index])); 
  if (dayName === undefined) {
    return objDays;
  } else {
    return { [dayName]: objDays[dayName] };
  }
}

function oldestFromFirstSpecies(id) {
  const responsible = data.employees.find(element => element.id === id).responsibleFor[0];
  const creation = data.animals.find(specie => specie.id === responsible);
  const oldest = Math.max.apply(null, creation.residents.map(animal => animal.age));
  return Object.values(creation.residents.find(animal => animal.age === oldest));
}

function increasePrices(percentage) {
  const arrayPrices = Object.keys(data.prices);
  arrayPrices.map(element => (
    data.prices[element] =
    parseFloat((0.001 + data.prices[element] +
        ((data.prices[element] * percentage) / 100))
      .toFixed(2))));
}

function employeeCoverage(idOrName) {
  // const newObj = {};
  //   data.employees.map(element =>
  //     (newObj[ `${ element.firstName} ${ element.lastName }`] = element.responsibleFor));
  //   return newObj;
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
