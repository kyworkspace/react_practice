import React from "react";
import { DEFAULT_KEY, contextPropTypes } from "./LoadingProviderWithKey";

export const loadingPropTypes = contextPropTypes;
//공급자의 컨텍스트데이터 자료형을 가져와 loadingPropTypes에 대입

export default (contextKey = DEFAULT_KEY) => (WrappedComponent) => {
  //공급자의 컨텍스트 데이터 키값을 인자로 전달받는 하이어오더 컴포넌트 제작
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context[contextKey];
    //키값에 맞는 컨텍스트 데이터 구조분해 할당
    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
    );
  }

  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    [contextKey]: contextPropTypes,
  };

  return WithLoadingContext;
};
