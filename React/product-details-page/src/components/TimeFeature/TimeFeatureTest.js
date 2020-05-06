import React from "react";
import { shallow } from "enzyme";
import TimeFeature from "./TimeFeature";

it("should render without throwing an error", function () {
  const wrapper = shallow(
    <TimeFeature/>
  );

  let date = new Date();
  let hours = date.getHours();
  let minutes = String(date.getMinutes()).padStart(2, "0");

  expect(wrapper.find('span.time-span').length).toBe(1);
  expect(wrapper.find('span.time-span').text).toBe(hours + ":" + minutes);
});