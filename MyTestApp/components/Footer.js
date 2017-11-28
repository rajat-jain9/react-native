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

export default class Footer extends Component {
	render() {
		console.log("rajat....",this.props);
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.title_2}</Text>
			</View>
		);
	}
}