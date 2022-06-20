interface Pedido {
  nome: string,
  preço: number,
}

class ClienteLanchonete {
  private _nome: string;
  private _pedido: Array<Pedido>;
  private _desconto?: number;

  constructor(nome: string, pedido: Array<Pedido>, desconto?: number) {
    this._nome = nome;
    this._pedido = pedido;
    this._desconto = desconto;
  }

  total() {
    return `O valor total foi: ${this._pedido.reduce((acc, p) => acc + p.preço, 0)}`
  }
  totalDesconto() {
    if(!this._desconto) throw Error('Cliente sem desconto');
    return `O valor total com desconto foi: ${this._pedido.reduce((acc, p) => acc + p.preço, 0) * this._desconto}`
  }
}

const pedido1: Pedido = {
  nome: 'linguiça',
  preço: 20
}

const pedido2: Pedido = {
  nome: 'almondega',
  preço: 80
}
//const cliente1 = new ClienteLanchonete('Rogerinho', [pedido1, pedido2]);

//console.log(cliente1.totalDesconto());
