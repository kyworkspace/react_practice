import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
import LoadingProvider from "./LoadingProvider";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";
//소비자

function RowBComponent() {
  return <Button>버튼</Button>;
}
function RowCComponent() {
  return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
  //소비자 출력
}
function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext>상태변경</ButtonWithLoadingContext>
      </LoadingProvider>
    );
  }
}
HomePageComponent.childContextTypes = {
  //컨텍스트 자료형 정의
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;
