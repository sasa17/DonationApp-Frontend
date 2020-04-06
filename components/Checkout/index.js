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

import donationStore from "../../stores/donationStore";
import CheckoutItem from "./CheckoutItem";
import styles from "./styles";

class Checkout extends Component {
  render() {
    if (donationStore.loading) return <Spinner />;
    // const checkoutList = donationStore.checkout_donations.map(
    //   (checkout_donation) => (
    //     <CheckoutItem item={checkout_donation} key={checkout_donation.id} />
    //   )
    // );
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Text style={styles.newText}>
            Total Amount : KD {donationStore.donations}.000{" "}
          </Text>
          <Button
            style={styles.authButton}
            onPress={() => this.props.navigation.navigate("List")}
          >
            <Text style={styles.authButtonText}>
              Thank you for feeding forward!
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Checkout.navigationOptions = {
  title: "Checkout",
};

export default Checkout;
