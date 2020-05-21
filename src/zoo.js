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
    element.firstName === employeeName || element.lastName === employeeName);
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

// Implemente a função animalMap:
// Sem parâmetros, retorna animais categorizados por localização
// Com opções especificadas, retorna nomes de animais
// Com opções especificadas, retorna nomes de animais ordenados
// Com opções especificadas, retorna somente nomes de animais macho/fêmea
// Só retorna informações específicas de gênero se includeNames for setado
function zooMap(direction) {
  const jungle = [];
  data.animals.filter(el => el.location === direction)  // filtra por localidades
    .forEach(el => jungle.push(el.name)); // inclui espécies no array
  return jungle;
}

function animalNames(direction, sorted) {
  const jungle = zooMap(direction);
  const cage = {};
  let teste = [];
  for (let i = 0; i < jungle.length; i += 1) {
    teste = data.animals
      .find(el => el.name === jungle[i]).residents
      .map(elem => elem.name); // https://bit.ly/2zK857y
    if (!sorted) cage[jungle[i]] = teste;
    else cage[jungle[i]] = teste.sort();
  }
  const result = Object
    .keys(cage)
    .map(k => ({ [k]: cage[k] })); // https://bit.ly/3gbnhv2
  return result;
}

function animalSex(direction, sorted) {
  const jungle = zooMap(direction);
  const cage = {};
  let teste = [];
  for (let i = 0; i < jungle.length; i += 1) {
    teste = data.animals.find(el => el.name === jungle[i]).residents  // acessa nome dos bichos
      .filter(elem => elem.sex === sorted)  // filtra por sexo
      .map(elemento => elemento.name);  // identifica nome dos bichos
    cage[jungle[i]] = teste;  // atribui os nomes próprios à espécie do animal
  }
  const result = Object
    .keys(cage)
    .map(k => ({ [k]: cage[k] })); // https://bit.ly/3gbnhv2
  return result;
}

function especifyOptions(sorted) {
  const mapAnimal = {};
  const zooDirection = ['NE', 'NW', 'SE', 'SW'];
  for (let i = 0; i < zooDirection.length; i += 1) {
    if (!sorted) mapAnimal[zooDirection[i]] = animalNames(zooDirection[i]);
    else mapAnimal[zooDirection[i]] = animalNames(zooDirection[i], sorted);
  }
  return mapAnimal;
}

function especifySex(gene) {
  const mapAnimal = {};
  const zooDirection = ['NE', 'NW', 'SE', 'SW'];
  for (let i = 0; i < zooDirection.length; i += 1) {
    mapAnimal[zooDirection[i]] = animalSex(zooDirection[i], gene);
  }
  return mapAnimal;
}

function noParameter() {
  const mapAnimal = {};
  const zooDirection = ['NE', 'NW', 'SE', 'SW'];
  for (let i = 0; i < zooDirection.length; i += 1) {
    mapAnimal[zooDirection[i]] = zooMap(zooDirection[i]);
  }
  return mapAnimal;
}

function animalMap(options) {
  if (!options || !options.includeNames) return noParameter();
  console.log(options.includeNames, options.sorted, options.sex);
  if (options.sex) return especifySex(options.sex);
  return especifyOptions(options.sorted);
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
    .residents.sort((a, b) => (a.age < b.age ? 1 : -1)); // https://bit.ly/2Z9BlPR
  return Object.values(olderAnimal[0]);
}

// Implemente a função increasePrices:
// Ao passar uma porcentagem, incrementa todos os preços,
// arrendondados em duas casas decimais
function increasePrices(percentage) {
  const juros = Object.keys(data.prices).reduce((acc, curr) => {
    acc[curr] = Math.round(data.prices[curr] * ((percentage / 100) + 1) * 100) / 100;
    return acc;
  }, {});
  data.prices = juros;
  return juros;
}

// Implemente a função employeeCoverage:
// Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
// Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
// Com o último nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
function zooKeeper(list) {
  const cage = [];
  list.forEach(item => cage.push(data.animals.find(animal => animal.id === item).name));
  return cage;
}

function employeeCoverage(idOrName) {
  const zooEmployee = {};
  if (!idOrName) {
    return data.employees.reduce((acc, curr) => { // https://bit.ly/2WB7cak
      acc[`${curr.firstName} ${curr.lastName}`] = zooKeeper(curr.responsibleFor);
      return acc;
    }, {});
  }
  const aliasEmployee = data.employees.find(e =>
    e.firstName === idOrName || e.lastName === idOrName || e.id === idOrName);
  zooEmployee[`${aliasEmployee.firstName} ${aliasEmployee.lastName}`] = zooKeeper(aliasEmployee.responsibleFor);
  return zooEmployee;
}
console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))
// expected = { 'Sharonda Spry': ['otters', 'frogs'] };


console.log(employeeCoverage('Stephanie'));
// expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };

console.log(employeeCoverage('Azevado'));
// expected = { 'Ardith Azevado': ['tigers', 'bears'] };


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
