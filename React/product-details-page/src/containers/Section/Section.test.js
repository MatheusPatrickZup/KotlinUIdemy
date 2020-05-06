import React from "react";
import { shallow } from "enzyme";
import Section from "./Section";
import Photo from "../../components/Photo/Photo";
import ProductPanel from "../ProductPanel/ProductPanel";
import ProductData from "../../components/ProductData/ProductData";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Section productData={ProductData} />);

  expect(wrapper.find(Photo).length).toBe(1);
  expect(wrapper.find(ProductPanel).length).toBe(1);
});