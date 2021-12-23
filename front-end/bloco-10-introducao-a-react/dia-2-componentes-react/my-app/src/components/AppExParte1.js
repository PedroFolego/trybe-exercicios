import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import Greeting from './components/Greeting';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    const people = [
      {
        id: 45,
        name: 'João Pedro',
        lastName: 'da Silva',
      },
      {
        id: 26,
        name: 'Francisco',
        lastName: 'Afonso',
      }
    ]
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ]

    return (
      <div className="App">
        {people.map( person => <Greeting person={person} key={person.id}/>)}
        {users.map( user => <UserProfile user={user} key={user.id} />)}
      </div>
    );
  }
}

export default App;
