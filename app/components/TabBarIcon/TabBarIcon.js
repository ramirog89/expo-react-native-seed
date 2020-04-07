import React from "react";
import PropTypes from "prop-types";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/application";

const styleTab = {
  marginBottom: -3
};

const TabBarIcon = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={styleTab}
      color={focused ? COLORS.TAB_SELECTED : COLORS.DEFAULT_BACKGROUND}
    />
  );
};

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool
};

export default TabBarIcon;
