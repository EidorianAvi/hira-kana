import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            <Text style={styles.welcome}>ようこそ!</Text>
            <Text style={styles.subtext}>(Welcome!)</Text>
            <Text style={styles.prompt}>Please Select an Option: </Text>
            <FlatButton text='Roman Alphabet to Hiragana' onPress={engToHir}/>
            <FlatButton text='Roman Alphabet to Katakana' onPress={engToKat} />
            <FlatButton text='Hiragana to Katakana' onPress={hirToKat} />
        </View>
    )

}

const styles = StyleSheet.create({
    welcome: {
        padding: 10,
        marginTop: 20,
        fontSize: 30,
        textAlign: 'center',
    },
    subtext: {
        fontSize: 15,
        textAlign: 'center',
        color: 'grey',
    },
    prompt: {
        marginTop: 50,
        marginBottom: 5,
        textAlign: 'center',
    },
});