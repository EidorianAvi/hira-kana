import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About'/>,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:'#D2B48C',
            height: 80,
        },
        headerTintColor: '#FFFFFF',
    }
});

export default AboutStack;