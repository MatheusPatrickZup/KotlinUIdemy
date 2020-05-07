import React from "react";
import { shallow } from "enzyme";
import Photo from "./Photo";
import TimeFeature from "../TimeFeature/TimeFeature";
import HeartRateFeature from "../HeartRateFeature/HeartRateFeature";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Photo />);

  expect(wrapper.find("div.photo-container").length).toBe(1);
  expect(wrapper.find("img.photo-image").length).toBe(1);
});

it("should render correct feature: time", function () {
  const wrapper = shallow(<Photo selectedFeature="time" />);

  expect(wrapper.find(TimeFeature).length).toBe(1);
  expect(wrapper.find(HeartRateFeature).length).toBe(0);
});

it("should render correct feature: heart-rate", function () {
  const wrapper = shallow(<Photo selectedFeature="heart-rate" />);

  expect(wrapper.find(TimeFeature).length).toBe(0);
  expect(wrapper.find(HeartRateFeature).length).toBe(1);
});
