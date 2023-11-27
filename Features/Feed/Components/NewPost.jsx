import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewPost({ addPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState(new Date().toISOString());

  const handlePost = () => {
    setTime(new Date().toISOString());
    addPost({ username, body, time });
    setUsername('');
    setBody('');
  };

  return (
    <>
      <TextInput
        placeholder="Username?"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        placeholder="Body?"
        onChangeText={setBody}
        value={body}
      />
      <Button
        title="Print"
        onPress={handlePost}
      />
    </>
  );
}

NewPost.propTypes = {
  addPost: PropTypes.func.isRequired,
};
