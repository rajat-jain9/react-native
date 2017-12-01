import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Text, InputGroup, Input, Header, Button, Left, Right, Icon } from 'native-base';

export default class MyProfile extends Component {
	static navigationOptions = {
		drawerLabel: 'MyProfile',
		drawerIcon: ({tintColor}) => {
			return(
				<MaterialIcons
					name="account-circle"
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
					 alignItems: 'center'}}>My Profile</Text>
					<Right>
					</Right>
				</Header>
        <Content style={{flex:1, margin: 20,marginTop:60}}>
            <InputGroup >
              <Input placeholder='Name'/>
            </InputGroup>
            <InputGroup style={{marginTop:10}} >
              <Input placeholder='Email'/>
            </InputGroup>
            <InputGroup style={{marginTop:10}}>
              <Input placeholder='Phone'/>
            </InputGroup>
            <InputGroup style={{marginTop:10}}>
              <Input placeholder='Company Name'/>
            </InputGroup>
            <Button style={{marginTop:20}}>
            	<Text>Update Profile</Text>
            </Button>
        </Content>
      </Container>
		);
	}
}