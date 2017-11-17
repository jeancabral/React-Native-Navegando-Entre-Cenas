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
          ATM Consultoria
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
    padding:10,
    height: 90
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center', 
    margin: 10,
  }
});
