import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Chats from '../Chats';
import Calls from '../Calls';
import Status from '../Status';

const Main = createMaterialTopTabNavigator(
  {
    Conversas: Chats,
    Status,
    Chamadas: Calls
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: '#FFF'
      },
      style: {
        backgroundColor: '#075E55'
      },
      labelStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

export default createAppContainer(Main);
