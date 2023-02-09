import React, { Component } from "react";
class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  componentDidUpdate(prevProps, prevState) {
    // console.log("prevProps", prevProps);
    // console.log("prevState", prevState);
  }
  componentWillUnmount() {
    // console.log("Counter unmount");
  }
  render() {
    // console.log("counter rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value == 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
