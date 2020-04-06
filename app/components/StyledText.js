import React from "react";
import PropTypes from "prop-types";

import { Text } from "react-native";

export const MonoText = props => {
  return <Text {...props} style={[props.style]} />;
};

MonoText.propTypes = {
  style: PropTypes.string
};

export default MonoText;
