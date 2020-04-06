import Constants from "expo-constants";
const EXPO_SERVER = "exp://192.168.0.4:19000";

// AUTH0
const auth0ClientId = "jCXs0J4Ca61mfBgmeix3RVv0h2xvvDTi";
const auth0Domain = "https://nexton-testing.auth0.com";

export const AUTH0 = {
    CLIENT_ID: auth0ClientId,
    DOMAIN: auth0Domain
};

const FIREBASE = {
    API_KEY: "AIzaSyDx_7HlIzeO1EUZLzgT0hohmtbNei6hH0o",
    AUTH_DOMAIN: "nexton-react-native-chat.firebaseapp.com",
    DATABASE_URL: "https://nexton-react-native-chat.firebaseio.com",
    PROJECT_ID: "nexton-react-native-chat",
    STORAGE_BUCKET: "",
    MESSAGING_SENDER_ID: "553996027384",
    APP_ID: "1:553996027384:web:37430ad3f0bac88b8a420d"
};

export const ENV = {
    dev: {
        apiUrl: "https://node-starter-v2.herokuapp.com/service",
        amplitudeApiKey: null,
        EXPO_SERVER,
        AUTH0,
        FIREBASE
    },
    staging: {
        apiUrl: "",
        amplitudeApiKey: "",
        EXPO_SERVER,
        AUTH0,
        FIREBASE
    },
    prod: {
        apiUrl: "",
        amplitudeApiKey: "",
        EXPO_SERVER,
        AUTH0,
        FIREBASE
    }
};

const getEnvVars = (env = Constants && Constants.manifest.releaseChannel) => {
    // What is __DEV__ ?
    // This variable is set to true when react-native is running in Dev mode.
    // __DEV__ is true when run locally, but false when published.
    if (__DEV__) {
        return ENV.dev;
    } else if (env === 'staging') {
        return ENV.staging;
    } else if (env === 'prod') {
        return ENV.prod;
    }
};

export default getEnvVars;
