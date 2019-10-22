import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Calls from '../Calls';

function Status(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button text="Status" />
    </View>
  );
}

export default Status;
