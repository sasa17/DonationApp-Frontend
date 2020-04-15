import React from "react";

// Style Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const CheckoutItem = ({ donation }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.card}>
        <Text style={styles.newText}>
          Total Amount :{" "}
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "KWD",
          }).format(donation.amount)}
        </Text>
      </CardItem>
    </Card>
  );
};
export default CheckoutItem;
