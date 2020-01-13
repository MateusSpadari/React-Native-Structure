import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Containers } from '../../styles';
import { DefaultCard } from '../../components/atoms';

export default class Home extends Component {
  render() {
    return(
      <View style={styles.container}>

        <Text>Exemplo de Card customizável</Text>

          <DefaultCard
            title='React Native Rocks' 
            description='Esse é um exemplo de um Card que pode ser reutilizado'
            buttonTitle='Selecionar' />
            
      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container,
});