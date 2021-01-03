import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Text from "../04/Text";
import withHoC from "../05/withHoC";

const ButtonWithHoC = withHoC(Button);
const TextWithHoc = withHoC(Text);

storiesOf("WithHoc", module)
  .addWithJSX("기본 설정", () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX("large 예제", () => (
    <div>
      <ButtonWithHoC large>안녕하세요</ButtonWithHoC>
      <TextWithHoc large>안녕하세요</TextWithHoc>
    </div>
  ));
