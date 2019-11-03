import React from 'react';
import { Button as ButtonRN } from 'react-native';
import { ButtonProps } from './types';

function Button({ text, onPress }: ButtonProps): JSX.Element {
  return <ButtonRN onPress={onPress} title={text} />;
}

export default Button;
