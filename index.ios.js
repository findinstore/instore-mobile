/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Map } from './components/Map';
import { List } from './components/List';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';
import {
  Router,
  Scene
} from 'react-native-router-flux';

export default class instore extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='List' component={List} title='List' initial={true} />
          <Scene key='Map' component={Map} title='Map' />
        </Scene>
      </Router>
      // <NavigatorIOS
      //   style={{
      //     flex: 1
      //   }}
      //   initialRoute={{
      //     component: Map,
      //     title: 'Instore'
      //   }}
      //   // navigationBarHidden={true}
      // />
    );
  }
}

AppRegistry.registerComponent('instore', () => instore);
