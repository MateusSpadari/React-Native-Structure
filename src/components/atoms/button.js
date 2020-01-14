import React, { Component } from 'react';
import { Button } from 'react-native';

export default class DefaultButton extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return(
        
      <Button
        title={this.props.title}
        color={this.props.color}
        disabled={this.disabled}
        onPress={this.props.onPress} />
          
    ); 
  }
};