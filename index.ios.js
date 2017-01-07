/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Map } from './components/Map';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';

export default class instore extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{
          flex: 1
        }}
        initialRoute={{
          component: Map,
          title: 'Instore'
        }}
      />
    );
  }
}

AppRegistry.registerComponent('instore', () => instore);
