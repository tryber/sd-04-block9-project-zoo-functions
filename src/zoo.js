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
//   const tabelaPreco = Object.values(data.prices);
// console.log(tabelaPreco)
//   const precoA = (tabelaPreco[0] + ((tabelaPreco[0] * percentage) / 100) + 0.001);
//   const precoS = (tabelaPreco[1] + ((tabelaPreco[1] * percentage) / 100) + 0.001);
//   const precoC = (tabelaPreco[2] + ((tabelaPreco[2] * percentage) / 100) + 0.001);
// console.log(precoA)
// console.log(precoS)
// console.log(precoC)
//   const tabelaPreco1 = data.prices;
// console.log(tabelaPreco1)
//   tabelaPreco1.Adult = precoA
//   tabelaPreco1.Child = precoC;
//   tabelaPreco1.Senior = precoS;
// console.log(tabelaPreco1.Adult)
// console.log(tabelaPreco1.Child)
// console.log(tabelaPreco1.Senior)
// console.log(tabelaPreco1)
//   return tabelaPreco1
// }
// console.log(increasePrices(50))
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
