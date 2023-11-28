import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({
  username, body, time, tag, navigation,
}) {
  const navigateToPostDetails = () => {
    navigation.navigate('PostDetails', {
      username, body, time, tag,
    });
  };

  return (
    <>
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
      <Text>
        Tag:
        {' '}
        {tag}
      </Text>
      <Button
        title="Details"
        onPress={navigateToPostDetails}
      />
    </>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
