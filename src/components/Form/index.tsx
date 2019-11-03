import React from 'react';
import { FormProps } from './types';

function Form({ onSubmit, children }: FormProps): JSX.Element {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default Form;
