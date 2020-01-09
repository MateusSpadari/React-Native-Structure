import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Containers } from '../../styles'; 

export default class Perfil extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Bem vindo a tela de Perfil</Text>
      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container
});
