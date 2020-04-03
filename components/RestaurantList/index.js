import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";

// Stores
import RestaurantStore from "../../stores/restaurantStore";

// Component
import RestaurantItem from "./RestaurantItem";
import ProfileButton from "../Buttons/ProfileButton";
import styles from "./styles";

const RestaurantList = () => {
  if (RestaurantStore.loading) return <Spinner />;
  const RestaurantsList = RestaurantStore.restaurants.map(restaurant => (
    <RestaurantItem restaurant={restaurant} key={restaurant.id} />
  ));
  return (
    <Content style={styles.authContainer}>
      <List>{RestaurantsList}</List>
    </Content>
  );
};

RestaurantList.navigationOptions = {
  title: "Restaurant List",
  headerLeft: <ProfileButton />
};

export default observer(RestaurantList);
