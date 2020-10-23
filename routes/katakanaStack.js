import { createStackNavigator } from 'react-navigation-stack';
import Katakana from '../screens/katakana';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Katakana: {
        screen: Katakana,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Katakana'/>,
            }
        }
    },
}

const KatakanaStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:'#D2B48C',
            height: 80,
        },
        headerTintColor: '#FFFFFF',
    }
});

export default KatakanaStack;