import React from "react";

// NativeBase Components
import { Card, CardItem, Text } from "native-base";
import { withNavigation } from "react-navigation";
import styles from "./styles";

const DonationCard = ({ donation, navigation }) => {
  const handleDetail = () =>
    navigation.navigate("DonationDetail", { id: donation.id });
  return (
    <Card>
      <CardItem header button onPress={handleDetail}>
        <Text style={styles.profiletext}>Date: {donation.date}</Text>
      </CardItem>
    </Card>
  );
};

export default withNavigation(DonationCard);
