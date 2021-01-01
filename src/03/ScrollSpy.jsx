import React, { Component } from "react";

class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener("scroll", this.checkPosition);
  }
  setRef(ref) {
    this.ref = ref;
  }
  checkPosition() {
    //DOM 객체의 위치가 스크롤 화면 안팎인지 측정하고 있습니다.
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log("enter");
      //자동으로 불러 오는거 만들려면 여기에 코드 추가하면 됨
    } else {
      console.log("exit");
    }
  }
  componentDidMount() {
    this.checkPosition();
  }
  componentWillUnmount() {
    //화면이 바뀌게 되면 이벤트 리스너 제거
    window.removeEventListener("scroll", this.checkPosition);
  }
  render() {
    return <div ref={this.setRef}></div>;
  }
}

export default ScrollSpy;
