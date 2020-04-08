import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class RestaurantStore {
  restaurants = [];
  loading = true;

  fetchAllRestaurants = async () => {
    try {
      const res = await instance.get("restaurant/");
      const restaurants = res.data;
      this.restaurants = restaurants;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  fetchAllRestaurantDetail = async (restaurant) => {
    try {
      const res = await instance.get(`restaurant/${restaurant}`);
      const menu = res.data.menu;
      this.menu = menu;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  get total() {
    let total = 0;
    this.menu.forEach((item) => (total += item.total));
    return total;
  }
}

decorate(RestaurantStore, {
  restaurants: observable,
  loading: observable,
  total: computed,
});

const restaurantStore = new RestaurantStore();
restaurantStore.fetchAllRestaurants();

export default restaurantStore;
