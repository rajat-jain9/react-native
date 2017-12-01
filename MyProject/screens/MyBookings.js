import React, { Component } from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';

export default class MyBookings extends Component {
	static navigationOptions = {
		drawerLabel: 'My Bookings',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="featured-play-list"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
	}
	render() {
		var city = [
			{key: "Delhi"},
			{key: "Mumbai"},
			{key: "Hyderabad"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},
			{key: "Bangalore"},

		];
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
					 alignItems: 'center'}}>My Bookings</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<View style={{paddingTop: 30, flex: 1}}>
						<FlatList
							data={city}
							renderItem={
								({item}) => <Text style={{padding:10, color: 'green'}}>{item.key}</Text>
							}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}