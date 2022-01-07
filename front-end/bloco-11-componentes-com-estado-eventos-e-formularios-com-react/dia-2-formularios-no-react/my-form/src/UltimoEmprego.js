import React from "react";

class UltimoEmprego extends React.Component {

  onMouse() {
    document.getElementById('onmouse').innerHTML = "Preencha com cuidado esta informação.";
  }

  render() {

    const { handleChange, value } = this.props;
    return (
      <fieldset>
        <label>
          Resumo do Curriculo:
          <textarea type="text" name="resumoCurriculo" onChange={handleChange} value={value.resumoCurriculo} maxLength="1000" required />
        </label>
        <label>
          Cargo:
          <textarea type="text" name="cargo" onChange={handleChange} value={value.cargo} maxLength="40" onMouseEnter={this.onMouse} required/>
          <span id="onmouse"></span>
        </label>
        <label>
          Descrição do cargo:
          <input type="text" name="descricaoCargo" onChange={handleChange} value={value.descricaoCargo} maxLength="500" required/>
        </label>
      </fieldset>
    )
  }
}

export default UltimoEmprego;