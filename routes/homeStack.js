import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import EnglishToHiragana from '../screens/englishHiragana';
import EnglishToKatakana from '../screens/englishKatakana';
import HiraganaToKatakana from '../screens/hiraganaKatakana';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='Kana Nakama'/>,
            }
        }
    },
    EnglishToHiragana: {
        screen: EnglishToHiragana,
        navigationOptions: {
            title: 'English to Hiragana',
        },
    },
    EnglishToKatakana: {
        screen: EnglishToKatakana,
        navigationOptions: {
            title: 'English to Katakana',
        },
    },
    HiraganaToKatakana: {
        screen: HiraganaToKatakana,
        navigationOptions: {
            title: 'Hiragana to Katakana',
        },
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:'#D2B48C',
            height: 80,
        },
        headerTintColor: '#FFFFFF',
    }
});

export default HomeStack;