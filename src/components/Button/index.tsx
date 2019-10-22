import React from 'react';
import ButtonUI from '@material-ui/core/Button';
import { ButtonProps } from './types';

function Button({ text }: ButtonProps): JSX.Element {
  return (
    <ButtonUI variant="contained" color="primary">
      {text}
    </ButtonUI>
  );
}

export default Button;
