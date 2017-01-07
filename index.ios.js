/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Map } from './components/Map';
import { List } from './components/List';
import TabView from './components/TabView';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS
} from 'react-native';
import {
  Router,
  Scene,
  Modal
} from 'react-native-router-flux';

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

export default class instore extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Router>
        <Scene key='modal' component={Modal} >
          <Scene key='root'>
            <Scene key='tabbar' tabs={true} >
              <Scene key='tab1' title='List View' icon={TabIcon} initial={true} >
                <Scene key='List' title='List View Nav' component={List} />
              </Scene>
              <Scene key='tab2' title='Map View' icon={TabIcon}>
                <Scene key='Map' title='Map View Nav' component={Map} />
              </Scene>
            </Scene>
          </Scene>
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
