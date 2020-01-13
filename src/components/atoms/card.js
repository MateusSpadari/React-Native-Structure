import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const DefaultCard = ({title, description, buttonTitle, containerStyle}) => (
  <View>
    <Card title={title} containerStyle={containerStyle}>

      <Text style={styles.cardText}>
        {description}
      </Text>

      <Button
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
        title={buttonTitle} />

    </Card>
  </View>
);

const styles = StyleSheet.create({
  cardText: {
    margin: 10,
    textAlign: 'center'
  }
});

export default DefaultCard;