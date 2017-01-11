import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class ProductListing extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.productListingTouchable} underlayColor='#f7fcff' onPress={() => Actions.productDetails({selectedProduct: this.props.rowData})} >
        <View style={styles.productListingContainer}>
          <Image style={styles.image} source={require('./instore-logo-black.png')} />
          <View style={styles.productDescription}>
            <View style={styles.productNameContainer}>
              <Text style={styles.productName}>{this.props.rowData}</Text>
            </View>
            <View>
              <Text style={styles.productDetail}>Product Detail</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  productListingTouchable: {
    height: 80,
  },
  productListingContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    alignSelf: 'center',
    height: 50,
    width: 100,
  },
  productDescription: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  productNameContainer: {
    paddingBottom: 4,
  },
  productName: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
  },
  productDetail: {
    fontFamily: 'Quicksand-Medium',
    opacity: 0.5,
  },
});
