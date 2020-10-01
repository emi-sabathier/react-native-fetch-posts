import React from 'react'
import HomeScreen from './HomeScreen';
import PostsListScreen from './PostsListsScreen';

import {createStackNavigator} from '@react-navigation/stack'
import PostDetailsScreen from './PostDetailsScreen';

const HomeStack = createStackNavigator()

function HomeStackScreen(){
    return(
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                alignSelf: 'center',
                fontWeight: 'bold',
            },
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{title:'Accueil'}}/>
            <HomeStack.Screen name="PostsList" component={PostsListScreen} options={{title: 'Listes posts HOME'}}/>
            <HomeStack.Screen name="PostDetails" component={PostDetailsScreen} options={{title: 'détails du post'}}/>
        </HomeStack.Navigator>
    )
}
export default HomeStackScreen
