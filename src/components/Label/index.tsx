import React from 'react';
import { LabelProps } from './types';

function Label({ text, htmlFor }: LabelProps): JSX.Element {
  return <label htmlFor={htmlFor}>{text}</label>;
}

export default Label;
