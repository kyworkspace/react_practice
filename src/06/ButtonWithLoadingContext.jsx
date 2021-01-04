import React from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
import withLoadingContext from "./withLoadingContext";

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  //공급자의 데이터를 프로퍼티로 전달 받음
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? "로딩 중" : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  label: PropTypes.string,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default withLoadingContext(ButtonWithLoadingContext);
//Button을 하이어오더 컴포넌트의 인자로 전달하여 소비자 구현
