import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DrawerExample = DrawerNavigator({
  First: {
    path: '/',
    screen: FirstScreen,
    navigationOptions: {
      tabBarLabel: 'Screen 1',
      drawerIcon: ({tintColor}) => {
        return(
          <MaterialIcons
            name="card-membership"
            size={24}
            style={{color: tintColor}}
          >
          </MaterialIcons>
        );
      }
    },
  },
  Second: {
    path: '/sent',
    screen: SecondScreen,
  }
},
  {
    initialRouteName: 'First',
    drawerPosition: 'left'
  }
);

export default DrawerExample;

/*export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing...</Text>
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
});*/
