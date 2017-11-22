import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render(){
    return <Button2/>;
  }
}

//Function component
const Button1 = (props) => <button> 7 </button>;

//class component
class Button2 extends React.Component{
  render(){
    return <button> 8 </button>;
  }
}

export default App;