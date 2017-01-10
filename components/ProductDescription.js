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
        <View style={styles.productDescriptionContainer} >
          <Text style={styles.productDescription} >
            Before the Air Max 1, there was the Nike Air Max Zero
          </Text>
          <View style={styles.productDetailContainer} >
            <Text>{'\u2022'}</Text>
            <Text style={styles.productDetail} >
            Upper consists of a combination of full textile, molded skin overlays and slip-on bootie fit system to provide lightweight comfort
            </Text>
          </View>
          <View style={styles.productDetailContainer} >
            <Text>{'\u2022'}</Text>
            <Text style={styles.productDetail} >
            Durable IU foam with visible heel air-sole unit gives superior cushioning
            </Text>
          </View>
          <View style={styles.productDetailContainer}>
            <Text>{'\u2022'}</Text>
            <Text style={styles.productDetail} >
            Outsole is rubber in toe and heel to give traction on a variety of surfaces
            </Text>
          </View>
        </View>
        <View style={styles.storeListTitleContainer} >
          <Text style={styles.storeListTitle} >Stores that carry: {this.props.selected}</Text>
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
  productDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  productDetail: {
    // flex: 1,
    fontFamily: 'Quicksand-Regular',
    fontSize: 10,
    paddingLeft: 4,
    paddingTop: 3,
    paddingRight: 20,
    textAlign: 'justify',
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
