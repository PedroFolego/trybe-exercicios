import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.person.name} {this.props.person.lastName}</h1>);
  }
}

Greeting.propTypes = {
  person: {
    name: PropTypes.string,
    lastName: PropTypes.string},
};

export default Greeting;