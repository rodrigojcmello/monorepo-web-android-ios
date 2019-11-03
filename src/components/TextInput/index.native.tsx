import React from 'react';
import { TextInput as TextInputRN } from 'react-native';
import { TextInputProps } from './types';

function TextInput({ text, setText }: TextInputProps): JSX.Element {
  return (
    <TextInputRN
      onChangeText={(newText): void => setText(newText)}
      value={text}
    />
  );
}

export default TextInput;
