import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Containers } from '../../styles'; 

export default class About extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Você está na tela de About</Text>
      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container
});