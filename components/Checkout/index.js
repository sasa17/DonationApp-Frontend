import React, { Component } from "react";

// NativeBase Components
import { Content, Text, Container, Button, Spinner } from "native-base";
import { Alert } from "react-native";

import donationStore from "../../stores/donationStore";
import CheckoutItem from "./CheckoutItem";
import styles from "./styles";
import { observer } from "mobx-react";

class Checkout extends Component {
  render() {
    if (donationStore.loading) return <Spinner />;
    const checkoutAmount = donationStore.donations.map((checkout_donation) => (
      <CheckoutItem donation={checkout_donation} key={checkout_donation.id} />
    ));
    const handleCheckout = () => {
      Alert.alert("Thank you for feeding forward!"),
        donationStore.checkoutDonation(this.props.navigation);
    };
    return (
      <Container style={styles.authContainer}>
        <Content>
          {checkoutAmount}
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
