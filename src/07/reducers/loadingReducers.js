import {SET_LOADING,RESET_LOADING} from '../actions/loadingActions';

const initState = false;
//초깃값을 따로 정의 함
export default function reducer(state=initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING: {
      return { ...state, loading: payload };
    }
    case RESET_LOADING: {
      return { ...state, loading: initState };
      //초기화 시키니깐 초기값 전달
    }
    default:
      return state;
  }
}
