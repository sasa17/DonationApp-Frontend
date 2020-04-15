import React from "react";
import { withNavigation } from "react-navigation";

// Style Components
import { Card, CardItem, Text } from "native-base";
import styles from "./styles";

const DonationCard = ({ past_donation, navigation }) => {
  const handleDetail = () =>
    navigation.navigate("DonationDetail", { id: past_donation.id });
  return (
    <Card>
      <CardItem header button onPress={handleDetail}>
        <Text style={styles.dateList}>Date: {past_donation.date}</Text>
      </CardItem>
    </Card>
  );
};

export default withNavigation(DonationCard);
