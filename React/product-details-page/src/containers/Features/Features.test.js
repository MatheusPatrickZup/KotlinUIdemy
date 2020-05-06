import React from "react";
import { shallow } from "enzyme";
import Features from "./Features";
import Subtitle from "../../components/Subtitle/Subtitle";
import Label from "../../components/Label/Label";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Features selectFeature={jest.fn()}/>);
  expect(wrapper.find(Subtitle).length).toBe(1);
  expect(wrapper.find(Label).length).toBe(2);
});