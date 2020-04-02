import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View, Alert } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

// Style
import styles from "./styles";

// Stores
import authStore from "../../stores/authStore";

const RestaurantItem = ({ restaurantshop, navigation }) => {
  const state = {
    restaurant: restaurantshop.id,
    quantity: 1
  };
  const handlePress = () =>
    navigation.navigate("Detail", {
      restaurantshopID: restaurantshop.id,
      restaurantshopName: restaurantshop.name,
      restaurantshopPrice: restaurantshop.price
    });

  return (
    <ImageBackground
      source={{ uri: restaurantshop.image }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: restaurantshop.image }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{restaurantshop.name}</Text>
              <Text note style={styles.text}>
                KD {restaurantshop.price}
              </Text>
            </Left>
            <Right>
              <Button onPress={handleAdd} style={styles.authButton}>
                <Icon
                  name="add"
                  type="MaterialIcons"
                  style={{ color: "white" }}
                />
              </Button>
            </Right>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(RestaurantItem);
