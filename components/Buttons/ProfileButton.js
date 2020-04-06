import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import authStore from "../../stores/authStore";

const ProfileButton = ({ navigation }) => {
  const handleProfile = () => navigation.navigate("Profile");
  return (
    authStore.user && (
      <Button transparent>
        <Icon
          name="user"
          type="AntDesign"
          style={{ color: "darkseagreen" }}
          onPress={handleProfile}
        />
      </Button>
    )
  );
};

export default withNavigation(observer(ProfileButton));
