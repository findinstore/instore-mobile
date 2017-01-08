import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import Button from 'react-native-button';
import {
  SearchBar
} from './SearchBar';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={Actions.tabbar}>Search</Button>
        </View>
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
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
  searchContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 18,
  },
});
