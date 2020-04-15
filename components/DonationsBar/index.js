import React, { useRef, useState, useEffect } from "react";
import { observer } from "mobx-react";

// Style Components
import { Text, View, StyleSheet, Animated } from "react-native";

// Stores
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";

// setInterval custom hook by Dan Abramov
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const DonationsBar = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(donationStore.total);
  useInterval(() => {
    // update progress until 100
    if (progress < restaurantStore.total) {
      setProgress(donationStore.total);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  const width = animation.current.interpolate({
    inputRange: [0, restaurantStore.total],
    outputRange: ["0%", `100%`],
    extrapolate: "clamp",
  });

  return (
    <View style={{ alignItems: "center" }}>
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
      <Text
        style={{
          alignSelf: "center",
          color: "darkgreen",
          fontWeight: "bold",
        }}
      >
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "KWD",
        }).format(progress)}
      </Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#8BED4F",
              width,
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "darkgreen",
              borderRadius: 10,
            },
          ]}
        />
      </View>
      <Text
        style={{
          alignSelf: "flex-end",
          color: "darkgreen",
          fontWeight: "bold",
        }}
      >
        {new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "KWD",
        }).format(restaurantStore.total)}
      </Text>
    </View>
  );
};

export default observer(DonationsBar);

const styles = StyleSheet.create({
  progressBar: {
    alignItems: "center",
    flexDirection: "row",
    height: 15,
    width: "100%",
    backgroundColor: "snow",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
});
