import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image,} from 'react-native';
//import { Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, List, ListItem, Content, Switch, Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class BookNow extends Component {
	static navigationOptions = {
		drawerLabel: 'Book Now',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="airport-shuttle"
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
					 alignItems: 'center'}}>Book Now</Text>
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