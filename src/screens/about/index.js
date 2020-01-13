import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Containers } from '../../styles';
import { DefaultToolTip } from '../../components/atoms';

export default class About extends Component {
  render() {
    return(
      <View style={styles.container}>

        <DefaultToolTip 
          height={70}
          tip='Deixe aqui uma dica para seu usuário, legal não ?'
          myText='Clique aqui !'
          highlightColor='#f1c40f'/>

      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container
});