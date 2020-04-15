import React, { Component } from "react";
import { observer } from "mobx-react";

// Style Components
import { List, Content, Spinner, Container, Card, Text } from "native-base";
import styles from "./styles";

// Stores
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";

// Component
import RestaurantItem from "./RestaurantItem";
import DonationItem from "../Donations/Index";
import DonationsBar from "../DonationsBar";

// Buttons
import ProfileButton from "../Buttons/ProfileButton";
import LoginButton from "../Buttons/AuthButton";

class RestaurantList extends Component {
  render() {
    if (restaurantStore.loading) return <Spinner />;
    if (donationStore.loading) return <Spinner />;
    const RestaurantList = restaurantStore.restaurants.map((restaurant) => (
      <RestaurantItem restaurant={restaurant} key={restaurant.id} />
    ));
    return (
      <Container style={styles.authContainer}>
        <DonationItem />
        <Card>
          <DonationsBar />
        </Card>
        <Text style={styles.headerText}>Participating Restaurants</Text>
        <Content>
          <List>{RestaurantList}</List>
        </Content>
      </Container>
    );
  }
}
RestaurantList.navigationOptions = {
  title: "Feed Forward",
  backgroundColor: "snow",
  titleColor: "darkgreen",
  headerRight: <LoginButton />,
  headerLeft: <ProfileButton />,
};

export default observer(RestaurantList);
