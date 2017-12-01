import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch, Input, Item }  from 'native-base';
import { SearchBar } from 'react-native-elements'

export default class SuggestRoute extends Component {
	static navigationOptions = {
		drawerLabel: 'Suggest Route',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="location-on"
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
					 alignItems: 'center'}}>Suggest Route</Text>
					<Right>
					</Right>
				</Header>
				<Content searchBar rounded>
					<Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <SearchBar
					  onChangeText={console.log("fdfdsf")}
					  onClearText={console.log("fdfdsf")}
					  placeholder='Type Here...' />
					  <SearchBar
					  round
					  onChangeText={console.log("fdfdsf")}
					  onClearText={console.log("dfsfs")}
					  placeholder='Type Here...' />
					  <SearchBar
					  lightTheme
					  onChangeText={console.log("fdfdsf")}
					  onClearText={console.log("fdfdsf")}
					  placeholder='Type Here...' />
				</Content>
			</Container>
		);
	}
}