import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { observer } from "mobx-react";
import donationStore from "../../stores/donationStore";

class DonationsBar extends Component {
  componentDidMount() {
    this.animation = new Animated.Value(this.props.progress);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.progress != this.props.progress) {
      Animated.timing(this.animation, {
        toValue: this.props.progress,
        duration: this.props.duration,
      }).start;
    }
  }
  render() {
    const widthInterpolated = this.animation.interpolate({
      inputRange: [0, restaurantStore.total],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1, flexDirection: "row", height: 15 }}>
        {/* Bar */}
        <View
          style={{
            flex: 1,
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          {/* Not filled */}
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: "snow" }]}
          />
          {/* Filled */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: "darkgreen",
              duration: this.props.duration,
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              alignItems: "center",
              color: "darkgreen",
            }}
          >
            {this.props.progress}
          </Text>
        </View>
      </View>
    );
  }
}

export default observer(DonationsBar);
