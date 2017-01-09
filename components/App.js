import React, { Component } from 'react';
import { Map } from './Map';
import { ProductList } from './ProductList';
import { StoreList } from './StoreList';
import { Search } from './Search';
import { Result } from './Result';

import {
  StyleSheet,
  Text,
  Image,
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

export default class App extends Component {
  render() {
    return (
      <Router createReducer={reducerCreate} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} leftButtonIconStyle={{tintColor: 'white'}} >
        <Scene key='modal' component={Modal} >
          <Scene key='root' >
            <Scene key='searchBar' title='1. Find a product' component={Search} initial={true} />
            <Scene key='productList' title='2. Select a product' component={(props) => <ProductList {...props} />} backTitle='Search' backButtonTextStyle={styles.navButtonTextStyle}/>
            <Scene key='storeList' title='3. Select a store' component={StoreList} backTitle='Products' backButtonTextStyle={styles.navButtonTextStyle} onRight={() => Actions.map()} rightTitle='Map' rightButtonTextStyle={styles.navButtonTextStyle} />
            <Scene key='map' title='Map View Nav' component={Map} backTitle='Stores' backButtonTextStyle={styles.navButtonTextStyle} />
            <Scene key='result' title='4. Result' component={Result} backTitle='Stores' backButtonTextStyle={styles.navButtonTextStyle} />
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
  navButtonTextStyle: {
    color: 'white',
    fontFamily: 'Quicksand-Bold',
  },
});
