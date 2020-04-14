import React, { Component } from "react";

// NativeBase Components
import { Content, Text, Container, Button, Spinner, Header } from "native-base";
import { Alert, Image } from "react-native";

import donationStore from "../../stores/donationStore";
import CheckoutItem from "./CheckoutItem";
import styles from "./styles";
import { observer } from "mobx-react";

class Checkout extends Component {
  render() {
    const id = donationStore.donations.id
    const checkoutAmount = donationStore.donations.map((checkout_donation) => (
      <CheckoutItem donation={checkout_donation} key={id} />
    ));
    const handleCheckout = () => {
      Alert.alert("Thank you for feeding forward!"),
        donationStore.checkoutDonation(this.props.navigation);
    };
    return (
      <Container style={styles.authContainer}>
        <Content>
        <Header transparent>
        <Image source={require("../../assets/FeedForward.png")} style={{ width: 150, height: 150 }} ></Image>
        </Header>
        </Content>
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
