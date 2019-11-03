import { FormEvent } from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export interface ButtonProps {
  text: string;
  type?: 'submit' | 'button';
  onPress: (
    event: FormEvent<HTMLButtonElement> | NativeSyntheticEvent<NativeTouchEvent>
  ) => void;
}
