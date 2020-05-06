import React from "react";
import { shallow } from "enzyme";
import Description from "./Description";

it("should render without throwing an error", function () {
  const wrapper = shallow(
    <Description/>
  );

  expect(wrapper.find('span.text-description').length).toBe(1);
});

it("should render description correctly", function () {
  const wrapper = shallow(
    <Description text={"Teste"} />
  );

  expect(wrapper.find('span.text-description').text()).toBe("Teste");
});