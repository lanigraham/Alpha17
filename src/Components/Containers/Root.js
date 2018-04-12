import React, { Component } from 'react';
import Test from '../Test';
import Jimmy from '../Jimmy';
import '../Styles/test.css';

class Root extends Component {

  constructor() {
    super();

    this.state = {
      test: "I'm from the state."
    }
  }

  render() {
    return (
      <div className="test">
        <p>This is the root component.</p>
        {this.state.test}

        <Test />
        <Jimmy />
      </div>
    );
  }
}

export default Root;
