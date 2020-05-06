import React from "react";
import Main from "./Main";
import Header from "../Header/Header";
import Section from "../Section/Section";
import { shallow } from "enzyme";

it("should render without throwing an error", function () {
  expect(shallow(<Main />).contains(<Header />)).toBe(true);
  expect(shallow(<Main />).contains(<Section />)).toBe(true);
});
