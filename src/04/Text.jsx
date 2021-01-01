import React, { PureComponent } from "react";
import PropTypes from "prop-types";
//withStyles 임포트
import withStyles, { css } from "./withStyles";

class Text extends PureComponent {
  render() {
    const {
      children,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;
    return (
      //각 왼쪽의 사이즈가 true 값으로 들어온다면 style은 각 사이즈로 적용됨
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary
        )}
      >
        {children}
      </span>
    );
  }
}
//css() 함수로 엘리먼트에 default 키에 정의된 스타일을 적용.
//css() 함수는 엘리먼트 속성값을 객체형으로 반환하므로 전개연산자를 사용해 span 엘리먼트에 스타일을 적용함

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

//스타일 생성함수를 호출하여 테마파일에 등록된 값 {color,size}를 withStyles() 함수에 전달함
export default withStyles(({ color, size }) => ({
  default: { color: color.default, fontSize: size.md },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
//표기는 카멜 방식으로
//텍스트 컴포넌트에 함수를 적용함
