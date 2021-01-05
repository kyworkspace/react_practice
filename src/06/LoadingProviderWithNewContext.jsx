import React from "react";
const { Provider, Consumer } = React.createContext({});
//함수에 빈객체를 인자로 전달하여 공급자와 소비자를 생성함

export { Consumer };
//소비자를 익스포트함. 이 소비자가 공급자의 컨텍스트 데이터를 구독하게됨

export default class LoadingProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }
  render() {
    const context = {
      ...this.state,
      setLoading: this.setLoading,
      //컨텍스트 데이터에 state 값과 함께 콜백 함수 추가함
    };

    return (
      <Provider value={context}>
        {/* 공급자가 공유할 컨텍스트 데이터를 value 프로퍼티에 전달 */}
        {this.props.children}
        {/* 자식 프로퍼티를 출력하여 자식 컴포넌트에 프로퍼티 전달 */}
      </Provider>
    );
  }
}
