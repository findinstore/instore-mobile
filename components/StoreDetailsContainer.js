// TODO: implement store information

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ListView,
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
      // TODO: create a ListView instead of a static view
      <View style={styles.container}>
        <Image style={styles.image} source={require('./instore-logo-black.png')} />
        <View style={styles.storeDetailsContainer}>
          <Text style={styles.storeDescription}>
            Store description here
          </Text>
          <View style={styles.storeDetailContainer}>
            {/* <Text>{'\u2022'}</Text> */}
            <Text style={styles.storeDetail}>
              Street Address 1: 52 Russ St, San Francisco, CA 94103
            </Text>
          </View>
          <View style={styles.storeDetailContainer}>
            {/* <Text>{'\u2022'}</Text> */}
            <Text style={styles.storeDetail}>
              Street Address 2: 'INSERT STREET ADDRESS 2 HERE'
            </Text>
          </View>
          <View style={styles.storeDetailContainer}>
            {/* <Text>{'\u2022'}</Text> */}
            <Text style={styles.storeDetail}>
              Phone Number: 'INSERT PHONE NUMBER HERE'
            </Text>
          </View>
          <View style={styles.storeDetailContainer}>
            {/* <Text>{'\u2022'}</Text> */}
            <Text style={styles.storeDetail}>
              Store Hours: 'INSERT STORE HOURS HERE'
            </Text>
          </View>
        </View>
      </View>
      // <View style={styles.container}>
      //   <View style={styles.storeList}>
      //     <ListView
      //       // TODO: to enable refreshing in the future
      //       // refreshControl={
      //       //   <RefreshControl
      //       //     refreshing={this.state.refreshing}
      //       //     onRefresh={this._onRefresh}
      //       //   />
      //       // }
      //       dataSource={this.props.selectedStore}
      //       renderHeader={() => <ProductDetails />}
      //       renderRow={(storeData) => {
      //         // <TouchableHighlight style={styles.storeListItem} underlayColor='#f7fcff' onPress={Actions.result}>
      //         // <Text style={styles.text}>{storeData}</Text>
      //         // </TouchableHighlight>
      //         return (
      //           <StoreListing storeData={storeData} />
      //         );
      //       }}
      //       renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      //     />
      //   </View>
      // </View>
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
    alignSelf: 'center',
    height: 100,
    width: 200,
  },
  storeDetailsContainer: {
    // flex: 1,
    // alignSelf: 'flex-start',
  },
  storeDescription: {
    alignSelf: 'center',
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
  },
  storeDetailContainer: {
    flexDirection: 'row',
    padding: 10
  },
  storeDetail: {
    flex: 1,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'justify',
  },
});
