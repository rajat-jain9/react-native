import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';

export default class FeedBack extends Component {
	static navigationOptions = {
		drawerLabel: 'Feedback',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="stars"
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
					 alignItems: 'center'}}>Feedback</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<ListItem itemHeader>
						<Text>City</Text>
					</ListItem>
					<List dataArray={items}
						renderRow={(items) =>
						<ListItem>
							<Text>{items}</Text>
						</ListItem>
					}>
					</List>
				</Content>
			</Container>
		);
	}
}