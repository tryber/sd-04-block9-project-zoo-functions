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

// VARIÁVEL DO OBJETO DE ANIMAIS
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
  if (species) return animaisObj.find(element => element.name === species).residents.length;
  return animaisObj.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}


/* Returna 0 se nenhum argumento for passado
Retorna 0 se um objeto vazio for passado
Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos */

const precosObj = data.prices; // VARIÁVEL DO OBJETO PRICES

function entryCalculator(entrants = 0) {
  // seu código aqui
  if (Object.keys(entrants).length === 0) return 0; // CASO NÃO ENCONTRE VALOR
  const valorTotal = Object.keys(entrants).reduce((acumulaValor, atual) =>
    (acumulaValor + (entrants[atual] * precosObj[atual])), 0);
    // FAZ A SOMA DE VALORES(A PARTIR DE entrants NA CHAVE [atual] QUE É 0 )
  return valorTotal;
}

function animalMap(options) {
  // seu código aqui
}

/* Sem parâmetros, retorna um cronograma legível para humanos
Se um único dia for passado, retorna somente este dia em um formato legível para humanos */

const diasObjeto = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function schedule(...dayName) {
  // seu código aqui
  if (Object.keys(dayName).length === 0) return diasObjeto; // Caso o parâmetro seja 0, retorna 0
  return { [dayName]: diasObjeto[dayName] }; // Apresenta a programação de acordo com o dia passado
}


/* Passado o id de um funcionário, encontra a primeira espécie de animal gerenciado pelo
funcionário, e retorna um array com nome, sexo e idade do animal mais velho dessa espécie */
function oldestFromFirstSpecies(id) {
  // seu código aqui

  const encontraFuncionario = funcionario.find(element => element.id === id).responsibleFor[0];
  const encontraAnimal = animaisObj.find(element =>
      element.id === encontraFuncionario).residents.reduce((maisVelho, animal) =>
      (maisVelho.age > animal.age ? maisVelho : animal), 0);
  return [encontraAnimal.name, encontraAnimal.sex, encontraAnimal.age];
}

// Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(precosObj).map((element) => {
      // USA FUNÇÃO MAP PARA ATRIBUIR AS PROPRIEDADES DE ELEMENT NO precosObj
    precosObj[element] =
        ((Number(precosObj[element]) / 100) * ((100 + percentage) + 0.001)).toFixed(2);
    return precosObj[element];
  });
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
