import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        elevation: 1,
        borderRadius: 12,
        paddingVertical: 22,
        paddingHorizontal: 10,
        backgroundColor: '#D2B48C',
        marginTop: 20,
        shadowOffset: {width: 10, height: 10},
        shadowColor: '#FFF',
        shadowOpacity: 1.0,
        shadowRadius: 3,
    },
    buttonText: {
        color: 'maroon',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
});