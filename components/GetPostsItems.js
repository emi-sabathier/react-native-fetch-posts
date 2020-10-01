import React, {useState, useEffect} from 'react';
import {padding, fonts, colors} from '../assets/baseStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

function GetPostsItems({navigation}) {
    const [postsData, setPostsData] = useState([]);

    function goToPost(itemId) {
        navigation.navigate('PostDetails', {itemId});
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPostsData(response.data);
                console.log(postsData);
            }, error => {
                console.log(error);
            });
    }, []);
    return (
        <FlatList data={postsData}
                  renderItem={({item}) =>
                      <TouchableOpacity onPress={() => goToPost(item.id)} underlayColor={colors.underlay}>
                          <View style={styles.row}>
                              <View style={styles.textContainer}>
                                  <Text style={styles.text}>{item.title}</Text>
                              </View>
                              <View style={styles.arrowContainer}>
                                  <Icon name='chevron-forward' size={24} style={styles.arrowPosition}/>
                              </View>
                          </View>
                      </TouchableOpacity>
                  }
                  keyExtractor={item => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    arrowContainer: {
        width: '20%'
    },
    textContainer:{
        width: '80%'
    },
    text:{
        fontFamily: fonts.family,
        fontSize: fonts.sm
    },
    arrowPosition: {
        alignSelf: 'flex-end',
    },
    row: {
        flexDirection: 'row',
        paddingHorizontal: padding.sm,
        paddingVertical: padding.sm,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(0,0,0,0.1)',
    },
});
export default GetPostsItems;
