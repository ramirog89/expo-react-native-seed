import React from "react";
import renderer from "react-test-renderer";

import Login from "./Login";

describe("<Login />", () => {
  it("has 1 child", () => {
    const rendered = renderer.create(<Login />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
