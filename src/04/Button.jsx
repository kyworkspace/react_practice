import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles, { css } from "./withStyles";

class Button extends PureComponent {
  render() {
    const {
      children,
      disabled,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
      onPress,
    } = this.props;
    return (
      <button
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary
        )}
        onClick={onPress}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  onPress: PropTypes.func,
  //onPress 프로퍼티는 함수타입으로
};

Button.defaultProps = {
  onPress: () => {},
  // 기본값으로 빈 실행함수를 전달하여 프로퍼티가 선언되지 않아도 엘리먼트의 이벤트에서 콜백함수를 실행할 때
  // undefined 오류가 발생하는 것을 방지 합니다.
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};

export default withStyles(({ color, size, unit }) => ({
  default: {
    border: 1,
    borderStyle: "solid",
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Button);
