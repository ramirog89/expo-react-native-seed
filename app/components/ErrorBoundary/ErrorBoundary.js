import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: false,
      info: false
    };
  }

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.errorReport}>
            <Text>Error: {this.state.error.name}</Text>
          </View>
          <View style={styles.infoReport}>
            <Text>Please try again</Text>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired
};
