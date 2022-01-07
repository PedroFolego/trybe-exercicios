import React from "react";
import DadosSalvos from "./DadosSalvos";

class BtnInfo extends React.Component {
  finishFormsBtn() {
    const { value } = this.props;
    const id = document.getElementById('formCompleted');
    return (
      id = <DadosSalvos dadosDaPessoa={value} />
    )
  }
  render() {
    return( 
      <>
      <label>
        <input type="submit" value="Enviar" onClick={this.finishFormsBtn} />
      </label>
      <div id="formCompleted"></div>
      </>

    )
  }
}

export default BtnInfo;