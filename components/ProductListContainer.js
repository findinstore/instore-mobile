import React, { Component } from 'react';
import { ProductListing } from './ProductListing';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['Nike Air Max Zero', 'Nike Huarache', 'Nike Roshe Runs', 'Nike Roshe Runs Flyknits', 'Nike Shox', 'Nike Air Max Zero', 'Nike Huarache', 'Nike Roshe Runs', 'Nike Roshe Runs Flyknits', 'Nike Shox']),
    };

    this._onRefresh = this._onRefresh.bind(this);
  }

  componentWillMount() {
    if (this.props.searchText.length > 0) {
      Actions.refresh({
        title: 'Results for ' + this.props.searchText,
      });
    }
  }

  _onRefresh() {
    this.setState({
      refreshing: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.productList}>
          <ListView
            // refreshControl={
            //   <RefreshControl
            //     refreshing={this.state.refreshing}
            //     onRefresh={this._onRefresh}
            //   />
            // }
            dataSource={this.state.dataSource}
            renderRow={(rowData, sectionID, rowID) => {
              return (
                // <TouchableHighlight style={styles.productListItem} underlayColor='#f7fcff' onPress={() => Actions.productDetails({selectedProduct: rowData})} >
                // <Text style={styles.text} >{rowData}</Text>
                // </TouchableHighlight>
                <ProductListing rowData={rowData}/>
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
  productListItem: {
    flexDirection: 'column',
    padding: 20,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    fontFamily: 'Quicksand-Regular',
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 64,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#F1F1F1',
  },
});
