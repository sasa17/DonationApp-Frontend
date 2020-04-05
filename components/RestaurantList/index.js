import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container } from "native-base";

// Stores
import restaurantStore from "../../stores/restaurantStore";

// Component
import RestaurantItem from "./RestaurantItem";
import ProfileButton from "../Buttons/ProfileButton";
import LoginButton from "../Buttons/AuthButton";
import styles from "./styles";
import DonationItem from "../Donations/Index";

const RestaurantList = () => {
  if (restaurantStore.loading) return <Spinner />;
  const RestaurantList = restaurantStore.restaurants.map((restaurant) => (
    <RestaurantItem restaurant={restaurant} key={restaurant.id} />
  ));
  return (
    <Container style={styles.authContainer}>
      <DonationItem />
      <Content>
        <List>{RestaurantList}</List>
      </Content>
    </Container>
  );
};

RestaurantList.navigationOptions = {
  title: "Restaurant List",
  headerRight: <LoginButton />,
  headerLeft: <ProfileButton />,
};

export default observer(RestaurantList);
