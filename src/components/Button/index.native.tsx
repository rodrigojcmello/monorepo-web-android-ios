import React from 'react';
import { Button as ButtonRN } from 'react-native';
import { ButtonProps } from './types';

function Button({ text }: ButtonProps): JSX.Element {
  return <ButtonRN onPress={(): void => {}} title={text} />;
}

export default Button;
