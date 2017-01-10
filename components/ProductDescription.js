import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export class ProductDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./instore-logo-black.png')} />
        <View style={styles.productDescriptionContainer}>
          <Text style={styles.productDescription}>Product Description</Text>
          <Text style={styles.productDescription}>Product Detail 1</Text>
          <Text style={styles.productDescription}>Product Detail 2</Text>
          <Text style={styles.productDescription}>Product Detail 3</Text>
        </View>
        <View style={styles.storeListTitleContainer}>
          <Text style={styles.storeListTitle}>Stores that carry: {this.props.selected}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 100,
    width: 200,
  },
  productDescriptionContainer: {
    flex: 1,
  },
  productDescription: {
    // flex: 1,
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    paddingLeft: 10
  },
  storeListTitleContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 2,
  },
  storeListTitle: {
    fontFamily: 'Quicksand-Medium',
    fontSize: 16,
  },
});
