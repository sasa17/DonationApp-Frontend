import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Constants from "expo-constants";
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
console.log("don", donationStore.total)
const Bar2 = () => {
  let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(donationStore.total);
  useInterval(() => {
    // update progress until 100
    if (progress < restaurantStore.total) {
      setProgress(progress);
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
    outputRange: ["0%", `${restaurantStore.total}%`],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Text>Loading…..</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#8BED4F", width },
          ]}
        />
      </View>
      <Text>{`${progress}`}</Text>
    </View>
  );
};

export default Bar2;

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: "row",
    height: 20,
    width: "100%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
