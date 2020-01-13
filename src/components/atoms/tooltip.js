import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Tooltip } from 'react-native-elements';

const DefaultToolTip = ({tip, myText, backgroundColor, highlightColor, height}) => (
  <Tooltip
    height={height}
    popover={<Text>{tip}</Text>}
    highlightColor={highlightColor}
    backgroundColor={backgroundColor}>

    <Text style={styles.myText}>{myText}</Text>

  </Tooltip>
);

const styles = StyleSheet.create({
  myText: {
    margin: 5
  }
});

export default DefaultToolTip;