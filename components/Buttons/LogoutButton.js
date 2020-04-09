import React from "react";
import { Button, Text, Row } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

const LogoutButton = ({ navigation }) => {
  return (
    <Button style={{backgroundColor: "darkgreen", alignSelf:"center"}} onPress={() => authStore.logout(navigation)}>
      <Text style={{color: "snow", fontWeight: "bold", alignSelf:"center"}}>Logout</Text>
    </Button>
  );
};

export default withNavigation(observer(LogoutButton));
