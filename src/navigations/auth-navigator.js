import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '../screens/signin';

const AuthNavigatorConfig = {
  initialRouteName: 'Signin',
  header: null,
  headerMode: 'none'
};

const RouteConfigs = {
  Signin: SignIn
};

const AuthNavigator = createStackNavigator(RouteConfigs, AuthNavigatorConfig);

export default AuthNavigator;