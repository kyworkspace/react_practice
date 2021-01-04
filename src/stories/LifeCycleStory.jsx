import React from "react";
import { storiesOf } from "@storybook/react";

import { PageWithLoadData, PageWithLoadDataAndLoading } from "../05/lifeCycle";

storiesOf("Lifecycle", module)
  .addWithJSX("loadData 예제", () => (
    <PageWithLoadData loadData={() => fetch("/").then(() => "hello")} />
    //fetch 함수를 사용하여 서버데이터 호출, 서버데이터 호출 완료후 문자열 hello 반환하여 loadData()함수의 인자로 전달함
  ))
  .addWithJSX("로딩 메시지 예제", () => (
    <PageWithLoadDataAndLoading
      loadData={() => fetch("/").then(() => " 다중 하이어 오더")}
    />
  ));
