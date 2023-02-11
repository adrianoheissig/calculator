import React from 'react';

import {Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';

export default props => {
  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={style.button}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    fontSize: 40,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
});
