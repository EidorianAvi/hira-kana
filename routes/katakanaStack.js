import { createStackNavigator } from 'react-navigation-stack';
import Katakana from '../screens/katakana';

const screens = {
    Katakana: {
        screen: Katakana,
        navigationOptions: {
            title: 'Katakana',
        },
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