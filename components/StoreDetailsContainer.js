// TODO: implement store information

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export class StoreDetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    Actions.refresh({
      title: this.props.selectedStore
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./instore-logo-black.png')} />
        <View style={styles.storeDetailsContainer}>
          <Text style={styles.storeDescription}>
            Place description here
          </Text>
          <View style={styles.storeDetailContainer}>
            <Text>{'\u2022'}</Text>
            <Text style={styles.storeDetail}>
            Upper consists of a combination of full textile, molded skin overlays and slip-on bootie fit system to provide lightweight comfort
            </Text>
          </View>
          <View style={styles.storeDetailContainer}>
            <Text>{'\u2022'}</Text>
            <Text style={styles.storeDetail}>
            Durable IU foam with visible heel air-sole unit gives superior cushioning
            </Text>
          </View>
          <View style={styles.storeDetailContainer}>
            <Text>{'\u2022'}</Text>
            <Text style={styles.storeDetail}>
            Outsole is rubber in toe and heel to give traction on a variety of surfaces
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    backgroundColor: 'white',
  },
  image: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 100,
    width: 200,
  },
  storeDetailsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  storeDescription: {
    // flex: 1,
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    paddingLeft: 10
  },
  storeDetailContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  storeDetail: {
    // flex: 1,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'justify',
  },
});
