import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <button onClick={this.increaseCount} onMouseOut={this.resetCount}>
          카운트 증가
        </button>
      </div>
    );
  }
}

Counter3.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter3;
