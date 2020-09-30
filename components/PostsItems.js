import React, {useState, useEffect} from 'react'
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler'
import PostDetailsScreen from '../screens/PostDetailsScreen'
import axios from 'axios'
import {Text, View} from 'react-native'

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
                      <TouchableOpacity onPress={()=> goToPost(item.id)}>
                          <View>
                              <Text>{item.title}</Text>
                          </View>
                      </TouchableOpacity>
                  }
                  keyExtractor={item => item.id.toString()}
        />
    );
}

export default PostsItems;
