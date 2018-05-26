import React, { Component } from 'react';
import AddFood from "./AddFood"



class FridgeItems extends Component {

/*add food is just to pass the information form component(addFood) to the Root
so we set it as a prop in fridge items */
  addFood(food){
    this.props.addFood(food);
    console.log(food.id)
  }

/*function to delete food from the state*/
  deleteFood(id){
    this.props.onDelete(id);
  }


   render() {

    let foodItems;
    //doing a for loop to test if there are any items

    //maps out the food objects in the state
    if(this.props.foodItems){
      foodItems = this.props.foodItems.map(foodItem => {
      //console.log(project)

      /* returns each food item with a key value and its title. The 'x' carries the deleteFood prop function*/
      return(
        <li>
        <strong key={foodItem.title}>{foodItem.title}</strong><a href="#" onClick={this.deleteFood.bind(this, foodItem.id)}>   x</a>
        </li>
      );
    })
  };

  /*add food is added to the fridge component*/
    return (
      <div id="fridge-component">
        <p>Fridge component</p>

        {foodItems}

        <AddFood addFood={this.addFood.bind(this)}/>

      </div>
    );
  }
}


export default FridgeItems;
