import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {fonts} from '../assets/baseStyles';

function PostDetailsScreen({route}){
    const {itemId} = route.params

    return(
        <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <Text style={styles.font}>Le post en question</Text>
            <Text>Page du post {itemId}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    font: {
        fontSize: fonts.md,
        fontFamily: fonts.family
    }
})
export default PostDetailsScreen
