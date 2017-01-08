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
      placeholder: 'What are you searching for?',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar />
        <Button onPress={Actions.tabbar}>Search Nearby Stores</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 70,
    backgroundColor: '#F5FCFF',
  },
});
