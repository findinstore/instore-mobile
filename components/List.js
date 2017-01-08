import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  TouchableHighlight,
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
      dataSource: ds.cloneWithRows(['Nike Air Max Zero', 'Nike Huarache', 'Nike Roshe Runs', 'Nike Roshe Runs Flyknits', 'Nike Shox']),
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
        <View style={styles.productList}>
          <ListView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
                <View style={styles.listItem}>
                  <Text style={styles.text} onPress={Actions.SearchBar}>{rowData}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // listView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   // marginTop: 63,
  // },
  listItem: {
    flexDirection: 'column',
    paddingLeft: 10,
    margin: 10,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  text: {
    flex: 1,
    justifyContent: 'center',
  },
  productList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70,
  },
});
