import React, { Component } from 'react';
import FridgeItems from '../FridgeItems';

import '../Styles/test.css';
import uuid from 'uuid';

class Root extends Component {


//constructor containing the state holding out soon to be api information
  constructor() {
    super();
    this.state = {
      test: "I'm from the state.",
      foodItems: []
    }
  }

//function that adds food to the state
  addFood(food){
    let foods = this.state.foodItems;
    foods.push(food);
    this.setState({foodItems:foods});
  }


//function that deletes food from the state
  handleDeleteFood(id){
    let foods = this.state.foodItems;
    let food = foods.findIndex(x => x.id === id);
    foods.splice(food, 1);
    this.setState({foodItems: foods});
  }

//setting the state just for pre-loading data - may turn this into an ajax query to find the api call
  getItems(){
    this.setState({foodItems: [
      {
        id: uuid.v4(),
        title: "Buisness website"
      },
      {
        id: uuid.v4(),
        title: "Social app"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Shopping Cart"
      }
    ]})
  }

//set the state when the app is loaded
  componentWillMount(){
    this.getItems()
  }

  render() {
    /* fridge items: carries the props to delete a food and to add a food item. */
    return (
      <div className="test">
        <p>This is the root component.</p>
        {this.state.test}


        <FridgeItems foodItems={this.state.foodItems} addFood={this.addFood.bind(this)} onDelete={this.handleDeleteFood.bind(this)} />
      </div>
    );
  }
}

export default Root;
