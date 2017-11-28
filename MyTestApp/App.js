
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,View,TextInput,Button,Alert } from 'react-native';
import { Tabs } from './navigators/AppNavigator';
import Header from './components/Header';
import Profile from './components/Profile'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    width: 300,
    //borderWidth: 1,
    borderColor: 'green',
  },
  btnContainer: {
    width:300,
    margin: 10,
  }
});

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { text: 'Pick-up Point',txt: "Hello"};
		this.text_2 = 'Text';
	}

  onButtonClick() {
    Alert.alert("You tapped the button!!");
  }
  render() {
    return <Tabs />;
  	/*const text_3 = 'Constant Text';
    const title = 'This is a Header.';
  	setTimeout(() => {
  		this.setState({text: 'text Change'});
  	},1000)
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
        />
        <TextInput
          style={styles.textInput}
          value = "Drop-off Point"
        />
        <Text>{this.state.text}</Text>
        <Text>{this.text_2}</Text>
        <Text>{text_3}</Text>
        <Header name='Name' title={title} />
        <Header title={this.state.text} />
        <View style={styles.btnContainer}>
          <Button
            //onPress={this.setState({text: 'Pick-up Point'})}
            style={{backgroundColor: 'green'}}
            onPress={this.onButtonClick}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Le more about this purple button"
          />
        </View>
        <Text>{this.state.txt}</Text>
      </View>
    );*/
  }
}
