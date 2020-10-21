import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Hiragana() {

    return (
        <View style={styles.container}>
            <Text>Hiragana Screen</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});