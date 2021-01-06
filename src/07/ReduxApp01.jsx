import React, { PureComponent } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
//react-redux의 Provider 컴포넌트를 사용하여 스토어 데이터를 하위 컴포넌트에 전달함.

class ReduxApp extends PureComponent {
  store = createStore(
    (state) => state,
    { loading: false, name: "두잇 리액트" },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  //리듀서를 createStore() 함수의 인자로 전달함.
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp;
