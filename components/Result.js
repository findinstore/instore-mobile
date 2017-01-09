import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export class Result extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.searchBar}>Test Result 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
  },
});
