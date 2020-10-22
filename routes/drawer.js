import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HiraganaStack from './hiraganaStack';
import HomeStack from './homeStack';
import KatakanaStack from './katakanaStack';

const RootDrawerNavigator = createDrawerNavigator({
    
    Home: {
        screen: HomeStack,
    },
    Hiragana: {
        screen: HiraganaStack,
    },
    Katakana: {
        screen: KatakanaStack,
    },
    About: {
        screen: AboutStack,
    },

});

export default createAppContainer(RootDrawerNavigator);