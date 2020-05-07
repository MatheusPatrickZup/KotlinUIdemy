import React from "react";
import { shallow } from "enzyme";
import Subtitle from "./Subtitle";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Subtitle />);

  expect(wrapper.find("span.text-subtitle").length).toBe(1);
});

it("should render subtitle correctly", function () {
  const wrapper = shallow(<Subtitle text={"Teste"} />);

  expect(wrapper.find("span.text-subtitle").text()).toBe("Teste");
});
