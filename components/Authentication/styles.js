import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "teal",
    marginTop: 30,
  },
  authButtonText: {
    color: "mintcream",
    fontWeight: "bold",
    fontSize: 18,
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mintcream",
    paddingRight: 60,
    paddingLeft: 60,
  },
  authOther: {
    color: "teal",
    marginTop: 15,
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "teal",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
  },
  authTitle: {
    color: "teal",
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "teal",
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10,
  },
  profiletext: {
    textAlign: "left",
    color: "teal",
    fontSize: 16,
  },
});

export default styles;
