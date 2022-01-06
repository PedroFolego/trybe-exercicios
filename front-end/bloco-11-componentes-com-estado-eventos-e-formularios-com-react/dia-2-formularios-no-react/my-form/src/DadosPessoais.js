import React from 'react';

class DadosPessoais extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      moradia: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {

    const { name, value } = target;
    
    // if (type == 'checkbox') 
    const error = undefined;
    if(name == 'nome' && value.length > 40) error = 'Limite de caracteres.';
    if(name == 'email' && value.length > 50) error = 'Limite de caracteres.';
    if(name == 'cpf' && value.length > 11) error = 'Limite de caracteres.';
    if(name == '' && value.length > 40) error = 'Limite de caracteres.';
    
    this.setState({
      [name]: value
    })
  }

  render() {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    return (
      <fieldset>
        <label>
          Nome:
          <input type="text" name="nome" onChange={this.handleChange} maxLength="40" required />
          <span></span>
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} maxLength="50" required />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" onChange={this.handleChange} maxLength="11" required />
        </label>
        <label>
          Endereço:
          <input type="text" name="endereco" onChange={this.handleChange} maxLength="200" required />
        </label>
        <label>
          Cidade:
          <input type="text" name="cidade" onBlur={this.handleChange} maxLength="28" required />
        </label>
        <label>
          Estado:
          <select name="estado" onChange={this.handleChange}>
            {estados.map((estado) => {
              return <option name={estado} key={estado}>{estado}</option>
            })}
          </select>
        </label>

        <div>
          <label for="casa">
            Casa:
          </label>
          <input id="casa" type="radio" name="moradia" value="casa" onClick={this.handleChange} />
        </div>
        <div>
          <label for="apartamento">
            Apartamento:
          </label>
          <input id="apartamento" type="radio" name="moradia" value="apartamento" onClick={this.handleChange} />
        </div>

      </fieldset>
    )
  }
}
export default DadosPessoais;