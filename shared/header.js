import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/bamboo.jpg')}style={styles.header}>
            <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
        letterSpacing: 1,
    },
    icon: {
        color: 'white',
        position: 'absolute',
        left: 10,
        top: 20,
    },
});