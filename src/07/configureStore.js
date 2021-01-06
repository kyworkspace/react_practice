//여러개의 리듀서는 combineReducers()함수로 묶어 createStore()인자로 전달하면됨
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//크롬에서 사용하는 확장 프로그램 지원
import reducers from "./reducers";
//웹팩은 자동으로 index 파일을 참조하기 때문에 위와 같이 적어도 참조됨

export default initStates =>
  createStore(combineReducers(reducers), initStates, composeWithDevTools());
