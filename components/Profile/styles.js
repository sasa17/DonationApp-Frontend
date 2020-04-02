import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "darkseagreen",
    marginTop: 30
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    backgroundColor: "honeydew"
  },
  authOther: {
    color: "darkseagreen",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "darkseagreen",
    borderBottomColor: "darkseagreen",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "darkseagreen",
    fontSize: 22,
    marginBottom: 20,
    borderBottomColor: "darkseagreen"
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FF6347",
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "darkseagreen",
    fontSize: 18
  },
  username: {
    color: "darkseagreen",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10
  },
  subusername: {
    color: "darkseagreen",
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 10
  }
});

export default styles;
