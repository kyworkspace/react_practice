import React, { Component } from "react";
import PropTypes from "prop-types";

export const DEFAULT_KEY = "defaultLoadingKey";
//공급자의 기본키값 정보 공유

export const contextPropTypes = {
  //공급자에 정의된 컨텍스트 데이터의 자료형 공유
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default (contextKey = DEFAULT_KEY) => {
  //컨텍스트 데이터의 기본키값 정함
  class LoadingProvider extends Component {
    constructor(props) {
      super(props);

      this.state = { loading: false };
      this.setLoading = this.setLoading.bind(this);
    }

    getChildContext() {
      return {
        [contextKey]: {
          //컨텍스트키에 해당하는 로딩상태벙보 반환
          loading: this.state.loading,
          setLoading: this.setLoading,
        },
      };
    }

    setLoading(loading) {
      this.setState({ loading });
    }

    render() {
      return this.props.children;
    }
  }

  LoadingProvider.childContextTypes = {
    [contextKey]: contextPropTypes,
  };

  return LoadingProvider;
};
