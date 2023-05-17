const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(Object.prototype.toString.call(productDetails)).toEqual('[object Function]');

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([{"details": {"productId": "Alcool gel123"}, "name": "Alcool gel"}, {"details": {"productId": "Máscara123"}, "name": "Máscara"}]);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel', 'Máscara')).toMatchObject([{"details": {"productId": "Alcool gel123"}, "name": "Alcool gel"}, {"details": {"productId": "Máscara123"}, "name": "Máscara"}]);

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Arroz', 'Feijão')).toEqual([{"details": {"productId": "Arroz123"}, "name": "Arroz"}, {"details": {"productId": "Feijão123"}, "name": "Feijão"}]);

    // Teste se os dois productIds terminam com 123.
    const [{ details: product1 }, { details: product2 }] = productDetails('Alcool', 'Máscara');
    const finalProduct = product1.productId.slice(-3) === product2.productId.slice(-3);
    expect(finalProduct).toStrictEqual(true);
  });
});
