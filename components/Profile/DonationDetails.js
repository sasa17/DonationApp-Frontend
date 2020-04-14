import React, { Component } from "react";

// NativeBase Components
import { Text, Header, Container, Content } from "native-base";
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
        <Image
              style={{ width: 150, height: 150 }}
              source={require("../../assets/FeedForward.png")}
            ></Image>
        </Header>
        <Content>
        <Text style={styles.profiletextTitle}>Donation Date: </Text><Text style={styles.profiletext}>{donation.date}</Text>
          <Text style={styles.profiletextTitle}>
            Donation Amount: </Text><Text style={styles.profiletext}>KD {donation.amount}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default DonationDetails;
