import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import createNav from './createNav.js'

const screens = {
  Home: {
    screen: createNav,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Savour' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: 'f48f2d', height: 100 }
  }
});

export default HomeStack;


