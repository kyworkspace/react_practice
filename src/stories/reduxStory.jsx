import React from "react";
import { storiesOf } from "@storybook/react";

import ReduxApp01 from "../07/ReduxApp01";
import ReduxApp02 from "../07/ReduxApp02";
import ReduxApp03 from "../07/ReduxApp03";
import AdvReduxApp01 from "../07/AdvReduxApp01";
import AdvReduxApp02 from "../07/AdvReduxApp02";
import AdvReduxApp03 from "../07/AdvReduxApp03";
import AdvReduxApp05 from "../07/AdvReduxApp05";
import AdvReduxApp06 from "../07/AdvReduxApp06";
import AdvReduxApp07 from "../07/AdvReduxApp07";
import AdvReduxApp08 from "../07/AdvReduxApp08";
import SearchFilterReduxApp from "../07/SearchFilterReduxApp";

storiesOf("ReduxApp", module)
  .addWithJSX("기본 설정", () => <ReduxApp01 />)
  .addWithJSX("기본 액션 호출", () => <ReduxApp02 />)
  .addWithJSX("기본 리듀서 구현", () => <ReduxApp03 />)
  .addWithJSX("다중 리듀서 구현", () => <AdvReduxApp01 />)
  .addWithJSX("다중 액션 구현", () => <AdvReduxApp02 />)
  .addWithJSX("기본 배열 구현", () => <AdvReduxApp03 />)
  .addWithJSX("그래프 DB 수정액션 ", () => <AdvReduxApp05 />)
  .addWithJSX("데이터 컴포넌트 예제 ", () => <AdvReduxApp06 />)
  .addWithJSX("데이터 컴포넌트 액션 예제 ", () => <AdvReduxApp08 />)
  .addWithJSX("검색 항목 예제 ", () => <SearchFilterReduxApp />);
