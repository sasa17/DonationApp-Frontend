import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "darkseagreen",
    marginTop: 30,
  },
  authButtonText: {
    color: "honeydew",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "honeydew",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "darkseagreen",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 16,
    marginTop: 5,
    color: "darkseagreen",
    borderBottomColor: "darkseagreen",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "darkseagreen",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "darkseagreen",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "darkseagreen",
    fontWeight: "bold",
    fontSize: 18,
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
  },
});

export default styles;
