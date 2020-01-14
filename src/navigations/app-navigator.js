import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from '../screens/home';
import About from '../screens/about';
import Perfil from '../screens/perfil';
import Form from '../screens/form';

const tabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#2980b9',
    inactiveTintColor: '#bdc3c7',
    labelStyle: {
      fontSize: 14
    }
  }
};

const RouteConfigs = {
  Home: {
    screen: Home,
  },
  About: {
    screen: About
  },
  Perfil: {
    screen: Perfil
  },
  Form: {
    screen: Form
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, tabNavigatorConfig);

export default AppNavigator;