import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './components/Details';
import SignUpScreen from './components/Signup';
import UploadImageScreen from './components/UploadImage';
import LoginScreen from './components/Login';

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="UploadImage" component={UploadImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;