import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BarraNavegacao from "./src/components/BarraNavegacao";

export default class App extends Component {
  render() {
    return (
      <BarraNavegacao />
    );
  }
}
