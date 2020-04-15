import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// Style Components
import styles from "./styles";
import { TextInput, TouchableOpacity, View, Alert } from "react-native";
import { Spinner, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handlePress = async () => {
    await authStore.login(this.state, this.props.navigation);
    if (!authStore.user)
      Alert.alert("User not found", "Incorrect Username/Password.", [
        {
          text: "Try Again!",
          onPress: () => this.props.navigation.navigate("Login"),
        },
        {
          text: "Register",
          onPress: () => this.props.navigation.navigate("Register"),
        },
      ]);
  };

  componentDidMount() {
    if (authStore.user) this.props.navigation.navigate("List");
  }

  render() {
    if (authStore.loading) return <Spinner />;
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Login</Text>
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="darkgreen"
          onChangeText={(value) => this.setState({ username: value })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="darkgreen"
          secureTextEntry={true}
          onChangeText={(value) => this.setState({ password: value })}
        />
        <TouchableOpacity style={styles.authButton} onPress={this.handlePress}>
          <Text style={styles.authButtonText}>Log in</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Register here!
        </Text>
      </View>
    );
  }
}
export default withNavigation(observer(Login));
