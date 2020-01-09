import React from 'react';
import { View, TextInput } from 'react-native';

const DefaultInput = ({autoCapitalize, autoCorrect, editable, keyboardType, maxLength, placeholder, ...rest}) => (
  <View>
    <TextInput 
      {...rest}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      editable={editable}
      keyboardType={keyboardType}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  </View>
);

export default DefaultInput;