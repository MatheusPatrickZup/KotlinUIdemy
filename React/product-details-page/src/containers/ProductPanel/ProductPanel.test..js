import React from "react";
import { shallow } from "enzyme";
import ProductPanel from "./ProductPanel";
import Title from "../../components/Title/Title";
import Description from "../../components/Description/Description";
import Button from "../../components/Button/Button";
import SelectColor from "../SelectColor/SelectColor";
import Features from "../Features/Features";

it("should render without throwing an error", function () {
  expect(shallow(<ProductPanel />).contains(<Header />)).toBe(true);
  expect(shallow(<ProductPanel />).contains(<Section productData={ProductData}/>)).toBe(true);
});
