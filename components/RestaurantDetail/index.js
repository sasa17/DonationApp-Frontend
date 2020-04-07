import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Content, Spinner, Text } from "native-base";

// Stores
import menuStore from "../../stores/menuStore";

// Component
import MenuItem from "./MenuItem";
import ProfileButton from "../Buttons/ProfileButton";
import AuthButton from "../Buttons/AuthButton";
import styles from "./styles";

class RestaurantDetail extends Component {
  componentDidMount() {
    restaurantID = this.props.navigation.getParam("restaurantID", 1);
    menuStore.fetchAllMenuItems(restaurantID);
  }

  render() {
    if (menuStore.loading) return <Spinner />;
    total = 0;
    menuList = menuStore.menu.map((menu) => (
      <MenuItem menu={menu} key={menu.id} />
    ));
    return (
      <Content>
        {menuList}
        <Text style={styles.text}>Total: KD {menuStore.total}</Text>
      </Content>
    );
  }
}

RestaurantDetail.navigationOptions = {
  title: "Restaurant Detail",
  headerRight: <AuthButton />,
  headerLeft: <ProfileButton />,
};

export default observer(RestaurantDetail);
