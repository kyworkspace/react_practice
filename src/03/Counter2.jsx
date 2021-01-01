import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter2 extends Component {
  render() {
    return (
      <div>
        <span>카운트 : {this.props.count}</span>
        <button onClick={() => this.props.onAdd()}>카운트 증가</button>
      </div>
    );
  }
}

Counter2.propTypes = {
  count: PropTypes.number,
  onAdd: PropTypes.func,
};

export default Counter2;
