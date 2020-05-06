import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";

it("should render without throwing an error", function () {
  const wrapper = shallow(
    <Title/>
  );

  expect(wrapper.find('span.text-title').length).toBe(1);
});

it("should render title correctly", function () {
  const wrapper = shallow(
    <Title text={"Teste"} />
  );

  expect(wrapper.find('span.text-title').text()).toBe("Teste");
});
