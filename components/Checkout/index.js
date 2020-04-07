import React, { Component } from "react";

// NativeBase Components
import {
  Content,
  List,
  Text,
  Left,
  Right,
  Body,
  Container,
  Card,
  CardItem,
  Button,
} from "native-base";
import { Alert } from "react-native";

import donationStore from "../../stores/donationStore";
import styles from "./styles";
import { observer } from "mobx-react";

class Checkout extends Component {
  render() {
    if (donationStore.loading) return <Spinner />;
    const donation = donationStore.donations.map(
      (checkout_donation) => checkout_donation
    );
    const amount = donation.map((amount) => amount);
    console.log(amount);
    const handleCheckout = () => {
      Alert.alert("Thank you for feeding forward!"),
        donationStore.checkoutDonation(this.props.navigation);
    };
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Text style={styles.newText}>
            Total Amount : KD {donation.amount}.000{" "}
          </Text>
          <Button style={styles.authButton} onPress={handleCheckout}>
            <Text style={styles.authButtonText}>Checkout</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Checkout.navigationOptions = {
  title: "Checkout",
};

export default observer(Checkout);
