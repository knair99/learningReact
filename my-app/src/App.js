import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  
  //Fjrst define a constructor
  constructor(){
    super(); //Binds 'this' to current object

    //Next, create object to hold state
    this.state = {
      text: "This is state text"
    }
  }

    //Create a method to manage state
    update (event){
      //Define object that goes into managing state
      this.setState({
          text: event.target.value
        });
    }
  
  render(){
    //Introduce an input so we can change state dynamically using update method
    return( 
      <div>
          <input type="text" onChange={this.update.bind(this)}/>
          <h1> {this.state.text} </h1>
      </div>
      );
  }
}

export default App;