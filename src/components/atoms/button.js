import React from 'react';
import { Button, View } from 'react-native';

const DefaultButton = ({title, color, disabled, ...rest}) => (
  <View>
    <Button
      {...rest}
      title={title}
      color={color}
      disabled={disabled}
    />
  </View>
);

export default DefaultButton;