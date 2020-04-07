import React, { Component } from "react";

// NativeBase Components
import { Text, Header, Container, Content, CardItem, Card } from "native-base";
import profileStore from "../../stores/profileStore";
import styles from "./styles";

class DonationDetails extends Component {
  state = {
    donation: this.props.navigation.getParam("id"),
  };
  render() {
    const id = this.props.navigation.getParam("id", 1);
    const donation = profileStore.profile.past_donations.find(
      (donation) => id === donation.id
    );

    return (
      <Container style={styles.authContainer}>
        <Header transparent>
          <Text style={styles.authTitle}>Donation Date: {donation.date}</Text>
        </Header>
        <Content>
          <Text style={styles.profiletext}>
            Donation Amount: KD {donation.amount}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default DonationDetails;
