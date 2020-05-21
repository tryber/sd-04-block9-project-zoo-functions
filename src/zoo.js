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

function animalsByIds(ids) {
  // seu código aqui
  // Caso receba nenhum parâmetro, necessário retornar um array vazio
  // Ao receber como parâmetro um único id, retorna os animais com este id
  // Ao receber mais de um id, retorna os animais que têm um desses ids
  function animalsByIds(...ids) {
    if (!ids) return [];
    const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
    return resultado;
}

function animalsOlderThan(animal, age) {
  // seu código aqui
  //Ao passar o nome de uma espécie e uma idade, 
  //testa se todos os animais desta espécie possuem a idade mínima especificada
  const animalAge = animaisObj
  .find(element => element.name === animal)
  .residents.every(element => element.age > age);
  return animalAge;
}

function employeeByName(employeeName) {
  // seu código aqui
  //Sem parâmetros, retorna um objeto vazio
  //Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  //Quando provido o último nome do funcionário, retorna o objeto do funcionário
  return { ...personalInfo, ...associatedWith };
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  //Cria um novo colaborador a partir de objetos contendo 
  //informações pessoais, gerentes e animais gerenciados
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  // seu código aqui
  //Testa se o id passado é de um gerente
  return data.employees.some(manager => manager.managers.some(e => e === id));
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
  //Adiciona um funcionário no fim da lista
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  // seu código aqui
  //Cria um novo colaborador a partir de objetos contendo 
  //informações pessoais, gerentes e animais gerenciados
  //Sem parâmetros, returna animais e suas quantidades
  //Com o nome de uma espécie de animal, retorna somente a quantidade
  if (!species) {
    const output = {};
    data.animals.forEach(function (el) {
      if (!output[el.name]) output[el.name] = el.residents.length;
    });
    return output;
  }
  const countSpecie = data.animals.find(animal => animal.name === species);
  return countSpecie.residents.length;
}

function entryCalculator(entrants) {
  // seu código aqui
  //Returna 0 se nenhum argumento for passado
  //Retorna 0 se um objeto vazio for passado
  //Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
  if (!entrants) return 0;
  if (entrants.length === 0) return 0;
  return Object.keys(entrants).reduce((acc, cur) => acc + (entrants[cur] * data.prices[cur]), 0);
}

function animalMap(options) {
  // seu código aqui
  //Sem parâmetros, retorna animais categorizados por localização
  //Com opções especificadas, retorna nomes de animais
  //Com opções especificadas, retorna nomes de animais ordenados
  //Com opções especificadas, retorna somente nomes de animais macho/fêmea
  //Só retorna informações específicas de gênero se includeNames for setado
  function zooMap(direction) {
    const jungle = [];
    data.animals.filter(el => el.location === direction)
      .forEach(el => jungle.push(el.name)); 
    return jungle;
}

function schedule(dayName) {
  // seu código aqui
  //Sem parâmetros, retorna um cronograma legível para humanos
  //Se um único dia for passado, retorna somente este dia em um formato legível para humanos
  const hourKeys = Object.keys(data.hours);
  if (!dayName) {
    const result = hourKeys.reduce((acumulador, key) => {
      acumulador[key] = oneDay(key);
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
  //Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado 
  //pelo funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie
  const employee = data.employees.find(item => item.id === id);
  const firstSpecie = data.animals.find(item => item.id === employee.responsibleFor[0]);
  const animalsAges = firstSpecie.residents.map(({ age }) => age).sort((a, b) => a - b);
  const oldestInfo = firstSpecie.residents
  .filter(item => item.age === animalsAges[animalsAges.length - 1]);
  const oldestInfoArray = Object.values(oldestInfo[0]);
  return oldestInfoArray;

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
