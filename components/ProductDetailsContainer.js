// add product details
// add stores

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ProductDetails } from './ProductDetails';
import { StoreListing } from './StoreListing';

export class ProductDetailsContainer extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['Foot Locker', 'Finish Line', 'Journeys', 'Shoe Palace', 'Nike']),
    };

    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    Actions.refresh({
      title: this.props.selectedProduct
    });
  }

  _onRefresh() {
    this.setState({
      refreshing: true,
    });
  }

  render() {
    let selectedProduct = this.props.selectedProduct;
    return (
      <View style={styles.container}>
        <View style={styles.storeList}>
          <ListView
            // TODO: to enable refreshing in the future
            // refreshControl={
            //   <RefreshControl
            //     refreshing={this.state.refreshing}
            //     onRefresh={this._onRefresh}
            //   />
            // }
            dataSource={this.state.dataSource}
            renderHeader={() => <ProductDetails selected={selectedProduct} />}
            renderRow={(storeData) => {
              // <TouchableHighlight style={styles.storeListItem} underlayColor='#f7fcff' onPress={Actions.result}>
              // <Text style={styles.text}>{storeData}</Text>
              // </TouchableHighlight>
              return (
                <StoreListing storeData={storeData} />
              );
            }}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  storeListItem: {
    flexDirection: 'column',
    padding: 20,
    borderRadius: 0,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F1F1F1',
  },
  // text: {
  //   flex: 1,
  //   fontFamily: 'Quicksand-Regular',
  // },
  storeList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 64,
  },
});
