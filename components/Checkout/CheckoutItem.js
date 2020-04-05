import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const CheckoutItem = ({ donation }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.card}>
        <Text style={styles.text}>
          Donation Amount: KD{donation.amount}.000
        </Text>
      </CardItem>
    </Card>
  );
};
export default CheckoutItem;
