import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View
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

export default class Profile extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>This is Profile Page</Text>
			</View>
		);
	}
}