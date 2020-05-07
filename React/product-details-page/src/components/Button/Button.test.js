import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Button />);

  expect(wrapper.find("span.button-span").length).toBe(1);
});

it("should render button correctly", function () {
  const wrapper = shallow(<Button text={"Teste"} />);

  expect(wrapper.find("span.button-span").text()).toBe("Teste");
});
