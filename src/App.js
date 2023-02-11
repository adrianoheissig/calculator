import React, {Component} from 'react';

import {StyleSheet, View} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

export default class App extends Component {
  state = {
    displayValue: '0',
  };
  render() {
    return (
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Button label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
