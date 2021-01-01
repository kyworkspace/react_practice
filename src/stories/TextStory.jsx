import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../04/Text";

storiesOf("Text", module)
  .addWithJSX("기본 설정", () => <Text>안녕하세요</Text>)
  .addWithJSX("large 예제", () => <Text large>Large</Text>)
  .addWithJSX("xlarge 예제", () => <Text xlarge>XLarge</Text>)
  .addWithJSX("small 예제", () => <Text small>small</Text>)
  .addWithJSX("xsmall 예제", () => <Text xsmall>xsmall</Text>)
  .addWithJSX("primary 예제", () => <Text primary>primary</Text>)
  .addWithJSX("secondary 예제", () => <Text secondary>secondary</Text>)
  .addWithJSX("primary, large 예제", () => (
    <Text primary large>
      Large
    </Text>
  ));
