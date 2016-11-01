import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container } from 'native-base';
import Button from 'react-native-button';

import styles from './styles.js'

const neelPic = 'https://i.imgur.com/jzpjBY0.jpg'

export default class Homepage extends Component {
  handlePress(event) {
    console.log('Pressed!');
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Image
            source={{uri: 'https://i.imgur.com/AzANWmh.jpg'}}
            style={styles.backgroundImage}>
          <Text style={styles.title}>
            Echios
          </Text>
          <Image
            source={{uri: neelPic}}
            style={styles.pics}
           />
          <Text style={styles.instructions}>
            Click below to start your Assesment
          </Text>
        <Button
          style={{borderWidth: 1, borderColor: 'blue'}}
          onPress={this.handlePress.bind(this)}>
          Press Me!
        </Button>
        </ Image>
        </View>
      </Container>
    );
  }
}
