/*
eslint no-unused-vars: [
  'error',
  {
    'args': 'none',
    'vars': 'local',
    'varsIgnorePattern': 'data'
  }
]
*/

const data = require('./data');

const animaisObj = data.animals;

// Caso receba nenhum parâmetro, necessário retornar um array vazio
// Ao receber como parâmetro um único id, retorna os animais com este id
// Ao receber mais de um id, retorna os animais que têm um desses ids

function animalsByIds(...ids) {
  // seu código aqui
  console.log(ids);
  const animais = animaisObj.filter(animal => ids.includes(animal.id));
  console.log(animais);
  return animais;
}

// Ao passar o nome de uma espécie e uma idade,
// testa se todos os animais desta espécie possuem a idade mínima especificada

function animalsOlderThan(animal, age) {
  // seu código aqui
  const animalAge = animaisObj
    .find(element => element.name === animal)
    .residents.every(element => element.age > age);
  return animalAge;
}

/* Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
 */
const funcionario = data.employees;
function employeeByName(...employeeName) {
  // seu código aqui
  const funcionarioObj =
    funcionario.find(
      element =>
        element.firstName === `${employeeName}` ||
        element.lastName === `${employeeName}`,
    ) || {};
  return funcionarioObj;
}

/* Cria um novo colaborador a partir de objetos contendo informações pessoais,
gerentes e animais gerenciados
*/
function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const objMontado = Object.assign(personalInfo, associatedWith);
  return objMontado;
}

// Testa se o id passado é de um gerente
const empregado = data.employees;
function isManager(id) {
  console.log(id);
  // seu código aqui
  const verificaGerente = empregado.some(element => element.managers.some(code => code === id));
  return verificaGerente;
}

// Adiciona um funcionário no fim da lista
const newEmpregado = data.employees;
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  newEmpregado.push({ id, firstName, lastName, managers, responsibleFor });
}


/* Sem parâmetros, retorna animais e suas quantidades
Com o nome de uma espécie de animal, retorna somente a quantidade */
function animalCount(species) {
  // seu código aqui
  if (species) return data.animals.find(element => element.name === species).residents.length;
  return animaisObj.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}


function entryCalculator(entrants) {
  // seu código aqui
}

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
