import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { ENV } from "./app/constants/environment";

export default Reactotron.configure({ lan: ENV.EXPO_SERVER }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())
  .connect(); // let's connect!
