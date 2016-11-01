
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';

import Homepage from './components/Homepage.js'
import styles from './components/styles.js'

export default class Echios extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Homepage />
      </View>
    );
  }
}



AppRegistry.registerComponent('Echios', () => Echios);
