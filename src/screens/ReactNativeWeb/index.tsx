import React from 'react';
import { View, Text, Alert, Button } from 'react-native';

function ReactNativeWeb(): JSX.Element {
  return (
    <View>
      <View>
        <Text>React Native Text</Text>
      </View>
      <Button
        title="Press me"
        onPress={(): void => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}

export default ReactNativeWeb;
