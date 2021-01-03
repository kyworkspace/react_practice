import React from "react";

export default function (loadingMessage = "로딩중") {
  return function withLoading(WrappedComponent) {
    const { displayName, name: ComponentName } = WrappedComponent;
    const wrappedComponentName = displayName || ComponentName;

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;
      //isLoading 프로퍼티는 로딩표시기능을 추가할때만 필요함
      // 즉 확장컴포넌트에는 필요하지 않으므로, 구조할당 표현식으로 프로퍼티에 넣어 확장

      return <WrappedComponent {...otherProps} />;
    }
    WithLoading.displayName = `withLoading(${wrappedComponentName})`;
    //withLoading에 감싸 컴포넌트 이름 표시
    return WithLoading;
  };
}
