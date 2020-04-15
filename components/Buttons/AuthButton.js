import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// Style Components
import { Icon, Button, Text } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const LoginButton = ({ navigation }) => {
  const handleLogout = () => authStore.logout(navigation);
  const handleLogin = () => navigation.navigate("Login");
  return authStore.user ? (
    <Button transparent onPress={handleLogout}>
      <Text style={{ color: "darkgreen", alignSelf: "center" }}>Logout</Text>
    </Button>
  ) : (
    <Button transparent onPress={handleLogin}>
      <Text style={{ color: "darkgreen", alignSelf: "center" }}>Login</Text>
      <Icon name="login" type="AntDesign" style={{ color: "darkgreen" }} />
    </Button>
  );
};

export default withNavigation(observer(LoginButton));
