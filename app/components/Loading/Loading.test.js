import React from "react";
import renderer from "react-test-renderer";

import Loading from "./Loading";

describe("<Loading />", () => {
  it("should render", () => {
    const rendered = renderer.create(<Loading />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
