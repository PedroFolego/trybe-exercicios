import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arrCoisas = [ 'turururu', 'turura', 'tututu', 'tchanana']

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Content />
      <Footer />
      <ul>{arrCoisas.map((coisa) => Task(coisa))}</ul>
      </>
    )
  }
}
export default App;
