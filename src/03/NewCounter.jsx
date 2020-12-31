import React, { Component } from "react";

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      // 프로퍼티에서 전달된 count 값을 보관한다.
      count,
      newCount:
        count === state.count //상위 프로퍼티에서 넘어온 카운트 ==> 처음에는 변동없음,
          ? //프로퍼티가 변경되지 않았다면 기존 state값으로 설정한다.
            state.newCount
          : //프로퍼티가 변경되었다면 변경된 프로퍼티값으로 설정한다.
            //값을 리셋시키는 버튼을 눌렀을 경우 상위 프로퍼티에서 변동이 있었기 때문에 넘어온 카운트 값으로 바꿈
            count,
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1,
    }));
  }

  render() {
    return (
      <div>
        카운트 : {this.state.newCount}
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default NewCounter;
