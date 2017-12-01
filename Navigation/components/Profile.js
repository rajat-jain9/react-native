import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: 'green',
    },
    headerTitleStyle: {
      color: '#fff'
    }
  };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Profile Details.....</Text>
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
});
