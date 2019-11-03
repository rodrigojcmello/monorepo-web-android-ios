import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReactNativeWeb from '../../screens/ReactNativeWeb';
import Primitive from '../../screens/Primitive';
import Primitive2 from '../../screens/Primitive2';
import Github from '../../screens/Github';
import ReactNativeWebPlugin from '../../screens/ReactNativeWebPlugin';
import Login from '../../screens/Login';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Primitive2: {
    screen: Primitive2
  },
  Primitive: {
    screen: Primitive
  },
  ReactNativeWebPlugin: {
    screen: ReactNativeWebPlugin
  },
  Github: {
    screen: Github
  },
  ReactNativeWeb: {
    screen: ReactNativeWeb
  }
});

export default createAppContainer(AppNavigator);
