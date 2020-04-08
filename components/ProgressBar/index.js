import React, { Component } from "react";
import { View, Text } from "react-native";
import DonationsBar from "./DonationsBar";
import menuStore from "../../stores/menuStore";
import donationStore from "../../stores/donationStore";
import { observer } from "mobx-react";

class Bar extends Component {
  state = {
    progress: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        progress:
          state.progress + donationStore.checkout_donations.amount / 100,
      }));
    }, 1000);
  }
  render() {
    return (
      <View alignItems="center">
        <Text
          style={{
            fontSize: 18,
            marginBottom: 20,
            color: "teal",
            fontWeight: "bold",
          }}
        >
          Donation progress:
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <DonationsBar row progress={this.state.progress} duration={500} />
          <Text style={{ color: "teal", fontWeight: "bold" }}>
            {menuStore.total}
          </Text>
        </View>
      </View>
    );
  }
}

export default observer(Bar);
