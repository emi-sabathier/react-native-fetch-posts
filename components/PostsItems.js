import React, {useState, useEffect} from 'react'
import {padding, fonts, colors} from '../assets/baseStyles'
import axios from 'axios'
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

function PostsItems({navigation}) {
    const [postsData, setPostsData] = useState([])

    function goToPost(itemId){
        navigation.navigate('PostDetails', {itemId})
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPostsData(response.data);
                console.log(postsData)
            }, error => {
                console.log(error)
            });
    }, []);
    return (
        <FlatList data={postsData}
                  renderItem={({item}) =>
                      <TouchableOpacity onPress={()=> goToPost(item.id)} underlayColor={colors.underlay}>
                          <View style={styles.itemStyles}>
                              <View style={styles.row}>
                                  <Text>{item.title}</Text>
                                  <Text style={styles.arrowPosition}>test</Text>
                              </View>
                          </View>
                      </TouchableOpacity>
                  }
                  keyExtractor={item => item.id.toString()}
        />
    );
}
const styles = StyleSheet.create({
    row:{
        flexDirection: 'row'
    },
    arrowPosition: {

    },
    itemStyles: {
        paddingHorizontal: padding.md,
        paddingVertical: padding.sm,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
})
export default PostsItems;
