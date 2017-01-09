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

export class storeList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      refreshing: false,
      dataSource: ds.cloneWithRows(['Foot Locker', 'Finish Line', 'Journeys', 'Shoe Palace', 'Nike']),
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
        <View style={styles.storeList}>
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
                <TouchableHighlight style={styles.storeListItem} onPress={Actions.result} >
                  <Text style={styles.text} >{rowData}</Text>
                </TouchableHighlight>
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
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  storeListItem: {
    flexDirection: 'column',
    padding: 20,
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    // marginLeft: 0,
    // marginRight: 0,
  },
  text: {
    flex: 1,
    fontFamily: 'Quicksand-Regular',
  },
  storeList: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 64,
  },
});
