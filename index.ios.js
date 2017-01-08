import React, { Component } from 'react';
import { Map } from './components/Map';
import { List } from './components/List';
import { Search } from './components/Search';

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NavigatorIOS,
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
      <Text style={{color: this.props.selected ? '#05a4eb' :'black'}}>{this.props.title}</Text>
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
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} leftButtonIconStyle={{tintColor: 'white'}} >
        <Scene key='modal' component={Modal} >
          <Scene key='root' >
            <Scene key='SearchBar' component={Search} initial={true} />
            <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle}>
              <Scene key='tab1' title='List View' icon={TabIcon} >
                <Scene key='List' title='Results' component={List} onRight={() => Actions.tab2()} rightTitle='Map' rightButtonTextStyle={styles.rightButtonTextStyle}/>
              </Scene>
              <Scene key='tab2' title='Map View' icon={TabIcon} >
                <Scene key='Map' title='Map View Nav' component={Map} hideBackImage={true} />
              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#05a4eb',
  },
  navTitle: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
    fontSize: 18,
  },
  rightButtonTextStyle: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
  },
});

AppRegistry.registerComponent('instore', () => instore);
