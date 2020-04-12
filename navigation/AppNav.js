import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile/Profile";
import List from "../components/RestaurantList";
import Detail from "../components/RestaurantDetail";
import DonationDetails from "../components/Profile/DonationDetails";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Checkout from "../components/Checkout";

const AppNav = createStackNavigator(
  {
    Register: Register,
    Login: Login,
    Profile: Profile,
    List: List,
    Detail: Detail,
    DonationDetail: DonationDetails,
    Checkout: Checkout,
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "Feed Forward",
    },
  }
);

export default AppNav;
