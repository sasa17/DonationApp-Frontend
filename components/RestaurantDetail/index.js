import React, { Component } from "react";
import { observer } from "mobx-react";

// Style Components
import { Content, Spinner, Text, Card, CardItem } from "native-base";
import styles from "./styles";

// Stores
import menuStore from "../../stores/menuStore";

// Components
import MenuItem from "./MenuItem";
import AuthButton from "../Buttons/AuthButton";

class RestaurantDetail extends Component {
  componentDidMount(restaurantID) {
    restaurantID = this.props.navigation.getParam("restaurantID", 1);
    menuStore.fetchAllMenuItems(restaurantID);
  }

  render() {
    if (menuStore.loading) return <Spinner />;
    const menuList = menuStore.menu.map(
      (menu) =>
        menu.available_qty != 0 && <MenuItem menu={menu} key={menu.id} />
    );
    return (
      <Content>
        {menuList}
        <Card style={styles.card}>
          <CardItem style={styles.total_card}>
            <Text style={styles.newText}>
              Total:{" "}
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "KWD",
              }).format(menuStore.total)}
            </Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

RestaurantDetail.navigationOptions = {
  title: "Restaurant Detail",
  headerRight: <AuthButton />,
};

export default observer(RestaurantDetail);
