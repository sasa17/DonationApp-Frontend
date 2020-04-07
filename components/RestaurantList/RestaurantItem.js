import React from "react";
import { withNavigation } from "react-navigation";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
} from "native-base";

// Style
import styles from "./styles";

// Stores
import menuStore from "../../stores/menuStore";
import { observer } from "mobx-react";

const RestaurantItem = ({ restaurant, navigation }) => {
  const handlePress = () =>
    navigation.navigate("Detail", {
      restaurantID: restaurant.id,
      restaurantName: restaurant.name,
    });

  return (
    // <ImageBackground
    //   source={{ uri: restaurant.image }}
    //   style={styles.background}
    // >
    <>
      {/* <View style={styles.overlay} /> */}
      <ListItem thumbnail button onPress={handlePress} style={styles.listitem}>
        {/* <Card style={styles.transparent}>
          <CardItem style={styles.transparent}> */}
        <Left>
          <Thumbnail
            square
            source={{ uri: restaurant.image }}
            resizeMode="contain"
            // style={styles.thumbnail}
          />
        </Left>
        <Body>
          <Text style={styles.text}>{restaurant.name}</Text>
          <Text note numberOfLines={1} style={{ color: "darkseagreen" }}>
            Location: {restaurant.location}
          </Text>
          <Text
            note
            numberOfLines={1}
            style={{ color: "darkseagreen", fontSize: "12" }}
          >
            Description: {restaurant.description}
          </Text>
        </Body>
        <Right>
          <Text note numberOfLines={2} style={{ color: "darkseagreen" }}>
            Total Required: KD {menuStore.total}
          </Text>
        </Right>
        {/* </CardItem>
        </Card> */}
      </ListItem>
      {/* </ImageBackground> */}
    </>
  );
};

export default withNavigation(observer(RestaurantItem));
