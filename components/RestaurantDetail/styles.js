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
    fontSize: 16,
    fontWeight: "bold",
    opacity: 1,
  },
  text: {
    alignItems: "center",
    color: "darkgreen",
    fontSize: 16,
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
    height: 180,
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
  newText: {
    color: "darkgreen",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 18,
    alignContent: "center"
  },
  card: {
    backgroundColor: "transparent",
  },
  total_card: {
    backgroundColor: "transparent",
    alignSelf: "center"
  },
});
export default styles;
