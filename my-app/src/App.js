import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    //Since both components (B1 and B2 need to communicate -define state here)
    constructor(props){
    super(props); //This basically binds the 'this' to this component
    
    //Now, define the state object for this component
    this.state = {
      counter : 0
    };
  }

  incrementCounter = () => {
    this.setState( (prevState) => {
      return {counter: prevState.counter + 1};
    });
  }

  render(){
    //We can pass a reference to anything from the parent to the child component 
    //This can just be data, which will be available in the child's prop - like Div component
    //This can also be a callback, which will be available as a prop in the child - like button component
    return (
      <div>
        <DivComponent counter_variable = {this.state.counter}/>
        <ButtonComponent onClickFunction={this.incrementCounter}/>
      </div>);
  }
}

//Function component
const DivComponent = (props) => <div> {props.counter_variable} </div>;

//class component
class ButtonComponent extends React.Component{
   //function that handles component's onClick events

  render(){
    //The passed callback is available as a props member now
    return <button onClick={this.props.onClickFunction}> +1 </button>;
  }
}

export default App;