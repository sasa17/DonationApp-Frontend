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
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    alignContent: "center",
    alignItems: "stretch",
    textAlign: "center",
    backgroundColor: "snow",
    paddingLeft: 30,
    paddingRight: 30,
  },
  authOther: {
    color: "darkgreen",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "darkgreen",
    borderBottomColor: "darkgreen",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "darkgreen",
    fontSize: 22,
    marginBottom: 20,
    borderBottomColor: "darkgreen",
  },
  profiletext: {
    textAlign: "left",
    color: "darkgreen",
    fontSize: 18,
  },
  username: {
    color: "darkgreen",
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "center",
  },
  subusername: {
    color: "darkgreen",
    fontSize: 18,
    alignSelf: "center",
  },
});

export default styles;
