import React from "react";
import lifecycle from "recompose/lifecycle";
import compose from "recompose/compose";
import withLoading from "./withLoading";

function Page({ content }) {
  //lifeCycle 함수 안의 this.statecontent값을 프로퍼티로 전달함
  return (
    <div>
      페이지 로딩 완료
      {content}
    </div>
  );
}

// export const withLoadData = lifecycle({
//   state: { isLoading: true, content: "" },
//   //state의 초기값을 정의
//   componentDidMount: function () {
//     if (this.props.loadData) {
//       //loadData 프로퍼티에 함수가 할당되지 않으면 오류가 발생,
//       //loadData()함수가 선언된 경우에는 실행되도록 함
//       this.props
//         .loadData()
//         .then((content) => this.setState({ isLoading: false, content }));
//       //로딩이 완료되면 loading을 false로 바꾸고, 결과화면을 content에 저장함
//     }
//   },
// });
export const withLoadData = lifecycle({
  state: { isLoading: true, content: "" },
  componentDidMount: function () {
    if (this.props.loadData) {
      this.props
        .loadData()
        .then((content) => this.setState({ isLoading: false, content }));
    }
  },
});

export const PageWithLoadData = withLoadData(Page);
//lifeCycle 함수로 만든  하이어오더 컴포넌트 생성함수를 Page 컴포넌트에 적용

export const PageWithLoadDataAndLoading = compose(
  withLoadData,
  withLoading("서버요청중")
)(Page);
//compose로 하이어오더 컴포넌트 생성함수를 묶은 다음 Page 컴포넌트에 적용
