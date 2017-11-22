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

  incrementCounter = (inc_val) => {
    this.setState( (prevState) => {
      return {counter: prevState.counter + inc_val};
    });
  }

  render(){
    //Passing data into the ButtonComponents (incrementValue)
    return (
      <div>
        <hr/>
        <DivComponent counter_variable = {this.state.counter}/>
        <ButtonComponent incrementValue={5} onClickFunction={this.incrementCounter}/>
        <ButtonComponent incrementValue={15} onClickFunction={this.incrementCounter}/>
        <ButtonComponent incrementValue={25} onClickFunction={this.incrementCounter}/>
        <hr/>

      </div>);
  }
}

//Function component
const DivComponent = (props) => <div> {props.counter_variable} </div>;

//class component
class ButtonComponent extends React.Component{
   //bring back a function that will pass the value on up to the function in the parent
   handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
   }

  render(){
    //The passed callback is available as a props member now
    return <button onClick={this.handleClick}> +{this.props.incrementValue} </button>;
  }
}

export default App;