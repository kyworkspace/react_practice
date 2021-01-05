import Button from "../04/Button";
import withLoadingContextAndKey, {
  loadingPropTypes,
} from "./withLoadingContextAndKey";
import PropTypes from "prop-types";

function ButtonWithLoadingContext({ children, loading, setLoading }) {
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? "로딩중" : children}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  ...loadingPropTypes,
  //하이어오더 컴포넌트에서 새롭게 추가된 프로퍼티를 함께 할당
  children: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(
  //이중커링구조의 생성함수를 키값 없이 기본공급자와 연결된 컴포넌트 생성
  ButtonWithLoadingContext
);
export const ButtonWithLoading2Context = withLoadingContextAndKey("loading2")(
  //loading2를 키값으로 생성된 공급자와 연결된 버튼 컴포넌트를 생성
  ButtonWithLoadingContext
);
