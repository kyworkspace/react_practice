import React from "react";
import withState from "recompose/withState";
import Button from "../04/Button";

export const withCountState = withState("count", "setCount", 0);
//withState 함수에 숫자를 저장할 state의 이름으로 count
//숫자를 증가시킬 함수 이름으로 setCount
//state의 초기값 0을 인자로 전달하여 익스포트
function Counter({ count, setCount }) {
  //withState함수에서 정의된 count, setCount를 프로퍼티로 받아 사용함
  const increaseCount = () => setCount((value) => value + 1);

  return (
    <div>
      현재 카운트 : {count}
      <Button onPress={increaseCount}>카운드 증가</Button>
    </div>
  );
}

export const CounterWithCountState = withCountState(Counter);
