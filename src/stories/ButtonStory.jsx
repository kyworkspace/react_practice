import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../04/Button";

storiesOf("Button", module)
  .addWithJSX("기본 설정", () => <Button>안녕하세요</Button>)
  .addWithJSX("large 예제", () => <Button large>Large</Button>)
  .addWithJSX("xlarge 예제", () => <Button xlarge>XLarge</Button>)
  .addWithJSX("small 예제", () => <Button small>small</Button>)
  .addWithJSX("xsmall 예제", () => <Button xsmall>xsmall</Button>)
  .addWithJSX("primary 예제", () => <Button primary>primary</Button>)
  .addWithJSX("secondary 예제", () => <Button secondary>secondary</Button>)
  .addWithJSX("primary, large 예제", () => (
    <Button primary large>
      Large
    </Button>
  ));
