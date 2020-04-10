import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, Spinner, Container, Card, Text} from "native-base";

// Stores
import restaurantStore from "../../stores/restaurantStore";

// Component
import RestaurantItem from "./RestaurantItem";
import ProfileButton from "../Buttons/ProfileButton";
import LoginButton from "../Buttons/AuthButton";
import styles from "./styles";
import DonationItem from "../Donations/Index";
import Bar from "../ProgressBar/index";
import Bar2 from "../ProgressBar/Bar2";

const RestaurantList = () => {
  if (restaurantStore.loading) return <Spinner />;
  const RestaurantList = restaurantStore.restaurants.map((restaurant) => (
    <RestaurantItem restaurant={restaurant} key={restaurant.id} />
  ));
  return (
    <Container style={styles.authContainer}>
      <DonationItem />
      <Card>
        <Bar2 />
      </Card>
      <Text style={styles.headerText}>Participating Restaurants</Text>
      <Content>
        <List>{RestaurantList}</List>
      </Content>
    </Container>
  );
};

RestaurantList.navigationOptions = {
  title: "Feed Forward",
  backgroundColor: "snow",
  titleColor: "darkgreen",
  headerRight: <LoginButton />,
  headerLeft: <ProfileButton />,
};

export default observer(RestaurantList);
