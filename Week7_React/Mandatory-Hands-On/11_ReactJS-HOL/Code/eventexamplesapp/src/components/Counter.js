import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  sayHello() {
    console.log("Hello! You clicked increment.");
  }

  handleIncrement() {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello();
  }

  handleDecrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <br/>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
