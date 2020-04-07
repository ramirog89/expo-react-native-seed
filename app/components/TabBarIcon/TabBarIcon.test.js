import React from "react";
import renderer from "react-test-renderer";

import TabBarIcon from "./TabBarIcon";

describe("<TabBarIcon />", () => {
  it("should render", () => {
    const rendered = renderer.create(<TabBarIcon />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
