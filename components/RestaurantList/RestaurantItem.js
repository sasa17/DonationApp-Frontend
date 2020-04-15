import React from "react";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";

// Style Components
import {
  ListItem,
  Card,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
} from "native-base";
import { View } from "react-native";
import styles from "./styles";

const RestaurantItem = ({ restaurant, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Detail", {
      restaurantID: restaurant.id,
      restaurantName: restaurant.name,
    });

  return (
    <Card>
      <View style={styles.overlay} />
      <ListItem
        transparent
        thumbnail
        button
        onPress={handlePress}
        style={styles.listitem}
      >
        <Left>
          <Thumbnail
            square
            source={{ uri: restaurant.image }}
            resizeMode="contain"
          />
        </Left>
        <Body transparent>
          <Text style={styles.text}>{restaurant.name}</Text>
          <Text
            note
            numberOfLines={2}
            style={{ color: "darkgreen", fontSize: 12 }}
          >
            Location: {restaurant.location}
            {"\n"}
            Description: {restaurant.description}
          </Text>
        </Body>
        <Right>
          <Text
            note
            numberOfLines={2}
            style={{ color: "darkgreen", fontWeight: "bold" }}
          >
            Donation {"\n"}Required:{" "}
          </Text>
          <Text
            note
            numberOfLines={1}
            style={{ color: "darkgreen", fontWeight: "bold" }}
          >
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "KWD",
            }).format(restaurant.menu_total)}
          </Text>
        </Right>
      </ListItem>
    </Card>
  );
};

export default withNavigation(observer(RestaurantItem));
