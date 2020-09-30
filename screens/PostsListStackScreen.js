import React from 'react'
import PostsListScreen from './PostsListsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const PostsListsStack = createStackNavigator()

function PostsListStackScreen(){
    return (
        <PostsListsStack.Navigator>
            <PostsListsStack.Screen name="PostsList" component={PostsListScreen} options={{title: 'Listes posts POSTSLIST'}} />
        </PostsListsStack.Navigator>
    );
}
export default PostsListStackScreen
