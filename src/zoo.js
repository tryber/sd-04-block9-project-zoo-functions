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

//  1. Implemente a função animalsByIds:
//  Caso receba nenhum parâmetro, necessário retornar um array vazio
//  Ao receber como parâmetro um único id, retorna os animais com este id
//  Ao receber mais de um id, retorna os animais que têm um desses ids

const animalsByIds = (...ids) =>
  data.animals.filter((animal) => ids.includes(animal.id));

//  2. Implemente a função animalsOlderThan:
//  Ao passar o nome de uma espécie e uma idade, testa se todos os animais
//  desta espécie possuem a idade mínima especificada

const animalsOlderThan = (animal, age) =>
  data.animals
    .find((beast) => beast.name === animal)
    .residents.every((idade) => idade.age > age);

//  3. Implemente a função employeeByName:
//  Sem parâmetros, retorna um objeto vazio
//  Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
//  Quando provido o último nome do funcionário, retorna o objeto do funcionário

const employeeByName = (employeeName) =>
  data.employees.find(
    (anyName) =>
      anyName.firstName === employeeName || anyName.lastName === employeeName,
  ) || {};

//  4. Implemente a função createEmployee:
//  Cria um novo colaborador a partir de objetos contendo informações pessoais,
//  gerentes e animais gerenciados

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

//  5. Implemente a função isManager:
//  Testa se o id passado é de um gerente

function isManager(id) {
  // seu código aqui
}

//  6. Implemente a função addEmployee:
//  Adiciona um funcionário no fim da lista

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

//  7. Implemente a função animalCount:
//  Sem parâmetros, returna animais e suas quantidades
//  Com o nome de uma espécie de animal, retorna somente a quantidade

function animalCount(species) {
  // seu código aqui
}

//  8. Implemente a função entryCalculator:
//  Returna 0 se nenhum argumento for passado
//  Retorna 0 se um objeto vazio for passado
//  Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

function entryCalculator(entrants) {
  // seu código aqui
}

//  9. Implemente a função animalMap:
//  Sem parâmetros, retorna animais categorizados por localização
//  Com opções especificadas, retorna nomes de animais
//  Com opções especificadas, retorna nomes de animais ordenados
//  Com opções especificadas, retorna somente nomes de animais macho/fêmea
//  Só retorna informações específicas de gênero se includeNames for setado

function animalMap(options) {
  // seu código aqui
}

//  10. Implemente a função schedule:
//  Sem parâmetros, retorna um cronograma legível para humanos
//  Se um único dia for passado, retorna somente este dia em um formato legível para humanos

function schedule(dayName) {
  // seu código aqui
}

//  11. Implemente a função oldestFromFirstSpecies:
//  Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo
//  funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

//  12. Implemente a função increasePrices:
//  Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

function increasePrices(percentage) {
  // seu código aqui
}

//  13. Implemente a função employeeCoverage:
//  Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
//  Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
//  Com o primeiro nome de um funcionário,
//  retorna os animais pelos quais o funcionário é responsável
//  Com o último nome de um um funcionário,
//  retorna os animais pelos quais o funcionário é responsável

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
