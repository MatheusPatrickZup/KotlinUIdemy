import React from "react";
import { shallow } from "enzyme";
import PhotoPreview from "./PhotoPreview";

it("should render without throwing an error", function () {
  const wrapper = shallow(<PhotoPreview selectColor={jest.fn()} id={1} />);

  expect(wrapper.find("div.photo-preview").length).toBe(1);
  expect(wrapper.find("img.photo-preview-image").length).toBe(1);
});

it("shouldnt render selected when different color is selected", function () {
  const wrapper = shallow(
    <PhotoPreview selectColor={jest.fn()} id={1} selectedColor={2} />
  );

  expect(wrapper.find("div.photo-preview-selected").length).toBe(0);
});

it("should render selected when same color is selected", function () {
  const wrapper = shallow(
    <PhotoPreview selectColor={jest.fn()} id={1} selectedColor={1} />
  );

  expect(wrapper.find("div.photo-preview-selected").length).toBe(1);
});
