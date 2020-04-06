import { createStackNavigator } from "react-navigation-stack";

// Components
import Profile from "../components/Profile/Profile";
import List from "../components/RestaurantList";
import Detail from "../components/RestaurantDetail";
import DonationDetails from "../components/Profile/DonationDetails";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

const AppNav = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    Register: Register,
    List: List,
    Detail: Detail,
    DonationDetail: DonationDetails
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: ""
    }
  }
);

export default AppNav;
