import React, { Component } from "react";
import { observer } from "mobx-react";
import { Avatar } from 'react-native-elements';
// NativeBase Components
import {
  Spinner,
  CardItem,
  Container,
  Text,
  Header,
  Card,
  Content,
} from "native-base";
//Stores
import authStore from "../../stores/authStore";
import profileStore from "../../stores/profileStore";
//Buttons
import LogoutButton from "../Buttons/LogoutButton";
//Components
import DonationCard from "./DonationCard";
//Styles
import styles from "./styles";

class Profile extends Component {
  componentDidMount() {
    if (authStore.user) profileStore.fetchProfileData();
  }
  render() {
    if (profileStore.loading) return <Spinner />;
    const donations = profileStore.profile.past_donations
      .map((past_donation) => (
        <DonationCard past_donation={past_donation} key={past_donation.id} />
      ))
      .reverse();
      const initials = profileStore.profile.first_name[0] + profileStore.profile.last_name[0]
    return (
      <Container style={styles.authContainer}>
        <Avatar size="xlarge" rounded title={initials} activeOpacity={0.7} overlayContainerStyle={{backgroundColor: 'darkgreen'}} containerStyle={{alignSelf:"center", marginTop: 20, marginBottom: 20}} />
          <Text style={styles.username}>
            {profileStore.profile.username}'s Profile
          </Text>
          <Card transparent>
            <CardItem transparent>
              <Text style={styles.subusername}>
                Name: {profileStore.profile.first_name}{" "}
                {profileStore.profile.last_name}
              </Text>
            </CardItem>
            <CardItem transparent>
              <Text style={styles.subusername}>
                Email: {profileStore.profile.email}
              </Text>
            </CardItem>
          </Card>
          <Header transparent>
            <Text style={styles.username}>Donation History</Text>
          </Header>
          <Content>
        <Container style={styles.authContainer}>
          {donations}
        </Container>
        </Content>
        <LogoutButton/>
      </Container>
    );
  }
}
export default observer(Profile);
