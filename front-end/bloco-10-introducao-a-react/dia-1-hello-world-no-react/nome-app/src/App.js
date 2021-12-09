import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ul>{Task('Ola mundo')}</ul>
    )
  }
}
export default App;
