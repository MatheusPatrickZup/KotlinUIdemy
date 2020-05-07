import React from "react";
import { shallow } from "enzyme";
import HeartRateFeature from "./HeartRateFeature";

beforeEach(() => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 1;
  global.Math = mockMath;
});

it("should render without throwing an error", function () {
  const wrapper = shallow(<HeartRateFeature />);

  expect(wrapper.find("span.heart-rate-span").length).toBe(1);
  expect(wrapper.find("span.heart-rate-span").text()).toBe(
    (60 + 1 * (100 - 60)).toFixed(0)
  );
});
