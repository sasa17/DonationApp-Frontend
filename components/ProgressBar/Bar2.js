import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Constants from "expo-constants";
import restaurantStore from "../../stores/restaurantStore";
import donationStore from "../../stores/donationStore";
import { observer } from "mobx-react";

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

const Bar2 = () => {
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
        <Text
          style={{
            textAlign: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {`${progress}`}
        </Text>
      </View>
      <Text style={{ color: "darkgreen", fontWeight: "bold" }}>
        KD {restaurantStore.total}
      </Text>
    </View>
  );
};

export default observer(Bar2);

const styles = StyleSheet.create({
  progressBar: {
    alignItems: "center",
    flexDirection: "row",
    height: 20,
    width: "90%",
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
