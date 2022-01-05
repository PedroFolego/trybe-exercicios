import React from 'react';

class Button extends React.Component {
  constructor() {
    super()

    this.state = {
      contadorNumero: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((numeroAnterior) => ({
      contadorNumero: numeroAnterior.contadorNumero + 1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.contadorNumero}</button>
    )
  }
}

export default Button;
