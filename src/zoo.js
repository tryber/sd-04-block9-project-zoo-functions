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
  if (!ids) return [];
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(a => a.name === animal)
    .residents.every(a => a.age > age);

const employeeByName = employeeName =>
  data.employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  ) || {};

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees.push(newEmployee);
}

function animalCount(species) {
  const allAnimals = data.animals.reduce((acumulador, atual) => {
    acumulador[atual.name] = atual.residents.length;
    return acumulador;
  }, {});
  if (!species) return allAnimals;
  return data.animals.find(animal => animal.name === species).residents
    .length;
}

function entryCalculator(entrants) {
  return !entrants || Object.keys(entrants).length === 0
    ? 0
    : Object.keys(entrants).reduce(
        (acc, curr) => acc + (entrants[curr] * data.prices[curr]),
        0,
      );
}

function animalMap(options) {
  // seu código aqui
}

const operatingSchedule = day => ((day === 'Monday')
  ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`);

const schedule = (dayWantedToSchedule) => {
  const scheduleWanted = {};
  if (dayWantedToSchedule) {
    scheduleWanted[dayWantedToSchedule] = operatingSchedule(dayWantedToSchedule);
    return scheduleWanted;
  }
  Object.keys(data.hours).forEach((day) => { scheduleWanted[day] = operatingSchedule(day); });
  return scheduleWanted;
};

function oldestFromFirstSpecies(id) {
  const firstSpecies = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const animals = data.animals.find(animal => animal.id === firstSpecies).residents;
  const older = animals.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);

  return Object.values(older);
}

const increasePrices = (percentage) => {
  Object.keys(data.prices).forEach((person) => {
    data.prices[person] = Number(
      (data.prices[person] * (1 + ((percentage + 0.01) / 100))).toFixed(2),
    );
  });
};

function responsible(arrayIds) {
  return arrayIds.map(id => data.animals.find(bicho => bicho.id === id).name);
}


function employeeCoverage(idOrName) {
  //  Sem parâmetros, retorna uma lista de funcionários e os
  //  animais pelos quais eles são responsáveis
    //  Usando o Reduce iremos passar pelos funcionários, pegar os dados e retornar um objeto.
      //  no acc acumularemos o firstName e last Name. No curr colocaremos

  if (!idOrName) {
    const noIdOrName = data.employees.reduce((acc, curr) => {
      acc[`${curr.firstName} ${curr.lastName}`] = responsible(curr.responsibleFor);
      return acc;
    }, {});
    return noIdOrName;
  }

  // let key = null;
  // if (data.employees.find(employee => employee.id === idOrName)) key = 'id';
  // if (data.employees.find(employee => employee.firstName === idOrName)) key = 'firstName';
  // if (data.employees.find(employee => employee.lastName === idOrName)) key = 'lastName';

  const obj = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  // const obj = data.employees.find(employee => employee[key] === idOrName);
  const teste = {};
  // tivemos que criar um novo objeto e criar as características nele para depois pedir a função.
  teste[`${obj.firstName} ${obj.lastName}`] = responsible(obj.responsibleFor);
  return teste;
}
console.log(employeeCoverage('Nigel'));


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
