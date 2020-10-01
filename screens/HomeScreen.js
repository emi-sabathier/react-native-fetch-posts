import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {fonts} from '../assets/baseStyles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.position}>
            <Text style={styles.font}>Bienvenue sur l'app</Text>
            <Button title="Aller aux posts" onPress={() => navigation.navigate('PostsList')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    position: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    font: {
        fontFamily: fonts.family,
        fontSize: fonts.lg,
    },
});
export default HomeScreen;
