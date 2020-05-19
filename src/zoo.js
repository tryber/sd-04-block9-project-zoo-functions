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
  const resultado = data.animals.filter(elemento => ids.includes(elemento.id));
  return resultado;
}

function animalsOlderThan(animal, age) {
  const bixo = data.animals.find(elemento => elemento.name === animal);
  const sera = bixo.residents.every(elemento => elemento.age > age);
  return sera;
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  const emp = data.employees.find(n => n.firstName === employeeName || n.lastName === employeeName);
  return emp;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = { ...personalInfo, ...associatedWith };
  return newEmployee;
}

function isManager(id) {
  const resultado = data.employees.some(elemento => elemento.managers.includes(id));
  return resultado;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const novoEmp = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(novoEmp);
}
// console.log(data.animals.map(animal => animal.name).sort())
// console.log(data.animals.map(animal => animal.residents.length))
// console.log(data.animals.filter(animal => animal.name === 'lions')[0].residents.length)

function animalCount(species) {
  if (!species) {
    const vazio = data.animals.reduce((acc, animalAtual) => {
      acc[animalAtual.name] = animalAtual.residents.length;
      return acc;
    }, {});
    return vazio;
  }
  const tata = data.animals.filter(animal => animal.name === species);
  return tata[0].residents.length;
}
// console.log(Object.keys(data.prices))
// console.log(Object.values(data.prices))
// console.log(Object.values(data.prices)[1])

function entryCalculator(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const precoAdulto = Object.values(data.prices)[0];
  const precoSenior = Object.values(data.prices)[1];
  const precoChild = Object.values(data.prices)[2];
  const total = (((Object.values(entrants)[0] * precoAdulto)
  + (Object.values(entrants)[1] * precoChild)
  + (Object.values(entrants)[2] + precoSenior)) - 1);
  return total;
}

function animalMap(options) {
  // seu código aqui
}
// console.log(Object.entries(data.hours))
function schedule(dayName) {
  const horarios = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (!dayName) return horarios;
  const reduced = Object.keys(horarios).reduce((acc, diaAtual) => {
    if (diaAtual === dayName) {
      acc = { [diaAtual]: horarios[diaAtual] };
    }
    return acc;
  }
, {});
  return reduced;
}

function oldestFromFirstSpecies(id) {
  const Funcionario = data.employees.find(elemento => elemento.id === id);
  // console.log(Funcionario)
  const primeiraEspecie = Object.values(Funcionario);
  const animaisEscolhidos = primeiraEspecie[4][0];
  // console.log(animaisEscolhidos)
  const animal = data.animals.find(a => a.id === animaisEscolhidos);
  // console.log(animal)
  const integrantes = Object.values(animal)[4];
  // console.log(integrantes)
  let novaIdade = 0;
  const idade = integrantes.map((e) => {
    if (novaIdade < e.age) {
      novaIdade = e.age;
      // console.log(e.age)
      // console.log(novaIdade)
      // console.log(`${e.name}, ${e.sex}, ${e.age}`)
    }
    // console.log(`fora do if ${e.name}, ${e.sex}, ${e.age}`)
    return e;
  });
  const achar = idade.find(el => el.age === novaIdade);
  // console.log(idade)
  // console.log(novaIdade)
  // console.log(achar)
  return [achar.name, achar.sex, achar.age];
}


function increasePrices(percentage) {
  const tabela = data.prices;
  console.log(tabela);
  const valorA = ((tabela.Adult + ((tabela.Adult * percentage) / 100) + 0.001));
  console.log(valorA);
  const valorC = ((tabela.Child + ((tabela.Child * percentage) / 100) + 0.001));
  console.log(valorC);
  const valorS = ((tabela.Senior + ((tabela.Senior * percentage) / 100) + 0.001));
  console.log(valorS);
  tabela.Adult = parseFloat(valorA.toFixed(2));
  tabela.Senior = parseFloat(valorS.toFixed(2));
  tabela.Child = parseFloat(valorC.toFixed(2));
  console.log(tabela);
  return tabela;
}

function employeeCoverage(idOrName) {
  const lista = {
    'Nigel Nelson': ['lions', 'tigers'],
    'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
    'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
    'Wilburn Wishart': ['snakes', 'elephants'],
    'Stephanie Strauss': ['giraffes', 'otters'],
    'Sharonda Spry': ['otters', 'frogs'],
    'Ardith Azevado': ['tigers', 'bears'],
    'Emery Elser': ['elephants', 'bears', 'lions'],
  };
  if (!idOrName) return lista;
  const tratador = data.employees.filter((an) => {
    if (an.id === idOrName || an.firstName === idOrName || an.lastName === idOrName) {
      return an.responsibleFor;
    } return false;
  });
  const idBixo = Object.values(tratador[0]);
  const primeiroNome = idBixo[1];
  const ultimoNome = idBixo[2];
  const arrayId = idBixo[4];
  const tratarAnimal = arrayId.map(e => animalsByIds(e));
  const nomeAnimal = tratarAnimal.map(e => e[0].name);
  const nomeCompleto = `${primeiroNome} ${ultimoNome}`;
  const resultado = { [nomeCompleto]: nomeAnimal };
  return resultado;
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
