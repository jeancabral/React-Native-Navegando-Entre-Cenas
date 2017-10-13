import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraNavegacao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          XPTO Consultoria
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 100
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
