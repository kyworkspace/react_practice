import React from "react";
import { storiesOf } from "@storybook/react";

import { PageWithLoadData } from "../05/lifeCycle";

storiesOf("Lifecycle", module).addWithJSX("loadData 예제", () => (
  <PageWithLoadData loadData={() => fetch("/").then(() => "hello")} />
  //fetch 함수를 사용하여 서버데이터 호출, 서버데이터 호출 완료후 문자열 hello 반환하여 loadData()함수의 인자로 전달함
));
