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
  if (!ids) return [];
  const resp = data.animals.filter(elemento => ids.includes(elemento.id));
  return resp;
}

function animalsOlderThan(animal, age) {
  let resp = [];
  data.animals.forEach((element) => {
    if (element.name === animal) resp = element.residents.every(elemento => elemento.age >= age);
  });
  return resp;
}

function employeeByName(employeeName) {
  if (!employeeByName) return {};
  let resp = {};
  data.employees.forEach((element) => {
    if (element.firstName === employeeName) resp = element;
    else if (element.lastName === employeeName) resp = element;
  });
  return resp;
}

function createEmployee(personalInfo, associatedWith) {
  let resp = {};
  resp = Object.assign({}, personalInfo, associatedWith);
  return resp;
}

function isManager(id) {
  let resp = false;
  resp = data.employees.some(elemento => elemento.managers.includes(id));
  return resp;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  const personalInfo = {};
  personalInfo.id = id;
  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;

  const associatedWith = {};
  associatedWith.managers = managers;
  associatedWith.responsibleFor = responsibleFor;

  if (!managers) associatedWith.managers = [];
  if (!responsibleFor) associatedWith.responsibleFor = [];

  const resp = createEmployee(personalInfo, associatedWith);
  data.employees.push(resp);
}

function animalCount(species) {
  if (!species) {
    return data.animals.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }
  return data.animals.find(element => element.name === species).residents.length;
}

function entryCalculator(entrants) {
  let resp = 0;
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  resp = Object.keys(entrants).reduce((acc, i) => (acc + (data.prices[i] * entrants[i])), 0);
  return resp;
}
//----------------------------------------------------------------------------------------------------
const findAnimalLocal = () => {
  const cordenadas = ['NE', 'NW', 'SE', 'SW'];
  const objetivo = {};
  const auxNe = [];
  const auxNw = [];
  const auxSe = [];
  const auxSw = [];

  data.animals.forEach((animal) => {
    if (animal.location === 'NE') auxNe.push(animal.name);
    else if (animal.location === 'NW') auxNw.push(animal.name);
    else if (animal.location === 'SE') auxSe.push(animal.name);
    else if (animal.location === 'SW') auxSw.push(animal.name);
  });
  objetivo[cordenadas[0]] = auxNe;
  objetivo[cordenadas[1]] = auxNw;
  objetivo[cordenadas[2]] = auxSe;
  objetivo[cordenadas[3]] = auxSw;

  return objetivo;
};

const buscaNomeAnimal = (animal) => {
  const resp = {};
  const nomes = [];

  data.animals.forEach((especie) => {
    if (especie.name === animal) {
      especie.residents.forEach(bixo => nomes.push(Object.values(bixo)[0]));
    }
  });
  resp[animal] = nomes;
  //console.log(resp);
  return resp;
};

function animalMap(options) {
  const cordenadas = ['NE', 'NW', 'SE', 'SW'];
  const resp = {};
  let aux = {};
  const auxNe = [];
  const auxNw = [];
  const auxSe = [];
  const auxSw = [];

  aux = findAnimalLocal();

  if (!options) {
    Object.assign(resp, aux);
    console.log(resp);
  } else if (options.includeNames && !options.sorted && !options.sex) {
    Object.values(aux)[0].forEach(animal => auxNe.push(buscaNomeAnimal(animal)));
    Object.values(aux)[1].forEach(animal => auxNw.push(buscaNomeAnimal(animal)));
    Object.values(aux)[2].forEach(animal => auxSe.push(buscaNomeAnimal(animal)));
    Object.values(aux)[3].forEach(animal => auxSw.push(buscaNomeAnimal(animal)));
    resp[cordenadas[0]] = auxNe;
    resp[cordenadas[1]] = auxNw;
    resp[cordenadas[2]] = auxSe;
    resp[cordenadas[3]] = auxSw;
    console.log(resp);
  }
  return resp;
}
options = { includeNames: true, sorted: false };
animalMap(options);
//buscaNomeAnimal('lions', 'NE');;
//----------------------------------------------------------------------------------------------------
const montaHorario = (dayname) => {
  if (dayname === 'Monday') return 'CLOSED';
  return `Open from ${data.hours[dayname].open}am until ${data.hours[dayname].close - 12}pm`;
};

function schedule(dayName) {
  const resp = {};
  if (!dayName) Object.keys(data.hours).forEach(element => (resp[element] = montaHorario(element)));
  else {
    const aux = Object.keys(data.hours).find(element => element === dayName);
    resp[dayName] = montaHorario(aux);
  }
  return resp;
}

function oldestFromFirstSpecies(id) {
  const resp = [];
  const funcionario = data.employees.find(element => element.id === id);
  const animal = data.animals.find(element => element.id === funcionario.responsibleFor[0]);
  let name = '';
  let sex = 0;
  let age = 0;

  animal.residents.forEach((element) => {
    if (element.age > age) {
      name = element.name;
      sex = element.sex;
      age = element.age;
    }
  });

  resp.push(name, sex, age);
  return resp;
}

const calculaPrecos = (preco, percentage) => {
  const multip = (percentage / 100) + 1.0;
  const calculo = preco * multip;
  return (calculo + 0.005).toFixed(2);
};

function increasePrices(percentage) {
  const resp = {};
  const respA = calculaPrecos(Object.values(data.prices)[0], percentage);
  const respS = calculaPrecos(Object.values(data.prices)[1], percentage);
  const respC = calculaPrecos(Object.values(data.prices)[2], percentage);

  resp[Object.keys(data.prices)[0]] = respA;
  resp[Object.keys(data.prices)[1]] = respS;
  resp[Object.keys(data.prices)[2]] = respC;

  Object.assign(data.prices, resp);
}

const buscaFuncionario = (informacao) => {
  let funcionario = {};

  if (data.employees.some(element => informacao === element.id)) {
    funcionario = data.employees.find(element => element.id === informacao);
  } else if (data.employees.some(element => informacao === element.firstName)) {
    funcionario = data.employees.find(element => element.firstName === informacao);
  } else {
    funcionario = data.employees.find(element => element.lastName === informacao);
  }
  return funcionario;
};

const buscaAnimal = (funcionario) => {
  const resp = {};
  let nome = '';
  let animals = [];

  animals = funcionario.responsibleFor.map(element => (
    data.animals.find(animal => animal.id === element).name));

  nome = `${funcionario.firstName} ${funcionario.lastName}`;
  resp[nome] = animals;
  return resp;
};

function employeeCoverage(idOrName) {
  const resp = {};
  let funcionario = {};

  if (!idOrName) {
    data.employees.forEach(element => Object.assign(resp, buscaAnimal(element)));
  } else {
    funcionario = buscaFuncionario(idOrName);
    Object.assign(resp, buscaAnimal(funcionario));
  }

  return resp;
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
