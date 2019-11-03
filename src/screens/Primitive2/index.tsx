import React from 'react';
import styledPrimitive from '@emotion/primitives';
import {
  View as ViewRP,
  Text as TextRP,
  StyleSheet as StyleSheetRP
} from 'react-primitives';
import { View, Text, StyleSheet } from 'react-native';

const styleView = {
  backgroundColor: 'green',
  margin: 12,
  borderRadius: 5
};

const styleText = {
  // textAlign: 'center',
  color: 'white',
  height: 32,
  lineHeight: 32
};

const StyledView = styledPrimitive.View(styleView);
const StyledText = styledPrimitive.Text(styleText);

const styleRP = StyleSheetRP.create({
  view: styleView,
  text: styleText
});

const style = StyleSheet.create({
  view: styleView,
  text: styleText
});

function Primitive(): JSX.Element {
  return (
    <>
      <StyledView>
        <StyledText>Styled Components Primitives</StyledText>
      </StyledView>
      <ViewRP style={styleRP.view}>
        <TextRP style={styleRP.text}>React Primitives</TextRP>
      </ViewRP>
      <View style={style.view}>
        <Text style={style.text}>React Native Web</Text>
      </View>
    </>
  );
}

export default Primitive;
