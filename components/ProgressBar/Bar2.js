// import React, { useRef, useState, useEffect, Component } from "react";
// import { Text, View, StyleSheet, Animated } from "react-native";
// import Constants from "expo-constants";
// import restaurantStore from "../../stores/restaurantStore";
// import donationStore from "../../stores/donationStore";
// import observer from "mobx-react"

// // // setInterval custom hook by Dan Abramov
// // function useInterval(callback, delay) {
// //   const savedCallback = useRef();

// //   // Remember the latest callback.
// //   useEffect(() => {
// //     savedCallback.current = callback;
// //   }, [callback]);

// //   // Set up the interval.
// //   useEffect(() => {
// //     function tick() {
// //       savedCallback.current();
// //     }
// //     if (delay !== null) {
// //       let id = setInterval(tick, delay);
// //       return () => clearInterval(id);
// //     }
// //   }, [delay]);
// // }

// class Bar2 extends Component {
//   state = {
//     progress: donationStore.total
//   }

//   animation = new Animated.Value(0)

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => ({
//         progress: state.progress,
//       }));
//     }, restaurantStore.total);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.progress != this.state.progress) {
//       Animated.spring(this.animation, {
//         toValue: this.props.progress,
//         // duration: this.props.duration,
//       }).start;
//     }
//   }


//   render(){
//   const width = this.animation.current.interpolate({
//     inputRange: [0, restaurantStore.total],
//     outputRange: ["0%", `100%`],
//     extrapolate: "clamp",
//   });

//   return (
//     <View>
//       <Text>Donation Progress</Text>
//       <View style={styles.progressBar}>
//         <Animated.View
//           style={[
//             StyleSheet.absoluteFill,
//             { backgroundColor: "#8BED4F", width },
//           ]}
//         />
//       </View>
//       <Text>{`${progress}`}</Text>
//     </View>
//   );
// };
// }
// export default observer(Bar2);

// const styles = StyleSheet.create({
//   progressBar: {
//     flexDirection: "row",
//     height: 20,
//     width: "100%",
//     backgroundColor: "white",
//     borderColor: "#000",
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });
