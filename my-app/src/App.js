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

  //function that handles component's onClick events
  handleClick = () => {
    //All changes to state must be handled via setState method call
    //This function is asynchronous = reading and writing counter can cause race condition
    this.setState( (prevState) => { //Get the previous state by specifying a callback, which gets previous state
      return {
        counter: prevState.counter + 1 //update new counter using counter value from previous state
      };
    });
  }

  render(){
    return <button onClick={this.handleClick}> {this.state.counter} </button>;
  }
}

export default App;