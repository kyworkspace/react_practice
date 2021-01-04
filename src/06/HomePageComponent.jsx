import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
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
  constructor(props) {
    super(props);

    this.state = { loading: false };
    this.setLoading = this.setLoading.bind(this);
    //소비자에 해당 함수를 전달하여 데이터를 변경할 예정임.그렇기 때문에 바인딩 해줘야함
    this.toggleLoading = this.toggleLoading.bind(this);
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

  toggleLoading() {
    this.setState(({ loading }) => ({ loading: !loading }));
  }

  render() {
    return (
      <div>
        <TableComponent />
        <Button onPress={this.toggleLoading}>상태변경</Button>
      </div>
    );
  }
}
HomePageComponent.childContextTypes = {
  //컨텍스트 자료형 정의
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageComponent;
