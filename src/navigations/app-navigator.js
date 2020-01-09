import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Icon } from 'react-native-elements'

import Home from '../screens/home';
import About from '../screens/about';
import Perfil from '../screens/perfil';

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
    screen: Home,
    // For using icons on tab navigations enable this
    // navigationOptions: () => ({
    //   tabBarIcon: () => (
    //     <Icon
    //       name='ios-american-football'
    //       type='ionicon'
    //       color='#517fa4'
    //     />
    //   )
    // })
  },
  About: {
    screen: About
  },
  Perfil: {
    screen: Perfil
  }
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, tabNavigatorConfig);

export default AppNavigator;