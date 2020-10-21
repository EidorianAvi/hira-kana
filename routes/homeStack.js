import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import EnglishToHiragana from '../screens/englishHiragana';
import EnglishToKatakana from '../screens/englishKatakana';
import HiraganaToKatakana from '../screens/hiraganaKatakana';

const screens = {
    Home: {
        screen: Home
    },
    EnglishToHiragana: {
        screen: EnglishToHiragana
    },
    EnglishToKatakana: {
        screen: EnglishToKatakana
    },
    HiraganaToKatakana: {
        screen: HiraganaToKatakana
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);