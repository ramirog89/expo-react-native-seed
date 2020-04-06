import { AuthSession } from "expo";
import React from "react";
import { Image, Text, View, Button } from "react-native";
import PropTypes from "prop-types";

import jwtDecode from "jwt-decode";
import getEnvVars from "../../environment";
import { toQueryString, nonce } from "../helpers/authHelper";

import commonStyles from "../styles";
import { STATUS } from "../constants/application";

const { AUTH0 } = getEnvVars();

const Login = ({ onAuthentication }) => {
  const handleResponse = response => {
    const authResponse = {};

    if (response.error) {
      authResponse.status = STATUS.ERROR;
    } else {
      // Retrieve the JWT token and decode it
      const jwtToken = response && response.params && response.params.id_token;
      const decoded = jwtDecode(jwtToken);

      // TODO: later We could keep locally token.
      authResponse.status = STATUS.SUCCESS;
      authResponse.data = decoded;
    }

    onAuthentication(authResponse);
  };

  const login = async () => {
    // Retrieve the redirect URL, add this to the callback URL list
    // of your Auth0 application.
    const redirectUrl = AuthSession.getRedirectUrl();
    const response = await AuthSession.startAsync({
      authUrl:
        `${AUTH0.DOMAIN}/authorize` +
        toQueryString({
          client_id: AUTH0.CLIENT_ID,
          response_type: "token id_token",
          scope: "openid profile",
          nonce,
          redirect_uri: redirectUrl
        })
    });

    handleResponse(response);
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
      <View style={commonStyles.getStartedContainer}>
        <Text style={commonStyles.getStartedText}>
          Welcome to React Native Starter
        </Text>
      </View>
      <View>
        <Button rounded onPress={() => login()} title="Log in" />
      </View>
    </View>
  );
};

Login.navigationOptions = {
  header: null
};

Login.propTypes = {
  onAuthentication: PropTypes.func
};

export default Login;
