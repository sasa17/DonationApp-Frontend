import React, { Component } from "react";

// NativeBase Components
import {
  Spinner,
  CardItem,
  Container,
  Text,
  Header,
  Card,
  Content
} from "native-base";
import { Image } from "react-native";
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
import { observer } from "mobx-react";
import LogoutButton from "../Buttons/LogoutButton";
import DonationCard from "./DonationCard";
import styles from "./styles";

class Profile extends Component {
  componentDidMount() {
    if (authStore.user) profileStore.fetchProfileData();
  }
  render() {
    if (profileStore.loading) return <Spinner />;
    const donations = profileStore.profile.past_donations
      .map(past_donation => (
        <DonationCard past_donation={past_donation} key={past_donation.id} />
      ))
      .reverse();
    return (
      <Container style={styles.authContainer}>
        <Content>
          <Header transparent></Header>
        </Content>
        <Text style={styles.username}>
          {profileStore.profile.username}'s Profile
        </Text>
        <Card>
          <CardItem>
            <Text style={styles.subusername}>
              Name: {profileStore.profile.first_name}{" "}
              {profileStore.profile.last_name}
            </Text>
          </CardItem>
          <CardItem>
            <Text style={styles.subusername}>
              Email: {profileStore.profile.email}
            </Text>
          </CardItem>
        </Card>
        <Content>
          <Header transparent>
            <Text style={styles.username}>Donation History</Text>
          </Header>
          {donations}
        </Content>
        <LogoutButton />
      </Container>
    );
  }
}
export default observer(Profile);
