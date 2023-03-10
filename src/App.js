import React, {Component} from 'react';

import {StyleSheet, TouchableHighlightBase, View} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const initState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: '0',
};

export default class App extends Component {
  state = {
    ...initState,
  };

  clearMemory = () => {
    this.setState({...initState});
  };

  addDigit = n => {
    console.debug(typeof this.state.displayValue);
    const clearDisplay =
      this.state.displayValue === '0' || this.state.clearDisplay;

    if (n === '.' && this.state.displayValue.includes('.') && !clearDisplay) {
      return;
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false});

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;

      this.setState({values});
    }
  };

  setOperation = operation => {
    if (this.state.current == 0) {
      this.setState({operation, current: 1, clearDisplay: true});
    } else {
      const equals = operation === '=';
      const values = [...this.state.values];
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (error) {
        values[0] = this.state.values[0];
      }
      values[1] = 0;
      this.setState({
        displayValue: values[0],
        operation: equals ? '' : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  render() {
    return (
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Button label="AC" triple onClick={this.clearMemory} />
          <Button label="/" operation onClick={this.setOperation} />
          <Button label="7" onClick={this.addDigit} />
          <Button label="8" onClick={this.addDigit} />
          <Button label="9" onClick={this.addDigit} />
          <Button label="*" operation onClick={this.setOperation} />
          <Button label="4" onClick={this.addDigit} />
          <Button label="5" onClick={this.addDigit} />
          <Button label="6" onClick={this.addDigit} />
          <Button label="-" operation onClick={this.setOperation} />
          <Button label="1" onClick={this.addDigit} />
          <Button label="2" onClick={this.addDigit} />
          <Button label="3" onClick={this.addDigit} />
          <Button label="+" operation onClick={this.setOperation} />
          <Button label="0" double onClick={this.addDigit} />
          <Button label="." onClick={this.addDigit} />
          <Button label="=" operation onClick={this.setOperation} />
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
