import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { Input } from '../../styles';

const DefaultInput = (
  {
    autoCapitalize, 
    autoCorrect, 
    editable, 
    keyboardType, 
    maxLength, 
    placeholder, 
    name, 
    secureTextEntry, 
    ...rest
  }) => (
    
  <TextInput 
    {...rest}
    secureTextEntry={secureTextEntry}
    name={name}
    style={styles.input}
    autoCapitalize={autoCapitalize}
    autoCorrect={autoCorrect}
    editable={editable}
    keyboardType={keyboardType}
    maxLength={maxLength}
    placeholder={placeholder} />
    
);

const input = Input.customInput;

const styles = StyleSheet.create({
  input
});

export default DefaultInput;