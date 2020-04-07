import React from "react";
import renderer from "react-test-renderer";

import Home from "./Home";

describe("<Home />", () => {
  it("should render", () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
