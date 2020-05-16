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

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids
function animalsByIds(...ids) {
  if (!ids) return [];
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
  return resultado;
}

// Ao passar o nome de uma espécie e uma idade,
// testa se todos os animais desta espécie possuem a idade mínima especificada
function animalsOlderThan(animal, age) {
  return data.animals.find(element =>
    element.name === animal).residents.every(element => element.age >= age);
}

// Implemente a função employeeByName:
// Sem parâmetros, retorna um objeto vazio
// Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// Quando provido o último nome do funcionário, retorna o objeto do funcionário

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(element =>
    element.firstName === employeeName || element.lastName === employeeByName);
  // Não entendi ao certo porque/como está sendo retornado o respectivo elemento
}

// Implemente a função createEmployee:
// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

// Implemente a função isManager:
// Testa se o id passado é de um gerente
function isManager(id) {
  return data.employees.some(element => element.managers.includes(id));
  // element.managers[0] === id || element.managers[1] === id);
}

// Adiciona um funcionário no fim da lista
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  data.employees = [...data.employees, newEmployee];
  return newEmployee;
}

// Implemente a função animalCount:
// Sem parâmetros, returna animais e suas quantidades
// Com o nome de uma espécie de animal, retorna somente a quantidade
function animalCount(species) {
  if (!species) {
    const output = {}; // https://bit.ly/2Tb42YV
    data.animals.forEach(function (el) {
      if (!output[el.name]) output[el.name] = el.residents.length;
    });
    return output;
  }
  const countSpecie = data.animals.find(animal => animal.name === species);
  return countSpecie.residents.length;
}

// Implemente a função entryCalculator:
// Returna 0 se nenhum argumento for passado
// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
function entryCalculator(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  return (entrants.Adult * data.prices.Adult) +
    (entrants.Senior * data.prices.Senior) +
    (entrants.Child * data.prices.Child);
}

function animalMap(options) {
  // seu código aqui
}

// Implemente a função schedule:
// Sem parâmetros, retorna um cronograma legível para humanos
// Se um único dia for passado, retorna somente este dia em um formato legível para humanos
function schedule(dayName) {
  if (!dayName) {
    const week = Object.keys(data.hours).reduce((acc, curr) => {
      acc[curr] = `Open from ${data.hours[curr].open}am until ${data.hours[curr].close - 12}pm`;
      if ((acc[curr]) === 'Open from 0am until -12pm') {
        acc[curr] = 'CLOSED';
      }
      return acc;
    }, {});
    return week;
  }
  if (dayName !== 'Monday') {
    return { [dayName]: `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm` };
  }
  return { Monday: 'CLOSED' };
}

// Implemente a função oldestFromFirstSpecies:
// Passado o id de um funcionário, encontra a primeira espécie de animal
// gerenciado pelo funcionário, e retorna um array com nome, sexo e idade
// do animal mais velho dessa espécie
function oldestFromFirstSpecies(id) {
  const idManager = data.employees
    .find(el => el.id === id)
    .responsibleFor[0];
  const olderAnimal = data.animals
    .find(el => el.id === idManager)
    .residents.sort((a, b) => (a.age < b.age ? 1 : -1));
  return Object.values(olderAnimal[0]);
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
