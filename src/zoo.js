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
  // sem parâmetros, retorna um array vazio
  if (!ids) return [];
  // com um único id, retorna os animais com este id
  const results = data.animals.filter(animal => ids.includes(animal.id));
  return results;
}

function animalsOlderThan(animal, age) {
  // passados o nome de uma espécie e uma idade, testa se TODOS os animais desta
  // espécie possuem a idade mínima especificada
  const results = data.animals.find(animals => animals.name === animal).residents
    .every(residents => residents.age >= age);
  return results;
}

function employeeByName(employeeName) {
  // sem parâmetros, retorna um objeto vazio
  if (!employeeName) return {};
  // quando provido o PRIMEIRO OU O ÚLTIMO nome do funcionário, retorna o objeto do funcionário
  const results = data.employees
    .find(employees => employees.firstName === employeeName || employees.lastName === employeeName);
  return results;
}

function createEmployee(personalInfo, associatedWith) {
  // cria um novo colaborador a partir de objetos contendo informações pessoais,
  // gerentes e animais gerenciados
  const results = Object.assign({}, personalInfo, associatedWith);
  return results;
}

function isManager(id) {
  // verifica se o id passado é de um gerente e retorna true or false
  const results = data.employees
    .some(employee => employee.managers.some(manager => manager === id));
  return results;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // adiciona um funcionário no fim da lista
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}
function animalCount(species) {
  // Se não há parâmetros, retorna animais e suas quantidades
  if (!species) {
    const results = {};
    data.animals.forEach((animal) => { results[animal.name] = animal.residents.length; });
    return results;
  }
  // com o nome de uma espécie de animal, retorna somente a quantidade
  return data.animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  // se nenhum argumento for passado
  // ou se um objeto vazio for passado returna 0
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  // retorna o preço total a ser cobrado dado o número de adultos, crianças e
  // idosos
  const soma = (
    (data.prices.Adult * entrants.Adult)
    + (data.prices.Child * entrants.Child)
    + (data.prices.Senior * entrants.Senior));
  return soma;
}

function animalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  // com opções especificadas, retorna nomes de animais
  if (includeNames) {
    return data.animals.reduce((acc, { name, location, residents }) => {
      let residentsNames;
      if (!acc[location]) acc[location] = [];
      // com opções especificadas, retorna somente nomes de animais macho/fêmea
      if (!sex) residentsNames = residents.map(resident => resident.name);
      // só retorna informações específicas de gênero se includeNames for setado
      else {
        const residentsBySex = residents.filter(resident => resident.sex === sex);
        residentsNames = residentsBySex.map(resident => resident.name);
      }
      // com opções especificadas, retorna nomes de animais ordenados
      if (sorted) residentsNames.sort();

      acc[location].push({ [name]: residentsNames });
      return acc;
    }, {});
  }
  // sem parâmetros, retorna animais categorizados por localização
  return data.animals.reduce((acc, { name, location }) => {
    if (!acc[location]) acc[location] = [];
    acc[location].push(name);
    return acc;
  }, {});
}

function schedule(dayName) {
  // criando objeto
  let schdl = Object.assign({}, data.hours);
  Object.keys(schdl).forEach((key) => {
    const open = schdl[key].open;
    const close = schdl[key].close;
    schdl[key] = `Open from ${open}am until ${close - 12}pm`;
    if (open === close) schdl[key] = 'CLOSED';
  });
  // sem parâmetros, retorna um cronograma legível para humanos
  if (!dayName) return schdl;
  // se um único dia for passado, retorna somente este dia em um formato
  // legível para humanos
  schdl = { [dayName]: schdl[dayName] };
  return schdl;
}

function oldestFromFirstSpecies(id) {
  //  passado o id de um funcionário, encontra a primeira espécie de animal
  //  gerenciado pelo funcionário,
  const firstResponibleSpecie = data.employees
    .find(employee => employee.id === id).responsibleFor[0];
  //  Lista de animais da espécie
  const animalsFromSpecie = data.animals
    .find(animal => animal.id === firstResponibleSpecie).residents;
  //  e retorna um array com nome, sexo e idade do
  // animal mais velho dessa espécie
  const elderFromSpecie = animalsFromSpecie
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr), []);
  return (Object.values(elderFromSpecie));
}

function increasePrices(percentage) {
  //  Passada uma porcentagem, incrementa todos os preços,
  //  arrendondados em duas casasdecimais
  const results = data.prices;
  const gambiarra = 0.0001;// GAMBIARRA TO ROUND EH NOIS. #GambiarraWins
  results.Adult = ((results.Adult * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  results.Child = ((results.Child * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  results.Senior = ((results.Senior * (1 + (percentage / 100))) + gambiarra).toPrecision(4);
  return results;
}

function employeeCoverage(idOrName) {
  const employeeList = data.employees.reduce((employeeListObject, employe) => {
    employeeListObject[`${employe.firstName} ${employe.lastName}`] = employe.responsibleFor
      .map(ids => data.animals.find(({ id }) => (id === ids)).name);
    return employeeListObject;
  }, {});
  // Com id, firstName ou lastName como parâmetro
  // retorna os animais pelos quais o funcionário é responsável
  const arr = data.employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
  //  Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais
  //  cada um é responsáveis
  if (!idOrName) return employeeList;
  return { [`${arr.firstName} ${arr.lastName}`]: employeeList[`${arr.firstName} ${arr.lastName}`] };
}

module.exports = {  //  exports
  addEmployee,
  animalCount,
  animalMap,
  animalsByIds,
  animalsOlderThan,
  createEmployee,
  employeeByName,
  employeeCoverage,
  entryCalculator,
  increasePrices,
  isManager,
  oldestFromFirstSpecies,
  schedule,
};
