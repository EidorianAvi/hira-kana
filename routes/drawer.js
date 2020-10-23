import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import AboutStack from './aboutStack';
import HiraganaStack from './hiraganaStack';
import HomeStack from './homeStack';
import KatakanaStack from './katakanaStack';


const RouteConfigs = {
    
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

}

const DrawerNavigatorConfig = {
    contentOptions: { 
        activeBackgroundColor: '#D2B48C',
        activeTintColor: 'maroon',
        itemsContainerStyle: {
            marginVertical: 50,
        },
        labelStyle: {
            fontSize: 18,
        },
    },
    drawerBackgroundColor: '#E5D3B3',
}



const RootDrawerNavigator = createDrawerNavigator( RouteConfigs, DrawerNavigatorConfig);

export default createAppContainer(RootDrawerNavigator);