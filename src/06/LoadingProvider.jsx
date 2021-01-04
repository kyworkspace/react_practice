import React, { Component } from "react";
import PropTypes from "prop-types";

class LoadingProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
  }

  getChildContext() {
    //소비자는 해당 함수를 통해 loading과 setLoading 함수를 전달받음
    return {
      loading: this.state.loading,
      setLoading: this.setLoading,
    };
  }

  setLoading(loading) {
    this.setState({ loading: true });
  }

  render() {
    return this.props.children;
  }
}

LoadingProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default LoadingProvider;
