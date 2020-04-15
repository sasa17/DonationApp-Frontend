import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Left } from "native-base";
import styles from "./styles";

const MenuItem = ({ menu }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.total_card}>
        <Text style={styles.headerText}>Meal:</Text>
      </CardItem>
      <CardItem style={styles.total_card}>
        <Text style={styles.text}>{menu.name}</Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Left>
          <Text note style={styles.noteTitle}>
            Discounted Price:
          </Text>
          <Text note style={styles.note}>
            {new Intl.NumberFormat("en-IN", {
              style: "currency",
              currency: "KWD",
            }).format(menu.discounted_price)}
          </Text>
        </Left>

        <Text note style={styles.noteTitle}>
          Available Quantity: {""}
        </Text>
        <Text
          note
          style={{ color: "darkgreen", fontSize: 14, fontWeight: "400" }}
        >
          {menu.available_qty}
        </Text>
      </CardItem>
    </Card>
  );
};
export default MenuItem;
