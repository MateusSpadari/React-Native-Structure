import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Containers } from '../../styles';
import { DefaultBadge, DefaultAvatar } from '../../components/atoms';

export default class Perfil extends Component {
  render() {
    return(
      <View style={styles.container}>

      <DefaultAvatar
        userName='Joana Doe'
        size='xlarge'
        activeOpacity={0.7}
        uri='https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' />

      <DefaultBadge 
        value={25} 
        status='success' />
                
      </View>
    );
  }
};

const container = Containers.centeredContainer;

const styles = StyleSheet.create({
  container
});
