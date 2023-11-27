import React from 'react';
import { Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';

export default function PostDetails({ route, navigation }) {
  const navigateToFeed = () => {
    navigation.navigate('Feed');
  };

  const { username, body, time } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Post Details</Text>
      <Text>
        Author:
        {' '}
        {username}
      </Text>
      <Text>
        Body:
        {' '}
        {body}
      </Text>
      <Text>
        Time:
        {' '}
        {time}
      </Text>
      <Button
        title="Back To Feed"
        onPress={navigateToFeed}
      />
    </View>
  );
}

PostDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
