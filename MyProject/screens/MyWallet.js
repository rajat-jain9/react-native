import React, { Component } from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';

export default class MyWallet extends Component {
	static navigationOptions = {
		drawerLabel: 'My Wallet',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="account-balance-wallet"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
	}
	render() {
		var sectionData = [
			{title: "A", data: [{key: "Akshay"}, {key: "Alen"}, {key: "Albert"}], key: "A"},
			{title: "B", data: [{key: "Binay"}, {key: "Bist"}, {key: "Bob"}], key: "B"},
			{title: "C", data: [{key: "Candy"}, {key: "Caisy"}, {key: "Camron"}], key: "C"},
			{title: "D", data: [{key: "Dawyne"}, {key: "Dollar"}, {key: "Delt"}], key: "D"},
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
					 alignItems: 'center'}}>My Wallet</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<View style={{flex:1, paddingTop: 30}}>
						<SectionList
							sections={sectionData}
							renderItem={
								({item}) => <Text style={{padding: 10, color: 'green'}}>{item.key}</Text>
							}
							renderSectionHeader={
								({section}) =>  <Text style={{padding: 10, color: 'blue'}}>{section.title}</Text>
							}
						/>
					</View>
				</Content>
			</Container>
		);
	}
}