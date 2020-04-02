import React, { Component } from "react";

// NativeBase Components
import { Text, Header, Container, Content, CardItem, Card } from "native-base";
import profileStore from "../../stores/profileStore";
import styles from "./styles";

class DonationDetails extends Component {
  state = {
    donation: this.props.navigation.getParam("id")
  };
  render() {
    const donation = profileStore.profile.past_donations.map(
      donation => donation
    );

    return (
      <Container style={styles.authContainer}>
        <Header transparent>
          <Text style={styles.authTitle}>Donation Date: {donation.date}</Text>
        </Header>
        <Content>Donation Amount:{donation.amount}</Content>
      </Container>
    );
  }
}

export default DonationDetails;
