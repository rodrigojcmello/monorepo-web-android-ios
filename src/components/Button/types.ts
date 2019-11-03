import { FormEvent } from 'react';

export interface ButtonProps {
  text: string;
  type?: 'submit' | 'button';
  onPress: (event: FormEvent<HTMLButtonElement>) => void;
}
