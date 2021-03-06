import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// Style Components
import { Icon, Button } from "native-base";

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
          style={{ color: "darkgreen" }}
          onPress={handleProfile}
        />
      </Button>
    )
  );
};

export default withNavigation(observer(ProfileButton));
