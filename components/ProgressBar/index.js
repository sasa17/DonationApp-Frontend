import React, { Component } from "react";
import { View, Text, Spinner } from "react-native";
import DonationsBar from "./DonationsBar";
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";
import { observer } from "mobx-react";

class Bar extends Component {
  state = {
    progress: 10,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        progress: state.progress,
      }));
    }, restaurantStore.total);
  }
  render() {
    return (
      <View alignItems="center">
        <Text
          style={{
            fontSize: 18,
            marginBottom: 15,
            marginTop: 15,
            color: "darkgreen",
            fontWeight: "bold",
          }}
        >
          Donation progress:
        </Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <DonationsBar row progress={this.state.progress} duration={100} />
          <Text style={{ color: "darkgreen", fontWeight: "bold" }}>
            KD {restaurantStore.total}
          </Text>
        </View>
      </View>
    );
  }
}

export default observer(Bar);
