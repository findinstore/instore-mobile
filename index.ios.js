import React, { Component } from 'react';
import { Map } from './components/Map';
import { List } from './components/List';
import { Search } from './components/Search';

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
  Modal,
  Actions,
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
            <Scene key='SearchBar' component={Search} initial={true} />
            <Scene key='tabbar' tabs={true} >
              <Scene key='tab1' title='List View' icon={TabIcon} >
                <Scene key='List' title='List View Nav' component={List} />
              </Scene>
              <Scene key='tab2' title='Map View' icon={TabIcon}>
                <Scene key='Map' title='Map View Nav' component={Map} />
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('instore', () => instore);
