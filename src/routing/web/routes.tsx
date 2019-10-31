import { RouteConfig } from 'react-router-config';
import Main from '../../screens/Main';
import ReactNativeWeb from '../../screens/ReactNativeWeb';
import ReactNativeWebPlugin from '../../screens/ReactNativeWebPlugin';
import Primitive from '../../screens/Primitive';
import Animation from '../../screens/Animation';
import Github from '../../screens/Github';

const routes: RouteConfig[] = [
  {
    component: Main,
    path: '/material-design'
  },
  {
    component: ReactNativeWebPlugin,
    path: '/react-native-web-plugin'
  },
  {
    component: ReactNativeWeb,
    path: '/react-native-web'
  },
  {
    component: Primitive,
    path: '/primitive'
  },
  {
    component: Animation,
    path: '/animation'
  },
  {
    component: Github,
    path: '/github'
  }
  // {
  //   component: Screen1,
  //   path: '/screen-1',
  // },
  // {
  //   component: isAuth(Screen2),
  //   path: '/screen-2',
  // },
  // {
  //   component: Screen3,
  //   path: '/screen-3',
  // }
];

export default routes;
