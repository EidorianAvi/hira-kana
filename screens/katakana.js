import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Katakana() {

    return (
        <View style={styles.container}>
            <Text>Katakana Screen</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
});