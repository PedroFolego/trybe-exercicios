"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const characters = [
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
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
// characters.forEach(printCharacter);
var Meses;
(function (Meses) {
    Meses["Janeiro"] = "Janeiro";
    Meses["Fevereiro"] = "Fevereiro";
    Meses["Mar\u00E7o"] = "Mar\u00E7o";
    Meses["Abril"] = "Abril";
    Meses["Maio"] = "Maio";
    Meses["Junho"] = "Junho";
    Meses["Julho"] = "Julho";
    Meses["Agosto"] = "Agosto";
    Meses["Setembro"] = "Setembro";
    Meses["Outubro"] = "Outubro";
    Meses["Novembro"] = "Novembro";
    Meses["Dezembro"] = "Dezembro";
})(Meses || (Meses = {}));
var Estações;
(function (Estações) {
    Estações["Primavera"] = "Primavera";
    Estações["Ver\u00E3o"] = "Ver\u00E3o";
    Estações["Outono"] = "Outono";
    Estações["Inverno"] = "Inverno";
})(Estações || (Estações = {}));
const meses = Object.keys(Meses);
const escolhaMes = readline_sync_1.default.keyInSelect(meses, 'Escolha um mês');
const mes = Object.values(Meses)[escolhaMes];
console.log(mes);
const mesesEstacoes = {
    [Estações.Outono]: [Meses.Março, Meses.Abril, Meses.Maio, Meses.Junho],
    [Estações.Inverno]: [Meses.Junho, Meses.Julho, Meses.Agosto, Meses.Setembro],
    [Estações.Primavera]: [Meses.Setembro, Meses.Outubro, Meses.Novembro, Meses.Dezembro],
    [Estações.Verão]: [Meses.Dezembro, Meses.Janeiro, Meses.Fevereiro, Meses.Março]
};
Object.entries(mesesEstacoes).map((entry) => {
    const seasons = entry[0];
    const months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(mes))
        console.log(seasons);
});
