import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container, Text } from "native-base";

// Stores
import MenuStore from "../../stores/menuStore";

// Component
import MenuItem from "./MenuItem";
import ProfileButton from "../Buttons/ProfileButton";
import LoginButton from "../Buttons/LoginButton";
import styles from "./styles";
import { render } from "react-dom";

class RestaurantDetail extends Component {
  componentDidMount() {
    restaurantID = this.props.navigation.getParam("restaurantID", 1);
    MenuStore.fetchAllMenuItems(restaurantID);
  }

  render() {
    if (MenuStore.loading) return <Spinner />;
    total = 0;
    MenuList = MenuStore.menu.map(menu => (
      <MenuItem menu={menu} key={menu.id} />
    ));
    return (
      <Content>
        {MenuList}
        <Text>Total: {MenuStore.total}</Text>
      </Content>
    );
  }
}

RestaurantDetail.navigationOptions = {
  title: "Restaurant Detail",
  headerRight: <LoginButton />,
  headerLeft: <ProfileButton />
};

export default observer(RestaurantDetail);
