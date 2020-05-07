import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";
import Header from "../Header/Header";
import Section from "../Section/Section";
import ProductData from "../../components/ProductData/ProductData";

it("should render without throwing an error", function () {
  expect(shallow(<Main />).contains(<Header />)).toBe(true);
  expect(
    shallow(<Main />).contains(<Section productData={ProductData} />)
  ).toBe(true);
});
