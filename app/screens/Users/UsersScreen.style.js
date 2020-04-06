import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/application";

const styles = StyleSheet.create({
  head: {
    height: 40,
    backgroundColor: COLORS.GREY_CUSTOM
  },
  text: {
    margin: 6,
    textAlign: "left"
  },
  row: {
    flexDirection: "row",
    backgroundColor: COLORS.WHITE
  },
  btn: {
    width: 58,
    height: 18,
    borderRadius: 2,
    backgroundColor: COLORS.WHITE
  },
  btnText: {
    textAlign: "center",
    color: COLORS.BLACK
  },
  btnTouch: {
    width: 30
  },
  viewContainer: {
    paddingLeft: 10
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  tableBorder: {
    borderColor: COLORS.DEFAULT_BACKGROUND
  },
  createFAB: {
    backgroundColor: COLORS.BLUE_NOTICE,
    fontSize: 40
  }
});

export default styles;
