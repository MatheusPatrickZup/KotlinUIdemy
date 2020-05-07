import React from "react";
import { shallow } from "enzyme";
import ProductPanel from "./ProductPanel";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import Button from "../../components/Button/Button";
import SelectColor from "../SelectColor/SelectColor";
import Features from "../Features/Features";
import ProductData from "../../components/ProductData/ProductData";

it("should render without throwing an error", function () {
  const wrapper = shallow(<ProductPanel productData={ProductData} />);

  expect(wrapper.find(Title).length).toBe(1);
  expect(wrapper.find(Description).length).toBe(1);
  expect(wrapper.find(SelectColor).length).toBe(1);
  expect(wrapper.find(Features).length).toBe(1);
  expect(wrapper.find(Features).length).toBe(1);
  expect(wrapper.contains(<Button text={"Buy Now"} />)).toBe(true);
});
