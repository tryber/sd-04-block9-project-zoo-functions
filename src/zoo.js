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
  return data.animals.filter((animal) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (animal.id === ids[i]) return true;
    }
    return false;
  });
}

function animalsOlderThan(animal, age) {
  return data.animals.find(a => a.name === animal)
  .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(array =>
    array.firstName === employeeName || array.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const wrk = Object.assign({}, personalInfo, associatedWith);
  return wrk;
}

function isManager(id) {
  const adm = data.employees.some(array => array.managers.find(element => element === id));
  return adm;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, animal) => {
      const { name } = animal;
      acc[name] = animal.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  return Object.keys(entrants).reduce((acc, value) =>
  (acc + (entrants[value] * data.prices[value])), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const object = {};
  Object.entries(data.hours).forEach((day) => {
    object[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
    if (day[0] === 'Monday') {
      object[day[0]] = 'CLOSED';
    }
  });
  if (dayName) {
    return { [dayName]: object[dayName] };
  }
  return object;
}

function oldestFromFirstSpecies(id) {
  const a = data.employees.find(
    ({ id: employeeId }) => id === employeeId)
    .responsibleFor[0];
  const b = data.animals.find(
    ({ id: animalId }) => animalId === a)
    .residents;
  const c = b.sort(
    ({ age: ageA }, { age: ageB }) => ageB - ageA)[0];
  return Object.values(c);
}

function increasePrices(percentage) {
  const resultado = Object.entries(data.prices).reduce((acc, curr) => {
    acc[curr[0]] = Number((curr[1] * ((percentage / 100) + 1.00001)).toFixed(2));
    return acc;
  }, {});
  data.prices = resultado;
}

function employeeCoverage(idOrName = '') {
  return data.employees.reduce((acc, employee) => {
    if (idOrName === '' || idOrName === employee.id ||
      idOrName === employee.firstName || idOrName === employee.lastName) {
      acc[`${employee.firstName} ${employee.lastName}`] = [];
      employee.responsibleFor.forEach((animalKey) => {
        const specAnim = data.animals.find(animal =>
          animal.id === animalKey);
        acc[`${employee.firstName} ${employee.lastName}`].push(specAnim.name);
      });
    }
    return acc;
  }, {});
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
