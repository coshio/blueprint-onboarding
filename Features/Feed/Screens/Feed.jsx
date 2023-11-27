import { Button, Text, View } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Post from '../Components/Post';
import NewPost from '../Components/NewPost';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [newId, setNewId] = useState(0);

  const addPost = (newPost) => {
    const allPosts = [...posts];
    allPosts.push({ ...newPost, _id: newId });
    setPosts(allPosts);
    setNewId((id) => (id + 1));
  };

  const GIVEN_POSTS = [
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
    },
  ];

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPost addPost={addPost} />
      {posts.map((post) => (
        <Post username={post.username} body={post.body} time={post.time} navigation={navigation} />
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
