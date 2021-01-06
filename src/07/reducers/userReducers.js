import {SET_USER} from '../actions/userActions';

export default function reducer(state={}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      return { ...state, ...payload };
      //payload가 객체로 반환되기 때문에 전개연산자를 사용하여 이전값과 새값을 병합함.
    }
    default:
      return state;
  }
}
