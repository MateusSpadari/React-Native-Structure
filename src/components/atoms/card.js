import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const DefaultCard = ({}) => (
  <View>
    <Card
      title='HELLO WORLD'
      image={require('../../assets/images/react-native.png')}>

      <Text style={{marginBottom: 10}}>
        The idea with React Native Elements is more about component structure than actual design.
      </Text>

      <Button
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title='VIEW NOW' />

    </Card>
  </View>
);

const styles = StyleSheet.create({

});

export default DefaultCard;