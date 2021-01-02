import React from "react";

import { shallow } from "enzyme";

import Input from "../../03/Input";

describe("<Input>", () => {
  it("renders without crashing", () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });

  it("has one element", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1); // toEqual 함수는 반환된 객체의 수를 비교
    expect(wrapper).toHaveLength(1); // length값 비교
  });

  describe("contains <input>", () => {
    it("renders one input", () => {
      const wrapper = shallow(<Input name="test_name" />);
      //shallow 함수는 컴포넌트를 출력한 후 컴포넌트를 검사할 수 있는 enzyme객체를 반환
      expect(wrapper.find("input")).toHaveLength(1);
      expect(wrapper.find("label")).toHaveLength(1);
      //find 함수릐 인자로 'input'을 전달하여 출력된 DOM에서 input 엘리먼트를 찾음
      //toHaveLength()함수로 반환된 엘리먼트의 개수를 검증
    });

    it("assigns the prop value and type", () => {
      const expectedValue = "123";
      const wrapper = shallow(<Input name="test_name" value={expectedValue} />);
      expect(wrapper.find("input").prop("value")).toBe(expectedValue);
      //prop함수를 사용하여 value의 프로퍼티값와 컴포넌트에 전달된 값을 검증함
      const { type, value } = wrapper.find("input").props();
      //객체추출식을 사용해 필요한 프로퍼티 항목 추출
      expect(value).toBe(expectedValue);
      expect(type).toBe("text");
      //props에서 추출한 프로퍼티 값을 검증함
      //위에서 한 prop 검증 표현법이 다름
      //prop은 전체 검증
      //props는 프로퍼티 개별로 검증
    });
  });
  //setProps()로 변경된 프로퍼티값 전달하기
  //state를 포함한 상위 컴포넌트를 구성하고,
  //상위 컴포넌트의 state를 변경하여 테스트하려는 컴포넌트의 프로퍼티로 전달하는 등의
  //불필요한 과정을 구현 .. 하지만 enzyme은 setProps 함수를 통한 불필요한 구현 과정 생략

  it("renders errorMessage", () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find(".error")).toHaveLength(0);
    //error스타일을 포함한 오류메시지가 존재하는지 검사
    const expectedErrorMessage = "옳지못한 값이 입력";
    wrapper.setProps({ errorMassage: expectedErrorMessage });
    //errorMassage의 프로퍼티값을 변경함
    expect(wrapper.find("span").prop("className")).toBe("error");
    expect(wrapper.find(".error")).toHaveLength(1);
    //프로퍼티가 추가되었기 때문에 오류메시지 1개가 정상적으로 포함된것을 확인
    expect(wrapper.html()).toContain(expectedErrorMessage);
    //html() 함수를 사용하여 출력된 HTML에서 실제 오유 메시지가 정상적으로 출력되었는지 검증
  });

  //simulate() 함수로 가상의 이벤트 검사하기
  //enzyme은 가상 이벤트를 작동시킬 수 있는 simulate 함수를 제공
  it("calls back onChange on input change", () => {
    const chageStub = jest.fn();
    //jest는 함수(fn())를 제공하여 생성된 함수릐 호출을 감시하는 방법을 제공함
    const wrapper = shallow(<Input name="test_name" onChange={chageStub} />);
    //생성된 감시 함수를 입력 컴포넌트의 onChange 프로퍼티에 할당
    expect(chageStub).not.toHaveBeenCalled();
    //이벤트 재현시점을 기준으로 이벤트 실행이전에는
    //콜백함수가 호출되지 않는 상태를 expect() 함수의 호출검증 메소드 toHaveBeenCalled()로 검증
    const expectedTargetValue = "updated input";
    wrapper
      .find("input")
      .simulate("change", { target: { value: expectedTargetValue } });
    //input 값이 변경되는 이벤트를 재현, target.value에 값이 전달되므로 객체형으로 가상의 입력값 전달
    expect(chageStub).toHaveBeenCalledTimes(1);
    expect(chageStub).toHaveBeenCalledWith("test_name", expectedTargetValue);
    //toHaveBeenCalledTimes,toHaveBeenCalledWith 로 호출 횟수와 호출 인자들을 검사
  });
});
