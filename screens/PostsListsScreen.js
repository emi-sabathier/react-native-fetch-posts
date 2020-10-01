import React from 'react'
import {View} from 'react-native';
import PostsItems from '../components/PostsItems';

function PostsListScreen({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <PostsItems navigation={navigation} />
        </View>
    )
}
export default PostsListScreen
