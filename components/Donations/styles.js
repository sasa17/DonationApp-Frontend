import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "darkgreen",
    marginTop: 30,
  },
  authButtonText: {
    color: "snow",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "snow",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "darkgreen",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "center",
    fontSize: 16,
    marginTop: 15,
    color: "darkgreen",
    borderBottomColor: "darkgreen",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "darkgreen",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "darkgreen",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "darkgreen",
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
