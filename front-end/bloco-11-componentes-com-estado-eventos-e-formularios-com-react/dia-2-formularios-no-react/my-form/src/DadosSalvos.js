import React from "react";

class DadosSalvos extends React.Component {
  
  render() {
    const { dadosDaPessoa: { nome, email, cpf, endereco, cidade, estado, moradia, resumoCurriculo, cargo, descricaoCargo } } = this.props;
    return (
      <>
        <h3>Nome: {nome}</h3>
        <p>Email: {email}</p>
        <p>CPF: {cpf}</p>
        <p>Endereço: {endereco}</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estado}</p>
        <p>Moradia: {moradia}</p>
        <p>Resumo do Curriculo: {resumoCurriculo}</p>
        <p>Último Emprego: {cargo}</p>
        <p>Descrição do último emprego: {descricaoCargo} </p>

      </>
    )
  }
}

export default DadosSalvos;