import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyProfile from '../screens/MyProfile';
import BookNow from '../screens/BookNow';
import QuickBook from '../screens/QuickBook';
import MyBookings from '../screens/MyBookings';
import MyWallet from '../screens/MyWallet';
import MyTransactions from '../screens/MyTransactions';
import Routes from '../screens/Routes';
import SuggestRoute from '../screens/SuggestRoute';
import Refer from '../screens/Refer';
import Notifications from '../screens/Notifications';
import Feedback from '../screens/Feedback';
import Questions from '../screens/Questions';
import About from '../screens/About';
import EmergencyAlert from '../screens/EmergencyAlert';

const DrawerExample = DrawerNavigator({
  Home : {
    screen: MyProfile,
  },
  BookNow: {
    screen: BookNow,
  },
  Notification: {
    screen: QuickBook,
  },
  MyBookings: {
    screen: MyBookings,
  },
  MyWallet: {
    screen: MyWallet,
  },
  MyTransactions: {
    screen: MyTransactions,
  },
  Routes: {
    screen: Routes,
  },
  SuggestRoute: {
    screen: SuggestRoute,
  },
  Refer: {
    screen: Refer,
  },
  Notifications: {
    screen: Notifications,
  },
  Feedback: {
    screen: Feedback,
  },
  Questions: {
    screen: Questions,
  },
  About: {
    screen: About,
  },
  EmergencyAlert: {
    screen: EmergencyAlert,
  },
},
  {
    initialRouteName: 'Home',
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
