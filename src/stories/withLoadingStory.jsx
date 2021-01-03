import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";
import Text from "../04/Text";
import withLoading from "../05/withLoading";

const ButtonWithHoC = withLoading("로딩중입니다.")(Text);
const TextWithHoc = withLoading(<Button disabled>로딩중...</Button>)(Button);

storiesOf("withLoading", module)
  .addWithJSX("기본 설정", () => (
    <div>
      <ButtonWithHoC>안녕하세요</ButtonWithHoC>
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX("withLoading 예제", () => (
    <div>
      <ButtonWithHoC isLoading>안녕하세요</ButtonWithHoC>
      <TextWithHoc isLoading>안녕하세요</TextWithHoc>
    </div>
  ));
