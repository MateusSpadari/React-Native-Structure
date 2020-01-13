import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const DefaultAvatar = ({size, activeOpacity, uri, userName}) => (

  <View> 

    <Avatar
      size={size}
      activeOpacity={activeOpacity}
      rounded
      source={{ uri: uri }} />
      
    <Text style={styles.name}>{userName}</Text>

  </View>

);

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#7f8c8d'
  }
});

export default DefaultAvatar;