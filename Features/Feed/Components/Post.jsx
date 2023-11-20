import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({ username, body }) {
  return (
    <View>
      <Text>{username}</Text>
      <Text>{body}</Text>
    </View>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
