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
  Icon,
  List,
} from "native-base";

// Style
import styles from "./styles";

const RestaurantItem = ({ restaurant, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Detail", {
      restaurantID: restaurant.id,
      restaurantName: restaurant.name,
    });

  return (
    <ImageBackground
      source={{ uri: restaurant.image }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: restaurant.image }}
                style={styles.thumbnail}
              />
            </Left>
          </CardItem>
          <CardItem style={styles.transparent}>
            <Text style={styles.text}>{restaurant.name}</Text>
          </CardItem>
          <CardItem style={styles.transparent}>
            <Text note style={styles.text}>
              Location: {restaurant.location}
            </Text>
          </CardItem>
          <CardItem style={styles.transparent}>
            <Text note style={styles.text}>
              Description: {restaurant.description}
            </Text>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default withNavigation(RestaurantItem);
