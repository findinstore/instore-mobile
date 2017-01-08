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
          <View style={styles.searchBarContainer}>
            <SearchBar />
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={Actions.tabbar}>Search</Button>
          </View>
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
    backgroundColor: 'white',
    padding: 25,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  searchBarContainer: {
    flex: 4,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    color: 'white',
    backgroundColor: '#05a4eb',
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
  },
});
