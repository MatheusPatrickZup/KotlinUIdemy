import React from "react";
import { shallow } from "enzyme";
import Logo from "./Logo";

it("should render without throwing an error", function () {
  const wrapper = shallow(<Logo />);

  expect(wrapper.find("img.image-logo").length).toBe(1);
});
