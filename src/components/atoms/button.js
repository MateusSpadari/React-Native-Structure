import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class DefaultButton extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
      <View>
        
        <Button
          title={this.props.title}
          color={this.props.color}
          disabled={this.disabled}
          onPress={this.props.onPress}/>
          
      </View>
    ); 
  }
};