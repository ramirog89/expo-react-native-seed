import * as WebBrowser from "expo-web-browser";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import commonStyles from "../styles";

const HomeScreen = () => {
  const handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://github.com/nexton-labs/react-native-starter"
    );
  };

  return (
    <View style={commonStyles.containerMain}>
      <View style={commonStyles.welcomeContainer}>
        <Image
          source={
            __DEV__
              ? require("../assets/images/nextonlabs-logo.png")
              : require("../assets/images/nextonlabs-logo.png")
          }
          style={commonStyles.welcomeImage}
        />
      </View>
      <View style={commonStyles.mainContainerTitle}>
        <Text style={commonStyles.getStartedText}>React Native Starter</Text>
      </View>
      <View style={commonStyles.helpContainer}>
        <TouchableOpacity
          onPress={handleHelpPress}
          style={commonStyles.helpLink}
        >
          <Text style={commonStyles.helpLinkText}>Github repo!</Text>
        </TouchableOpacity>
      </View>
      <View style={commonStyles.bottomView}>
        <Text style={commonStyles.tabBarInfoText}>@nextonlabs</Text>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

export default HomeScreen;
