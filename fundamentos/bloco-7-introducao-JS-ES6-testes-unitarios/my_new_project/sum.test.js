const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee } = require('./sum');

describe('testando funções', () => {
  it('testando soma da função (sum)', () => {
    expect(sum(3, 5)).toBe(8);
    expect(sum(0,0)).toBe(0);
  })
  
  it('verifica se aceita somente typeof number', () => {
    expect(() => sum(4,'5')).toThrowError('Aceita somente numeros');
  })
})

describe('Testando a função myRemove', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  })
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })
})

describe('Testando a função myFizzBuzz', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })  
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  })
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o número escolhido', () => {
    expect(myFizzBuzz(17)).toBe(17);
  })
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é false', () => {
    expect(myFizzBuzz('Não é um número')).toBe(false);
  })
})

describe('Testando Encode e Decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('Pedro')).toBe('P2dr4');
    expect(decode('L2t3c31')).toBe('Leticia');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('Pedro').length).toBe(5);
    expect(decode('L2t3c31').length).toBe(7);
  })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Teste a função searchEmployee', () => {
  it('Verifica searchEmployee como função', () => {
    expect(typeof searchEmployee).toBe('function');
  })
  it('Verifica se chamar o id existente retorno um valor diferente de ID não identificada', () => {
    expect(searchEmployee("5569-4", "specialities")).not.toBe('ID não identificada');
  })
  it('Verifica se chamar o id inexistente retorno ID não identificada', () => {
    expect(searchEmployee("55695", "specialities")).toBe('ID não identificada');
    expect(searchEmployee("5569235", "specialities")).toBe('ID não identificada');
    expect(searchEmployee("556-295", "specialities")).toBe('ID não identificada');
  })
  it('Verifica o se o value é correspondente ao chamar a função searchEmployee', () => {
    expect(searchEmployee('8579-6','lastName')).toBe('Gates');
    expect(searchEmployee('1256-4','firstName')).toBe('Linda');
    expect(searchEmployee('9852-2-2','specialities')).toStrictEqual(['Ruby', 'SQL']);
    expect(searchEmployee('5569-4','id')).toBe('5569-4');
  })
  it('Verifica se passar uma informação errada retorna o erro Informação indisponível', () => {
    expect(() => searchEmployee('8579-6', 'nomeCompleto')).toThrowError('Informação indisponível');
    expect(() => searchEmployee('5569-4', 'númeroDoRg')).toThrowError('Informação indisponível'); 
    expect(() => searchEmployee('9852-2-2', 'matrícula')).toThrowError('Informação indisponível');   
  })
})