import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ReactNativeWeb from '../../screens/ReactNativeWeb';
import Primitive from '../../screens/Primitive';
import Github from '../../screens/Github';

const AppNavigator = createStackNavigator({
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
