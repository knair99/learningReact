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
  constructor(props){
    super(props); //This basically binds the 'this' to this component
    
    //Now, define the state object for this component
    this.state = {
      counter : 0
    };
  }

  render(){
    return <button> {this.state.counter} </button>;
  }
}

export default App;