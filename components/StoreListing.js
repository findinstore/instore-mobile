import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class StoreListing extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.storeListingTouchable} underlayColor='#f7fcff' onPress={() => Actions.storeDetails({selectedStore: this.props.storeData})} >
        <View style={styles.storeListingContainer}>
          <Image style={styles.image} source={require('./instore-logo-black.png')} />
          <View style={styles.productDescription}>
            <View style={styles.productNameContainer}>
              <Text style={styles.productName}>{this.props.storeData}</Text>
            </View>
            <View>
              <Text style={styles.productDetail}>Store Address</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  storeListingTouchable: {
    height: 80,
  },
  storeListingContainer: {
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
