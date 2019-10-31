import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReactNativeWeb from '../../screens/ReactNativeWeb';
import Primitive from '../../screens/Primitive';
import Github from '../../screens/Github';
import ReactNativeWebPlugin from '../../screens/ReactNativeWebPlugin';

const AppNavigator = createStackNavigator({
  ReactNativeWebPlugin: {
    screen: ReactNativeWebPlugin
  },
  Github: {
    screen: Github
  },
  Primitive: {
    screen: Primitive
  },
  ReactNativeWeb: {
    screen: ReactNativeWeb
  }
});

export default createAppContainer(AppNavigator);
