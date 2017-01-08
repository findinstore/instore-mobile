import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'What are you searching for?',
    };
  }

  render() {
    return (
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => this.setState({ placeholder: text })}
        value={this.state.placeholder}
        editable={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    fontSize: 18,
  },
});
