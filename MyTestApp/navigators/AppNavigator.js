import React, {Component} from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Profile from '../components/Profile';
import Account from '../components/Account';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProfileDetails from '../components/ProfileDetails';

export const ProfileStack = StackNavigator({
	Profile: {
		screen: Profile,
		navigationOptions: {
			title: 'Profile',
		},
	},
	ProfileDetails: {
		screen: ProfileDetails,
		navigationOptions: {
			title: 'ProfileDetails',
		},
	},
});
export const Tabs = TabNavigator({
	Profile: {
		screen: ProfileStack,
    navigationOptions: {
	    tabBarLabel: 'Profile',
	    tabBarIcon: ({tintColor}) => {
				return(
					<MaterialIcons
						name="card-membership"
						size={24}
						style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		},
	},
	Account: {
		screen: Account,
	},
});