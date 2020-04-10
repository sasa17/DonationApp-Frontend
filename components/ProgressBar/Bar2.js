import React, {useRef, useState, useEffect} from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
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
const total_donations = donationStore.checkout_donations.forEach((donation)=>(total += donation.amount))
console.log("total", donationStore.checkout_donations)

const Bar2 = () => {
  let animation = useRef(new Animated.Value());
  const [progress, setProgress] = useState();
  useInterval(() => {
    // update progress until 100
    if(progress < restaurantStore.total) {
      setProgress(progress + donationStore.checkout_donations);
    }
  }, 1000);

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100
    }).start();
  },[progress])

  const width = animation.current.interpolate({
    inputRange: [0, restaurantStore.total],
    outputRange: ["0%", `${restaurantStore.total}%`],
    extrapolate: "clamp"
  })

  return (
    <View>
      <Text style={{ color: "darkgreen", fontWeight: "bold", alignSelf: "center", fontSize: 18, marginTop:10, marginBottom:10 }}>
        Donation Progress
      </Text>
      <View style={styles.progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "darkgreen", width }]}/> 
        <Text style={{ color: "darkgreen", fontWeight: "bold" }}>
          KD {progress}</Text>
      </View>
        <Text style={{ color: "darkgreen", fontWeight: "bold", alignSelf: "flex-end" }}>
          KD {restaurantStore.total}</Text>

    </View>
  );
}

export default observer(Bar2);

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: 'snow',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  }
});