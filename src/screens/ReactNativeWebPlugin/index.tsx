import React from 'react';
import { View, Text, Alert, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Instagram } from 'react-content-loader/native';

const MyInstagramLoader = (): JSX.Element => <Instagram />;

function ReactNativeWebPlugin(): JSX.Element {
  return (
    <View>
      <View>
        <Text>React Native Plugin</Text>
      </View>
      <View>
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            '2012-05-16': {
              selected: true,
              marked: true,
              selectedColor: 'blue'
            },
            '2012-05-17': { marked: true },
            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2012-05-19': { disabled: true, disableTouchEvent: true }
          }}
        />
         <MyInstagramLoader />
      </View>
      <Button
        title="Press me"
        onPress={(): void => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  );
}

export default ReactNativeWebPlugin;
