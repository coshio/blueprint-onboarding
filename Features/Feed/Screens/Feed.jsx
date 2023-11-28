import { Button, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import Post from '../Components/Post';
import NewPost from '../Components/NewPost';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [newId, setNewId] = useState(0);
  const [sortMethod, setSortMethod] = useState('t_asc');
  const [sortModalVisibility, setSortModalVisibility] = useState(false);

  const sortPosts = (method) => {
    switch (method) {
      case 't_asc':
        setPosts([...posts.sort((a, b) => a.time.localeCompare(b.time))]);
        break;
      case 't_des':
        setPosts([...posts.sort((a, b) => b.time.localeCompare(a.time))]);
        break;
      case 'u_asc':
        setPosts([...posts.sort((a, b) => a.username.localeCompare(b.username))]);
        break;
      case 'u_des':
        setPosts([...posts.sort((a, b) => b.username.localeCompare(a.username))]);
        break;
      default:
    }
  };

  const addPost = (newPost) => {
    const allPosts = [...posts];
    allPosts.push({ ...newPost, _id: newId });
    setPosts(allPosts);
    setNewId((id) => (id + 1));
  };

  useEffect(() => {
    sortPosts(sortMethod);
  }, [sortMethod]);

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {posts.length > 1 && (
        <>
          <Button
            title="Sort/Filter Posts"
            onPress={() => setSortModalVisibility(true)}
          />
          <Modal
            isVisible={sortModalVisibility}
            onBackdropPress={() => setSortModalVisibility(false)}
          >
            <View style={{ backgroundColor: 'white', borderRadius: 8, alignItems: 'center' }}>
              <Picker
                style={{ height: 200, width: 300 }}
                itemStyle={{ fontSize: 15 }}
                selectedValue={sortMethod}
                onValueChange={(itemValue) => setSortMethod(itemValue)}
              >
                <Picker.Item label="Ascending Time" value="t_asc" />
                <Picker.Item label="Descending Time" value="t_des" />
                <Picker.Item label="Ascending Username" value="u_asc" />
                <Picker.Item label="Descending Username" value="u_des" />
              </Picker>
            </View>
          </Modal>
        </>
      )}
      <Text>Posts</Text>
      <NewPost addPost={addPost} />
      {posts.map((post) => (
        <Post
          username={post.username}
          body={post.body}
          time={post.time}
          tag={post.tag}
          navigation={navigation}
        />
      ))}
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
