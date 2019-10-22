import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';

function Calls(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button text="Calls" />
    </View>
  );
}

// Calls.navigationOptions = {
//   headerTitle: 'ok',
//   gesturesEnabled: true,
//   swifting: true
// };

export default Calls;
