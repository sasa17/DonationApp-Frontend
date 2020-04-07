import { decorate, observable } from "mobx";
import { instance } from "./instance";

class DonationStore {
  donations = [];
  checkout_donations = [];

  addDonation = async (amount, navigation) => {
    try {
      await instance.post("donation/", amount);
      this.donations.push(amount);
      console.log(this.donations);
      navigation.navigate("Checkout");
    } catch (err) {
      console.log("something's not right");
    }
  };

  checkoutDonation = async (navigation) => {
    this.donations = [];
    this.checkout_donations = [];
    try {
      const res = await instance.get("checkout/");
      const checkout_donation = res.data.amount;
      this.checkout_donations = checkout_donation;
      this.loading = false;
      navigation.navigate("List");
    } catch (err) {
      console.log("something went wrong while checkout");
    }
  };
}
decorate(DonationStore, {
  donations: observable,
  checkout_donations: observable,
  loading: observable,
});

const donationStore = new DonationStore();

export default donationStore;
