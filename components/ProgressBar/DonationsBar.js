import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

class DonationsBar extends Component {
  UNSAFE_componentWillMount() {
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
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
      extrapolate: "clamp",
    });
    return (
      <View style={{ flex: 1, flexDirection: "row", height: 20 }}>
        {/* Bar */}
        <View
          style={{
            flex: 1,
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 2,
          }}
        >
          {/* Not filled */}
          <View
            style={[StyleSheet.absoluteFill, { backgroundColor: "honeydew" }]}
          />
          {/* Filled */}
          <Animated.View
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: widthInterpolated,
              backgroundColor: "darkseagreen",
              duration: this.props.duration,
            }}
          />
          <Text
            style={{
              textAlign: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {this.props.progress}
          </Text>
        </View>
      </View>
    );
  }
}

export default DonationsBar;
