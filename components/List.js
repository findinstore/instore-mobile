import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

export class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5']),
    };
  }

  _onRefresh() {
    this.setState({
      refreshing: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.text} onPress={() => Actions.SearchBar}>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 70,
    backgroundColor: '#F5FCFF',
  },
  listView: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  text: {
    marginLeft: 12,
    marginBottom: 5,
    fontSize: 20,
  }
});
