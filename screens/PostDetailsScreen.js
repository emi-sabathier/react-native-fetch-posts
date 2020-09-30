import React from 'react'
import {Text, View} from 'react-native'

function PostDetailsScreen({route, navigation}){
    const {itemId} = route.params

    return(
        <View style={{flex: 1, alignItems:'center'}}>
            <Text>Le post en question</Text>
            <Text>Page du post {itemId}</Text>
        </View>
    )
}
export default PostDetailsScreen
