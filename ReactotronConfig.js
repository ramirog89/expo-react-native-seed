import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import getEnvVars from "./environment";

const { EXPO_SERVER } = getEnvVars();

export default Reactotron.configure({ lan: EXPO_SERVER }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect(); // let's connect!
