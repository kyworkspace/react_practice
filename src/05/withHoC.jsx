import React, { Component } from "react";

export default function WithHoC(WrappedComponent) {
  const { displayName, name } = WrappedComponent;
  const WrappedComponentName = displayName || name;

  return class WithHoC extends Component {
    static displayName = `withHoC(${WrappedComponentName})`;
    //기존 컴포넌트에 정의된 이름을 withHoC와 소괄호 안에 포함 되도록 합니다.
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
