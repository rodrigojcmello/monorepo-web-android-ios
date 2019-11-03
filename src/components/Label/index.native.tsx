import React from 'react';
import { Text, View } from 'react-native';
import { LabelProps } from './types';

function Label({ text }: LabelProps): JSX.Element {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}

export default Label;
