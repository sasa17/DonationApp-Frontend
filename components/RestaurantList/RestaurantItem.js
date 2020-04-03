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

const RestaurantItem = ({ restaurant, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Detail", {
      restaurantID: restaurant.id,
      restaurantName: restaurant.name,
      restaurantLocation: restaurant.location,
      restaurantDescription: restaurant.description
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
              <Text style={styles.text}>{restaurant.name}</Text>
              <Text note style={styles.text}>
                Location: {restaurant.location}
              </Text>
              <Text note style={styles.text}>
                Description: {restaurant.description}
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
