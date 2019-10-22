import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './screens/Main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: 'WhatsApp',
      headerStyle: {
        elevation: 0,
        backgroundColor: '#075E55'
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
});

export default createAppContainer(AppNavigator);
