import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class DonationStore {
  all_donations = [];
  donations = [];
  checkout_donations = [];

  fetchAllDonations = async () => {
    try {
      const res = await instance.get(`donation/list/`);
      const donation = res.data;
      this.all_donations = donation;
    } catch (err) {
      console.error(err);
    }
  };

  addDonation = async (amount, navigation) => {
    try {
      await instance.post("donation/", amount);
      this.donations.push(amount);
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

  get total() {
    let total = 0.0;
    this.all_donations.forEach((item) => (total += Number(item.amount)));
    console.log("donationsss", this.all_donations);
    return total;
  }
}
decorate(DonationStore, {
  all_donations: observable,
  donations: observable,
  checkout_donations: observable,
  total: computed,
});

const donationStore = new DonationStore();
export default donationStore;
