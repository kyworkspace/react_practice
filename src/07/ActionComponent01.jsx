import React, { PureComponent } from "react";
import Button from "../04/Button";
import PropTypes from "prop-types";

class ActionComponent extends PureComponent {
  render() {
    const { setAge } = this.props;
    return (
      <React.Fragment>
        <Button onPress={() => setAge(2, 19)}>2번을 19살로 변경</Button>
      </React.Fragment>
    );
  }
}
ActionComponent.propTypes = {
  setAge: PropTypes.func,
};

export default ActionComponent;
