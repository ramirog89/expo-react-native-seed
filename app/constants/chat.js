import * as firebase from "firebase";
import getEnvVars from "./environment";

const { FIREBASE } = getEnvVars();

const config = {
  apiKey: FIREBASE.API_KEY,
  authDomain: FIREBASE.AUTH_DOMAIN,
  databaseURL: FIREBASE.DATABASE_URL,
  projectId: FIREBASE.PROJECT_ID,
  storageBucket: FIREBASE.STORAGE_BUCKET,
  messagingSenderId: FIREBASE.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

export default firebase;
