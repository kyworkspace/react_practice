import { connect } from "react-redux";
import ActionComponent from "../ActionComponent01";

import { setAge } from "../actions/collectionActions";

const mapDispatchToProps = {
  setAge,
  //setAge: (id, age) => dispatch(setAge(id, age)),
  //SET_AGE 액션타입을 호출하는 setAge()함수를 임포트함
};
//connect 함수는 이 mapDispatchToProps 함수가 반환하는 객체를 재활용 컴포넌트의 프로퍼티로 변환하여 전달함.
//setAge 키가 곧 dispatch()함수를 호출하는 것이기 때문에
//store.dispatch(setAge(id,age))를 실행하게 됨
export default connect(null, mapDispatchToProps)(ActionComponent);
