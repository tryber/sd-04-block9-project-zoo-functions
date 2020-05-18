const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');


describe('increasePrices', () => {
  it('test', () => {
    let expected;

    // data uma porcentagem, incrementa todos os preços, arrendondados em duas casas
    // decimais

    expected = {
      'Adult': 74.99,
      'Senior': 37.49,
      'Child': 31.49
    };

    assert.deepEqual(zoo.increasePrices(50) /* data.prices */, expected);

    expected = {
      'Adult': 97.49,
      'Senior': 48.74,
      'Child': 40.94
    };

    assert.deepEqual(zoo.increasePrices(30) /* data.prices */, expected);
  });
});
