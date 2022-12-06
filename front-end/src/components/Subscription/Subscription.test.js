import React from "react";
import { shallow } from "enzyme";
import Subscription from "./Subscription";

describe("Subscription", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Subscription />);
    expect(wrapper).toMatchSnapshot();
  });
});
