import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, } from 'react-native';
//import { Icon } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Button, Left, Right, Body,Footer, Title,
Text, Icon, Content, List, ListItem, Switch }  from 'native-base';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class QuickBook extends Component {
	static navigationOptions = {
		drawerLabel: 'Quick Book',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="touch-app"
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
					alignItems: 'center'}}>Quick Book</Text>
					<Right>
					</Right>
				</Header>
				<Content>
					<List>
            <ListItem icon>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>Airplane Mode</Text>
              </Body>
              <Right>
                <Switch value={true} />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Wi-Fi</Text>
              </Body>
              <Right>
                <Text>GeekyAnts</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Bluetooth</Text>
              </Body>
              <Right>
                <Text>On</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
				</Content>
			</Container>
		);
	}
}




