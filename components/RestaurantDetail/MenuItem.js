import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const MenuItem = ({ menu }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.card}>
        <Text style={styles.text}>Name: {menu.name}</Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Text style={styles.text}>
          Discounted Price: KD {menu.discounted_price}
        </Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Text style={styles.text}>
          Available Quantity: {menu.available_qty}
        </Text>
      </CardItem>
    </Card>
  );
};
export default MenuItem;
