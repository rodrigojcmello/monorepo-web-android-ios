/* eslint-disable react/button-has-type */
import React from 'react';
import { ButtonProps } from './types';

function Button({ text, type, onPress }: ButtonProps): JSX.Element {
  return (
    <button type={type || 'submit'} onClick={onPress}>
      {text}
    </button>
  );
}

export default Button;
