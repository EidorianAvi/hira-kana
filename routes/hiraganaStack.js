import { createStackNavigator } from 'react-navigation-stack';
import Hiragana from '../screens/hiragana';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Hiragana: {
        screen: Hiragana,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Hiragana'/>,
            }
        }
    },
}

const HiraganaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:'#D2B48C',
            height: 80,
        },
        headerTintColor: '#FFFFFF',
    }
});

export default HiraganaStack;