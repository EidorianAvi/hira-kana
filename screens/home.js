import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


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
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Roman Alphabet to Hiragana' onPress={engToHir}/>
            <Button title='Roman Alphabet to Katakana' onPress={engToKat} />
            <Button title='Hiragana to Katakana' onPress={hirToKat} />
        </View>
    )

}
