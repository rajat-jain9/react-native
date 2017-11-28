import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class SecondScreen extends Component {
	static navigationOptions = {
		tabBarLabel: 'Screen 2',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="change-history"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
	}
	render() {
		return(
			<View style={styles.container}>
				<Text style={{fontSize: 30, color: 'blue'}}>Screen 2</Text>
				<Button
					onPress={() => this.props.navigation.navigate('DrawerOpen')}
					title="Open DrawerNavigator"
				/>
			</View>
		);
	}
}