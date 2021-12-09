import React from 'react';


const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
const renderSkills = (skill) => {
  return <div key={skill.conteudo} className="card">
    <h2>O conteudo é: {skill.conteudo}</h2>
    <p>Status: {skill.status}</p>
    <p>Bloco: {skill.bloco}</p>
  </div>
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map(renderSkills)}
      </div>
    )
  }
}

export default Content;