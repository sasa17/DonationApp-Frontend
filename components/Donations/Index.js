import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// Styling Components
import { TextInput, Alert } from "react-native";
import { Text, Card, CardItem, Left, Right, Button, Body } from "native-base";
import styles from "./styles";

// Stores
import authStore from "../../stores/authStore";
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";

class Donation extends Component {
  state = {
    amount: "",
  };

  handlePress = async () => {
    if (!authStore.user) {
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
    } else if (
      donationStore.total + Number(this.state.amount) >
      restaurantStore.total
    ) {
      Alert.alert("Donations required achieved!", "Try again tomorrow", [
        {
          text: "Thank you for feeding forward!",
          onPress: () => this.props.navigation.navigate("List"),
        },
      ]);
    } else {
      {
        await donationStore.addDonation(this.state, this.props.navigation);
        this.setState({ amount: "" });
      }
    }
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
              value={this.state.amount}
              onChangeText={(value) => this.setState({ amount: value })}
            />
          </Body>
          <Right>
            <Button
              style={{ backgroundColor: "darkgreen" }}
              onPress={this.handlePress}
            >
              <Text style={{ color: "snow", fontWeight: "bold" }}>Donate</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(observer(Donation));
