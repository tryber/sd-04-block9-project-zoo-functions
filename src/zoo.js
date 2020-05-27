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
  return ids.map(id => data.animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return data.animals.find(especie => especie.name === animal)
    .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  return data.employees.reduce((accumulator, employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName
      ? employee : accumulator), {});
}

function createEmployee(personalInfo, associatedWith) {
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return data.employees.some(employee =>
    employee.managers.find(mananger => mananger === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  return data.animals.reduce((accumulator, animal) => {
    const { name, residents } = animal; // destructuring do objeto
    if (species === undefined) {
      // console.log(animal.name, animal.residents.length):
      // se não fosse string usaria desta forma [`${name}`]
      accumulator[name] = residents.length; // adicionando uma nova chave,
    } else if (name === species) {
      accumulator = residents.length;
    }
    return accumulator;
  }, {}, // look o reduce se não passado nenhum valor para inicializar o accumulator,
    // ele inicializa com o primeiro valor que tem no animal
  );
}

function entryCalculator(entrants = {}) { // defalt paraments
  return Object.keys(entrants) // a chave vira um array, o return vai receber o resultado de reduce
    .reduce((accumulator, participant) =>
      accumulator + (entrants[participant] * data.prices[participant]), 0);
      // entrants.adult= quantidad
}

// Refatoração de código-- Criado arrowFucntion para função de Filter
const FilterAnimals = location =>
  data.animals.filter(animalFilter => animalFilter.location === location);

const CreateNewAnimalMap = (animal, newObj, options) => {
  // recebe todos os animais daquela localização
  const filterAnimal = FilterAnimals(animal.location);
  newObj[animal.location] = [];
  filterAnimal.forEach((filtro) => {
    if (options.includeNames) { // vem do ObjectSpecieName, vem true
      const ObjectSpecieName = {}; // serve para criar um novo objeto dentro do acumulator
      ObjectSpecieName[filtro.name] = []; // criando um novo nó, recebendo um array vazio
      filtro.residents.forEach((resident) => { // Vai alimentar os dados no nó
        // comparando parametros que vem no options
        if (options.sex === undefined || resident.sex === options.sex) {
          ObjectSpecieName[filtro.name].push(resident.name); // vai adicionado
          if (options.sorted) { // se vier com sorted, ele vai ordenar
            ObjectSpecieName[filtro.name].sort(); // ordena em ordem crescente
          }
        }
      });
      // quando true, cria um objeto de arrays que tem um objeto de array
      newObj[animal.location].push(ObjectSpecieName); // grava dados no newObject
    } else {
      // quando false, cria um objeto de arrays
      newObj[animal.location].push(filtro.name);
    }
  });
  return newObj;
};

function animalMap(options = {}) { // default Params
  return data.animals.reduce((accumulator, animal) => {
    if (!accumulator[animal.location]) { // Pra não duplicar os registros
      accumulator = CreateNewAnimalMap(animal, accumulator, options);
    }
    return accumulator;
  }, {});
}

function schedule(dayName = '') {
  // Transformar o objeto em array com key
  return Object.keys(data.hours).reduce((accumulator, hour) => {
    // Verificando o que vem no day name
    if (dayName === '' || dayName === hour) {
      accumulator[hour] = hour === 'Monday' ? 'CLOSED'
        : `Open from ${data.hours[hour].open}am until ${data.hours[hour].close - 12}pm`;
    }
    // Criando chave dia da semana que esta dentro de hour, e pegando as informações
    return accumulator;
  }, {});
}

function oldestFromFirstSpecies(id) {
  const resultEmployee = data.employees.find(employee =>
    employee.id === id);
  const resultAnimal = data.animals.find(animal =>
    animal.id === resultEmployee.responsibleFor[0]);
  let resultOldAnimal = { age: 0 };
  resultAnimal.residents.forEach((animal) => {
    if (animal.age > resultOldAnimal.age) {
      resultOldAnimal = animal;
    }
  });
  return Object.values(resultOldAnimal);
}

function increasePrices(percentage) {
  // Tranforma o objeto em array, para manipular
  Object.keys(data.prices).forEach((price) => {
    // calcula a porcentagem soma com + 0.001 para arredondar para mais
    data.prices[price] += (data.prices[price] * (percentage / 100)) + 0.001;
    // coloca para duas casas apenas
    data.prices[price] = parseFloat(data.prices[price]).toFixed(2);
    // tranforma em numérico novamente
    data.prices[price] = parseFloat(data.prices[price]);
  });
  return data.prices;
}

function employeeCoverage(idOrName = '') {
  // um reduce recebendo todo o processo
  return data.employees.reduce((accumulator, employee) => {
    // validações para cada possível situação
    if (idOrName === '' || idOrName === employee.id ||
      idOrName === employee.firstName || idOrName === employee.lastName) {
      // Criando objeto, com chave nome e sobrenome, recebendo obj vazio
      accumulator[`${employee.firstName} ${employee.lastName}`] = [];
      // Fazendo um forEach no id de animal e specieAnimal filtrando dados daquele id
      employee.responsibleFor.forEach((animalKey) => {
        const specieAnimal = data.animals.find(animal =>
          animal.id === animalKey);
        // Adicionando um novo item no array
        accumulator[`${employee.firstName} ${employee.lastName}`].push(specieAnimal.name);
      });
    }
    return accumulator;
  }, {});
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
