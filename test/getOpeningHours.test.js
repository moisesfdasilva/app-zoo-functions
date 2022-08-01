const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('1 - Verifica se é uma função.', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('2 - Verifica se a função sem variáveis retorna um objeto com o horário de abertura e fechamento.', () => {
    expect(typeof getOpeningHours()).toBe('object');
    const objResult = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(objResult);
  });
  it('3 - Verifica se a função recebendo um dia da semana e um horário retorna um texto informando se o zológico está aberto.', () => {
    expect(typeof getOpeningHours('Monday', '09:00-AM')).toBe('string');
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
    expect(getOpeningHours('Friday', '01:00-PM')).toEqual('The zoo is open');
  });
  it('4 - Verifica se a função recebendo um texto sem ser um dia da semana retorna um erro específico.', () => {
    expect(() => getOpeningHours('abc', '03:00-PM')).toThrow();
    expect(() => getOpeningHours('abc', '03:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('5 - Verifica se a função recebendo um horário inválido retorna um erro específico', () => {
    expect(() => getOpeningHours('Friday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Saturday', '10:80-PM')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Sunday', 'hh:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '07:mm-PM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Tuesday', '06:00-ZZ')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
