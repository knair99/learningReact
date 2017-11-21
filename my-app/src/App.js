import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render(){
    return <h1> {this.props.text}</h1>
  }
}

App.propTypes = {
  text: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;