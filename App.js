import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Alert } from "react-native";
import { Provider } from "react-redux";

import { store, sagaMiddleware } from "./app/state-mgmt/store";
import rootSaga from "./app/state-mgmt/rootSaga";
import AppNavigator from "./app/navigation/AppNavigator";
import Login from "./app/components/Login";

if (__DEV__) {
  import("./ReactotronConfig").then(() => console.log("Reactotron Configured"));
}

sagaMiddleware.run(rootSaga);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
    margin: 200
  }
});

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [userName, setUserName] = useState("123456");

  const handleLoadingError = error => {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
  };

  const handleFinishLoading = setLoadingComplete => {
    setLoadingComplete(true);
  };

  const loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require("./app/assets/images/nextonlabs-logo.png")]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      })
    ]);
  };

  const handleAuthentication = authenticationResponse => {
    if (authenticationResponse.status === "error") {
      Alert.alert("Authentication error something went wrong");
      return;
    }

    const name = authenticationResponse.data.name || authenticationResponse.data.nickname;
    Alert.alert(`Authentication success! Welcome ${name}`);

    setUserName(name);
  };

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return userName ? (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? <StatusBar barStyle="default"/> : null}
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </View>
    ) : (
      <Login onAuthentication={handleAuthentication} />
    );
  }
};

export default App;
