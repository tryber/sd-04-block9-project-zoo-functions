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

// 1 - Caso receba nenhum parâmetro, necessário retornar um array vazio;
// 2 - Ao receber como parâmetro um único id, retorna os animais com este id;
// 3 - Ao receber mais de um id, retorna os animais que têm um desses ids;
const animalsByIds = (...ids) =>
  data.animals.filter(animal => ids.some(id => animal.id === id));

// Ao passar o nome de uma espécie e uma idade, testa se todos os animais
// desta espécie possuem a idade mínima especificada
const animalsOlderThan = (animal, age) => {
  data.animals.find(especie => especie.name === animal).residents
    .every(residente => residente.age >= age);
};

// 1 - Sem parâmetros, retorna um objeto vazio
// 2 - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
// 3 - Quando provido o último nome do funcionário, retorna o objeto do funcionário
const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  return data.employees
    .find(name => name.firstName === employeeName || name.lastName === employeeName);
};

// Cria um novo colaborador a partir de objetos contendo informações pessoais,
// gerentes e animais gerenciados
function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

// Testa se o id passado é de um gerente
const isManager = (id) => {
  data.employees.some(gerenteID => gerenteID.managers.find(ids => ids === id));
};

// Adiciona um funcionário no fim da lista
const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
};

// 1 - Sem parâmetros, returna animais e suas quantidades
// 2 - Com o nome de uma espécie de animal, retorna somente a quantidade
const animalCount = (species) => {
  if (!species) {
    return data.animals.reduce((objeto, elemento) => {
      objeto[elemento.name] = elemento.residents.length;
      return objeto;
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length;
};

// Retorna 0 se um objeto vazio for passado
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
// Returna 0 se nenhum argumento for passado
const entryCalculator = (entrants = {}) => {
  Object.keys(entrants).reduce((acc, chave) => acc + (entrants[chave] * data.prices[chave]), 0);
};

function animalMap(options) {
  // seu código aqui
}

// Sem parâmetros, retorna um cronograma legível para humanos
// Se um único dia for passado, retorna somente este dia em um formato legível para humanos

const openOrClose = ({ open, close }) => {
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

const schedule = (dayName) => {
  const objHours = data.hours;
  if (!dayName) {
    return Object.keys(objHours).reduce((newObj, chave) => {
      newObj[chave] = openOrClose(objHours[chave]);
      return newObj;
    }, {});
  }
  return { [dayName]: openOrClose(objHours[dayName]) };
};

// Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado
// pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
const oldestFromFirstSpecies = (id) => {
  const idFirstAnimal = data.employees.find(employee => employee.id === id).responsibleFor[0];
  const valor = data.animals.find(animals => animals.id === idFirstAnimal).residents
    .reduce((oldestAgeAnimal, animal) => {
      if (oldestAgeAnimal.age > animal.age) return oldestAgeAnimal;
      return animal;
    });
  return [valor.name, valor.sex, valor.age];
};

// Ao passar uma %, incrementa todos os preços, arrendondados em 2 casas decimais
const increasePrices = percentage =>
  Object.keys(data.prices)
    .forEach((key) => {
      data.prices[key] =
        Math.round((100 * ((data.prices[key] * (percentage / 100)) + data.prices[key])) / 100);
    });

function employeeCoverage(idOrName) {

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
