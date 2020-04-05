import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const LoginButton = ({ navigation }) => {
  const handleLogout = () => authStore.logout(navigation);
  const handleLogin = () => navigation.navigate("Login");
  return authStore.user ? (
    <Button transparent>
      <Icon
        name="logout"
        type="AntDesign"
        style={{ color: "darkseagreen" }}
        onPress={handleLogout}
      />
    </Button>
  ) : (
    <Button transparent>
      <Icon
        name="login"
        type="AntDesign"
        style={{ color: "darkseagreen" }}
        onPress={handleLogin}
      />
    </Button>
  );
};

export default withNavigation(observer(LoginButton));
