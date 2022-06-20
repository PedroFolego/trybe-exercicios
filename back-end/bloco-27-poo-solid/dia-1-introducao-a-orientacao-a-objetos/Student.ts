class Student {
  private _matricula: string;
  private _nome: string;
  private _notaProva: Array<number>;
  private _notaTrabalho: Array<number>;

  constructor(matricula: string, nome : string, notasProva: Array<number>, notasTrabalho: Array<number>) {
    this._matricula = matricula;
    this._nome = nome;
    this._notaProva = notasProva;
    this._notaTrabalho = notasTrabalho;
  }

  get nome() {
    return this._nome;
  }
  somaNotas() {
    return `Soma prova ${this._notaProva.reduce((acc, nota) => acc + nota, 0)}
Soma trabalho ${this._notaTrabalho.reduce((acc, nota) => acc + nota, 0)}`
  }
  mediaNotas() {
    return `Media prova ${this._notaProva.reduce((acc, nota) => acc + nota, 0) / this._notaProva.length}
Media trabalho ${this._notaTrabalho.reduce((acc, nota) => acc + nota, 0) / this._notaTrabalho.length}`
  }
  
}

const student1 = new Student('seila', 'Joao', [10, 9, 10, 8], [5, 5]);
console.log(student1.somaNotas());
