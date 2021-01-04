import React from "react";
import withStyles, { css } from "../04/withStyles";

export default function (defaultMessage) {
  //오류메세지를 커링함수의 인자로 전달
  return (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
          {/* 에러가 있는 경우에만 표시 */}
        </React.Fragment>
      );
    }
    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    };

    ComponentWithError.displayName = `withError(${wrappedComponentName})`;

    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
