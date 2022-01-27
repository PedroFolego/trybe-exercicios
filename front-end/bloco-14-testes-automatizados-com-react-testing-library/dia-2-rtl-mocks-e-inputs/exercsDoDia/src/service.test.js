
const service = require('./service');


describe('Verifica função randomNumber', () => {
  it('Verifica se a função é chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
    service.randomNumber();

    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  })
  it('Implementando outra função usando randomNumber', () => {
    service.randomNumber = jest.fn().mockImplementation((a ,b) => a + b);
    service.randomNumber(2, 4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber(2, 3)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  })
  it('Implementando função de multiplicar usando randomNumber', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    service.randomNumber(2, 4, 5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber(2, 3, 6)).toBe(36);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  })
})

describe('4. Testando novas funções', () => {
  it('Mockando todas as funções com novas funcionalidades', () => {
    const toLowerCase = jest
      .spyOn(service, 'toUpperCase')
      .mockImplementation(string => string.toLowerCase());

    service.firstLetter = jest.fn().mockImplementation(string => string[string.length - 1]);
    service.concatStrings = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    toLowerCase('Pedro');
    expect(toLowerCase).toHaveBeenCalled();
    expect(toLowerCase('CRISTIANO')).toBe('cristiano');
    expect(toLowerCase).toHaveBeenCalledTimes(2);

    service.firstLetter('Alo rapaziada');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter('Alo moçada')).toBe('a');
    expect(service.firstLetter).toHaveBeenCalledTimes(2);

    service.concatStrings('Um ', 'animal ', 'pequeno');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings('Um ', 'pequeno ', 'animal')).toBe('Um pequeno animal');
    expect(service.concatStrings).toHaveBeenCalledTimes(2);


    service.toUpperCase.mockRestore();

    expect(service.toUpperCase('cachorro')).toBe('CACHORRO');
  })
})

describe('Mockando uma API', () => {
  const dogAPI = {
    "message": "https://images.dog.ceo/breeds/coonhound/n02089078_465.jpg",
    "status": "success"
  }

  it('API do cachorro', async () => {

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolveValue({
      json: jest.fn().mockResolveValue(dogAPI),
    })

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(dogAPI),
    }))

    global.fetch = jest.fn( async () => ({
      json: async () => dogAPI,
    }))
  })
})