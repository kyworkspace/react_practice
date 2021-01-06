import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { setCollection, setAge } from "./actions/collectionActions";

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: "Jhon", age: 20 },
        { id: 2, name: "Park", age: 35 },
      ])
    );

    this.store.dispatch(setAge(2, 55));
    //id가 2인 사람의 age를 55로
  }
  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default AdvReduxApp;
