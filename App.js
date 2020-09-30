import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PostsListStackScreen from './screens/PostsListStackScreen';
import HomeStackScreen from './screens/HomeStackScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#000',
                activeBackgroundColor: 'teal',
                inactiveBackgroundColor:'darkturquoise',
                labelStyle: {fontWeight: '700', fontSize: 16},
            }}>
                <Tab.Screen name='Home' component={HomeStackScreen}
                            options={{
                                tabBarLabel: 'Accueil',
                                tabBarIcon: () => (
                                    <Icon name="home-outline" size={24} color={'#fff'}/>
                                ),
                            }}/>
                <Tab.Screen name='PostsList' component={PostsListStackScreen}
                            options={{
                                tabBarLabel: 'Liste des posts',
                                tabBarIcon: () => (
                                    <Icon name='list-outline' size={24} color={'#fff'}/>
                                ),
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
