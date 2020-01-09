import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/home';
import About from '../screens/about';

const tabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    activeTintColor: '#2980b9',
    inactiveTintColor: '#bdc3c7',
    labelStyle: {
      fontSize: 14
    }
  }
};

const RouteConfigs = {
  Home: {
    screen: Home
  },
  Aboute: {
    screen: About
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, tabNavigatorConfig);

export default AppNavigator;