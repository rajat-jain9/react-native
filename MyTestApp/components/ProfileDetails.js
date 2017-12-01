import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

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

export default class ProfileDetails extends Component {
	render() {
		console.log("Inside ProfileDetails component....");
		return(
			<View style={styles.container}>
				<Text style={styles.text}>This is Profile Details Page...</Text>
			</View>
		);
	}
}