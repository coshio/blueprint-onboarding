import { Button, TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewPost({ addPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [time, setTime] = useState(new Date().toLocaleString());
  const [tag, setTag] = useState('none');
  const [modalVisibility, setModalVisibility] = useState(false);

  const handlePost = () => {
    setTag('none');
    setTime(new Date().toLocaleString());
    addPost({
      username, body, time, tag,
    });
    setUsername('');
    setBody('');
    setModalVisibility(false);
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
        title="Set Tag"
        onPress={() => setModalVisibility(true)}
      />
      <Modal
        isVisible={modalVisibility}
        onBackdropPress={() => setModalVisibility(false)}
      >
        <View style={{ backgroundColor: 'white', borderRadius: 8, alignItems: 'center' }}>
          <Picker
            style={{ height: 200, width: 350 }}
            itemStyle={{ fontSize: 15 }}
            selectedValue={tag}
            onValueChange={(itemValue) => setTag(itemValue)}
          >
            <Picker.Item label="No Tag" value="none" />
            <Picker.Item label="Entertainment" value="entertainment" />
            <Picker.Item label="News" value="news" />
            <Picker.Item label="Science" value="science" />
          </Picker>
        </View>
      </Modal>
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
