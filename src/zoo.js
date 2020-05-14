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

//  ====REQUISITO 1========================================================

//  Caso receba nenhum parâmetro, necessário retornar um array vazio
//  Ao receber como parâmetro um único id, retorna os animais com este id
//  Ao receber mais de um id, retorna os animais que têm um desses ids

const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.find(id => id === animal.id));

//  =======================================================================

//  ====REQUISITO 2========================================================

//  Ao passar o nome de uma espécie e uma idade, testa se todos os animais
//  desta espécie possuem a idade mínima especificada

const animalsOlderThan = (animal, age) =>
  data.animals
    .find(e => animal === e.name)
    .residents.every(e => e.age >= age);

//  =======================================================================

//  ====REQUISITO 3========================================================

//  Sem parâmetros, retorna um objeto vazio
//  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
//  Quando provido o último nome do funcionário, retorna o objeto do funcionário

const employeeByName = function (name) {
  return name ?
  data.employees.find(element => element.firstName === name || element.lastName === name)
  : {};
};

//  =======================================================================

//  ====REQUISITO 4========================================================

//  Cria um novo colaborador a partir de objetos contendo informações pessoais,
//  gerentes e animais gerenciados

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

//  =======================================================================

//  ====REQUISITO 5========================================================

//  Testa se o id passado é de um gerente

const isManager = id => data.employees.some(e => e.managers.includes(id));

//  =======================================================================

//  ====REQUISITO 6========================================================

//  Adiciona um funcionário no fim da lista

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) =>
data.employees.push({ id, firstName, lastName, managers, responsibleFor });
//  =======================================================================

//  ====REQUISITO 7========================================================

//  Sem parâmetros, returna animais e suas quantidades
//  Com o nome de uma espécie de animal, retorna somente a quantidade

const animalCount = (species) => {
  const bichos = {};
  data.animals.forEach(element => (bichos[element.name] = element.residents.length));
  if (species) {
    return bichos[species];
  }
  return bichos;
};

//  =======================================================================

//  ====REQUISITO 8========================================================

//  Returna 0 se nenhum argumento for passado
//  Retorna 0 se um objeto vazio for passado
//  Retorna o preço total a ser cobrado dado o número de adultos, crianças
//  e idosos

const entryCalculator = function (entrants) {
  return !entrants || Object.keys(entrants).length === 0
    ? 0
    : (entrants.Adult * data.prices.Adult) +
      (entrants.Child * data.prices.Child) +
      (entrants.Senior * data.prices.Senior);
};

//  =======================================================================

//  ====REQUISITO 9========================================================

//  Sem parâmetros, retorna animais categorizados por localização
//  Com opções especificadas, retorna nomes de animais
//  Com opções especificadas, retorna nomes de animais ordenados
//  Com opções especificadas, retorna somente nomes de animais macho/fêmea
//  Só retorna informações específicas de gênero se includeNames for setado

const animalMap = function (options) {

};

//  =======================================================================

//  ====REQUISITO 10========================================================

//  Sem parâmetros, retorna um cronograma legível para humanos
//  Se um único dia for passado, retorna somente este dia em um
//  formato legível para humanos

const schedule = function (dayName) {
  const keys = Object.keys(data.hours);
  const obj = {};
  keys.forEach(function (cur) {
    if (data.hours[cur].open === 0) {
      obj[cur] = 'CLOSED';
    } else {
      obj[cur] = `Open from ${data.hours[cur].open}am until ${data.hours[cur].close - 12}pm`;
    }
  });
  const objFiltered = {};
  objFiltered[dayName] = obj[dayName];
  return (dayName) ? objFiltered : obj;
};
//  =======================================================================

//  ====REQUISITO 11=======================================================

//  Passado o id de um funcionário, encontra a primeira espécie de animal
//  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade
//  do animal mais velho dessa espécie

const oldestFromFirstSpecies = (id) => {
  const idAnimal = data.employees.filter(employee => employee.id === id)[0].responsibleFor[0];
  const Animal = data.animals.filter(animal => animal.id === idAnimal);
  const olderAnimal = Object.values(Animal[0].residents.sort((a, b) => b.age - a.age)[0]);
  return olderAnimal;
};

//  =======================================================================

//  ====REQUISITO 12=======================================================

//  Ao passar uma porcentagem, incrementa todos os preços, arrendondados em
//  duas casas decimais

const increasePrices = (percentage) => {
  const adult = data.prices.Adult;
  const senior = data.prices.Senior;
  const child = data.prices.Child;

  data.prices.Adult = Math.round(adult * ((percentage / 100) + 1) * 100) / 100;
  data.prices.Senior = Math.round(senior * ((percentage / 100) + 1) * 100) / 100;
  data.prices.Child = Math.round(child * ((percentage / 100) + 1) * 100) / 100;
};
//  =======================================================================

//  ====REQUISITO 13=======================================================

//  Sem parâmetros, retorna uma lista de funcionários e os animais pelos
//  quais eles são responsáveis
//  Com o id de um funcionário, retorna os animais pelos quais o
//  funcionário é responsável
//  Com o primeiro nome de um funcionário, retorna os animais pelos
//  quais o funcionário é responsável
//  Com o último nome de um um funcionário, retorna os animais pelos
//   quais o funcionário é responsável

function employeeCoverage(idOrName) {
  // seu código aqui
}

//  =======================================================================

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
