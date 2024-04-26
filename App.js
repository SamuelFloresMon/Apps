import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Login from './Screens/Login';
import Home from './Screens/Home';
import Lecture from './Screens/Lecture';



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Lecture" component={Lecture}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


