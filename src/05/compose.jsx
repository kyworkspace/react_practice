import compose from "recompose/compose";
import withLoading from "./withLoading";
import withState from "recompose/withState";
const withLoadData = withState("isLoading", "setIsLoading", false);

function Component() {
  return "완료";
}

const ComponentWithLoading = withLoading("로딩중")(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

const withLoadDataAndLoading = compose(withLoadData, withLoading("로딩중"));
// compose(withLoadData,withLoading) <== 조합이 올바르지 못한 예
// compose(withLoading('로딩중'),withLoadData) <== 순서가 잘못됨
const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);
// == compose(withLoadData,withLoading('로딩중'))(ComponentWithLoading)
