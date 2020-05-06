import React from "react";
import { shallow } from "enzyme";
import Label from "./Label";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Label />);

  expect(wrapper.find("span.label-span").length).toBe(1);
});

it("should render label correctly", function () {
  const wrapper = shallow(<Label text={"Teste"} />);

  expect(wrapper.find("span.label-span").text()).toBe("Teste");
  expect(wrapper.find("span.label-span").text()).toBe("Teste");
});

it("shouldnt render selected when prop is not passed", function () {
  const wrapper = shallow(<Label text={"Teste"} />);

  expect(wrapper.find("span.label-selected").length).toBe(0);
});

it("should render selected when prop is passed", function () {
  const wrapper = shallow(<Label text={"Teste"} selected />);

  expect(wrapper.find("span.label-selected").length).toBe(1);
});
