import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authContainer: {
    backgroundColor: "snow",
  },
  authButton: {
    alignItems: "center",
    width: 60,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  headerText: {
    alignItems: "center",
    color: "darkgreen",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    alignItems: "center",
    color: "darkgreen",
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "snow",
    height: "100%",
    width: "100%",
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 100,
    flexDirection: "row",
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row",
  },
  thumbnail: {
    backgroundColor: "snow",
    opacity: 1,
  },
  background: {
    width: null,
    flex: 1,
  },
});
export default styles;
