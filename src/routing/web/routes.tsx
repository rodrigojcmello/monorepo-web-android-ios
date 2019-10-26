import { RouteConfig } from 'react-router-config';
import Main from '../../screens/Main';
import ReactNativeWeb from '../../screens/ReactNativeWeb';
import Primitive from '../../screens/Primitive';
import Animation from '../../screens/Animation';

const routes: RouteConfig[] = [
  {
    component: Main,
    path: '/material-design'
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
