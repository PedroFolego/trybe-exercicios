import React from "react";
import DadosPessoais from "./DadosPessoais";
import UltimoEmprego from './UltimoEmprego';
import BtnInfo from './BtnInfo';

class Form extends React.Component {
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
      resumoCurriculo: '',
      cargo: '', 
      descricaoCargo: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {

    const { name, value } = target;
    
    this.setState({
      [name]: value
    })
  }



  render() {

    return (
      <form>
        <DadosPessoais handleChange={this.handleChange} value={this.state} />
        <UltimoEmprego handleChange={this.handleChange} value={this.state} />
        <BtnInfo value={this.state} />
        {/* <BtnLimpar /> */}
      </form>
    )
  }
}

export default Form;