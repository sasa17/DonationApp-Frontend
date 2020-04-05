import { decorate, observable } from "mobx";
import { instance } from "./instance";

class DonationStore {
  donations = [];

  addDonation = async (amount, navigation) => {
    await instance.post("donation/", amount);
    this.donations.push(amount);
    console.log("data", donations);
    navigation.navigate("Checkout");
  };

  checkoutDonation = async () => {
    this.donations = [];
    try {
      const res = await instance.get("checkout/");
      const checkout_donation = res.data.donation;
      this.donations = checkout_donation;
      this.loading = false;
    } catch (err) {
      console.log("something went wrong while checkout");
    }
  };
}
decorate(DonationStore, {
  donations: observable,
  loading: observable,
});

const donationStore = new DonationStore();

export default donationStore;
