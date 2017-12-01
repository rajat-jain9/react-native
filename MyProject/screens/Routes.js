import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';

export default class Routes extends Component {
	static navigationOptions = {
		drawerLabel: 'Routes',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="swap-calls"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
	}
	render() {
		var items = ['Delhi','Hyderabad','Bangalore','Chennai','Ahamdabad','Visakhapatnam','Surat','Jaipur','Kanpur','Nagpur','Lucknow'];
		return(
			<Container>
				<Header style={{ alignItems: 'center', justifyContent: 'center'}}>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" style={{fontSize: 35, color: '#fff'}} />
						</Button>
					</Left>
					<Text style={{fontSize: 16, color: '#fff',justifyContent: 'center',
					 alignItems: 'center'}}>Routes</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<ScrollView>
						<Text style={{fontSize: 20, padding: 20, color: 'green'}}>First Item</Text>
						<Text style={{fontSize: 20, padding: 20, color: 'green'}}>First Item</Text>
						<Text style={{fontSize: 20, padding: 20, color: 'green'}}>First Item</Text>
						<Text style={{fontSize: 20, padding: 20, color: 'green'}}>First Item</Text>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}