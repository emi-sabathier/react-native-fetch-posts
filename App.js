import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native'
import PostsListStackScreen from './screens/PostsListStackScreen';
import HomeStackScreen from './screens/HomeStackScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator shifting>
                <Tab.Screen name='Home' component={HomeStackScreen}
                            options={{
                                tabBarLabel: <Text style={{  fontSize: 16, fontWeight: 'bold'}}>Accueil</Text>,
                                tabBarIcon: () => (
                                    <Icon name="home-outline" size={24} color={'#fff'}/>
                                ),
                            }}/>
                <Tab.Screen name='PostsList' component={PostsListStackScreen}
                            options={{
                                tabBarLabel: <Text style={{ fontSize: 16, fontWeight: 'bold'}}>Liste Articles</Text>,
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
