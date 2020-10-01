import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import PostsListStackScreen from './screens/PostsListStackScreen';
import HomeStackScreen from './screens/HomeStackScreen';
import {Text, StyleSheet} from 'react-native'
import {fonts} from './assets/baseStyles'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator shifting>
                <Tab.Screen name='Home' component={HomeStackScreen}
                            options={{
                                tabBarLabel: <Text style={styles.font}>Accueil</Text>,
                                tabBarIcon: () => (
                                    <Icon name="home-outline" size={24} color={'#fff'}/>
                                ),
                            }}/>
                <Tab.Screen name='PostsList' component={PostsListStackScreen}
                            options={{
                                tabBarLabel: <Text style={styles.font}>Liste Articles</Text>,
                                tabBarIcon: () => (
                                    <Icon name='list-outline' size={24} color={'#fff'}/>
                                ),
                            }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    font: {
        fontSize: fonts.md,
        fontFamily: fonts.family,
        fontWeight: 'bold'
    }
})
export default App;
