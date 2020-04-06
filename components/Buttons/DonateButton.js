import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Button, Text } from "native-base";
import { Alert } from "react-native";

// Stores
import authStore from "../../stores/authStore";
import donationStore from "../../stores/donationStore";

const DonateButton = ({ navigation }) => {
  const handleDonate = () => {
    if (authStore.user)
      return donationStore.addDonation(this.state, this.navigation);
    else
      Alert.alert("User not found", "Please Login or Register to continue", [
        {
          text: "Login!",
          onPress: () => navigation.navigate("Login"),
        },
        {
          text: "Register",
          onPress: () => navigation.navigate("Register"),
        },
      ]);
  };
  return (
    <Button backgroundColor="darkseagreen" onPress={handleDonate}>
      <Text color="honeydew" fontWeight="bold">
        Donate
      </Text>
    </Button>
  );
};

export default withNavigation(observer(DonateButton));
