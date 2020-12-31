import React, { Component } from "react";

class ForceUpdateExample extends Component {
  constructor(props) {
    super(props);
    //state 정의
    this.loading = true;
    this.formData = "no data";
    this.handleData = this.handleData.bind(this);
    //4초후에 handleData 함수를 호출
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = "new data";
    this.loading = false;
    this.formData = data + this.formData;
    //강제로 화면을 새로고치는 컴포넌트 내장함수
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <span>로딩중 : {String(this.loading)}</span>
        <span>결과 : {this.formData}</span>
      </div>
    );
  }
}

export default ForceUpdateExample;
