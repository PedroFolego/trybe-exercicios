import readline from 'readline-sync';


const characters: {
  nickname: string,
  class: string,
  stats: {
    agi: number,
    str: number,
    int: number,
    hp: number,
    mp: number,
  },
  createdAt: Date
}[] = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1')
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2')
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15')
  },
]

function printCharacter(character: {
  nickname: string,
  class: string,
  stats: {
    agi: number,
    str: number,
    int: number,
    hp: number,
    mp: number,
  },
  createdAt: Date
}, index: number) {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

// characters.forEach(printCharacter);

enum Meses {
  Janeiro = 'Janeiro',
  Fevereiro = 'Fevereiro',
  Março = 'Março',
  Abril = 'Abril',
  Maio = 'Maio',
  Junho = 'Junho',
  Julho = 'Julho',
  Agosto = 'Agosto',
  Setembro = 'Setembro',
  Outubro = 'Outubro',
  Novembro = 'Novembro',
  Dezembro = 'Dezembro',
}

enum Estações {
  Primavera = 'Primavera',
  Verão = 'Verão',
  Outono = 'Outono',
  Inverno = 'Inverno',
}

const meses = Object.keys(Meses)

const escolhaMes = readline.keyInSelect(meses, 'Escolha um mês')
const mes = Object.values(Meses)[escolhaMes];

const mesesEstacoes = {
  [Estações.Outono]: [Meses.Março, Meses.Abril, Meses.Maio, Meses.Junho],
  [Estações.Inverno]: [Meses.Junho, Meses.Julho, Meses.Agosto, Meses.Setembro],
  [Estações.Primavera]: [Meses.Setembro, Meses.Outubro, Meses.Novembro, Meses.Dezembro],
  [Estações.Verão]: [Meses.Dezembro, Meses.Janeiro, Meses.Fevereiro, Meses.Março]
}

Object.entries(mesesEstacoes).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];
  // São os meses de cada estação. Caso esteja
  // incluído em mais de uma estação, o console
  // abaixo irá adicionar
  
  if (months.includes(mes)) console.log(seasons);
});

