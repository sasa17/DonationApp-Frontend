import React from "react";
import { StyleSheet } from "react-native";
import AppContainer from "./navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "snow",
    alignItems: "center",
    justifyContent: "center",
  },
});
