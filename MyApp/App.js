import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, Title, Icon, Button, Left} from 'native-base';


export default class App extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transperent>
            <Icon size={30} name={'menu'} />
          </Button>
        </Left>
        <Title>Header</Title>
      </Header>
      <Content style={{backgroundColor: 'green'}}>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </Content>
      <Footer>
        <Title>Footer</Title>
      </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
