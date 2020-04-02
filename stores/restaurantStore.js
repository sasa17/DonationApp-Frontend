import { decorate, observable } from "mobx";
import { instance } from "./instance";

class RestaurantStore {
  restaurants = [];
  loading = true;
  fetchAllRestaurantShops = async () => {
    try {
      const res = await instance.get("restaurant/");
      const restaurants = res.data;
      this.restaurants = restaurants;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(RestaurantStore, {
  restaurants: observable,
  loading: observable
});

const restaurantStore = new RestaurantStore();
restaurantStore.fetchAllRestaurantShops();

export default restaurantStore;
