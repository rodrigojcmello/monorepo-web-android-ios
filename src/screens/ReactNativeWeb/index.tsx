import React from 'react';
import { View, Text, Alert, Button, TouchableHighlight } from 'react-native';

function ReactNativeWeb(): JSX.Element {
  return (
    <View>
      <View>
        <Text>React Native Text</Text>
      </View>
      <TouchableHighlight accessibilityRole="button" onPress={(): void => {}}>
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={(): void => {}}>
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableHighlight>
      <Button
        title="Press me"
        onPress={(): void => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}

export default ReactNativeWeb;
