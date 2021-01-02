import React from "react";
import { shallow } from "enzyme";

import CheckBox from "../../04/CheckBox";

describe("<CheckBox/>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<CheckBox name="required">테스트</CheckBox>);
    }).not.toThrow();
  });
  it("displays errorMessage", () => {
    const errorMessage = "오류메세지";
    const errorHtml = shallow(
      <CheckBox name="name" errorMessage={errorMessage}>
        테스트
      </CheckBox>
    )
      .dive()
      .find("span")
      .html();
    expect(errorHtml).toContain(errorHtml);
    //HTML에 오류 메세지가 포함되었는지 검증
  });

  it("calls back onChange on clicked", () => {
    const chageStub = jest.fn(); //콜백함수 검증
    expect(chageStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="test_name" onChange={chageStub}>
        테스트
      </CheckBox>
    )
      .dive()
      .find("input");
    expect(input).toHaveLength(1);
    // ↓ 인자 값 바꿔가며 onChange를 재현
    input.simulate("click", { target: { checked: true } });
    expect(chageStub).toHaveBeenCalledTimes(1);
    expect(chageStub).toHaveBeenCalledWith("required", true);
    input.simulate("click", { target: { checked: false } });
    expect(chageStub).toHaveBeenCalledWith("required", false);
  });
});
