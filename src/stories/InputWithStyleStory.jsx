import React from "react";
import { storiesOf } from "@storybook/react";

import InputWithStyle from "../04/InputWithStyle";

storiesOf("InputWithStyle", module)
  .addWithJSX("기본설정", () => <InputWithStyle name="kyp" />)
  .addWithJSX("label예제", () => <InputWithStyle name="kyp" label="이름" />)
  .addWithJSX("value예제", () => <InputWithStyle name="kyp" label="이름" />)
  .addWithJSX("errorMessage 예제", () => (
    <InputWithStyle
      name="kyp"
      label="이름"
      errorMassage="이름을 입력해주세요"
    />
  ));
