import React, { Component } from 'react';
import { Map } from './components/Map';
import { productList } from './components/productList';
import { storeList } from './components/storeList';
import { Search } from './components/Search';
import { Result } from './components/Result';

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
  Reducer,
  ActionConst,
} from 'react-native-router-flux';

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? '#05a4eb' :'black'}}>{this.props.title}</Text>
    );
  }
}

const reducerCreate = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    console.log("ACTION:", action);
    return defaultReducer(state, action);
  }
}

export default class instore extends Component {
  render() {
    return (
      <Router createReudcer={reducerCreate} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} leftButtonIconStyle={{tintColor: 'white'}} >
        <Scene key='modal' component={Modal} >
          <Scene key='root' >
            <Scene key='searchBar' title='1. Find a product' component={Search} initial={true} />
            <Scene key='productList' title='2. Select a product' component={productList} />
            <Scene key='storeList' title='3. Select a store' component={storeList} onRight={() => Actions.map()} rightTitle='Map' rightButtonTextStyle={styles.rightButtonTextStyle} />
            <Scene key='map' title='Map View Nav' component={Map} backTitle='Store List' backButtonTextStyle={styles.backButtonTextStyle}/>
            <Scene key='result' title='4. Result' component={Result} backTitle='Store List' backButtonTextStyle={styles.backButtonTextStyle}/>
            {/* <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle}>
              <Scene key='tab1' title='List View' icon={TabIcon} >
                <Scene key='List' title='Results' component={List} onRight={() => Actions.tab2()} rightTitle='Map' rightButtonTextStyle={styles.rightButtonTextStyle}/>
                  <Scene key="Results Modal" hideNavBar={true} component={List} title='Details' />
              </Scene>
              <Scene key='tab2' title='Map View' icon={TabIcon} >
                <Scene key='Map' title='Map View Nav' component={Map} />
              </Scene>
            </Scene> */}
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
  backButtonTextStyle: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
  },
});

AppRegistry.registerComponent('instore', () => instore);
