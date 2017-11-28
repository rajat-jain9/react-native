import React, {Component} from 'react';
import Footer from './Footer'
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

export default class Header extends Component {
	render() {
	console.log(this.props);
		return(
			<View style={styles.container}>
				<Text style={styles.text}>{this.props.title}</Text>
				<Footer title_2={this.props.title}/>
			</View>
		);
	}
}