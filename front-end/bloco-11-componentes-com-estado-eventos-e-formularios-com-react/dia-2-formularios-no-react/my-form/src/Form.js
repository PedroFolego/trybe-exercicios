import React from "react";
import DadosPessoais from "./DadosPessoais";
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
    }
    this.handleChange = this.handleChange.bind(this);
  }


  render() {

    return (
      <form>
        <DadosPessoais />
        {/* <UltimoEmprego />
        <BtnInfo />
        <BtnLimpar /> */}
      </form>
    )
  }
}

export default Form;