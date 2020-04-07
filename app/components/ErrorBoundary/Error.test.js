/** eslint-disable */
import React from "react";
import { View, Text } from "react-native";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import ErrorBoundary from "./ErrorBoundary";

class HandGranade extends React.Component {
  // eslint-disable-next-line react/require-render-return
  render() {
    throw (<Text>BOOOM!</Text>); // eslint-disable-line no-throw-literal
  }
}

describe("<ErrorBoundary />", () => {
  let Component;

  it("should render childs normally", () => {
    const rendered = renderer
      .create(
        <ErrorBoundary>
          <View>
            <Text>Hi</Text>
          </View>
        </ErrorBoundary>
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });

  it("should stop propagation of an error on render", () => {
    Component = mount(
      <ErrorBoundary>
        <HandGranade />
      </ErrorBoundary>
    );
    expect(Component.text()).toEqual("Error: Please try again");
  });
});
