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
  return data.animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  return data.animals.find(elemento => elemento.name === animal)
  .residents.every(elemento => elemento.age >= age);
}

function employeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find(element => (
  element.firstName === employeeName || element.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}


function isManager(id) {
  // seu código aqui
  return data.employees.some(element => element.managers.some(ids => ids === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  if (!species) {
    const obj = {};
    data.animals.forEach(animal => (obj[animal.name] = animal.residents.length));
    return obj;
  }
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const entrantsKeys = Object.keys(entrants);
  return entrantsKeys.reduce((total, key) => total + (data.prices[key] * entrants[key]), 0);
}

const arrayComNome = (especie, residents, sorted, sex) => {
  // função para criar as chaves com os nomes e todos os seus
  const obj = {};
  obj[especie] = residents.map(resident => resident.name);
  if (sorted) obj[especie].sort();
  if (sex) {
    obj[especie] = [];
    residents.forEach((resident) => {
      if (resident.sex === sex) obj[especie].push(resident.name);
    });
  }
  return obj;
};

function animalMap(options = {}) {
  // seu código aqui
  const { includeNames, sorted, sex } = options; // desestruturando objeto que vem como parametro
  const resultado = data.animals.reduce((acumulador, animal) => {
    if (!acumulador[animal.location]) acumulador[animal.location] = [];
    // Criando o array em cada chave do objeto acumulador
    if (!includeNames) {
      acumulador[animal.location].push(animal.name);
      // preenchendo o array caso não retorne os nomes dos animais
    } else {
      acumulador[animal.location].push(arrayComNome(animal.name, animal.residents, sorted, sex));
    }
    // adicionando o objeto com o nome do animal como chave e um array com os residentes
    return acumulador;
  }, {});
  return resultado;
}

const oneDay = (day => ((day === 'Monday') ? 'CLOSED'
  : `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`));

function schedule(dayName) {
  // seu código aqui
  const hourKeys = Object.keys(data.hours);
  if (!dayName) {
    const result = hourKeys.reduce((acumulador, key) => {
      acumulador[key] = oneDay(key);
      console.log(acumulador[key]);
      return acumulador;
    }, {});
    return result;
  }
  const obj = {};
  obj[dayName] = oneDay(dayName);
  return obj;
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
  const funcionario = data.employees.find(employee => employee.id === id);
  const specie = data.animals.find(animal => animal.id === funcionario.responsibleFor[0]);
  return Object.values(specie.residents.sort((res1, res2) => res2.age - res1.age)[0]);
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
