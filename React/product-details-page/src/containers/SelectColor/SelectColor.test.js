import React from "react";
import { shallow } from "enzyme";
import SelectColor from "./SelectColor";
import Subtitle from "../../components/Subtitle/Subtitle";
import PhotoPreview from "../../components/PhotoPreview/PhotoPreview";
import ProductData from "../../components/ProductData/ProductData";

it("should render without throwing an error", function () {
  const wrapper = shallow(
    <SelectColor
      selectColor={jest.fn()}
      colorOptions={ProductData.colorOptions}
    />
  );

  expect(wrapper.find(Subtitle).length).toBe(1);
  expect(wrapper.find(PhotoPreview).length).toBe(4);
});
