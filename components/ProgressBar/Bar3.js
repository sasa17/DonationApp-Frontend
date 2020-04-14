import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Animated } from "react-native";
import { observer } from "mobx-react";

//Stores
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";

class Bar3 extends Component {
  state = {
    progressStatusValue: 0,
  };
  animation = new Animated.Value(0); //initialisation of Animated component to with initial value as the zero for start of the progress bar.

  componentDidMount() {
    this.onAnimation(); //calling onAnimation function with changing the value of the initial progress status value.
  }

  onAnimation = () => {
    this.animation.addListener(() => {
      this.setState({ progressStatusValue: donationStore.total });
    });

    Animated.spring(this.animation, {
      toValue: restaurantStore.total, //value at which it need to reach for end of the progress bar
      // duration: 0,  //duration till the progress bar will continue
    }).start();
  };

  render() {
    return (
      <View>
        <Animated.View style={[progressStyles.innerStyle]} />
        <Animated.Text style={progressStyles.label}>
          <Text>{`${this.state.progressStatusValue}`}</Text>
        </Animated.Text>
      </View>
    );
  }
}
export default observer(Bar3);

//basic styles for creation of progress bar
const progressStyles = StyleSheet.create({
  innerStyle: {
    width: "100%",
    height: 31,
    borderRadius: 16,
    backgroundColor: "darkgreen",
  },
  label: {
    fontSize: 24,
    color: "black",
    position: "absolute",
    zIndex: 1,
    alignSelf: "center",
  },
});
