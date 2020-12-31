import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildProperty extends Component {
  render() {
    //자식 노드 를 표현 가져와 보여줄때, children 사용
    return <div>{this.props.children}</div>;
  }
}
ChildProperty.propTypes = {
  children: PropTypes.node,
};

export default ChildProperty;
