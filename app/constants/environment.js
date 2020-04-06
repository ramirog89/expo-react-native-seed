const config = require("../config/config.json"); // tslint:disable-line

export const ENV = {
  ENVIRONMENT: config.ENV,
  IS_DEV: config.ENV === "development",
  IS_TEST: config.ENV === "test",
  IS_QA: config.ENV === "qa",
  IS_PROD: config.ENV === "production",
  VERSION: require("../../package.json").version,
  API: {
    URL: config.API_URL,
    MAX_RETRIES: 1,
    RETRY_TIMEOUT: 5000
  },
  AUTH0: {
    CLIENT_ID: config.AUTH0_CLIENT_ID,
    DOMAIN: config.AUTH0_DOMAIN
  },
  EXPO_SERVER: config.EXPO_SERVER
};
