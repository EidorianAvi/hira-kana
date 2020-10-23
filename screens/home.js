import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from '../styles/global';
import FlatButton from '../shared/button';

    export default function Home({ navigation }) {

    const engToHir = () => {
        navigation.navigate('EnglishToHiragana');
    }


    const engToKat = () => {
        navigation.navigate('EnglishToKatakana');
    }


    const hirToKat = () => {
        navigation.navigate('HiraganaToKatakana');
    }

    return (
        <View style={globalStyles.container}>
            <FlatButton text='Roman Alphabet to Hiragana' onPress={engToHir}/>
            <FlatButton text='Roman Alphabet to Katakana' onPress={engToKat} />
            <FlatButton text='Hiragana to Katakana' onPress={hirToKat} />
        </View>
    )

}
