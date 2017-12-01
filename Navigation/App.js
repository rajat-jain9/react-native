import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import ProfileScreen from './components/ProfileScreen';

export const appNavigator = StackNavigator ({
  Home: { screen: App },
  Profile: { screen: ProfileScreen, },
});

export default class App extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile')
        }
      />
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
//AppRegistry.registerComponent('flow', () => appNavigator);


