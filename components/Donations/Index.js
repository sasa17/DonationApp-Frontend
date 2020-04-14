import React, { Component } from "react";
import donationStore from "../../stores/donationStore";
import { observer } from "mobx-react";

// Styling Components
import { TextInput, Alert } from "react-native";
import { Text, Card, CardItem, Left, Right, Button, Body } from "native-base";
import styles from "./styles";
import authStore from "../../stores/authStore";
import { withNavigation } from "react-navigation";

class Donation extends Component {
  state = {
    amount: null,
  };

  handlePress = () => {
    if (authStore.user)
      return donationStore.addDonation(this.state, this.props.navigation);
    else
      Alert.alert("User not found", "Please Login or Register to continue", [
        {
          text: "Login!",
          onPress: () => this.props.navigation.navigate("Login"),
        },
        {
          text: "Register",
          onPress: () => this.props.navigation.navigate("Register"),
        },
      ]);
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Text style={styles.profiletext}>Amount: KD</Text>
          </Left>
          <Body>
            <TextInput
              style={styles.authTextInput}
              placeholder="Donation amount"
              placeholderTextColor="#A6AEC1"
              onChangeText={(value) => this.setState({ amount: value })}
            />
          </Body>
          <Right>
            <Button style ={{backgroundColor:"darkgreen"}} onPress={this.handlePress}>
              <Text style={{ color: "snow", fontWeight: "bold" }}>
                Donate
              </Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(Donation));
