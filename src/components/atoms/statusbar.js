import React from 'react';
import { StatusBar } from "react-native";

const DefaultStatusBar = ({animated, backgroundColor, barStyle, hidden, networkActivityIndicatorVisible}) => (

  <StatusBar
    animated={animated}
    backgroundColor={backgroundColor}
    barStyle={barStyle}
    hidden={hidden}
    networkActivityIndicatorVisible={networkActivityIndicatorVisible}
  />

);

export default DefaultStatusBar;