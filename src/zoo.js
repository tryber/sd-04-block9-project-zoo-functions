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

// TODO => 1 - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// TODO => 2 - Ao receber como parâmetro um único id, retorna os animais com este id;
// TODO => 3 - Ao receber mais de um id, retorna os animais que têm um desses ids;
const animalsByIds = (...ids) => {
  return data.animals.filter(animal => ids.some(id => animal.id === id));
}

// TODO => Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada
const animalsOlderThan = (animal, age) => {
  return data.animals.find(especie => especie.name === animal)
    .residents.every(residente => residente.age >= age);
}

// TODO => 1 - Sem parâmetros, retorna um objeto vazio
// TODO => 2 - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// TODO => 3 - Quando provido o último nome do funcionário, retorna o objeto do funcionário
const employeeByName = (employeeName) => {
  if (!employeeName) return {}
  return data.employees.find(name => name.firstName === employeeName || name.lastName === employeeName);
}

// TODO => Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados
const createEmployee = (personalInfo, associatedWith) => {
  return { ...personalInfo, ...associatedWith }
}

//TODO => Testa se o id passado é de um gerente
const isManager = id => {
  return data.employees.some(gerenteID => gerenteID.managers.find(ids => ids === id));
}

//TODO => Adiciona um funcionário no fim da lista
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}

//TODO => 1 - Sem parâmetros, returna animais e suas quantidades
//TODO => 2 - Com o nome de uma espécie de animal, retorna somente a quantidade
const animalCount = (species) => {
  if (!species) {
    return data.animals.reduce((objeto, elemento) => {
      objeto[elemento.name] = elemento.residents.length;
      console.log(objeto)
      return objeto
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length
}

// TODO => Returna 0 se nenhum argumento for passado
// TODO => Retorna 0 se um objeto vazio for passado
// TODO => Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
const entryCalculator = (entrants = {}) => {
  return Object.keys(entrants).reduce((acc, chave) => acc + (entrants[chave] * data.prices[chave]), 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

//TODO => Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
const oldestFromFirstSpecies = (id) => {
  const idFirstAnimal = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const valor = data.animals.find(animals => animals.id === idFirstAnimal).residents.reduce((oldestAgeAnimal, animal) => {
    if (oldestAgeAnimal.age > animal.age) return oldestAgeAnimal;
    return animal;
  });
  return [valor.name, valor.sex, valor.age]
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
