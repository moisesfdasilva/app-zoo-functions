const handlerElephants = require('../src/handlerElephants');

const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';

describe('Testes da função HandlerElephants, conforme a seguir:', () => {
  it('1 - Verifica se é uma função.', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('2 - Verifica se não houver parâmetro retorna "undefined".', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('3 - Verifica se o parâmetro não é uma string retorna a frase "Parâmetro inválido, é necessário uma string".', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('4 - Verifica se retorna o valor de uma chave.', () => {
    expect(handlerElephants('id')).toEqual(elephantsId);
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(typeof handlerElephants('availability')).toEqual('object');
    expect(typeof handlerElephants('residents')).toEqual('object');
  });
  it('5 - Verifica se parâmetro "cont" retorna a quantidade de animais.', () => {
    expect(typeof handlerElephants('count')).toBe('number');
    expect(handlerElephants('count')).toEqual(4);
  });
  it('6 - Verifica se parâmetro "names" retorna os nomes dos animais.', () => {
    expect(typeof handlerElephants('names')).toBe('object');
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('7 - Verifica se parâmetro "averageAge" retorna a idade média dos animais.', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('8 - Verifica se um parâmetro inexistente retorna "null".', () => {
    expect(handlerElephants('abc')).toBeNull();
  });
});
