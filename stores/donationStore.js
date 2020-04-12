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
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
  get total() {
    const total = 0;
    const amount = this.all_donations.map(item=>item.amount)
    console.log("map", amount)

  }

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
}
decorate(DonationStore, {
  all_donations: observable,
  donations: observable,
  checkout_donations: observable,
  total: computed
});

const donationStore = new DonationStore();
donationStore.fetchAllDonations();

export default donationStore;
