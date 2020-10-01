import React from 'react'
import {View} from 'react-native';
import GetPostsItems from '../components/GetPostsItems';

function PostsListScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GetPostsItems navigation={navigation} />
        </View>
    )
}
export default PostsListScreen
