import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/application";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50
  },
  errorReport: {
    backgroundColor: COLORS.WHITE
  },
  infoReport: {
    backgroundColor: COLORS.WHITE
  }
});
