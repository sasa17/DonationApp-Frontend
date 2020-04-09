import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Left, Right } from "native-base";
import styles from "./styles";

const MenuItem = ({ menu }) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.total_card}>
        <Text style={styles.headerText}>Meal: </Text>
        <Text style={styles.text}>{menu.name}</Text>
      </CardItem>
      <CardItem style={styles.card}>
        <Left>
        <Text note style={{ color: "darkgreen", fontSize: 12, fontWeight:"bold" }}>
          Discounted Price:
          </Text>
        <Text note style={{ color: "darkgreen", fontSize: 14 }}>
          KD {menu.discounted_price}
        </Text>
        </Left>
       
      <Text note style={{ color: "darkgreen", fontSize: 12, fontWeight: "bold" }}>
        Available Quantity: {""} 
    </Text>
        <Text note style={{ color: "darkgreen", fontSize: 14, fontWeight: "400"}}>
          {menu.available_qty}
        </Text>
        
      </CardItem>
    </Card>
  );
};
export default MenuItem;
