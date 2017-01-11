import React, { Component } from 'react';
import { SearchContainer } from './SearchContainer';
import { ProductListContainer } from './ProductListContainer';
import { ProductDetailsContainer } from './ProductDetailsContainer';
import { StoreDetailsContainer } from './StoreDetailsContainer';
import { MapContainer } from './MapContainer';

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

// class TabIcon extends React.Component {
//   render(){
//     return (
//       <Text style={{color: this.props.selected ? '#05a4eb' :'black'}}>{this.props.title}</Text>
//     );
//   }
// }

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
      <Router createReducer={reducerCreate} navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} leftButtonIconStyle={{tintColor: 'white'}}>
        <Scene key='modal' component={Modal}>
          <Scene key='root'>
            <Scene key='search' component={SearchContainer} initial={true} />
            <Scene key='productList' title='Results' component={ProductListContainer} backTitle='Search' backButtonTextStyle={styles.navButtonTextStyle} />
            <Scene key='productDetails' component={ProductDetailsContainer} backTitle='Products' backButtonTextStyle={styles.navButtonTextStyle} onRight={() => Actions.map()} rightTitle='Map' rightButtonTextStyle={styles.navButtonTextStyle} />
            <Scene key='map' title='Map' component={MapContainer} backTitle='Stores' backButtonTextStyle={styles.navButtonTextStyle} />
            <Scene key='storeDetails' title='Store' component={StoreDetailsContainer} backTitle='Product Details' backButtonTextStyle={styles.navButtonTextStyle} />
            {/* <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle}>
              <Scene key='tab1' title='List View' icon={TabIcon}>
                <Scene key='List' title='Results' component={List} onRight={() => Actions.tab2()} rightTitle='Map' rightButtonTextStyle={styles.rightButtonTextStyle} />
                  <Scene key="Results Modal" hideNavBar={true} component={List} title='Details' />
              </Scene>
              <Scene key='tab2' title='Map View' icon={TabIcon}>
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
