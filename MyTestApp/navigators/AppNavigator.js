import React, {Component} from 'react';
import {
  TabNavigator,
} from 'react-navigation';

import Profile from '../components/Profile';
import Account from '../components/Account';

export const Tabs = TabNavigator({
	Profile: {
		screen: Profile,
	},
	Account: {
		screen: Account,
	},
});