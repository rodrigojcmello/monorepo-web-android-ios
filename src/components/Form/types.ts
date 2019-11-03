import { FormEvent } from 'react';

export interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void | undefined;
  children: JSX.Element | JSX.Element[];
}
