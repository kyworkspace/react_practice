import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const reducer = (state, action) => {
  const { type, payload } = action;
  //구조 분해 할당으로 type,payload 분해
  switch (type) {
    //switch로 액션타입에 맞는 리듀서 작업 실행
    case "SET_LOADING": {
      return {
        ...state,
        loading: payload,
      };
    }
    case "RESET_LOADING": {
      return { ...state, loading: false };
    }
    case "SET_USER": {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};

class ReduxApp extends PureComponent {
  store = createStore(
    reducer,
    { loading: false, name: "두잇 리액트" },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  componentDidMount() {
    this.store.dispatch({
      //리덕스 스토어를 컴포넌트가 출력된 이후 변경하도록 액션 호출 함수(dispatch())를 실행
      type: "SET_LOADING",
      payload: true,
    });
    this.store.dispatch({ type: "RESET_LOADING" });
    this.store.dispatch({
      type: "SET_USER",
      payload: { name: "park", age: 20 },
    });
  }
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp;
