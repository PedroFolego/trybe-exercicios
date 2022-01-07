import React from 'react';

class DadosPessoais extends React.Component {
  constructor() {
    super()

    // this.onBlur = this.onBlur(this);

  }

  // onBlur() {
  //   console.log(this.props);
  //   // if (!Number.isNaN(this.cidade.charArt(0))) this.cidade = ""; 
  // }
  
  render() {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

    const { value: { nome, email, cpf, endereco, cidade, estado }, handleChange } = this.props;

    return (
      <fieldset>
        <label>
          Nome:
          <input type="text" name="nome" onChange={handleChange} value={nome.toUpperCase()} maxLength="40" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} value={email} maxLength="50" required />
        </label>
        <label>
          CPF:
          <input type="text" name="cpf" onChange={handleChange} value={cpf} maxLength="11" required />
        </label>
        <label>
          Endereço:
          <input type="text" name="endereco" onChange={handleChange} value={endereco} maxLength="200" required />
        </label>
        <label>
          Cidade:
          <input type="text" name="cidade" onChange={handleChange} value={cidade} maxLength="28" required />
        </label>
        <label>
          Estado:
          <select name="estado" onChange={handleChange} value={estado}>
            {estados.map((estado) => {
              return <option name={estado} key={estado}>{estado}</option>
            })}
          </select>
        </label>

        <div>
          <label htmlFor="casa">
            Casa:
          </label>
          <input id="casa" type="radio" name="moradia" value="casa" onClick={handleChange} />
        </div>
        <div>
          <label htmlFor="apartamento">
            Apartamento:
          </label>
          <input id="apartamento" type="radio" name="moradia" value="apartamento" onClick={handleChange} />
        </div>

      </fieldset>
    )
  }
}
export default DadosPessoais;