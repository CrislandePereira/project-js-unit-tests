const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  const createMenuObj = createMenu('coxinha', 'agua', 3.90);
  it('1 - Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(typeof createMenuObj).toBe('object');
    expect(createMenuObj).toHaveProperty('fetchMenu');
    expect(typeof createMenuObj.fetchMenu).toBe('function');
  });
  it('2 - Verifica retorno da função `createMenu` são somente food e drinks', () => {
    expect(createMenuObj.fetchMenu()).toHaveProperty('food');
    expect(createMenuObj.fetchMenu()).toHaveProperty('drinks');
  });
  it('3 - Verifica se o menu passado pra função createMenu é idêntico ao menu recuperado pela função', () => {
    // expect(createMenu()).toStrictEqual(createMenu({ 'food': { food, value }, drinks: { drinks, value } }).fetchMenu());
  });
});