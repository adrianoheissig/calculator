import React from 'react';

import {Text, StyleSheet, TouchableHighlight, Dimensions} from 'react-native';

export default props => {
  const stylesButton = [style.button];
  if (props.operation) {
    stylesButton.push(style.buttonOperation);
  }
  if (props.double) {
    stylesButton.push(style.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(style.buttonTriple);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
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
  buttonOperation: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
