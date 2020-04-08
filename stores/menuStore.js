import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class MenuStore {
  menu = [];
  loading = true;

  fetchAllMenuItems = async (restaurant) => {
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
decorate(MenuStore, {
  menu: observable,
  loading: observable,
  total: computed,
});

const menuStore = new MenuStore();
export default menuStore;
