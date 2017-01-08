import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: 'What are you searching for?',
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.nativeEvent.key === 'Enter') {
      Actions.tabbar();
    }
  }

  render() {
    return (
      <TextInput
        style={styles.searchBar}
        onChangeText={(text) => this.setState({ placeholder: text })}
        onKeyPress={this.handleKeyDown}
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
