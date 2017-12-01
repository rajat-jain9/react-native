import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	Image,
	Button,
} from 'react-native';
import { Container, Text, Body } from 'native-base';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 14,
		color: 'blue',
	}
});

export default class Profile extends Component {
	/*static navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="card-membership"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
  };*/
	render() {
		console.log("rajat.....");
		return(
				<Container>
					<Button
						title="click"
						onPress={() => this.props.navigation.navigate('ProfileDetails')}>
					</Button>
				</Container>
		);
	}
}