import React from 'react';
import { StatusBar, View } from 'react-native';
import Button from '../../components/Button';

function Chats(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <StatusBar backgroundColor="#054C44" barStyle="light-content" />
      <Button text="Chats" />
    </View>
  );
}

export default Chats;
