import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "../03/Input";

//스토리북 도구에 표시할 스토리의 이름 입력
storiesOf("Input", module)
  .add("기본 설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="kyp" label="이름" />)
  .addWithJSX("onChange 예제", () => (
    <Input name="name" onChange={action("onChange 이벤트 발생")} />
  ));
//'기본 설정' 부분은 스토리북 도구에 표시할 메뉴 이름을 입력
