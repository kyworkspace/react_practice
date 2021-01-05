import React, { Component } from "react";
import PropTypes from "prop-types";

import { Provider } from "./FormContext";

export default class FormProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  onChange(name, updatedValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values) //state가 변경된 다음 유효성 검사 실행
    );
  }

  reset() {
    this.setState({ values: {}, errors: {} });
  }

  submit() {
    this.props.onSubmit(this.state.values);
  }
  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    //폼 공급자는 유효성 검사로직을 포함하지 않고 validate 프로퍼티로 전달된 콜백함수를 실행하여 유효성 오류 결과값만을 저장합니다.
    this.setState({ errors });
    //유효성 검증의 오류 메시지를 컨텍스트의 error에 저장합니다.
  }
  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          //컨텍스트 데이터
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
          submit: this.onSubmit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
