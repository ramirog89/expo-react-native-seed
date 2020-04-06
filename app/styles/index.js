import { Platform, StyleSheet } from "react-native";

import { COLORS } from "../constants/application";

const developmentModeTextColor = "rgba(0,0,0,0.4)";
const codeHighlightTextColor = "rgba(96,100,109, 0.8)";
const codeHighlightContainerBackgroundColor = "rgba(0,0,0,0.05)";
const getStartedTextColor = "rgba(96,100,109, 1)";
const tabBarInfoTextColor = "rgba(96,100,109, 1)";

// TODO: We could review a split atomic for feature. https://thoughtbot.com/blog/structure-for-styling-in-react-native
const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  developmentModeText: {
    marginBottom: 20,
    color: developmentModeTextColor,
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: codeHighlightTextColor
  },
  codeHighlightContainer: {
    backgroundColor: codeHighlightContainerBackgroundColor,
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: getStartedTextColor,
    lineHeight: 24,
    textAlign: "center"
  },
  bottomContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    fontWeight: "bold",
    backgroundColor: COLORS.BOTTOM_ELEMENT_CONTAINER,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center"
  },
  tabBarInfoText: {
    fontSize: 17,
    color: tabBarInfoTextColor,
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 18,
    color: COLORS.LINK,
    fontWeight: "bold"
  },
  inputContainer: {
    margin: 10
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLORS.BORDER,
    padding: 4,
    height: 40,
    fontSize: 24
  },
  formContainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: COLORS.NOTICE
  },
  sectionTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 0,
    fontSize: 24,
    color: COLORS.BLUE_MIDDLE
  },
  dataContainer: {
    margin: 30
  },
  removeButton: {
    borderColor: COLORS.TRANSPARENT,
    borderRadius: 20,
    width: 80,
    height: 24
  },
  itemContainer: {
    marginTop: 4,
    marginBottom: 4
  },
  containerMain: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", // Here is the trick
    bottom: 0, // Here is the trick,
    backgroundColor: COLORS.BOTTOM_ELEMENT_CONTAINER
  },
  viewContainer: {
    flex: 1
  },
  mainContainerTitle: {
    alignItems: "center",
    marginHorizontal: 50
  },
  closeFAB: {
    backgroundColor: COLORS.BLACK,
    fontSize: 40
  },
  checkFAB: {
    backgroundColor: COLORS.GREEN_LIGHT,
    fontSize: 40
  }
});

export default commonStyles;
