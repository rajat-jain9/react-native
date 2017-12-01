import React, { Component } from 'react';
import { StyleSheet, View, ListView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';
var items = ['Delhi','Hyderabad','Bangalore','Chennai',
'Ahamdabad','Visakhapatnam','Surat','Jaipur','Kanpur','Nagpur',
'Lucknow','Ahamdabad','Visakhapatnam','Surat','Jaipur','Kanpur','Nagpur','Lucknow',
'Ahamdabad','Visakhapatnam','Surat','Jaipur','Kanpur','Nagpur','Lucknow'];

export default class MyTransactions extends Component {
	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(items),
		};
	}

	static navigationOptions = {
		drawerLabel: 'My Transactions',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="credit-card"
					size={24}
					style={{color: tintColor}}
				>
				</MaterialIcons>
			);
		}
	}
	render() {
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
					 alignItems: 'center'}}>My Transactions</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<ListView
						style={{padding: 30}}
						dataSource={this.state.dataSource}
						renderRow = {
							(rowData) => <Text style={{padding: 10, color: 'green'}}>{rowData}</Text>
						}
					/>
				</Content>
			</Container>
		);
	}
}