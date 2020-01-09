import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Containers } from '../../styles';
import { DefaultStatusBar, DefaultButton } from '../../components/atoms';

export default class SignIn extends Component {

  constructor(props) {
    super(props);
  };
  
  render() {
    return(
      <View style={styles.container}>

        <DefaultStatusBar
          animated={true}
          backgroundColor='#76af7c'
          barStyle='light-content'
          hidden={false}
          networkActivityIndicatorVisible={false} />

        <Image
          style={styles.image}
          source={require('../../assets/images/react-native.png')} />

        <Text style={ styles.description}>
          Este é um App base para suas{"\n"} 
          aplicações em React-Native {"\n"}
          Aqui uma lista dos pacotes adicionados: {"\n"} {"\n"}

          📱{"\n"} {"\n"}
          async-storage: ^1.7.1 {"\n"}
          masked-view: ^0.1.5 {"\n"}
          apisauce: ^1.1.1 {"\n"}
          react: 16.9.0 {"\n"}
          react-native: 0.61.5 {"\n"}
          react-native-gesture-handler: ^1.5.3 {"\n"}
          react-native-reanimated: ^1.4.0 {"\n"}
          react-native-safe-area-context: ^0.6.2 {"\n"}
          react-native-safe-area-view: ^1.0.0 {"\n"}
          react-navigation: ^4.0.10 {"\n"}
          react-navigation-stack: ^2.0.13 {"\n"}
          react-navigation-tabs: ^2.7.0 {"\n"}
          react-native-elements: ^1.2.7 {"\n"}
        </Text>

        <DefaultButton
          title='Clique Aqui'
          color='#76af7c' 
          disabled={false}
          onPress={this.navigateToHome}/>

      </View>
    );
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
    console.log('Apertou o botão essa mizera !');
  };

};

const container = Containers.centeredContainer;

const styles =  StyleSheet.create({
  container,

  description: {
    textAlign: 'center'
  },

  image: {
    width: 100,
    height: 100
  }
});
