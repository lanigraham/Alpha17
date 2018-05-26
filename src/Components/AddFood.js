import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';

class AddFood extends Component {

  /*temporary state to hold the value entered by the user*/
  constructor(){
    super();
    this.state = {
      addFood: []
    }
  }

/*handle submit sets an id for the input and stores it in the state of this component*/
  handleSubmit(e){
    this.setState({addFood:{
      id: uuid.v4(),
      title: this.refs.title.value,
    }}, function(){ /*The state is added to the props of the foodItem*/
      this.props.addFood(this.state.addFood);
    });
    $('#foodInput').val(''); /*just to clear the input after its use*/
    e.preventDefault(); /*this prevents the page being refereshed when the submit button is clicked, and so resetting the app and re-setting the state*/
  }

  render() {
/* form for the add food component, has the onSumbit set to the handleSubmit function */
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
        Add food:
          <input id="foodInput" type="text" ref="title" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default AddFood;
