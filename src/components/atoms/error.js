import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const defaultError = ({errorMessage}) => (
  <View style={styles.container}>
    <Text style={styles.message}>{errorMessage}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 5
  },

  message: {
    marginLeft: 5,
    fontSize: 12,
    color: '#e74c3c'
  }
});

export default defaultError;