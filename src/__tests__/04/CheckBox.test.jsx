import React from "react";
import { shallow } from "enzyme";

import CheckBox from "../../04/CheckBox";

describe("<CheckBox>", () => {
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
    expect(errorHtml).toContain(errorMessage);
    //HTML에 오류 메세지가 포함되었는지 검증
  });

  it("calls back onChange on clicked", () => {
    const changeStub = jest.fn(); //콜백함수 검증
    expect(changeStub).toHaveBeenCalledTimes(0);
    const input = shallow(
      <CheckBox name="test_name" onChange={changeStub}>
        테스트
      </CheckBox>
    )
      .dive()
      .find("input");
    expect(input).toHaveLength(1);
    input.simulate("click", { target: { checked: true } });
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith("test_name", true);
    input.simulate("click", { target: { checked: false } });
    expect(changeStub).toHaveBeenCalledWith("test_name", false);
  });
});
