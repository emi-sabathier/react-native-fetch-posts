import React from 'react'
import {Button, Text, View} from 'react-native';

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text>Bienvenue sur la home</Text>
            <Button title="Aller aux posts" onPress={()=> navigation.navigate('PostsList')}/>
        </View>
    )
}
export default HomeScreen
