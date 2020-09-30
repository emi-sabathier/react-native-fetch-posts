import React from 'react'
import HomeScreen from './HomeScreen';
import PostsListScreen from './PostsListsScreen';

import {createStackNavigator} from '@react-navigation/stack'
import PostDetailsScreen from './PostDetailsScreen';

const HomeStack = createStackNavigator()

function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{title:'Accueil'}}/>
            <HomeStack.Screen name="PostsList" component={PostsListScreen} options={{title: 'Listes posts HOME'}}/>
            <HomeStack.Screen name="PostDetails" component={PostDetailsScreen} options={{title: 'détails post'}}/>
        </HomeStack.Navigator>
    )
}
export default HomeStackScreen
