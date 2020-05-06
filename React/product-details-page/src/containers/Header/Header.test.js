import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import Logo from "../../components/Logo/Logo";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Header/>);

  expect(wrapper.find(Logo).length).toBe(1);
});