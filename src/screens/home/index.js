import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Containers } from '../../styles';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.page}>
        <View style={styles.container}>
          <Text>Bem vindo a tela Home </Text>
        </View>
      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container,
  page: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%'
  }
});