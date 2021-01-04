import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../04/InputWithStyle";
import withError from "../05/withError";

const InputWithError = withError("올바르지 못한값")(Input);
// defaultMessage : '올바르지 못한값'
// Input : WrappedComponent

storiesOf("WithError", module)
  .addWithJSX("기본설정", () => <InputWithError name="name" hasError />)
  .addWithJSX("errorMessage 예제", () => (
    <InputWithError name="name" hasError errorMessage="필수항목입니다." />
  ));
