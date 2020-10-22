import { createStackNavigator } from 'react-navigation-stack';
import Hiragana from '../screens/hiragana';

const screens = {
    Hiragana: {
        screen: Hiragana,
        navigationOptions: {
            title: 'Hiragana',
        },
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