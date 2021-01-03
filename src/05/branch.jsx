import React from "react";
import branch from "recompose/branch";
import Button from "../04/Button";

function isLoading(props) {
  return props.isLoading;
}

function LoadingButton(props) {
  return <Button disabled>로딩 중</Button>;
}
//isLoading이 true이면 LoadingButton 을 아니면 Button을 출력하는 모습

export default branch(isLoading, () => LoadingButton)(Button);
//isLoading 함수가 참값을 반환하면 props.isLoading을,
// 로딩이 완료되면 LoadingButton 컴포넌트를 반환함
