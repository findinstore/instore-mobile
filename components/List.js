import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import Tabs from 'react-native-tabs';

export class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the List Page</Text>
        {/* <Tabs>
          <Text name="test1">TestTab1</Text>
          <Text name="test2">TestTab2</Text>
          <Text name="test3">TestTab3</Text>
          <Text name="test4">TestTab4</Text>
          <Text name="test5">TestTab5</Text>
        </Tabs> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
