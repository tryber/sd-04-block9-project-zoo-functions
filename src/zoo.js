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
// iniciando

const data = require('./data');

function animalsByIds(...ids) {
  const animals = data.animals.filter((elem) =>
    ids.find((id) => id === elem.id));
  return animals;
}

function animalsOlderThan(animal, age) {
  const animais = data.animals.find((elem) => elem.name === animal);
  return animais.residents.every((animalAge) => animalAge.age >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    (elem) => elem.firstName === employeeName ||
    elem.lastName === employeeName ||
    elem.id === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return data.employees.some((elem) => elem.managers.some((ids) => ids === id));
}

function addEmployee(
  id,
  firstName,
  lastName,
  managers = [],
  responsibleFor = [],
) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    const result = {};
    data.animals.forEach(
      (objeto) => (result[objeto.name] = objeto.residents.length));
    return result;
  }
  return data.animals.find((animal) => animal.name === species).residents
    .length;
}

function entryCalculator(entrants) {
  if (entrants && Object.keys(entrants).length > 0) {
    const chaves = Object.keys(entrants);
    return chaves.reduce(
      (valorTotal, pessoas) => valorTotal + (data.prices[pessoas] * entrants[pessoas]), 0);
  }
  return 0;
}

function animalsNames(loc) {
  const result = [];
  const finalObj = {};
  for (let i = 0; i < 4; i += 1) {
    const todosAnimais = data.animals.filter(j => j.location === loc[i]);
    result.push(todosAnimais.map(an => an.name));
  }
  for (let i = 0; i < 4; i += 1) {
    finalObj[loc[i]] = result[i];
  }
  return finalObj;
}

function residentsPorAnimal(animal, sexo) {
  const finalResult = {};
  let middle = [];
  let result = {};
  let acc = [];
  const animalkey = Object.values(animal);
  console.log(animalkey)
  animalkey.forEach((vector, index) => { 
    vector.map((search) => {
      const arrayAnimal = data.animals.find(i => i.name === search);
      if (sexo) {
        const filtredArr = arrayAnimal.residents.filter(({ sex }) => sex === sexo);
        filtredArr.map((dentro) => acc.push(dentro.name));
      } else {
        arrayAnimal.residents.map((dentro) => acc.push(dentro.name));
      }
      result[search] = acc;
      middle.push(result);
      acc = [];
      result = {};
      return result;
    });
  finalResult[Object.keys(animal)[index]] = middle;
  middle = [];
  return finalResult;
  });
  return finalResult;
}

function animalMap(options) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  let resposta = {};
  if (!options || options.includeNames === undefined) {
    return animalsNames(locations);
  }
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    resposta = residentsPorAnimal(animalsNames(locations), sex);
    if (sorted) {
      Object.keys(resposta).forEach(location => resposta[location]
        .forEach(animalxato => animalxato[Object.keys(animalxato)[0]].sort()));
    }
  }
  return resposta;
}

function schedule(dayName) {
  const obj = {};
  const especifcDay = {};
  const days = Object.keys(data.hours);
  days.forEach((hour) => {
    const closeHour = data.hours[hour].close - 12;
    obj[hour] = `Open from ${data.hours[hour].open}am until ${closeHour}pm`;
  });
  obj.Monday = 'CLOSED';
  if (!dayName) return obj;
  especifcDay[dayName] = obj[dayName];
  return especifcDay;
}

function oldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find(empId => empId.id === id).responsibleFor[0];
  const animal = data.animals.find(animais => animais.id === idAnimal);
  return Object.values(animal.residents.sort((a, b) => b.age - a.age)[0]);
}

function increasePrices(percentage) {
  const aumento = (percentage / 100) + 1;
  Object.keys(data.prices).forEach((price) => {
    (data.prices[price] = Math.round((data.prices[price] * aumento) * 100) / 100);
  });
  // parseFloat((0.2 + 0.1).toPrecision(2))
}

const arrayDeAnimais = (infoId) => {
  const animaisId = data.employees.find(elem => elem.id === infoId).responsibleFor;
  const arrayNomes = [];
  for (let i = 0; i < animaisId.length; i += 1) {
    arrayNomes.push(data.animals.find(elem => elem.id === animaisId[i]).name);
  }
  return arrayNomes;
};

const gerandoEmployeesArray = () => {
  const result = {};
  for (let i = 0; i < data.employees.length; i += 1) {
    const name = `${data.employees[i].firstName} ${data.employees[i].lastName}`;
    result[name] = arrayDeAnimais(data.employees[i].id);
  }
  return result;
};

function employeeCoverage(idOrName) {
  const allEmployees = gerandoEmployeesArray();
  const oneEmployee = {};
  if (!idOrName) return allEmployees;
  const employeeElement = employeeByName(idOrName);
  const name = `${employeeElement.firstName} ${employeeElement.lastName}`;
  oneEmployee[name] = allEmployees[name];
  return oneEmployee;
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
