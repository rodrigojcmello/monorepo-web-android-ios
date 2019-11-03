import React, { FormEvent, useCallback } from 'react';
import { TextInputProps } from './types';

function TextInput({ text, setText, id }: TextInputProps): JSX.Element {
  const handleChange = useCallback((event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }, []);

  return (
    <input
      type="text"
      onChange={handleChange}
      value={text}
      {...(id ? { id, name: id } : {})}
    />
  );
}

export default TextInput;
