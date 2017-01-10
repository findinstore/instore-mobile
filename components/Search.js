import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      disabled: true,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleKeyDown(e) {
    if (e.nativeEvent.key === 'Enter' && this.state.searchText.length > 0) {
      Actions.productList({
        searchText: this.state.searchText
      });
    }
  }

  handleChangeText(text) {
    if (this.state.searchText.length === 0) {
      this.setState({
        disabled: true,
      });
    }
    if (this.state.searchText.length > 0) {
      this.setState({
        disabled: false,
      });
    }
    this.setState({
      searchText: text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              onChangeText={(text) => this.handleChangeText(text)}
              onKeyPress={this.handleKeyDown}
              placeholder={'What\'s Instore for you?'}
              value={this.state.searchText}
              editable={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button containerStyle={{borderRadius: 20}} style={styles.button} onPress={() => Actions.productList({searchText: this.state.searchText})}>Search</Button>
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
    borderRadius: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
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
  // buttonDisabled: {
  //   backgroundColor: '#747a7c',
  //   fontFamily: 'Quicksand-Medium',
  //   fontSize: 18,
  // },
});
